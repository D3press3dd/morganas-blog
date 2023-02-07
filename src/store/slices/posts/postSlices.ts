import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import none from '../../../assets/none.jpg'

export interface PostState {
  id: number
  title: string
  text: string
  created: string
  updated: string
  image: string
}

const initialPost: PostState = {
  id: 12038012938,
  title: 'Este es un título de 10 palabras',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel justo vel massa luctus tempor. Integer auctor, sem a aliquet aliquam, velit velit commodo velit, a facilisis nulla dui id dui. Sed accumsan, ex non congue tincidunt, dolor augue faucibus nisl, in viverra lectus elit id nisi. Nullam non neque eros. Integer facilisis varius libero, a tempor nisl euismod eget. Nam in massa vel nisi congue commodo at vitae justo. Proin vestibulum lacus a dui commodo, eget euismod ligula scelerisque. Sed venenatis, purus vel mollis malesuada, magna elit auctor eros, vel tempor purus lectus at eratLorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel justo vel massa luctus tempor. Integer auctor, sem a aliquet aliquam, velit velit commodo velit, a facilisis nulla dui id dui. Sed accumsan, ex non congue tincidunt, dolor augue faucibus nisl, in viverra lectus elit id nisi. Nullam non neque eros. Integer facilisis varius libero, a tempor nisl euismod eget. Nam in massa vel nisi congue commodo at vitae justo. Proin vestibulum lacus a dui commodo, eget euismod ligula scelerisque. Sed venenatis, purus vel mollis malesuada, magna elit auctor eros, vel tempor purus lectus at eratLorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel justo vel massa luctus tempor. Integer auctor, sem a aliquet aliquam, velit velit commodo velit, a facilisis nulla dui id dui. Sed accumsan, ex non congue tincidunt, dolor augue faucibus nisl, in viverra lectus elit id nisi. Nullam non neque eros. Integer facilisis varius libero, a tempor nisl euismod eget. Nam in massa vel nisi congue commodo at vitae justo. Proin vestibulum lacus a dui commodo, eget euismod ligula scelerisque. Sed venenatis, purus vel mollis malesuada, magna elit auctor eros, vel tempor purus lectus at erataa.',
  created: 'Enero 12, 2023',
  image: none,
  updated: 'not yet'
}

const initialState = [initialPost]

export const postSlices = createSlice({
  name: 'post',
  initialState,
  reducers: {
    prueba: (state) => {
      state.push(initialPost)
    }
  }
})

export const { prueba } = postSlices.actions
