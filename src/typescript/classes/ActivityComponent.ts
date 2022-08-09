import { defaultTimes } from "../constants/data";
import {ActivityComponentInterface, ActivityEventData} from "../@types"

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
    const element = document.createElement('div')
    element.classList.add('Activity')
    element.dataset.id = this.state.id
    element.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
    return element
  }


  insert(): void {
    const parentElement = document.querySelector(`.Col[data-weekday="${this.state.weekday}"] .Separator[data-time="${this.state.timeStart}"]`)!
    parentElement.appendChild(this.elementRef)
  }

  render() {
    this.#resizeElement()

    if (this.editMode) {
      this.elementRef.classList.add('isActive')
    } else {
      this.elementRef.classList.remove('isActive')
    }

  }
}