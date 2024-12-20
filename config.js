const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT ||10 
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_16_47_12_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDMzLFxuICAgICAgICA2NixcbiAgICAgICAgMTUxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDgwLFxuICAgICAgICA5OCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNSxcbiAgICAgICAgNzMsXG4gICAgICAgIDk3LFxuICAgICAgICA0NSxcbiAgICAgICAgMTI3LFxuICAgICAgICA4OCxcbiAgICAgICAgNTMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTg5LFxuICAgICAgICAzOSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNDksXG4gICAgICAgIDk2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTI2LFxuICAgICAgICA0NixcbiAgICAgICAgMjEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTcsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTgyLFxuICAgICAgICA1MSxcbiAgICAgICAgODYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNTMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTM4LFxuICAgICAgICA5NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgODksXG4gICAgICAgIDQ0LFxuICAgICAgICAzMSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNixcbiAgICAgICAgMjMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDczLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNzcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjUsXG4gICAgICAgIDg5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIyNixcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDI1MixcbiAgICAgICAgNyxcbiAgICAgICAgMjU1LFxuICAgICAgICAzNixcbiAgICAgICAgMjAwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTA2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMzEsXG4gICAgICAgIDE3LFxuICAgICAgICAxODQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTYxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDcyLFxuICAgICAgICA2OSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxODQsXG4gICAgICAgIDM1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMyxcbiAgICAgICAgNixcbiAgICAgICAgMjQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTg3LFxuICAgICAgICAyMixcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMixcbiAgICAgICAgMTkzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTA0LFxuICAgICAgICAwLFxuICAgICAgICA1OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA2OSxcbiAgICAgICAgMjE3LFxuICAgICAgICA3MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDYyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTE3LFxuICAgICAgICAzMyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEwNixcbiAgICAgICAgNjIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTA1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDg3LFxuICAgICAgICA3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDk2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDgyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDYxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDk4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDcwLFxuICAgICAgICA4NSxcbiAgICAgICAgMTc3LFxuICAgICAgICA3MixcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU3LFxuICAgICAgICA0MSxcbiAgICAgICAgNDksXG4gICAgICAgIDExLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTI3LFxuICAgICAgICAzNixcbiAgICAgICAgMTczLFxuICAgICAgICAyNyxcbiAgICAgICAgNTksXG4gICAgICAgIDEyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDY3LFxuICAgICAgICAxMjksXG4gICAgICAgIDM5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNzEsXG4gICAgICAgIDI4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDY1LFxuICAgICAgICA5OCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMjksXG4gICAgICAgIDY1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDExMSxcbiAgICAgICAgNjQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTQ5LFxuICAgICAgICA2MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDgxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExNSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxOTksXG4gICAgICAgIDUyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDEwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTMyLFxuICAgICAgICA3NCxcbiAgICAgICAgMTU2LFxuICAgICAgICAzNyxcbiAgICAgICAgMTE2LFxuICAgICAgICA1MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDU1LFxuICAgICAgICAxODYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTYwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDI0MixcbiAgICAgICAgNjQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTMxLFxuICAgICAgICA3MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDk2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE2NixcbiAgICAgICAgNzcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjEwLFxuICAgICAgICAzOSxcbiAgICAgICAgNzQsXG4gICAgICAgIDY1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTgsXG4gICAgICAgIDI3LFxuICAgICAgICAzNCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA1NyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMDksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMCxcbiAgICAgICAgOTQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTM4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNDMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiNjNuWUNjTTBHRUFPaThPNGVEVUJaS2J6L2VKL1krL1I1K0JpNUJ1VGJCUT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MDI1OTAyNzAwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJBQUVFQTNBQjA2NkZENUE4QjFFQTk4RjBCNkNCMzMzMVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzQ2MjY4MjNcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiaUY3SkRkMWhRUFc2aUcxRGd5ZFN5QVwiLFxuICBcInBob25lSWRcIjogXCJmZjdmZDM5Ny0xZTczLTRkMTktYjc1Ny1mOTIyZDg5ZjNiYzdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTI1LFxuICAgICAgNTAsXG4gICAgICAzMSxcbiAgICAgIDEzOSxcbiAgICAgIDQxLFxuICAgICAgMzEsXG4gICAgICAxMTcsXG4gICAgICAyMjEsXG4gICAgICA3NyxcbiAgICAgIDE3MSxcbiAgICAgIDc2LFxuICAgICAgMTUwLFxuICAgICAgMTMyLFxuICAgICAgMjI2LFxuICAgICAgOTMsXG4gICAgICA2OSxcbiAgICAgIDgzLFxuICAgICAgMTkzLFxuICAgICAgMjM2LFxuICAgICAgMTQwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxMCxcbiAgICAgIDE4MCxcbiAgICAgIDU3LFxuICAgICAgMTQ0LFxuICAgICAgNDAsXG4gICAgICAzLFxuICAgICAgMTU2LFxuICAgICAgMTIxLFxuICAgICAgMTg1LFxuICAgICAgNjksXG4gICAgICAxNCxcbiAgICAgIDI0MCxcbiAgICAgIDM2LFxuICAgICAgNTksXG4gICAgICAxMzEsXG4gICAgICAxMTUsXG4gICAgICAyMTUsXG4gICAgICAxMDUsXG4gICAgICAxMzksXG4gICAgICAxNjZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiU0Q5TFdDWTRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwMjU5MDI3MDA6MjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE2NTM4Njc0MTg4MzA5NjoyOEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPaWY4OGdERVAyYmtic0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIld1Ky9jTlJOWmRYbGphQnV2NG9ucUJvaVlXQnhNYmFkZHJQblJsZVhueDQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiaDgxNlhEZnhkbzlMdjErT0hvWmZNUCtQVStLZm50enpRc1FXTXYraTAzQVQ1blordWFLeGtLbTFWQnREWVlQTXNyQ2NhM29MQmgxWnBRby9xczFkQUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiRDhWM25iL1gwZDhqNnpTLzlkV3d2SGFrUXVVZThUUUlEUk5PRnBaYVFoN3FFOWsxdDBaNnN0SVZ0c3BCUkM2eGdPanpDSks4cFUrZENXeTJ6a0pOanc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTAyNTkwMjcwMDoyOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDMwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzQ2MjY4MTcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNQndcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1Cdy5qc29uIjogIntcImtleURhdGFcIjpcIlhBZEhLRThtQkxZNFI5WTZpVUVrcmlkTURZTnpIQlhMV1pEQlZtK3g1VVE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6OTU4MTg5NTQzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzM0NTI0MDcyMTIxXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "NAVY",
  ownername:process.env.OWNER_NAME|| "RSM",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
