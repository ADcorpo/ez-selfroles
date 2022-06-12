import {
  createBot,
  Intents,
  startBot,
} from "https://deno.land/x/discordeno@13.0.0-rc45/mod.ts";

import { reactionAddHandler } from "./handlers/reactionAddHandler.ts";

const baseBot = createBot({
  token: Deno.env.get("DISCORD_TOKEN")!,
  intents: Intents.GuildMessages | Intents.GuildMessageReactions |
    Intents.MessageContent | Intents.GuildMembers,
  botId: BigInt(Deno.env.get("BOT_ID")!),
  events: {
    ready() {
      console.log("gateway conection established");
    },

    reactionAdd(bot, payload) {
      reactionAddHandler(bot, payload);
    },
  },
});

await startBot(baseBot);
