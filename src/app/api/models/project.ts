/* tslint:disable */
import { Profile } from './profile';
export interface Project {
  created_at?: string;
  description?: null | string;
  id?: number;
  owner?: Profile;
  participants?: Array<Profile>;
  title: string;
  updated_at?: string;
}
