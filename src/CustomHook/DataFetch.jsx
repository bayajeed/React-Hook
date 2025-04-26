import useFetch from "./useFetch";

function DataFetch() {
    

  const {datas, error} = useFetch("https://jsonplaceholder.typicode.com/tos?_limit=5")




  return (
    <>
        <h1>Todos</h1>
        <p>{error}</p>
        {/* Check if datas is not null and if it's an array */}
        <ul>{datas && Array.isArray(datas) && datas.map((todo)=>(
            <li key={todo.id}>{todo.title}</li>
        ))}</ul>
    </>
  )
}

export default DataFetch;
