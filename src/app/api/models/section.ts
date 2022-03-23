/* tslint:disable */
import { Project } from './project';
export interface Section {
  color: string;
  id?: number;
  name: string;
  order: number;
  project?: Project;
}
