import React from 'react'
import {
  Article,
  Link,
  ImgWrapper,
  Img,
  DivButtonBottom,
  DivButtonTop,
  DivButtonMiddle,
  ButtonLifestyle,
  Titulo,
  Detalle,
  ButtonLeft,
  ButtonRight,
  TextoEtiqueta
} from './styles'
import { MdDateRange, MdCloudQueue } from 'react-icons/md'

export const News = ({
  id,
  imagenURL,
  fecha,
  comentarios,
  titulo,
  contenido,
  fueMarcado,
  setAsMarked
}) => {
  const noticia = { id, imagenURL, titulo, contenido, fueMarcado }

  const setLocalStorage = (valueId) => {
    setAsMarked(valueId)
  }

  const fechaObj = new Date(fecha)
  const fechaFormat = fechaObj.toLocaleDateString('es', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })

  return (
    <Article>
      <ImgWrapper>
        <Link to={`/detail/${id}`}>
          <Img src={imagenURL} alt='nt' />
        </Link>
      </ImgWrapper>
      <DivButtonTop>
        <ButtonLifestyle> LIFESTYLE </ButtonLifestyle>
        <MdDateRange size='30px' />{' '}
        <TextoEtiqueta> {fechaFormat} </TextoEtiqueta>
        <MdCloudQueue size='30px' />{' '}
        <TextoEtiqueta> ({comentarios}) </TextoEtiqueta>
      </DivButtonTop>
      <DivButtonMiddle>
        <Link to={`/detail/${id}`}>
          <Titulo> {titulo} </Titulo>
        </Link>
        <Detalle> {contenido} </Detalle>
      </DivButtonMiddle>
      <DivButtonBottom>
        <ButtonLeft> LEER MÁS</ButtonLeft>
        <ButtonRight col={fueMarcado} onClick={() => setLocalStorage(noticia.id)}>
          {' '}
          VER MÁS TARDE
        </ButtonRight>
      </DivButtonBottom>
    </Article>
  )
}
