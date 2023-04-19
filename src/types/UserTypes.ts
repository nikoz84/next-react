interface IUser {
    email: string
    password?: string
    id: string
    name: string
    createdAt: string
}

interface ILogin {
    username: string
    password: string
}

interface IUserRegistration {
    email: string
    password: string
    passwordConfirmed: boolean
    name: string
}

export type { IUser, ILogin, IUserRegistration }
