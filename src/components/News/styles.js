import styled, { css } from 'styled-components'
import { Link as LinkRouter } from '@reach/router'
import { fadeIn } from '../../styles/animation'

export const Link = styled(LinkRouter)`
  text-decoration: none;
  color: black;
`

export const Article = styled.article`
  flex-shrink: 0;
  margin: 10px;
  max-width: fit-content;
`

export const ImgWrapper = styled.div`
  border-radius: 5px;
`

export const Img = styled.img`
  ${fadeIn()}
  height: 100%;
  width: 100%;
  object-fit: cover;
`

export const DivButtonBottom = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1px 1px;
  margin: 1px 1px 1px 1px;
`

export const DivButtonTop = styled.div`
  display: flex;
  padding: 1px 1px;
  margin: 1px 1px 1px 1px;
`

export const DivButtonMiddle = styled.div`
  display: -webkit-box;
  max-width: 100%;
  width: 500px;
  height: 200px;
  margin: 0 auto;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const ButtonLifestyle = styled.button`
  padding: 0.5rem 0;
  margin: 0.5rem 20px 1rem 0px;
  width: 11rem;
  background: #f32617;
  color: white;
  border: 1px solid #f32617;
  font-size: 17px;
`
export const Titulo = styled.h2`
  ${fadeIn()}
  font-size: 20px;
  margin-top: 0;
  margin-bottom: 10px;
  height: 27%;
`

export const Detalle = styled.p`
  ${fadeIn()}
  font-size: 15px;
  margin-top: 10px;
  margin-bottom: 10px;
`

export const ButtonLeft = styled.button`
  cursor: pointer;
  border-radius: 1px;
  padding: 0.5rem 0;
  margin: 10px 0px 10px 0px;
  width: 11rem;
  background: transparent;
  color: black;
  border: 1px solid black;
`

export const ButtonRight = styled.button`
  cursor: pointer;
  border-radius: 1px;
  padding: 0.5rem 0;
  margin: 10px 0px 10px 0px;
  width: 11rem;
  background: black;
  color: white;
  border: 1px solid gray;
  ${props =>
    props.col === true &&
    css`
       {
        background: rgb(171, 128, 9);
      }
    `}
`

export const TextoEtiqueta = styled.p`
  margin-left: 10px;
  margin-right: 10px;
  font-size: 17px;
`
