/* const CURRENCY_FORMATER = Intl.NumberFormat(undefined, {currency: "USD", style: "currency"})
 */
export function formatCurrency(number: number) {
    return '$ ' + number.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}