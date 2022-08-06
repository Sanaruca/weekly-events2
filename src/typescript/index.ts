import { activityevents } from "./constants/activity-events";
import { ActivityStore } from "./classes/ActivityStore";
import { ActivityComponent } from "./classes/ActivityComponent";
import { defaultTimes } from "./constants/data";

const activityComponents = activityevents.map(e => new ActivityComponent(e))

const content = new ActivityStore()

activityComponents.forEach(ac => { 
  ac.render()
  ac.insert()
  content.add(ac)
})

console.log(content)
