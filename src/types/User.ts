export type User = {
  id?: string
  name: string
  username: string
  role: Role
}

export enum Role {
  ADMIN = 'ADMIN',
  USER = 'USER'
}
