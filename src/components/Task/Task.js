import { useDispatch } from 'react-redux';
// import { MdClose } from 'react-icons/md';
import css from './Task.module.css';
import { deleteTask } from 'redux/tasks/operations';

export const Task = ({ text, id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteTask(id));

  return (
    <div className={css.wrapper}>
      <p className={css.text}>{text}</p>
      <button type="button" className={css.button} onClick={handleDelete}>
        Delete
        {/* <MdClose size={24} /> */}
      </button>
    </div>
  );
};
