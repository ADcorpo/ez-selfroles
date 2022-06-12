import {
  addRole,
  Bot,
  Emoji,
  Member,
  User,
} from "https://deno.land/x/discordeno@13.0.0-rc45/mod.ts";

// Settings should be handled separately
const selfRoleMessageID = 971678606977822740n;
const emojiToRoleMap = new Map<string, bigint>([
  ["⛏️", 949448307577610290n], // pick - @Dwarves
  ["🧊", 971677168352509973n], // ice cube - @Minecrafters
  ["☣️", 966748809768108102n], // biohazard - @GTF-Hoes
  ["🚓", 975700097985839174n], // policecar - @GTA Squad
  ["🏴‍☠️", 971676432793210880n], // pirate_flag - @Pirates
  ["😱", 981976694845997076n], // scream - @Dead by Daylight
]);

export function reactionAddHandler(bot: Bot, payload: {
  userId: bigint;
  channelId: bigint;
  messageId: bigint;
  guildId?: bigint;
  member?: Member;
  user?: User;
  emoji: Emoji;
}) {
  if (payload.messageId === selfRoleMessageID) {
    console.log("Received a reaction on selfrole message !");
    if (emojiToRoleMap.has(payload.emoji.name!)) {
      const role = emojiToRoleMap.get(payload.emoji.name!);

      if (payload.member!.roles.includes(role!)) {
        console.log("User has role !");
      } else {
        console.log("User does not have role !");

        addRole(
          bot,
          payload.guildId!,
          payload.member!.id,
          role!,
          "Boat Dog!",
        ).then(
          (x) => console.log(x),
        );
      }
    }
  }
}
