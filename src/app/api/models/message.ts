/* tslint:disable */
import { Profile } from './profile';
import { Project } from './project';
export interface Message {
  content: string;
  created_at?: string;
  id?: number;
  owner?: Profile;
  project?: Project;
}
