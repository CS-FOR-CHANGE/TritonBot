import type { Client } from "discord.js"
import { commandsList } from "../bot"
import { exit } from "node:process"

export default (client: Client): void => {
    client.once("ready", async () => {
        if (!client.user || !client.application) {
            console.log("An error occured when initializing the bot")
            exit(0)
        }
        await client.application.commands.set(commandsList)
        console.log(`Bot logged in as ${client.user.tag}`)
    })
}