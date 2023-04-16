import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { TaskList } from 'components/TaskList/TaskList';
import { TaskEditor } from 'components/TaskEditor/TaskEditor';
// import { fetchTasks } from 'redux/tasks/operations';
// import { selectLoading } from 'redux/tasks/selectors';

export default function Tasks() {
  return (
    <>
      <Helmet>
        <title>Your tasks:</title>
      </Helmet>
      <TaskEditor />
      <TaskList />
    </>
  );
}
