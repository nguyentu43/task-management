/* tslint:disable */
import { Profile } from './profile';
export interface Reaction {
  comment: number;
  created_at?: string;
  id?: number;
  owner?: Profile;
  type?: 'Love' | 'Like' | 'Smile';
  updated_at?: string;
}
