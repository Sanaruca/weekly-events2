interface ActivityEventData {
  description: string,
  timeStart: string,
  timeEnd: string,
  weekday: Weekday
}

interface ActivityComponentInterface {
  state: ActivityEventData,
  elementRef: HTMLElement,
  addTime(): void,
  restTime(): void,
  resizeElement(): void
  generateElement(): HTMLElement
  insert(): void
}

interface ActivityStoreInterface {
  items: ActivityComponentInterface[]
  remove(index: number) : ActivityComponentInterface,
  add(item: ActivityComponentInterface): void
}

