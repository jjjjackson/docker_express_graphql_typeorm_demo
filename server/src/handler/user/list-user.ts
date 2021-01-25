import { getManager, Repository } from 'typeorm'

import { User } from 'src/entity/User'

export async function handler(): Promise<User[]> {
  const userRepository: Repository<User> = getManager().getRepository(User)

  const users = await userRepository.find()

  return users || []
}
