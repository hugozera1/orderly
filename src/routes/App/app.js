import React, {useState, useEffect} from "react";
import './app.css'
import MainHeader from "../../Components/mainHeader";

import axios from "axios"

function App() {

  const [posts, setPosts] = useState([])

  useEffect(() =>{
    axios.get("http://localhost:5000/produtos")
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
            {posts.map((post) =>{
                  return (
                    <div className="card">
                        <header>
                          <h2>{post.title}</h2>
                        <div className="post-photos">
                          <div className="main-photo">
                            <img src='https://iili.io/dUyCKns.webp' alt={post.title || 'Default Title'} />
                          </div>
                          <div className="other-photos">
                            {post.images.map((image, index) => (
                            <img key={index} src={image} alt={`${post.title} ${index}`}/>
                            ))}
                          </div>
                          
                        </div>
                          
                        </header>

                        <p>{post.description}</p>
                        <p>{post.price}</p>

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
