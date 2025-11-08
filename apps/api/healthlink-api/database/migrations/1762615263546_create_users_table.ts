// database/migrations/XXXXXX_create_users_table.ts
import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table
        .integer('hospital_id')
        .unsigned()
        .references('id')
        .inTable('hospitals')
        .onDelete('CASCADE')
        .nullable()
      table.string('first_name').notNullable()
      table.string('last_name').notNullable()
      table.string('email').unique().notNullable()
      table.string('phone').nullable()
      table.string('password').notNullable()
      table.enum('role', ['patient', 'doctor', 'admin']).notNullable()
      table.json('profile_data').nullable()
      table.boolean('is_active').defaultTo(true)
      table.timestamp('email_verified_at').nullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
