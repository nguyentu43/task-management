/* tslint:disable */
import { Profile } from './profile';
import { Task } from './task';
export interface TodoItem {
  created_at?: string;
  due_datetime?: string;
  id?: number;
  is_done?: boolean;
  owner?: Profile;
  participants?: Array<Profile>;
  task?: Task;
  title: string;
  updated_at?: string;
}
