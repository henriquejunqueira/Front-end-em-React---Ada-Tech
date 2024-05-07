// import { Memoization } from './components/Concepts/Memoization';
// import { Refs } from './components/Concepts/Refs';
import { TasksProvider } from './context/TasksContext';
import { Header } from './components/Header/Header';
import { Tasks } from './components/Tasks/Tasks';

import './styles/global.css';

function App() {
  return (
    <TasksProvider>
      <Header />
      <Tasks />

      {/* <Refs /> */}

      {/* <Memoization
        financialData={{ incomes: [50, 30, 20], outcomes: [5, 8, 4] }}
      /> */}
    </TasksProvider>
  );
}

export default App;
