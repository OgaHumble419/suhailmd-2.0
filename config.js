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

global.warncount = process.env.WARN_COUNT || 10 
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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_35_12_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDE1LFxuICAgICAgICAxODksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDQwLFxuICAgICAgICA5MyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNDEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTEyLFxuICAgICAgICA4OSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgODMsXG4gICAgICAgIDIsXG4gICAgICAgIDY4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTAsXG4gICAgICAgIDU5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDk5LFxuICAgICAgICA2OSxcbiAgICAgICAgODcsXG4gICAgICAgIDc4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDM5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIyLFxuICAgICAgICAyMTksXG4gICAgICAgIDcwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjMwLFxuICAgICAgICA1MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxODYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDMxLFxuICAgICAgICAyNCxcbiAgICAgICAgMzUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMzUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDM2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMixcbiAgICAgICAgMTA3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDQwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDI4LFxuICAgICAgICAxMzksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNCxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTIwLFxuICAgICAgICAxODQsXG4gICAgICAgIDE3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMyxcbiAgICAgICAgMTk2LFxuICAgICAgICA5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgOTMsXG4gICAgICAgIDU0LFxuICAgICAgICA1NyxcbiAgICAgICAgMjEsXG4gICAgICAgIDkyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMzUsXG4gICAgICAgIDI1MixcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMTgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNzAsXG4gICAgICAgIDE0NixcbiAgICAgICAgOTQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTMsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTUxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMixcbiAgICAgICAgMjAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNzcsXG4gICAgICAgIDM4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEwNixcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ1LFxuICAgICAgICA5OSxcbiAgICAgICAgMTMsXG4gICAgICAgIDgxLFxuICAgICAgICAwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIzLFxuICAgICAgICAxNSxcbiAgICAgICAgMTgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjM4LFxuICAgICAgICA2MSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA3LFxuICAgICAgICA5OCxcbiAgICAgICAgMzgsXG4gICAgICAgIDgyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgODUsXG4gICAgICAgIDQxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyNixcbiAgICAgICAgOTcsXG4gICAgICAgIDgyLFxuICAgICAgICAxODMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMTlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA2NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAyMDksXG4gICAgICAgIDksXG4gICAgICAgIDExNixcbiAgICAgICAgMTUxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNTksXG4gICAgICAgIDkzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTA3LFxuICAgICAgICA4MSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDg0LFxuICAgICAgICAxNDksXG4gICAgICAgIDE1NCxcbiAgICAgICAgNTEsXG4gICAgICAgIDYxLFxuICAgICAgICA3NCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNDEsXG4gICAgICAgIDEzLFxuICAgICAgICAzNSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDI5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxODksXG4gICAgICAgIDMwLFxuICAgICAgICA1OSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDI1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNixcbiAgICAgICAgMzUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgODAsXG4gICAgICAgIDIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNixcbiAgICAgICAgMjIzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTg1LFxuICAgICAgICAzOCxcbiAgICAgICAgMTA5LFxuICAgICAgICA3MixcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE3NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI2NjF6UnpNamwySHRmenFpb3p5NnNwbnFodFRCMTgyOWdjV3FLb3gyaWxBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIwa3JjUVk4dlNrNk0wTGxvMDFqSmVBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjk1ODY5ZmI4LWY2ODQtNDA0YS1hNTdjLWUyODJjN2U4MmE1Y1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTcsXG4gICAgICAxOTcsXG4gICAgICAxMTcsXG4gICAgICA3NyxcbiAgICAgIDE1NyxcbiAgICAgIDExOCxcbiAgICAgIDExMCxcbiAgICAgIDE1LFxuICAgICAgNCxcbiAgICAgIDExMSxcbiAgICAgIDI3LFxuICAgICAgMjE1LFxuICAgICAgMjksXG4gICAgICAxNzksXG4gICAgICAyNTAsXG4gICAgICAyNDYsXG4gICAgICAyMyxcbiAgICAgIDQ5LFxuICAgICAgMjE0LFxuICAgICAgMTYzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0MSxcbiAgICAgIDU2LFxuICAgICAgMTM1LFxuICAgICAgMjQ1LFxuICAgICAgNjgsXG4gICAgICA4OCxcbiAgICAgIDIzOSxcbiAgICAgIDIyMixcbiAgICAgIDE5NSxcbiAgICAgIDYxLFxuICAgICAgMTM4LFxuICAgICAgNjQsXG4gICAgICA2NCxcbiAgICAgIDE1NixcbiAgICAgIDU0LFxuICAgICAgMjMwLFxuICAgICAgMTYzLFxuICAgICAgOTMsXG4gICAgICA1NSxcbiAgICAgIDIwN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI3M1dHNjgyM1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzA2MjE1OTcwNDo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMDQ0MDIzNzU4MzU4MzQ6NkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKYVY2c1FIRU9DeWtic0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIldnT0pUMjdsMjNQdWlhSHJnMW5HalNEZnFxZytWUWtFR2xNNll3MFFVSHc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiYllscDZBWDU0OWI4cFFGeG4rSFlleFpjTXluM0RnaHZUZXJSbE0wL3BkV0YyTnFmc1hSZHlQbENzV3FGNXEyaC93RVFHMUFJUk41cE9IYU5BUTBjQ3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiWjYrS3dmWWNGM0tQNmZ5Z2pNRVQ3VWlTQWJXdjlNMG9Zcyt1WHlYNWJmRFo2Z1hBWlJqWUZoRU9KV2FDRGtmVFI2MUZaQVQ2VDBqK281dGpRZHk2RFE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA2MjE1OTcwNDo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTI0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzQ2Mjk3MzIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGeXNcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZ5cy5qc29uIjogIntcImtleURhdGFcIjpcIlhGalVscVA1MTlLbmxRTzFFd1VFMm5OdUF1aXo5ZWpYYk5MN3d4T041Nzg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjAyMzM5MzkzOSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTczNDUxMDMzNzA5OFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Successful Kontroller",
  ownername:process.env.OWNER_NAME|| "Jennifer",


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
