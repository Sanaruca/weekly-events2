import { ActivityStoreInterface, ActivityComponentInterface } from "../@types";

export class ActivityStore implements ActivityStoreInterface {

  public items: ActivityComponentInterface[];

  constructor() {
    this.items = []
  }


  add(...item: ActivityComponentInterface[]): void {

    for (const ac of item) {

      this.items.push(ac)
      ac.insert()
      ac.state$.subscribe(() => {
        ac.render()
      })
    }



  }

  remove(index: number): ActivityComponentInterface {
    // with lodash
    // lodash.remove(this.items, (_, i)=> i == index)[0]
    // native method
    const removedAC = this.items.splice(index, 1)[0]

    removedAC.elementRef.remove()

    return removedAC
  }

  removeAll(): void {
    while (true) {
      if (this.items.length == 0) break;
      this.remove(0)
    }
  }

  select(id: string): ActivityComponentInterface {

    for (const ac of this.items)
      if (ac.editMode) ac.toggleEdit()


    const ac = this.items.find(ac => ac.state.id == id)

    if (!ac) throw new Error('The provided id does not match any ActivityComponent')

    ac.toggleEdit()
    return ac
  }
}