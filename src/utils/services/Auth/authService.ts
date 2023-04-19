import client from '@/src/utils/db/client'
import { ILogin, IUserRegistration } from '@/src/types/UserTypes'
import bcrypt from 'bcrypt'

 const authService = {

  async login (credentials:  ILogin) {
    const {username, password} = credentials
    try {
      
        const user  = await client.user.findUnique({
          where: {
            email: username,
          },
        })

        if (!user) {
          throw new Error('User not found')
        }

        const valid = await bcrypt.compare(password, user.password)
        console.log(valid)
        if (!valid) {
          throw new Error('Invalid username or password')
        }

        return user || null
      
    } catch(error) {
        console.log(error)
    }
  },
  async register (user:  IUserRegistration)  { 
    try {
      const encryptedPassword = await bcrypt.hash(user.password, 10)
      const newUser = await client.user.create({
        data :{
          name: user.name,
          email: user.email,
          password: encryptedPassword,
      }})

      if(!newUser) {
        throw new Error('User already exists')
      }

      return newUser
    }catch(error) {
      console.log(error)
    }
  }
 }

export default authService