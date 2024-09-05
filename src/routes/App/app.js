import React, {useState, useEffect} from "react";
import './app.css'
import MainHeader from "../../Components/mainHeader";

import axios from "axios"

function App() {

  const [posts, setPosts] = useState([])

  useEffect(() =>{
    axios.get("https://my-json-server.typicode.com/arthuracmm/ecommerly/posts")
    .then((res) => {
      setPosts(res.data)
    })
    .catch(() => {
      console.log('Deu errado')
    })
  }, [])

  return (
    <div>
      <MainHeader />

      <main>
          <div className="cards">
            {posts.map((post, key) =>{
                  return (
                    <div className="card">
                        <header>
                          <h2>{post.title}</h2>
                        </header>

                        <p>{post.description}</p>
                        <p>{post.value}</p>

                        <div className="btns">
                        
                        </div>
                    </div>
                  )
            })}
            
          </div>
      </main>
    </div>
  );
}

export default App;
