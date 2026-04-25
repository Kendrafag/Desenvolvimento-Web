import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [input, setInput] = useState('')
  const [tasks, setTasks] = useState([])

  function adicionarTarefa() {
    if (input === '') return

    const novaTarefa = {
      id: Date.now(),
      text: input,
      done: false
    }

    setTasks([...tasks, novaTarefa])
    setInput('')
  }

  function removerTarefa(id) {
    const novaLista = tasks.filter(task => task.id !== id)
    setTasks(novaLista)
  }

  function toggleDone(id) {
    const novasTasks = tasks.map(task => {
      if (task.id === id) {
        return { ...task, done: !task.done }
      }
      return task
    })

    setTasks(novasTasks)
  }

  return (
    <main>
      <div id="container">
        <h1>LISTA DE TAREFAS</h1>

        <input
          type="text"
          placeholder="Digite uma tarefa"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button onClick={adicionarTarefa}>
          Adicionar
        </button>

        <ul>
          {tasks.map((task) => (
            <li key={task.id}> <input
    type="checkbox"
    checked={task.done}
    onChange={() => toggleDone(task.id)}
  />

  <span className={task.done ? 'done' : ''}>
    {task.text}
  </span>

  <button onClick={() => removerTarefa(task.id)}>
    Remover
  </button>
</li>
          ))}
        </ul>
      </div>
    </main>
  )
}

export default App