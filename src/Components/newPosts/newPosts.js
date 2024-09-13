import React, {useState, useEffect} from "react";
import "./newPosts.css"
import axios from "axios"

function NewPosts() {

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
    return(
        <div className="newpost-main">
            <h1 className="newpost-h1">Novidades</h1>
            <div className="line"/>
            <div className="cards">
                    {posts.map((post) =>{
                        return (
                            <div className="card">
                                
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
                                <h2>{post.title}</h2>
                                
                                <p className="post-price">R$ {post.price.toFixed(2)}</p>

                                <div className="btns">
                                <button className="post-btn">Ver Mais</button>
                                <button className="post-btn">Carrinho</button>
                                </div>
                            </div>
                        )
                    })}
                    
        </div>
        </div>
        
    );
}

export default NewPosts;