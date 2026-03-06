export const command = "menu"

export async function run(sock,msg){

const menu = `
🤖 MENU BOT

!ping
!menu
`

await sock.sendMessage(msg.key.remoteJid,{
text: menu
})

}