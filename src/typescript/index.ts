import { activityevents } from "./constants/activity-events";
import { ActivityStore } from "./classes/ActivityStore";
import { ActivityComponent } from "./classes/ActivityComponent";


const activityStore = new ActivityStore()

activityStore.add(...activityevents);

(window as any).activityStore = activityStore
