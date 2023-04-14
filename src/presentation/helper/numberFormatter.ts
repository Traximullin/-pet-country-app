export const numberFormatter =
    (number: number): string => new Intl.NumberFormat().format(number)
