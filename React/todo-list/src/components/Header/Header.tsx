import { useContext } from 'react';
import { StatsCard } from '../StatsCard/StatsCard';
import styles from './styles.module.scss';
import { TasksContext } from '../../context/TasksContext';

// import { useState } from 'react'; // ! importação do hook useState

// ? useState é um hook que trabalha com estados dos objetos

export const Header: React.FC = () => {
  // ! um hook sempre tem parênteses depois do nome
  // const [parametroEstado, funcaoParaAlterarEstado] = useState(0);
  const { tasks } = useContext(TasksContext);

  const totalTasks = tasks.length; // TODO recebe o total de tarefas
  const totalPending = tasks.reduce((total, task) => {
    if (!task.done) return total + 1;

    return total;
  }, 0);

  const totalDone = totalTasks - totalPending;

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div>
          <h1>MyTodo</h1>
          <span>Bem-vindo, Henrique</span>
        </div>
        <div>
          <StatsCard title="Total de Tarefas" value={totalTasks} />
          <StatsCard title="Tarefas Pendentes" value={totalPending} />
          <StatsCard title="Tarefas Concluídas" value={totalDone} />
        </div>
      </div>
    </header>
  );
};
