import { BehaviorSubject } from "rxjs";
import { Weekday } from ".";

export interface ActivityEventData {
  id?: string,
  description: string,
  timeStart: string,
  timeEnd: string,
  weekday: Weekday
}

export interface ActivityComponentInterface {
  get state(): Required<ActivityEventData>
  state$: BehaviorSubject<ActivityComponentInterface['state']>,
  elementRef: HTMLElement,
  editMode: boolean,

  /**
   * change the state of the weekday
   * @param weekday
   */
  changeWeekday(weekday: Weekday): void,
  /**
   * Add a time slice to the timeEnd state
   */
  addTime(): void,

  /**
   * Subtract a fraction of time from the state of timeEnd
   */
  restTime(): void,
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

export interface ActivityStoreInterface {
  items: ActivityComponentInterface[]
  /**
   * Removes an activity component from the view and returns the removed ActivityComponent
   * @param id the id of the Activity Component to be removed
   */
  remove(id: string): ActivityComponentInterface,
  /**
   * Remove all Activity Components from the view and within the items property of this class
   */
  removeAll(): void,
  /**
   * Add an ActivityComponent to the view
   * @param data the ActivityEvent data
   */
  add(...data: ActivityEventData[]): void
  /**
   * Makes an Activity Component in the items list change its state to editMode
   * @param id The ActivityComponent id
   * @returns The selected ActivityComponent
   * @throws an Error object when the id does not match any ActivityComponent
   */
  select(id: string): ActivityComponentInterface
}

