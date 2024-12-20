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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_14_40_12_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNjEsXG4gICAgICAgIDk2LFxuICAgICAgICA1MixcbiAgICAgICAgMzUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjIzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxODksXG4gICAgICAgIDg5LFxuICAgICAgICA0OSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDQ1LFxuICAgICAgICA0MixcbiAgICAgICAgMzUsXG4gICAgICAgIDY4LFxuICAgICAgICA2NCxcbiAgICAgICAgMTM3LFxuICAgICAgICA2NyxcbiAgICAgICAgMzYsXG4gICAgICAgIDYyLFxuICAgICAgICA2OCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEzLFxuICAgICAgICA3NixcbiAgICAgICAgMTMzLFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTcwLFxuICAgICAgICA3NyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNzAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTk4LFxuICAgICAgICA1NCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjMsXG4gICAgICAgIDc1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjE0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDIyNixcbiAgICAgICAgNjUsXG4gICAgICAgIDM2LFxuICAgICAgICA3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDczLFxuICAgICAgICAzNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDkxLFxuICAgICAgICAzNCxcbiAgICAgICAgNyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxODEsXG4gICAgICAgIDcxLFxuICAgICAgICAyLFxuICAgICAgICAxODMsXG4gICAgICAgIDk5LFxuICAgICAgICA4NyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMixcbiAgICAgICAgNzUsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDQ0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDUyLFxuICAgICAgICAyNSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMixcbiAgICAgICAgMTIsXG4gICAgICAgIDM4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDg0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDU1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNzgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNTAsXG4gICAgICAgIDQ1LFxuICAgICAgICAxOTksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICA0NyxcbiAgICAgICAgMTkzLFxuICAgICAgICAzOSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDU0LFxuICAgICAgICAxNzksXG4gICAgICAgIDI3LFxuICAgICAgICAzNSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNixcbiAgICAgICAgMjE2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDQwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNjUsXG4gICAgICAgIDY5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNTksXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MyxcbiAgICAgICAgOSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQzLFxuICAgICAgICAzOSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyOSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNCxcbiAgICAgICAgMTY3LFxuICAgICAgICAzMyxcbiAgICAgICAgMjM4LFxuICAgICAgICAyOSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE3LFxuICAgICAgICAxOCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTExLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTUxLFxuICAgICAgICA4MSxcbiAgICAgICAgMTYxLFxuICAgICAgICAzLFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA3N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA3NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzOCxcbiAgICAgICAgNTksXG4gICAgICAgIDU1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNjksXG4gICAgICAgIDI1MixcbiAgICAgICAgMTc1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNixcbiAgICAgICAgMzIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjI0LFxuICAgICAgICA4NSxcbiAgICAgICAgMTY1LFxuICAgICAgICA2MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDY2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDQ0LFxuICAgICAgICA2OSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE1LFxuICAgICAgICA0NSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgODUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTM2LFxuICAgICAgICA2NSxcbiAgICAgICAgMjM1LFxuICAgICAgICA3NCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjExLFxuICAgICAgICAxODcsXG4gICAgICAgIDQxLFxuICAgICAgICAxODgsXG4gICAgICAgIDc1LFxuICAgICAgICAyMzksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjM0LFxuICAgICAgICA3NixcbiAgICAgICAgNzEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMzEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE4MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJBWGsrV20zSVhsZ04yTGp3cDNYck8xcTNZSHQ3VkFoQk5ldm9QUmxpNk93PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJiT05LN2JrN1FibVdIOWw5OTEtNnJBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjhjNmVmZDkxLTViOWUtNDM1YS1iNGZmLTg5ODMwM2U3MGZhZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDcsXG4gICAgICAxMDEsXG4gICAgICA1OSxcbiAgICAgIDc4LFxuICAgICAgOTUsXG4gICAgICA2NCxcbiAgICAgIDIyMyxcbiAgICAgIDYzLFxuICAgICAgNyxcbiAgICAgIDIzMyxcbiAgICAgIDcwLFxuICAgICAgMTMwLFxuICAgICAgMTk4LFxuICAgICAgMjMxLFxuICAgICAgODcsXG4gICAgICAxMjIsXG4gICAgICAxNixcbiAgICAgIDI0OCxcbiAgICAgIDIxNyxcbiAgICAgIDEzOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTEsXG4gICAgICAxOTgsXG4gICAgICAxNzQsXG4gICAgICAxNjcsXG4gICAgICAyMTcsXG4gICAgICAxMzIsXG4gICAgICAyNyxcbiAgICAgIDEyMyxcbiAgICAgIDIwMSxcbiAgICAgIDE2OSxcbiAgICAgIDEyNSxcbiAgICAgIDE0MSxcbiAgICAgIDE1MCxcbiAgICAgIDIyMSxcbiAgICAgIDUsXG4gICAgICAxOTIsXG4gICAgICAxMjEsXG4gICAgICAyMzUsXG4gICAgICAxNTAsXG4gICAgICAxODdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRzhXQU1TVldcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwNjQ2ODkxMTQ6MjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJCSUcgRElDRVwiLFxuICAgIFwibGlkXCI6IFwiMTAwNzQ3MjMyNDY1MTM1OjIzQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BXd3dyOEpFTW1EbHJzR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiSnRjNmJDdDhmdjNSUnAvcEFFNlUrOWF6SzVFM2loQWY4NnF0S2VrV0Zrdz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI2NzRIcVgxN3dVdUQyQnptcDhtWDk0SVd1V3JuZnNrU3FEYS9hcGxCWWdIWGRRL0NuM0Fyd3lYWHdBUWptYkhVL1dDTGZsRHQ4Z05RZ216YWFwQ0ZEUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJjcVFqZ2dyRThyZUJlUkk2SEJsT09kMExwcWFobFE5YnJzOE1jaFBSeVdaWHdHSjBabWpZRFlOWG1uMTZtVGt6R05jYXJSZldFUXZBTS9SQzM4a0ZDdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDY0Njg5MTE0OjIzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMixcbiAgICAgICAgICA3NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iaVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM0NzA1NjEyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSHZ0XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIdnQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJYSDJ1TVROTGF6WUd5bkZHOTdVQ1Y5Tnh0MytjUVNBd1dacFBpUFM5SFVZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjI1NDkxMjcyODUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczNDY5NTM0MzczM1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Pablo Bot",
  ownername:process.env.OWNER_NAME|| "Pablo",


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
