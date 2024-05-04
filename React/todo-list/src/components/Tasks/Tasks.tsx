import { FormEvent, useState } from 'react';
import styles from './styles.module.scss';

interface Task {
  title: string;
  done: boolean;
  id: number;
}

export const Tasks: React.FC = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const [tasks, setTasks] = useState([] as Task[]);

  // ! Função disparada quando o usuário está querendo adicionar uma nova tarefa
  function handleSubmitAddTask(eventFunction: FormEvent) {
    eventFunction?.preventDefault();
    console.log(taskTitle);

    if (taskTitle.length < 3) {
      alert('Não é possível adicionar uma tarefa com menos de 3 letras!');
      return;
    }

    // ! Adiciona a tarefa
    setTasks([
      ...tasks, // ! pega todas as tarefas que já existiam e coloca nesse novo valor do estado de tarefass
      { id: new Date().getTime(), title: taskTitle, done: false },
    ]);
    setTaskTitle(''); // ! limpa o input
  }

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
              <input type="checkbox" id={`task-${task.id}`} />
              <label htmlFor={`task-${task.id}`}>{task.title}</label>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
