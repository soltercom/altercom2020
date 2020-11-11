import { EXPERT, Expert, IExpert } from './expert';

export class ExpertList {
  private list: Expert[] = [];

  constructor(data: IExpert[]) {
    data.forEach(it => this.list.push(new Expert(it)));
  }

  getExpert(expert: EXPERT): Expert {
    const index = this.list.findIndex(it => it.checkExpert(expert));
    if (index === -1) { return null; }
    else { return this.list[index]; }
  }

  getExpertList(experts: EXPERT[]): Expert[] {
    const list: Expert[] = [];
    experts.forEach(it => {
      const expert = this.getExpert(it);
      if (expert !== null) {
        list.push(expert);
      }
    });
    return list;
  }
}
