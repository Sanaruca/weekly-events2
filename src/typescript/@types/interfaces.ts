interface ActivityEventData {
  id?: string,
  description: string,
  timeStart: string,
  timeEnd: string,
  weekday: Weekday
}

interface ActivityComponentInterface {
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

interface ActivityStoreInterface {
  items: ActivityComponentInterface[]
  remove(index: number) : ActivityComponentInterface,
  add(item: ActivityComponentInterface): void
  /**
   * Makes an Activity Component in the items list change its state to editMode
   * @param index The position of the AcrivityComponent to section
   * @returns The selected ActivityComponent
   */
  select(index: number):ActivityComponentInterface
}

