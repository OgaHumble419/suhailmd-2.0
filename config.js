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

global.warncount = process.env.WARN_COUNT || 11
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_09_20_12_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxODksXG4gICAgICAgIDk1LFxuICAgICAgICA2MixcbiAgICAgICAgODksXG4gICAgICAgIDI4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDYxLFxuICAgICAgICAzNyxcbiAgICAgICAgMjUwLFxuICAgICAgICA2NyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMyxcbiAgICAgICAgMjAxLFxuICAgICAgICA1MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDc0LFxuICAgICAgICAyNDksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDk3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIzLFxuICAgICAgICA2MixcbiAgICAgICAgOTksXG4gICAgICAgIDU0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNCxcbiAgICAgICAgNDMsXG4gICAgICAgIDIxNixcbiAgICAgICAgNjQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjYsXG4gICAgICAgIDE3MixcbiAgICAgICAgNCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTMsXG4gICAgICAgIDM4LFxuICAgICAgICAzMCxcbiAgICAgICAgOTMsXG4gICAgICAgIDk0LFxuICAgICAgICA5NSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE5MixcbiAgICAgICAgNjcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTMzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjE3LFxuICAgICAgICAxNDksXG4gICAgICAgIDExNSxcbiAgICAgICAgMTEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjUxLFxuICAgICAgICA1NSxcbiAgICAgICAgMTc1LFxuICAgICAgICA0NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDkwLFxuICAgICAgICAxODgsXG4gICAgICAgIDI5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDQxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMzLFxuICAgICAgICAyOCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNCxcbiAgICAgICAgMTU4LFxuICAgICAgICA4OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDExLFxuICAgICAgICA2NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDgsXG4gICAgICAgIDQ0LFxuICAgICAgICA5OCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMzMsXG4gICAgICAgIDIwLFxuICAgICAgICA2MCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNjEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDMwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDM4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNixcbiAgICAgICAgMjE1LFxuICAgICAgICAyMSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxODIsXG4gICAgICAgIDQ3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjMzLFxuICAgICAgICA1NSxcbiAgICAgICAgMjAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTM4LFxuICAgICAgICA0OCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDMsXG4gICAgICAgIDQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNjMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDgyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTA1LFxuICAgICAgICAyNSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE2MixcbiAgICAgICAgODcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjksXG4gICAgICAgIDgxLFxuICAgICAgICAyNyxcbiAgICAgICAgNzksXG4gICAgICAgIDMyLFxuICAgICAgICA0MyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTEsXG4gICAgICAgIDE3LFxuICAgICAgICA2NSxcbiAgICAgICAgNzksXG4gICAgICAgIDEzNCxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA2OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgNTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5OCxcbiAgICAgICAgMjQwLFxuICAgICAgICA3OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNSxcbiAgICAgICAgMjcsXG4gICAgICAgIDM3LFxuICAgICAgICA5MixcbiAgICAgICAgMTUzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDg1LFxuICAgICAgICA0NCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTA2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjA5LFxuICAgICAgICA3MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDI1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDU5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDQ5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjM3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMTEsXG4gICAgICAgIDk4LFxuICAgICAgICA3MSxcbiAgICAgICAgNixcbiAgICAgICAgMTIsXG4gICAgICAgIDk5LFxuICAgICAgICAzNyxcbiAgICAgICAgODQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTE3LFxuICAgICAgICA0MCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMzksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNDMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiS3YzWkdGSUg5T1VmUWp2bXJhdXNGSVRBM0p2RU5jU2RLVEZIK05OMmN5Yz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ3MDYyMTU5NzA0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJBMDBDM0NDNDRCNzBEOThDOTRCNkQ2NUI2OEM5RjM3MlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzQ2ODYzOTZcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiVTFUeVRKQnRTWldmUWpUeUN0RzNkd1wiLFxuICBcInBob25lSWRcIjogXCJiZjc5Njc4Ny03YzQzLTQxNjktYTk4Ni1lM2QwOWMzMTRmNThcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTgsXG4gICAgICA2MyxcbiAgICAgIDc1LFxuICAgICAgMjYsXG4gICAgICAxMCxcbiAgICAgIDIyLFxuICAgICAgMTI5LFxuICAgICAgMjIyLFxuICAgICAgMTQ5LFxuICAgICAgOTQsXG4gICAgICAxNTYsXG4gICAgICAyMzIsXG4gICAgICAxOSxcbiAgICAgIDI0MixcbiAgICAgIDEzMyxcbiAgICAgIDIxMyxcbiAgICAgIDEyNCxcbiAgICAgIDE2OSxcbiAgICAgIDExNCxcbiAgICAgIDIwOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTUsXG4gICAgICA1LFxuICAgICAgNzEsXG4gICAgICAxMjMsXG4gICAgICA4LFxuICAgICAgMTY1LFxuICAgICAgMTgzLFxuICAgICAgMTM1LFxuICAgICAgMTA2LFxuICAgICAgNzMsXG4gICAgICAxMzMsXG4gICAgICA3NCxcbiAgICAgIDI0NSxcbiAgICAgIDIzOCxcbiAgICAgIDEzOCxcbiAgICAgIDIyOCxcbiAgICAgIDIwOCxcbiAgICAgIDEzNCxcbiAgICAgIDI0MyxcbiAgICAgIDEzMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI3NUxGWFQyMVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzA2MjE1OTcwNDo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMDQ0MDIzNzU4MzU4MzQ6N0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKZVY2c1FIRUxMdGxMc0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIldnT0pUMjdsMjNQdWlhSHJnMW5HalNEZnFxZytWUWtFR2xNNll3MFFVSHc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiOVZ2VWhra1dNbktaQ1VXTFpORkxLVEN5TXVobjR3L2Z1NkorMDZCTVF1QlhFTFR4elU3WEVFNXlhdzJxdkxNRWlQNCtwM2lWWld5c1dYTFZjOWJPQlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiUjFvV1kxd3V0UnAzOUJrK2dqVk50b3BqcjBRRnVMZjJ6dmNxUEx4U2NnRER2Z3ZTVlZvejRpNEFrSGlMSmFNZEx2Tjc3WDcwbktzZ1krR1MwZkhyQ1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA2MjE1OTcwNDo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTI0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzQ2ODYzOTAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGeXNcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZ5cy5qc29uIjogIntcImtleURhdGFcIjpcIlhGalVscVA1MTlLbmxRTzFFd1VFMm5OdUF1aXo5ZWpYYk5MN3d4T041Nzg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjAyMzM5MzkzOSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTczNDUxMDMzNzA5OFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "ARMY",
  ownername:process.env.OWNER_NAME|| "ARMY",


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
