/* tslint:disable */
import { Profile } from './profile';
import { Reaction } from './reaction';
import { Task } from './task';
export interface Comment {
  content: string;
  created_at?: string;
  id?: number;
  owner?: Profile;
  reactions?: Array<Reaction>;
  task?: Task;
  updated_at?: string;
}
