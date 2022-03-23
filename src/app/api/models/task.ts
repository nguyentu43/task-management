/* tslint:disable */
import { Profile } from './profile';
import { Project } from './project';
import { Section } from './section';
import { Tag } from './tag';
export interface Task {
  created_at?: string;
  description?: null | string;
  due_datetime?: string;
  id?: number;
  order: number;
  owner?: Profile;
  project?: Project;
  section?: Section;
  status?: 'Complete' | 'UnComplete' | 'Draft';
  tags?: Array<Tag>;
  title: string;
  updated_at?: string;
}
