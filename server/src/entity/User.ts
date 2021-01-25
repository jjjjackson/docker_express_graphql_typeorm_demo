import { Entity, PrimaryGeneratedColumn, BaseEntity } from 'typeorm'

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  // @Column({ type: 'varchar', length: '100', unique: true })
  // email: string

  // @Column({ type: 'varchar', length: '100' })
  // password: string

  // public static mk({
  //   email,
  //   password,
  // }: Pick<User, 'email' | 'password'>): User {
  //   const user = new User()
  //   user.email = email
  //   user.password = password
  //   return user
  // }
}
