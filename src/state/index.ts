import { createGlobalState } from 'react-hooks-global-state'

const initialState = {
    ui: {
        showCircle: true,
    },
}

export const { useGlobalState } = createGlobalState(initialState)
