import { activityevents } from "./constants/activity-events";
import { ActivityStore } from "./classes/ActivityStore";
import { ActivityComponent } from "./classes/ActivityComponent";

const activityComponents = activityevents.map(e => new ActivityComponent({ ...e, id: Math.random().toString() }))

const activityStore = new ActivityStore()

activityStore.add(...activityComponents);

(window as any).activityStore = activityStore
