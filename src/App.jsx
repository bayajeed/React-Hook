import { useEffect, useState } from 'react'


function App() {
  const [todos, setTodos] = useState([])
  useEffect(()=>{
      fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((res)=>{
        return res.json()
      })
      .then((data)=>{
        setTodos(data)
        console.log(todos)
      })
    }, [])
  return (
    <>
        <h1>Todos</h1>
        <ul>{todos.map((todo)=>{
          return <li key={todo.id}>{todo.title}</li>
        })}</ul>
    </>
  )
}

export default App
