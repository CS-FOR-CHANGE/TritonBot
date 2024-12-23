import type { Insertable, Selectable, Updateable } from "kysely"

export interface Database {
    users: UserTable,
    guilds: GuildTable
}

export interface UserTable {
    discord_id: number,
    emails: string[]
}

export type User = Selectable<UserTable>
export type NewUser = Insertable<UserTable>
export type UserUpdate = Updateable<UserTable>

export interface GuildTable {
    guild_id: number,
    allowed_domains: string[]
}

export type Guild = Selectable<GuildTable>
export type NewGuild = Insertable<GuildTable>
export type GuildUpdate = Updateable<GuildTable>

