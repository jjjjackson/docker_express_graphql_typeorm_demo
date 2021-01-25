// import { getManager, Repository } from 'typeorm'
import { User } from 'src/entity/User'

// type UserCreate = {
//   email: string
//   password: string
// }

export default {
  Query: {
    // users: () => ['hello'],
    // user: (_: string) => 'HelloWord',
    // user: async (_: any, params: { id: string }) => {
    //   const userRepository: Repository<User> = getManager().getRepository(User)

    //   const user = await userRepository.findOne(params.id)
    //   console.log('user', user)
    //   return user
    // },
    users: async (_: any) => {
      return await User.find()
    },
  },
  // Mutation: {
  // createUser: async (_: any, args: UserCreate) => {
  //   console.log('args', args)
  //   const user = User.create({
  //     email: args.email,
  //     password: args.password,
  //     profileID: profile.id,
  //   })
  //   await user.save()
  //   return { ...user }
  // },
  // },
}

// const helloMessage: String = 'World!'

// export default {
//   Query: {
//     hello: () => helloMessage,
//   },
//   Mutation: {
//     hello: (_: any, helloData: any) => {
//       const helloMessage = helloData.message
//       return helloMessage
//     },
//   },
// }
