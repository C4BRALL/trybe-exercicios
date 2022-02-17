import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tasks = ['task1', 'task2', 'task3', 'task4'];

const fullTasks = tasks.map((task) => Task(task));

function App() {
  return (
    <div>
      <ul>
        {Task(fullTasks)}
      </ul>
    </div>
  );
}

export default App;
