import { INTEREST_RATE, MAX_INSTALLMENT } from '../constants'
import type Installment from './installment'

export default class CalculateInstallment {
  exec(
    value: number,
    numberOfInstallments: number = MAX_INSTALLMENT,
    interestRate: number = INTEREST_RATE
  ): Installment {
    if (numberOfInstallments < 2 || numberOfInstallments > MAX_INSTALLMENT) {
      throw new Error(
        `Quantidade de parcelas deve ser entre 2 e ${numberOfInstallments}`
      )
    }

    const totalWithInterest = this.calculateCompoundInterest(
      value,
      interestRate,
      numberOfInstallments
    )

    return {
      totalAmount: this.withTwoDecimalPlaces(totalWithInterest),
      installmentAmount: this.withTwoDecimalPlaces(
        totalWithInterest / numberOfInstallments
      ),
      numberOfInstallments,
      interestRate,
    }
  }

  private calculateCompoundInterest(
    totalAmount: number,
    monthlyRate: number,
    numberOfInstallments: number
  ) {
    return totalAmount * (1 + monthlyRate) ** numberOfInstallments
  }

  private withTwoDecimalPlaces(value: number): number {
    return Math.round(value * 100) / 100
  }
}
