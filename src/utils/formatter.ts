export const formatBRL = (num: number): string => {
  if(!num) return ""
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(num);
};

export const formatDate = (date: string): string => {
  type Months = {
    [key: string]: string
  }
  
  const months: Months = {
    "01": "Jan", 
    "02": "Fev", 
    "03": "Mar", 
    "04": "Abr", 
    "05": "Mai", 
    "06": "Jun", 
    "07": "Jul", 
    "08": "Ago", 
    "09": "Set", 
    "10": "Out", 
    "11": "Nov", 
    "12": "Dez", 
  }
  const [,mes,dia] = date.split("-")
  return `Dia ${dia} de ${months[mes]}.`
};
