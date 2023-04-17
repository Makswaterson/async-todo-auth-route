import { useSelector } from 'react-redux';
import { Task } from 'components/Task/Task';
import { selectAllTasks } from 'redux/tasks/selectors';
import css from './TaskList.module.css';

export const TaskList = () => {
  const tasks = useSelector(selectAllTasks);

  return (
    <ul className={css.list}>
      {tasks.map(({ text, id }) => (
        <li key={id}>
          <Task id={id} text={text} />
        </li>
      ))}
    </ul>
  );
};
