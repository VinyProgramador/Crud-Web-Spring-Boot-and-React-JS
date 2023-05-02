import React from 'react'
import Header from '../../components/Header'
import '../Post/Post.css'
import { useForm } from 'react-hook-form'
import axios from 'axios'

const Post = () => {
 
  const { register, handleSubmit, formState: { erros } } = useForm({
      
  })
 
  const addNewPost = data => axios.post("http://localhost:8080/posts", data)
  .then(() => {
    console.log("new post successfully added");
    alert("new post successfully added");
    window.location = '/';
  }).catch((err) => {
    console.log(err);
  });
  return (
    <div>
      <Header />
      <main>
        <div className="card-post" >
          <h1>Criar postagem</h1>
          <div className="line-post" ></div>
          <div className="card-body-post" >
            <form onSubmit={handleSubmit(addNewPost)}>
              <div className="fields" >
                <label>Título</label>
                <input type="text" name="title" {...register("title")}/>
              </div>
              <div className="fields" >
                <label>Conteúdo</label>
                <textarea type="text" name="content" {...register("content")}></textarea>
              </div>
              <div className="btn-post" >
                <button type="submit">Enviar</button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Post