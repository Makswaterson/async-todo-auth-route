import { useDispatch } from 'react-redux';
import { addTask } from 'redux/tasks/operations';
import css from './TaskEditor.module.css';
import toast from 'react-hot-toast';

export const TaskEditor = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const text = form.elements.text.value;
    if (text !== '') {
      dispatch(addTask(text));
      form.reset();
      return;
    }
    toast.error('Task cannot be empty. Enter some text!');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        type="text"
        name="text"
        placeholder="Enter task text..."
        className={css.input}
      />
      <button type="submit" className={css.button}>
        Add task
      </button>
    </form>
  );
};
