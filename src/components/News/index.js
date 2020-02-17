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
import { useLocalStorageMarked } from '../../hooks/useLocalStorageMarked'

const KeylistadoVerMasTarde = 'listadoVerMasTarde'
let listadover = []
listadover =
  JSON.parse(window.localStorage.getItem(KeylistadoVerMasTarde)) || []

export const News = ({
  id,
  imagenURL,
  fecha,
  comentarios,
  titulo,
  contenido
}) => {
  const noticia = { id, imagenURL, titulo, contenido }
  const key = `like-${id}`
  const [marked, setMarked] = useLocalStorageMarked(key, false)

  const setLocalStorage = valueId => {
    try {
      if (listadover.filter(notic => notic.id === valueId.id).length === 0) {
        valueId.fueguardado = !valueId.fueguardado
        listadover.push(valueId)
      }
      window.localStorage.setItem(
        KeylistadoVerMasTarde,
        JSON.stringify(listadover)
      )
      setMarked(!marked)
    } catch (e) {
      console.error(e)
    }
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

        <ButtonRight col={marked} onClick={() => setLocalStorage(noticia)}>
          {' '}
          VER MÁS TARDE
        </ButtonRight>
      </DivButtonBottom>
    </Article>
  )
}
