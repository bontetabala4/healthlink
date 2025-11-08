import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Hospital extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare code: string

  @column()
  declare address: string

  @column()
  declare city: string

  @column()
  declare country: string

  @column()
  declare phone: string | null

  @column()
  declare email: string | null

  @column({ serializeAs: 'logo_url' })
  declare logoUrl: string | null

  @column()
  declare latitude: number | null

  @column()
  declare longitude: number | null

  @column({ serializeAs: 'is_active' })
  declare isActive: boolean

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
