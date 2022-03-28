import { Section, Task } from 'src/app/api/models';

export interface SectionWithTasks extends Section {
  tasks: Task[];
}
