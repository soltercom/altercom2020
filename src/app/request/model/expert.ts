export interface IExpert {
  employeeID: string;
  name: string;
  surname: string;
  secondaryName: string;
  email: string;
  login: string;
}

export enum EXPERT {
  DANILOV = 'Данилов Андрей',
  LIS = 'Лис Аарон',
  PANOV = 'Панов Андрей',
  PANOVA = 'Панова Александра',
  PASHKOV = 'Пашков Валерий',
  PASHKOVA = 'Пашкова Лидия',
  SOLONINKA = 'Солонинка Владимир'
}

export class Expert {
  private employeeID: string;
  private name: string;
  private surname: string;
  private secondaryName: string;
  private email: string;
  private login: string;
  private expert: EXPERT;

  constructor(data: IExpert) {
    this.employeeID = data.employeeID;
    this.name = data.name;
    this.surname = data.surname;
    this.secondaryName = data.secondaryName;
    this.email = data.email;
    this.login = data.login;
    this.expert = Expert.getExpert(data.surname);
  }

  private static getExpert(surname: string): EXPERT {
    switch (surname.toUpperCase()) {
      case 'Данилов'.toUpperCase(): return EXPERT.DANILOV;
      case 'Лис'.toUpperCase(): return EXPERT.LIS;
      case 'Панов'.toUpperCase(): return EXPERT.PANOV;
      case 'Панова'.toUpperCase(): return EXPERT.PANOVA;
      case 'Пашков'.toUpperCase(): return EXPERT.PASHKOV;
      case 'Пашкова'.toUpperCase(): return EXPERT.PASHKOVA;
      case 'Солонинка'.toUpperCase(): return EXPERT.SOLONINKA;
    }
  }

  checkExpert(expert: EXPERT): boolean {
    return this.expert === expert;
  }

  toString(): string {
    return `${this.surname} ${this.name}`;
  }

}
