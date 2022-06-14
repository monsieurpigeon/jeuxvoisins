import { makeVar } from '@apollo/client'
// shape of your local state
export interface SelectedState {
  username: string | undefined
}
const initialState = {
  username: undefined,
}
export const selectedState = makeVar<SelectedState>(initialState)
