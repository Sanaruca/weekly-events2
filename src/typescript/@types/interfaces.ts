import { Weekday } from ".";

export  interface ActivityEventData {
  id?: string,
  description: string,
  timeStart: string,
  timeEnd: string,
  weekday: Weekday
}

export  interface ActivityComponentInterface {
  state: Required<ActivityEventData>,
  elementRef: HTMLElement,
  editMode:boolean,
  /**
   * Add a time slice to the timeEnd state
   */
  addTime(): void,
  
  /**
   * Subtract a fraction of time from the state of timeEnd
   */
  restTime(): void,
  generateElement(): HTMLElement
  /**
   * Inserts the component (elementRef) inside the corresponding Separator
   */
  insert(): void
  /**
   * Render the component
   */
  render(): void
  /**
   * Toggles the state of editMode
   * @returns  The state to which editMode has changed
   */
  toggleEdit(): boolean,
}

export  interface ActivityStoreInterface {
  items: ActivityComponentInterface[]
  /**
   * Removes an activity component from the view and returns the removed ActivityComponent
   * @param index the position of the Activity Component within the items property of this class
   */
  remove(index: number) : ActivityComponentInterface,
  /**
   * Remove all Activity Components from the view and within the items property of this class
   */
  removeAll() : void,
  add(item: ActivityComponentInterface): void
  /**
   * Makes an Activity Component in the items list change its state to editMode
   * @param id The ActivityComponent id
   * @returns The selected ActivityComponent
   * @throws an Error object when the id does not match any ActivityComponent
   */
  select(id: string):ActivityComponentInterface
}

