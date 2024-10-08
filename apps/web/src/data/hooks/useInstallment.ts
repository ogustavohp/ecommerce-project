import { CalculateInstallment } from '@store/core'

export function useInstallment(value: number, quantity = 12) {
  const installment = new CalculateInstallment().exec(value, quantity)
  return installment
}
