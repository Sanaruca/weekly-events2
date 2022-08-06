export class ActivityComponent implements ActivityComponentInterface {

  public elementRef: HTMLElement;

  constructor(public state: ActivityEventData) {
    this.elementRef = this.generateElement()
  }

  resizeElement(): void {
    const SeparatorStart = document.querySelector(`.Col[data-weekday="${this.state.weekday}"] .Separator[data-time="${this.state.timeStart}"]`)!
    const SeparatorEnd = document.querySelector(`.Col[data-weekday="${this.state.weekday}"] .Separator[data-time="${this.state.timeEnd}"]`)!

    this.elementRef.style.height = SeparatorEnd.getBoundingClientRect().bottom - SeparatorStart.getBoundingClientRect().top + 'px'

  }

  addTime(): void {

  }

  restTime(): void {

  }

  generateElement(): HTMLElement {
    const element = document.createElement('div')
    element.classList.add('Activity')
    element.style.backgroundColor= `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
    return element
  }

  insert(): void {
    const parentElement = document.querySelector(`.Col[data-weekday="${this.state.weekday}"] .Separator[data-time="${this.state.timeStart}"]`)!
    parentElement.appendChild(this.elementRef)
  }

}