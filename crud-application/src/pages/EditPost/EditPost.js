import React, { useEffect } from 'react'
import Header from '../../components/Header'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'


const EditPost = () => {

  const { id } = useParams();

  let navigate = useNavigate();

  const addNewPost = data => axios.put(`http://localhost:8080/posts/edit/${id}`, data)
  .then(() => {
      console.log("ok")
      window.location = '/'
  })
  .catch((err) => {
      console.log(err)
  })


  useEffect(() => {
      axios.get(`http://localhost:8080/posts/${id}`)
      .then((response) => {
          reset(response.data)
      })
      
  }, [])

  const { register, handleSubmit, formState: { erros }, reset } = useForm({

  })

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
                <input type="text" name="title" {...register("title")} />
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

export default EditPost