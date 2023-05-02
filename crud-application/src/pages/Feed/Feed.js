import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import HeaderMain from '../../components/HeaderMain'
import './Feed.css'
const Feed = () => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/posts')
      .then((response) => {
        console.log('ok');
        console.log(axios.get('http://localhost:8080/posts'))
        setPosts(response.data)
      }).catch((err) => {
        console.log(err);
      });
  }, [])

  function deletePost(id) {
    axios.delete(`http://localhost:8080/posts/${id}`)

    setPosts(posts.filter(post => post._id !== id))
  }

  return (
    <div>
      <HeaderMain />
      <main>
        <div className="cards">
          {posts.map((post, key) => {
            return (
              <div className="card" key={key}>
                <header>
                  <h2>{post.title}</h2>
                </header>
                <div className="line"></div>
                <p>{post.dateCreation}</p>
                <h3>{post.content}</h3>
                <div className="btns" >
                  <div className="btn-edit">
                    <Link to={{ pathname: `/edit/${post.id}` }} >
                      <button>Edit</button>
                    </Link>
                  </div>
                  <div className="btn-delete">
                    <button onClick={() => deletePost(post._id)}>delete</button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </main>
    </div>
  )
}

export default Feed