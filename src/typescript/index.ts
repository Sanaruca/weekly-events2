import { activityevents } from "./constants/activity-events";
import { ActivityStore } from "./classes/ActivityStore";
import { ActivityComponent } from "./classes/ActivityComponent";
import { defaultTimes } from "./constants/data";
// import { v4 as uuidv4 } from "uuid";

const activityComponents = activityevents.map(e => new ActivityComponent({ ...e, id: Math.random().toString() }))

const content = new ActivityStore()


activityComponents.forEach(ac => {

  // add event
  ac.elementRef.addEventListener('click', function (e) {
    content.select(ac.state.id)
  })


  ac.render()
  ac.insert()
  content.add(ac)
})

console.log(content)


// function clickEvent(event: MouseEvent) {
//   content.select((event.target as HTMLElement).dataset.id!)
// }