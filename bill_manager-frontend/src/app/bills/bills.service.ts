import { Injectable } from '@angular/core';
import { Bill } from './bill-model';

@Injectable({
  providedIn: 'root'
})
export class BillsService {

  months: Bill[] = [
    {
      notes: ['primeira descrição do mês 1', ' segunda descrição do mês 1'],
      debts: [
        {
          description: 'comprar de carro',
          value: 5000,
        },
        {
          description: 'pagamento da OI',
          value: 30
        }
      ],
      cashs: [
        {
          description: 'pensão',
          value: 740
        },
        {
          description: 'bolsa',
          value: 400
        }
      ],
      current_money: 800, 
      month: 0, 
      year: 2019
    },
    {
      notes: ['primeira descrição do mês 2', ' segunda descrição do mês 2'],
      debts: [
        {
          description: 'comprar de uma moto',
          value: 500,
        },
        {
          description: 'pagamento da TIM',
          value: 30
        }
      ],
      cashs: [
        {
          description: 'pensão de Valdir',
          value: 740
        },
        {
          description: 'bolsa do mês',
          value: 400
        }
      ],
      current_money: 820, 
      month: 1, 
      year: 2019
    }
  ]

  constructor() { }

  getMonths(): Bill[] {
    return this.months
  }
}
