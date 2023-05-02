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
        setPosts(response.data)
      }).catch((err) => {
        console.log(err);
      });
  }, [])

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
                    <Link to={'/edit'} >
                      <button>Edit</button>
                    </Link>
                  </div>
                  <div className="btn-delete">
                    <button>delete</button>
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