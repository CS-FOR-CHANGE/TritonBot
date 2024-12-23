import { Client, GatewayIntentBits } from "discord.js"
import { config } from "dotenv"
import type { Command } from "./commands/command"
import { VerifyCommand } from "./commands/verification"
import { AboutCommand } from "./commands/about"
import onInteraction from "./events/on_interaction"
import onReady from "./events/on_ready"

config()
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
    ]
})
const token = process.env.token

export const commandsList: Command[] = [VerifyCommand, AboutCommand]

onReady(client)
onInteraction(client)

client.login(token)
