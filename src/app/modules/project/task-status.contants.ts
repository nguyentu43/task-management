import { InjectionToken } from "@angular/core"

export const TASK_STATUS = new InjectionToken('task_status');
export const taskStatus = {
    'Complete': 'green',
    'UnComplete': 'red',
    'Draft': 'grey'
};