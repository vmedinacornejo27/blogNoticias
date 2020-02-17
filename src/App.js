import React from 'react'
import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import ListOfNews from './components/ListOfNews'
import { Router } from '@reach/router'
import DetailNew from './components/DetailNew'
import ListOfNewsSave from './components/ListOfNewsSave'
import { NotAuthenticatedUser } from './components/NotAuthenticatedUser'

const KeylistadoUsuarioSesion = 'listadoUsuarioSesion'
let listadousers = []
listadousers =
  JSON.parse(window.localStorage.getItem(KeylistadoUsuarioSesion)) || []

const UserLogged = ({ children }) => {
  let valorAutenticado = false

  if (listadousers.length === 0) {
    valorAutenticado = false
  }

  if (
    listadousers.filter(us => us.user === 'vmedina' && us.password === '123')
      .length > 0
  ) {
    valorAutenticado = true
  } else {
    valorAutenticado = false
  }
  return children({
    isAuth: valorAutenticado
  })
}

export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Logo />
      <Router>
        <ListOfNews path='/' />
        <DetailNew path='/detail/:detailId' />
      </Router>

      <UserLogged>
        {({ isAuth }) =>
          isAuth ? (
            <Router>
              <ListOfNewsSave path='/detailViewSave' />
            </Router>
          ) : (
            <Router>
              <NotAuthenticatedUser path='/detailViewSave' />
            </Router>
          )}
      </UserLogged>
    </div>
  )
}
