// biome-ignore lint/complexity/noStaticOnlyClass: <explanation>
export class Currency {
  static format(
    value: number,
    localization = 'pt-BR',
    currency = 'BRL'
  ): string {
    return (value ?? 0).toLocaleString(localization, {
      style: 'currency',
      currency,
    })
  }
}
