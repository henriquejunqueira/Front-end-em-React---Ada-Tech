import { FormEvent, useContext, useState } from 'react';
import { TasksContext } from '../../context/TasksContext';

import styles from './styles.module.scss';

// const [state, setState] = useState(initialState) Link Reference: https://react.dev/reference/react/useState
export const Tasks: React.FC = () => {
  const [taskTitle, setTaskTitle] = useState('');
  // const [tasks, setTasks] = useState([] as Task[]);
  // const [counter, setCounter] = useState(0);

  const { tasks, setTasks, handleToggleTaskStatus, handleRemoveTask } =
    useContext(TasksContext); // Link Reference: https://react.dev/reference/react/useContext

  // ! Função disparada quando o usuário está querendo adicionar uma nova tarefa
  function handleSubmitAddTask(eventFunction: FormEvent) {
    eventFunction?.preventDefault();
    console.log(taskTitle);

    if (taskTitle.length < 3) {
      alert('Não é possível adicionar uma tarefa com menos de 3 letras!');
      return;
    }

    // ! Adiciona a tarefa
    const newTasks = [
      ...tasks, // ! pega todas as tarefas que já existiam e coloca nesse novo valor do estado de tarefas
      { id: new Date().getTime(), title: taskTitle, done: false },
    ];

    setTasks(newTasks);

    localStorage.setItem('tasks', JSON.stringify(newTasks));

    setTaskTitle(''); // ! limpa o input
  }

  // function handleToggleTaskStatus(taskId: number) {
  //   const newTasks = tasks.map((task) => {
  //     if (taskId === task.id) {
  //       return {
  //         ...task,
  //         done: !task.done,
  //       };
  //     }

  //     return task;
  //   });

  //   setTasks(newTasks);
  // }

  // function handleRemoveTask(taskId: number) {
  //   const newTasks = tasks.filter((task) => task.id !== taskId);

  //   setTasks(newTasks);
  // }

  return (
    <section className={styles.container}>
      <form onSubmit={handleSubmitAddTask}>
        <div>
          <label htmlFor="task-title">Adicionar Tarefa</label>
          <input
            type="text"
            id="task-title"
            value={taskTitle}
            onChange={(eventInput) => setTaskTitle(eventInput.target.value)}
            placeholder="Digite o título da tarefa..."
          />
        </div>

        <button type="submit">Adicionar Tarefa</button>
      </form>

      <ul>
        {tasks.map((task) => {
          return (
            <li key={task.id}>
              <input
                type="checkbox"
                id={`task-${task.id}`}
                onChange={() => handleToggleTaskStatus(task.id)}
              />
              <label
                className={task.done ? styles.done : ''}
                htmlFor={`task-${task.id}`}
              >
                {task.title}
              </label>
              <button onClick={() => handleRemoveTask(task.id)}>Remover</button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
