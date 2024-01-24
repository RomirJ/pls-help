import { AuthorizationManager, AuthorizationRole } from '@/domain/authorization'
import { Notification } from '@/domain/notification'
import { ReactNode, createContext, useContext, useState } from 'react'

export type CoreStoreContext = {
  roles: AuthorizationRole[]
  setRoles: (roles: AuthorizationRole[]) => void

  notifications: Notification[]
  setNotifications: (notifications: Notification[]) => void

  isAdmin: boolean
}

const StoreContext = createContext<CoreStoreContext>(undefined)

export const useCoreStore = (): CoreStoreContext => {
  return useContext(StoreContext)
}

type Props = {
  children: ReactNode
}

export const CoreStoreProvider: React.FC<Props> = ({ children }) => {
  const [roles, setRoles] = useState<AuthorizationRole[]>([])
  const [notifications, setNotifications] = useState<Notification[]>([])

  const isAdmin = roles.some(role => AuthorizationManager.isAdmin(role))

  return (
    <StoreContext.Provider
      value={{ roles, setRoles, notifications, setNotifications, isAdmin }}
    >
      {children}
    </StoreContext.Provider>
  )
}
