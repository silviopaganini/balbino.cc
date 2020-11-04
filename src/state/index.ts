import { createGlobalState } from 'react-hooks-global-state'
import { Page, Project } from 'types'

type InitialState = {
  content: {
    projects: Project[]
    pages: Page[]
  }
  about: boolean
}

const initialState: InitialState = {
  content: {
    projects: [],
    pages: [],
  },
  about: false,
}

export const { useGlobalState } = createGlobalState(initialState)
