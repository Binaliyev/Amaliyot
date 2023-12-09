import axios from "axios"
import { useEffect, useState } from "react"

export const App = () => {
  let jsonUrl = "https://jsonplaceholder.typicode.com"
  const [url, setUrl] = useState(jsonUrl + `/users`)
  const [data, setData]= useState([])
  useEffect(() => {
    axios.get(url).then(response => {
      if (response.status === 200) { 
        setData(response.data)
      }
    })
  }, [url])
  return(
    <main>
      <section className="hero">
        <div className="container">
          <div className="hero-btns w-50 mx-auto text-center">
          <button onClick={() => {setUrl(jsonUrl + '/todos')}} className="btn btn-primary m-3">Todos</button>
          <button onClick={() => {setUrl(jsonUrl + '/users')}}  className="btn btn-primary m-3">Users</button>
          <button onClick={() => {setUrl(jsonUrl + '/posts')}}  className="btn btn-primary m-3">Posts</button>
          </div>
          {data?.length? (
            <>
          {data?.map(item => {
            return(
              <p className="text-center">{item.name ? item.name: item.title}</p>
            )
          })}
            </>
          ): (<h1 className="text-danger">Hatolik yuz berdi</h1>)}
        </div>
      </section>
    </main>
  )
}