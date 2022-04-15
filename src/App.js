import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import {useState, useEffect} from "react";

function App() {
    const [showAddTask, setShowAddTask] = useState(false);
    const [tasks, setTasks] = useState([])
    useEffect(() => {
        const getTasks = async () => {
            const tasksFromServer = await fetchTasks();
            setTasks(tasksFromServer);
        }

       getTasks();
    }, [])

    const fetchTasks = async () => {
        const res = await fetch('http://localhost:4000/tasks');
        const data = await res.json();

        return data;
    }

    const addTask = (task) => {
        const id = Math.floor(Math.random() * 10000) + 1;
        const newTask = {
            id, ...task
        }
        setTasks([...tasks, newTask]);
    }

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    }

    //Toggle reminder
    const toggleReminder = (id) => {
        setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task)
        )
    }

  return (
    <div className="App">
        <Header showAdd={showAddTask} onAdd={() => setShowAddTask(!showAddTask)}/>
        {showAddTask && <AddTask onAdd={addTask}/>}

        {tasks.length > 0 ? <Tasks onToggle={toggleReminder} onDelete={deleteTask}
                tasks={tasks}/> : (<h1>No tasks to show</h1>)
        }
    </div>
  );
}

// class App extends React.Component {
//     render() {
//         return <h1>Hello from a class</h1>
//     }
// }

export default App;
