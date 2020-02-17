import React, { useState } from 'react'
import { Form, Input, Button, ContainerListSave, Title } from './styles'

const KeylistadoUsuarioSesion = 'listadoUsuarioSesion'
let listadouser = []
listadouser =
  JSON.parse(window.localStorage.getItem(KeylistadoUsuarioSesion)) || []

const useInputValue = initialValue => {
  const [value, setValue] = useState(initialValue)
  const onChange = e => setValue(e.target.value)
  return { value, onChange }
}

export const NotAuthenticatedUser = () => {
  const user = useInputValue('')
  const password = useInputValue('')
  let validateSubmit = false
  const UsuarioRegistrado = { user: '', password: '', autenticado: false }

  const setLocalStorageSesion = valuesUser => {
    try {
      if (valuesUser.user === 'vmedina' && valuesUser.password === '123') {
        valuesUser.autenticado = true
      } else {
        valuesUser.autenticado = false
      }
      valuesUser.user = user.value
      valuesUser.password = password.value
      if (user.value === 'vmedina' && password.value === '123') {
        valuesUser.autenticado = true
        validateSubmit = true
        listadouser.push(valuesUser)
        window.localStorage.setItem(
          KeylistadoUsuarioSesion,
          JSON.stringify(listadouser)
        )
      } else {
        valuesUser.autenticado = false
        validateSubmit = false
        valuesUser = []
      }
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div>
      <ContainerListSave>
        <Title> Iniciar sesión </Title>
        <Form onSubmit={validateSubmit}>
          <Input
            type='text'
            placeholder='Usuario'
            value={user.value}
            onChange={user.onChange}
          />
          <Input
            placeholder='Password'
            type='password'
            value={password.value}
            onChange={password.onChange}
          />
          <Button
            type='submit'
            onClick={() => setLocalStorageSesion(UsuarioRegistrado)}
          >
            Iniciar Sesión
          </Button>
        </Form>
      </ContainerListSave>
    </div>
  )
}
