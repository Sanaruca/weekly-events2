/**
 * For get mouse position y
 */
export function onDocumentMouseMove(event: MouseEvent) {
  (window as any).mousePositionY = event.y
  console.log((window as any).mousePositionY)
}

export function onDocumentMouseup(event: MouseEvent) {
  console.log('finished drag')
  // for security
  document.removeEventListener('mousemove', onDocumentMouseMove)
}

export function onResizeControlMousedown(this: HTMLElement, event: MouseEvent) {

  // at first the mouse coordinates will not be available, therefore this control is necessary
  const mpY = event.clientY;

  (window as any).mousePositionY = mpY;
  (window as any).mouseOriginPositionY = mpY;

  // console.log(this)
  // document.addEventListener('mousemove', onDocumentMouseMove)

  // udate moumousePositionY coordinates
  document.addEventListener('mouseup', onDocumentMouseup, { once: true })


  console.log('mousedown on ', this, 'mousePosition:', mpY)

}

export function onResizeControlMouseup(this: HTMLElement, event: MouseEvent) {
  // console.log(this)

  document.removeEventListener('mousemove', onDocumentMouseMove)


}

// 
export function onSeparatorMouseover(this: HTMLElement, event: MouseEvent) {

  const newPlaceSeparator = event.target;

  console.log(newPlaceSeparator);

  (window as any).newPlaceSeparator = newPlaceSeparator;


}