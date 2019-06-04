
interface Debt {
    description: string,
    value
}

interface Cash {
    description: string,
    value
}

export class Bill {
    notes: string[]
    debts: Debt[]
    cashs: Cash[]
    current_money: number
    month: number
    year: number

    constructor(month: number, year: number){
        this.month = month
        this.year = year
    }
}