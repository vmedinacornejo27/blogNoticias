import axios from 'axios'
export const START_GET_NOTICIAS = 'START_GET_NOTICIAS'
export const SUCCESS_GET_NOTICIAS = 'SUCCESS_GET_NOTICIAS'
export const ERROR_GET_NOTICIAS = 'ERROR_GET_NOTICIAS'
export const SET_MARKED_NOTICIAS = 'SET_MARKED_NOTICIAS'

export const fetchNoticias = () => dispatch => {
  dispatch({ type: START_GET_NOTICIAS })
  axios.get('http://localhost:3002/noticias/')
    .then(response => response.data)
    .then(
      data => dispatch({ type: SUCCESS_GET_NOTICIAS, noticias: data }),
      error => dispatch({ type: ERROR_GET_NOTICIAS, error: error.message || 'Unexpected Error!!!' })
    )
}

export const setNoticiasMarcadas = (id) => dispatch => {
  dispatch({ type: SET_MARKED_NOTICIAS, id })
}
