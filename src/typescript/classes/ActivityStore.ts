// import lodash from "lodash";

import { onSeparatorMouseover } from "../utilities/event-handler-functions";

export class ActivityStore implements ActivityStoreInterface {

  public items: ActivityComponentInterface[];

  constructor() {
    this.items = []
  }


  add(item: ActivityComponentInterface): void {
    this.items.push(item)
  }

  remove(index: number): ActivityComponentInterface {
    // native method
    return this.items.splice(index, 1)[0]
    // with lodash
    // return lodash.remove(this.items, (_, i)=> i == index)[0]
  }

  select(id: string): ActivityComponentInterface {

    for (const ac of this.items)
      if (ac.editMode) ac.toggleEdit()

    const ac = this.items.find(ac => ac.state.id == id);

    if (!ac) throw new Error('The provided id does not match any ActivityComponent')
    
    // ? separator events
    const colseparators = document.querySelectorAll<HTMLElement>(`[data-weekday="${ac.state.weekday}"] .Separator`)
    
    console.log({ colseparators })
    
    colseparators.forEach(s => {
      s.addEventListener('mouseover', onSeparatorMouseover)
    })
    //------

    ac.toggleEdit()
    return ac
  }
}