import AddTodoForm from './AddTodoForm/AddTodoForm';
import TodoList from './TodoList/TodoList';
import s from './Todos.module.scss';
import { TestTodo, TestDoing, TestDone } from '../../service/testTodos';

// import { Link, Route } from 'react-router-dom';
// import ClockContainer from './ClockContainer/ClockContainer';

export default function Todos() {
  return (
    <>
      {/* <div className={s.wrapper}> */}
      <div className={s.hero}>
        <p
          style={{
            color: 'red',
            fontSize: '32px',
            textAlign: 'center',
            marginTop: '0px',
          }}
        >
          !!!Attention! In development!
        </p>
        <h1 className={s.title}>To do to do</h1>
        <AddTodoForm />
        {/* <ClockContainer /> */}
      </div>
      <div className="container">
        <ul className={s.list}>
          <li className={s.item}>
            <TodoList header="To Do" list={TestTodo} />
          </li>
          <li className={s.item}>
            <TodoList header="Doing" list={TestDoing} />
          </li>
          <li className={s.item}>
            <TodoList header="Done" list={TestDone} />
          </li>
        </ul>
      </div>
      {/* </div> */}
    </>
  );
}
