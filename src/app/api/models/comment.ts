/* tslint:disable */
import { Profile } from './profile';
import { Task } from './task';
export interface Comment {
  content: string;
  created_at?: string;
  id?: number;
  likes?: Array<string>;
  owner?: Profile;
  task?: Task;
  updated_at?: string;
}
