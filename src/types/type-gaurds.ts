import { Role } from './UserInfo'

export type DecodedUser = {
  role: Role
  username: string
  name: string
}

export function isDecodedUser(obj: unknown): obj is DecodedUser {
  return (
    typeof obj === 'object' && obj !== null && 'role' in obj && 'username' in obj && 'name' in obj
  )
}
