import { activityevents } from "./constants/activity-events";
import { ActivityStore } from "./classes/ActivityStore";
import { ActivityComponent } from "./classes/ActivityComponent";
import { defaultTimes } from "./constants/data";
import { onResizeControlMousedown, onResizeControlMouseup, onSeparatorMouseover } from "./utilities/event-handler-functions";
// import { v4 as uuidv4 } from "uuid";


const activityComponents = activityevents.map(e => new ActivityComponent({ ...e, id: Math.random().toString() }))

const content = new ActivityStore()


activityComponents.forEach(ac => {

  // add event to select ac
  ac.elementRef.addEventListener('click', function (e) {
    content.select(ac.state.id)
  })

  
  // add event to ResizeControl
  ac.elementRef.querySelector<HTMLElement>('.ResizeControl')!.addEventListener('mousedown' , onResizeControlMousedown)
  ac.elementRef.querySelector<HTMLElement>('.ResizeControl')!.addEventListener('mouseup' , onResizeControlMouseup)
  
  
  ac.render()
  ac.insert()
  content.add(ac)
})

console.log(content)


