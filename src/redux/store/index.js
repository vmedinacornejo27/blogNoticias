import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { START_GET_NOTICIAS, SUCCESS_GET_NOTICIAS, ERROR_GET_NOTICIAS, SET_MARKED_NOTICIAS } from '../actions/noticias'
const KeylistadoVerMasTarde = 'listadoVerMasTarde'
let listadoverNoticias = []
listadoverNoticias = JSON.parse(window.localStorage.getItem(KeylistadoVerMasTarde)) || []

const dataInitial = {
  noticias: [],
  loading: false,
  error: ''
}

const reducer = (state = dataInitial, action) => {
  switch (action.type) {
    case START_GET_NOTICIAS: {
      return {
        ...state
      }
    }
    case SUCCESS_GET_NOTICIAS: {
      const fueSeleccionado = listadoverNoticias.reduce((map, { id, fueMarcado }) => {
        const seleccione = map.get(id) || []
        seleccione.push(fueMarcado)
        return map.set(id, seleccione)
      }, new Map())

      const evaluar = (valueId) => {
        const valor = (fueSeleccionado.get(valueId) || []).join()
        if (valor === 'true') {
          return true
        } else {
          return false
        }
      }

      const dataNoti = action.noticias.map(({ id, imagenURL, titulo, contenido, fecha, comentarios }) => ({
        id,
        imagenURL,
        titulo,
        contenido,
        fecha,
        comentarios,
        fueMarcado: (evaluar(id))
      }))
      return {
        ...state,
        noticias: dataNoti
      }
    }
    case ERROR_GET_NOTICIAS: {
      return {
        ...state,
        loading: false,
        error: action.error
      }
    }
    case SET_MARKED_NOTICIAS: {
      const nuevonoticias = [...state.noticias]
      const selectedNoti = nuevonoticias.find(noticia => noticia.id === action.id)
      if (selectedNoti) {
        selectedNoti.fueMarcado = true
      } else {
        selectedNoti.fueMarcado = false
      }
      if (listadoverNoticias.filter(notic => notic.id === action.id).length === 0) {
        listadoverNoticias.push(selectedNoti)
      }
      window.localStorage.setItem(KeylistadoVerMasTarde, JSON.stringify(listadoverNoticias))
      return {
        ...state,
        noticias: nuevonoticias
      }
    }
    default: {
      return state
    }
  }
}

export default createStore(reducer, applyMiddleware(thunk))
