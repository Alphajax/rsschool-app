import { Session } from 'components/withSession';
import { Course } from 'services/models';
import { FormComponentProps } from 'antd/lib/form';

export const TYPES = {
  MENTOR: 'mentor',
  STUDENT: 'student',
};

export type Props = {
  courses?: Course[];
  session: Session;
} & FormComponentProps;
