/* tslint:disable */
import { Task } from './task';
export interface Activity {
  content: string;
  created_at?: string;
  id?: number;
  task?: Task;
  title: string;
  type: string;
}
