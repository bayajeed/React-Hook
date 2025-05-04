import useFetch from "./useFetch";

function DataFetch() {
    

  const {datas, error, isLoading} = useFetch("https://jsonplaceholder.typicode.com/toos?_limit=5") // todos




  return (
    <>
        <h1>Todos</h1>
        <p>{isLoading && <h2>Data is Loading</h2>}</p>
        {error && <p>Error is: {error}</p>}
        {/* Check if datas is not null and if it's an array */}
        <ul>{datas && Array.isArray(datas) && datas.map((todo)=>(
            <li key={todo.id}>{todo.title}</li>
        ))}</ul>
    </>
  )
}

export default DataFetch;
