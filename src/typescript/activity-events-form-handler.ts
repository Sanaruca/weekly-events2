import { ActivityEventData } from "./@types";
import { activityevents } from "./constants/activity-events";

const form = document.forms.namedItem('activityEventForm')
const jsonArea = document.querySelector<HTMLTextAreaElement>('textarea#json')



form.addEventListener('submit', function () {

  const data = getAndTrasformFormInput()


  if (data.timeStart == data.timeEnd) return alert('los valores de inicio y culminacion del evennto no pueden se iguales')
  if (+data.timeEnd.split(':')[0] < +data.timeStart.split(':')[0]) return alert('un evento no puede terminar antes de empezar')
  if (!data.description) return alert('porfavor añade una descripcion para el evento')

  jsonArea.value = JSON.stringify(data, null, 4)

  activityevents.push(data)

  console.table(activityevents)
})


function getAndTrasformFormInput(): ActivityEventData {


  const descriptionElement: HTMLTextAreaElement = form.elements.namedItem('description') as any

  console.log({ descriptionElement })
  const weekdayElement: HTMLSelectElement = form.elements.namedItem('weekday') as any
  const startHourElement: HTMLSelectElement = form.elements.namedItem('startHour') as any
  const startMinutesElement: HTMLSelectElement = form.elements.namedItem('startMinutes') as any
  const endHourElement: HTMLSelectElement = form.elements.namedItem('endHour') as any
  const endMinutesElement: HTMLSelectElement = form.elements.namedItem('endMinutes') as any


  return (
    {
      weekday: (weekdayElement.value as any),
      timeStart: (startHourElement.value.length < 2 ? '0' + startHourElement.value : startHourElement.value) + ':' + startMinutesElement.value,
      timeEnd: (endHourElement.value.length < 2 ? '0' + endHourElement.value : endHourElement.value) + ':' + endMinutesElement.value,
      description: descriptionElement.value,
    }
  )
}
