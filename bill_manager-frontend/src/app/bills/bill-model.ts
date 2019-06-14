
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

    constructor(month: number){
        this.month = month
    }
}

export interface Year {
    year: number, 
    months: Bill[]
}