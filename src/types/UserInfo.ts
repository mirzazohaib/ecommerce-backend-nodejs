export type UserInfo = {
  token: string
  name: string
  username: string
  role: Role
}

export enum Role {
  ADMIN = 'ADMIN',
  USER = 'USER',
}
