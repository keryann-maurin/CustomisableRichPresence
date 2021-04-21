var rpc = require("discord-rpc")
rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,

activity : {
// 2nd Line of RichPresence. (2 digit min.)
details : "2nd Line",
// 3rd line of RichPresence. (2 digit min)
state : "3rd Line",

assets : {
// Bigger Image with not clicable text (only lowercase)
large_image : "name of the larger image in your app assets",
large_text : "Text you want to show on hover",
// Smaller image with not clicable text (only lowercase)
small_image : "name of",
small_text : "Petite"

// RP Button : Max. 2 - Min. 0
// (You can't clic on your own button, Discord Rules...)
},
buttons : [
// Button n'1 | (Add // before to deactivate : "// {label : [...]" )
{label : "text on button 1" , url : "yoururl"},
// Button n'2 | (Add // before to deactivate : "// {label : [...]" )
{label : "text on button 2", url : "yoururl"}
]
}
})
})

// ClientID avaiable on : https://discord.com/developers/applications/ (Applications ID)
// Your App name would be shown on Rich Presence First Line (Bold)
client.login({ clientId : "Paste here" }).catch(console.error);