export class Currency {
  static format(
    value: number,
    localization: string = 'pt-BR',
    currency: string = 'BRL'
  ): string {
    return (value ?? 0).toLocaleString(localization, {
      style: 'currency',
      currency,
    })
  }
}
