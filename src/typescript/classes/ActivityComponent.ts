import { defaultTimes } from "../constants/data";

export class ActivityComponent implements ActivityComponentInterface {

  public elementRef: HTMLElement;
  public editMode: boolean = false;

  constructor(public state: Required<ActivityEventData>) {
    this.elementRef = this.generateElement()
  }

  #resizeElement(): void {

    const SeparatorStart = document.querySelector(`.Col[data-weekday="${this.state.weekday}"] .Separator[data-time="${this.state.timeStart}"]`)!
    const SeparatorEnd = document.querySelector(`.Col[data-weekday="${this.state.weekday}"] .Separator[data-time="${this.state.timeEnd}"]`)!

    this.elementRef.style.height = SeparatorEnd.getBoundingClientRect().top - SeparatorStart.getBoundingClientRect().top + 'px'

  }

  addTime(): void {
    const nextEnd = defaultTimes[defaultTimes.indexOf(this.state.timeEnd)+1]
    
    // For security
    if(!nextEnd) return
    
    this.state.timeEnd = nextEnd
    this.render()
  }
  
  restTime(): void {

    const auxStartIndex = defaultTimes.indexOf(this.state.timeStart)
    const auxEndIndex = defaultTimes.indexOf(this.state.timeEnd)

    const nextEnd = defaultTimes[auxEndIndex-1]
    
    // For security
    if(!nextEnd || auxEndIndex <=  auxStartIndex+1 ) return;

    this.state.timeEnd = nextEnd

    this.render()
  }

  toggleEdit(): boolean {
    this.editMode = !this.editMode
    this.render()
    return this.editMode
  }

  generateElement(): HTMLElement {
    const activityElement = document.createElement('div')
    activityElement.classList.add('Activity')
    activityElement.dataset.id = this.state.id
    activityElement.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
    
    const resizecontrolElement = document.createElement('div')
    resizecontrolElement.classList.add('ResizeControl', 'hide')

    activityElement.appendChild(resizecontrolElement)
    return activityElement
  }


  insert(): void {
    const parentElement = document.querySelector(`.Col[data-weekday="${this.state.weekday}"] .Separator[data-time="${this.state.timeStart}"]`)!
    parentElement.appendChild(this.elementRef)
  }

  render() {
    this.#resizeElement()

    if (this.editMode) {
      this.elementRef.classList.add('isActive')
      this.elementRef.querySelector('.ResizeControl')!.classList.remove('hide')
    } else {
      this.elementRef.classList.remove('isActive')
      this.elementRef.querySelector('.ResizeControl')!.classList.add('hide')
    }

  }
}