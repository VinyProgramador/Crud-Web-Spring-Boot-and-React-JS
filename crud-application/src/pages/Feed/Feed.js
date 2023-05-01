import React from 'react'
import { Link } from 'react-router-dom'
import HeaderMain from '../../components/HeaderMain'
import './Feed.css'
const Feed = () => {
  return (
    <div>
      <HeaderMain />
      <main>
        <div className="cards">
          <div className="card">
            <header>
              <h2></h2>
              
            </header>
            <div className="line"></div>
            <p></p>
            <div className="btns" >
              <div className="btn-edit">
                <Link to={''} >
                  <button>Edit</button>
                </Link>
              </div>
              <div className="btn-delete">
                <button>delete</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Feed