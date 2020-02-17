import React from 'react'
import './styles.css'
import { Link } from '@reach/router'

export const NewsSave = ({
  id,
  imagenURL,
  titulo,
  contenido,
  deleteN
}) => {
  return (
    <article className='ArticleSave'>
      <Link className='Linked' to={`/detail/${id}`}>
        <div className='DivContainerSave'>
          <img className='ImgSave' src={imagenURL} alt='nt' />
          <div className='DivMiddleSave'>
            <h2 className='TituloSave'> {titulo} </h2>
            <p className='DetalleSave'> {contenido} </p>
          </div>
        </div>
      </Link>
      <div className='DivButtonBottomSave'>
        <button className='ButtonDelete' onClick={() => deleteN(id)}>
          {' '}
          Eliminar
        </button>
      </div>
    </article>
  )
}
