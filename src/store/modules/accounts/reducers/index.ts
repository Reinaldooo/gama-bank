import {
  IDashboardState,
  IAction,
  IPlanoConta,
  ILancamentoRedux,
  ITransactionTypes,
  ACCOUNT_DATA_LOADING,
  ACCOUNT_DATA_SUCCESS,
  ACCOUNT_DATA_ERROR,
  TRANSACTION_TYPES_SUCCESS,
  TRANSACTION_ERROR,
  DEBIT_TRANSACTION_SUCCESS,
  CREDIT_TRANSACTION_SUCCESS,
  IConta,
} from "../types";

const initialState: IDashboardState = {
  fetchAccountsError: false,
  transactionError: false,
  loading: true,
  debitAccount: null,
  creditAccount: null,
  debitTransactions: null,
  creditTransactions: null,
  transactionTypes: null,
};

function calculaSaldo(
  lancamento: ILancamentoRedux,
  saldo: number,
  isDebit?: boolean
): number {
  switch (lancamento.planoConta.tipoMovimento) {
    case "R":
      // Deposit my account
      return saldo + lancamento.valor;
    case "TU":
      // Transfer to other user
      return saldo - lancamento.valor;
    case "TC":
      // Transfer from my bank to credit
      if (isDebit) {
        // As this function will be called in both accounts, on the 'bank' it
        // should decrease, and in the 'credit' it should increase
        return saldo - lancamento.valor;
      }
      return saldo + lancamento.valor;
    default:
      return saldo + lancamento.valor;
  }
}

function checkNegativeValue(lancamento: ILancamentoRedux): number {
  // Is this two cases the money is leaving the account, so it should be negative
  const isNegative =
    lancamento.planoConta.tipoMovimento === "TC" ||
    lancamento.planoConta.tipoMovimento === "TU";

  if (isNegative) return lancamento.valor * -1;
  return lancamento.valor;
}

export default function reducer(
  state = initialState,
  { type, payload }: IAction
): IDashboardState {
  switch (type) {
    case ACCOUNT_DATA_SUCCESS:
      // The state is being flattened as much as possible to make it safer and
      // easier to update information
      const { contaBanco, contaCredito } = payload;
      return {
        ...state,
        debitAccount: {
          id: contaBanco.id,
          saldo: contaBanco.saldo,
        },
        creditAccount: {
          id: contaCredito.id,
          saldo: contaCredito.saldo,
        },
        debitTransactions: contaBanco.lancamentos,
        creditTransactions: contaCredito.lancamentos,
        loading: false,
      };

    case ACCOUNT_DATA_LOADING:
      return { ...state, loading: true };

    case ACCOUNT_DATA_ERROR:
      return { ...state, fetchAccountsError: true };

    case TRANSACTION_TYPES_SUCCESS:
      // Create a id indexed object to make it faster to access it later
      const tTypes: ITransactionTypes = {};
      payload.forEach(
        (type: IPlanoConta) => (tTypes[type.tipoMovimento] = type)
      );
      return {
        ...state,
        transactionTypes: tTypes,
      };

    case TRANSACTION_ERROR:
      return { ...state, transactionError: true };

    case DEBIT_TRANSACTION_SUCCESS:
      return {
        ...state,
        transactionError: false,
        debitAccount: {
          ...state.debitAccount,
          saldo: calculaSaldo(payload, state.debitAccount!.saldo, true),
        } as IConta,
        debitTransactions: [
          ...state.debitTransactions!,
          {
            ...payload,
            valor: checkNegativeValue(payload),
            tipo: payload.planoConta.tipoMovimento,
          },
        ],
      };

    case CREDIT_TRANSACTION_SUCCESS:
      return {
        ...state,
        transactionError: false,
        creditAccount: {
          ...state.creditAccount,
          saldo: calculaSaldo(payload, state.creditAccount!.saldo),
        } as IConta,
        creditTransactions: [
          ...state.creditTransactions!,
          {
            ...payload,
            // In the payload 'conta' will be the debit account, but it should
            // be the credit one
            conta: state.creditAccount!.id,
            tipo: payload.planoConta.tipoMovimento,
          },
        ],
      };

    default:
      return state;
  }
}
