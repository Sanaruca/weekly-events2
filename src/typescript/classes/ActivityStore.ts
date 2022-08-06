// import lodash from "lodash";

export class ActivityStore implements ActivityStoreInterface{

  public items: ActivityComponentInterface[];

  constructor(){
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
}