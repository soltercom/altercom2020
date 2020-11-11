import { Expert } from './expert';

export interface ISubject {
  subject: SUBJECT;
  expertList: Expert[];
}

export enum SUBJECT {
  STATE_ACCOUNTING = 'Бухгалтерия для государственных учреждений',
  HRM = 'Зарплатные решения',
  TECH_ISSUE = 'Технические вопросы',
  PAYMENT = 'Документы и взаиморасчеты',
  ITS_OTCHET = '1C: ИТС + 1С: Отчетность',
  SOFT_DEVELOPMENT = 'Разработка и адаптация программ',
  ACCOUNTING = 'Бухгалтерия для хозрасчетных учреждений',
  ANOTHER = 'Прочие вопросы'
}
