import { DateTime } from 'luxon'
import hash from '@adonisjs/core/services/hash'
import { compose } from '@adonisjs/core/helpers'
import { BaseModel, column } from '@adonisjs/lucid/orm'
import { withAuthFinder } from '@adonisjs/auth/mixins/lucid'

const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
  uids: ['email'],
  passwordColumnName: 'password',
})

export default class User extends compose(BaseModel, AuthFinder) {
  @column({ isPrimary: true })
  declare id: number

  @column({ serializeAs: 'hospital_id' })
  declare hospitalId: number | null

  @column({ serializeAs: 'first_name' })
  declare firstName: string

  @column({ serializeAs: 'last_name' })
  declare lastName: string

  @column()
  declare email: string

  @column()
  declare phone: string | null

  @column({ serializeAs: null })
  declare password: string

  @column()
  declare role: 'patient' | 'doctor' | 'admin'

  @column({ serializeAs: 'profile_data' })
  declare profileData: any

  @column({ serializeAs: 'is_active' })
  declare isActive: boolean

  @column.dateTime({ serializeAs: 'email_verified_at' })
  declare emailVerifiedAt: DateTime | null

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
