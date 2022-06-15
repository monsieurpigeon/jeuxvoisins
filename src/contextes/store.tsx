import { createContext, useContext, useState } from 'react'

export interface Store {
  username: string | undefined
}

const StoreContext = createContext(undefined as any)

export const StoreProvider = ({ children }: any) => {
  const [store, setStore] = useState<Store>()

  return (
    <StoreContext.Provider value={{ store, setStore }}>
      {children}
    </StoreContext.Provider>
  )
}

export function useStore() {
  return useContext(StoreContext)
}
