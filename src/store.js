import { createStore } from 'redux'
const KeylistadoVerMasTarde = 'listadoVerMasTarde'
let listadoverNoticias = []
listadoverNoticias = JSON.parse(window.localStorage.getItem(KeylistadoVerMasTarde)) || []

const dataInitial = {
  noticias: []
}

const reducer = (state = dataInitial, action) => {
  if (action.type === 'LOAD_DATA') {
    // leer localstorage
    // compara la data del localstorage con la data del servidor
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

    const data = action.noticias.map(({ id, imagenURL, titulo, contenido, fecha, comentarios }) => ({
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
      noticias: data
    }
  } else if (action.type === 'SET_NOTICIA_AS_MARKED') {
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
    // guardar en localstorage

    return {
      ...state,
      noticias: nuevonoticias
    }
  }

  return state
}

export default createStore(reducer)
