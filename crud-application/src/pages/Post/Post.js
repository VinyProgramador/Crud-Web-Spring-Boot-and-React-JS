import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import '../Post/Post.css'
import { useForm } from 'react-hook-form'

const Post = () => {
 
  const { register, handleSubmit, formState: { erros } } = useForm()
 
  const addNewPost = data => console.log(data);

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
                <p className="error-message"></p>
              </div>
              <div className="fields" >
                <label>Descrição</label>
                <input type="text" name="description" {...register("description")}/>
                <p className="error-message"></p>
              </div>
              <div className="fields" >
                <label>Conteúdo</label>
                <textarea type="text" name="content" {...register("content")}></textarea>
                <p className="error-message"></p>
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