export const isAuthenticated = (): boolean => {
    const TokenStorage = localStorage.getItem('@tokenApp')
    if (TokenStorage){
        return true
    } else {
        return false
    }
};