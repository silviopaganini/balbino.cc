import { createGlobalState } from 'react-hooks-global-state'
import { Project } from 'types'

type InitialState = {
  ui: {
    showCircle: boolean
  }
  projects: Project[]
  activeProject: Project | null
}

const initialState: InitialState = {
  ui: {
    showCircle: true,
  },
  projects: [],
  activeProject: null,
}

export const { useGlobalState } = createGlobalState(initialState)
