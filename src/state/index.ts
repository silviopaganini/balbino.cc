import { createGlobalState } from 'react-hooks-global-state'
import { Page, Project } from 'types'

type InitialState = {
  ui: {
    showCircle: boolean
  }
  content: {
    projects: Project[]
    pages: Page[]
  }
}

const initialState: InitialState = {
  ui: {
    showCircle: true,
  },
  content: {
    projects: [],
    pages: [],
  },
}

export const { useGlobalState } = createGlobalState(initialState)
