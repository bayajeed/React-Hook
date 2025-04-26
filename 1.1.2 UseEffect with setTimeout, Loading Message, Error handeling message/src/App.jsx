import { useEffect, useState } from 'react'

const loadingMessage = "Page Loading...";

function App() {
  const [todos, setTodos] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(()=>{
      setTimeout(() => {
        fetch("https://jsonplaceholder.typicode.com/todos?_limit=5") // hoe todos
        .then((res)=>{
          if(!res.ok){
            // throw Error('Data not Fetching');
            throw Error(`Data fetch failed! Status: ${res.status}`); // কাস্টম Error
          }
          else{
            return res.json();
          }
        })
        .then((data)=>{
          setTodos(data)
          console.log(todos)
          setIsLoading(false)
          setError(null)
        })
        .catch((error)=>{
          setError(error.message);
          setIsLoading(false);
          console.log(error.message);
        });
      }, 3000);
    }, [])
  return (
    <>
        <h1>Todos</h1>
        {error && <p style={{ color: 'red' }}>{error}</p>}

        <p>{isLoading && loadingMessage}</p>
        <ul>{todos.map((todo)=>{
          return <li key={todo.id}>{todo.title}</li>
        })}</ul>
    </>
  )
}

export default App
