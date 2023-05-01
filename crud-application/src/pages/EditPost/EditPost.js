import React from 'react'
import Header from '../../components/Header'

const EditPost = () => {
  return (
    <div>
      <Header />
      <main>
        <div className="card-post" >
          <h1>Criar postagem</h1>
          <div className="line-post" ></div>
          <div className="card-body-post" >
            <form>
              <div className="fields" >
                <label>Título</label>
                <input type="text" name="title" />
                <p className="error-message"></p>
              </div>
              <div className="fields" >
                <label>Descrição</label>
                <input type="text" name="description" />
                <p className="error-message"></p>
              </div>
              <div className="fields" >
                <label>Conteúdo</label>
                <textarea type="text" name="content" ></textarea>
                <p className="error-message"></p>
              </div>
              <div className="btn-post" >
                <button type="submit" >Enviar</button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}

export default EditPost