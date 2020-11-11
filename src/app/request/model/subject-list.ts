import { ISubject, SUBJECT } from './subject';
import { ExpertList } from './expert-list';
import { EXPERT } from './expert';

export class SubjectList {
  // tslint:disable-next-line:variable-name
  private _list: ISubject[] = [];

  constructor(expertList: ExpertList) {
    this._list.push({subject: SUBJECT.STATE_ACCOUNTING, expertList: expertList.getExpertList([EXPERT.PASHKOV, EXPERT.LIS])});
    this._list.push({subject: SUBJECT.HRM, expertList: expertList.getExpertList([EXPERT.PANOV, EXPERT.PANOVA])});
    this._list.push({subject: SUBJECT.TECH_ISSUE, expertList: expertList.getExpertList([EXPERT.DANILOV])});
    this._list.push({subject: SUBJECT.PAYMENT, expertList: expertList.getExpertList([EXPERT.PASHKOVA])});
    this._list.push({subject: SUBJECT.ITS_OTCHET, expertList: expertList.getExpertList([EXPERT.LIS])});
    this._list.push({subject: SUBJECT.SOFT_DEVELOPMENT, expertList: expertList.getExpertList([EXPERT.SOLONINKA])});
    this._list.push({subject: SUBJECT.ACCOUNTING, expertList: expertList.getExpertList([EXPERT.SOLONINKA])});
    this._list.push({subject: SUBJECT.ANOTHER, expertList: expertList.getExpertList([EXPERT.PASHKOVA])});
  }

  get list(): ISubject[] {
    return this._list;
  }
}
