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

global.warncount = process.env.WARN_COUNT ||3
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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_19_40_12_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDg4LFxuICAgICAgICAyMTksXG4gICAgICAgIDcyLFxuICAgICAgICA5MixcbiAgICAgICAgMTM1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDY5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNjAsXG4gICAgICAgIDIyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDExNixcbiAgICAgICAgMjA3LFxuICAgICAgICAxNixcbiAgICAgICAgOSxcbiAgICAgICAgOCxcbiAgICAgICAgMjM5LFxuICAgICAgICA2NSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDQxLFxuICAgICAgICA3OSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTY2LFxuICAgICAgICA4MixcbiAgICAgICAgMTkyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDc0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDY4LFxuICAgICAgICAzNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDc3LFxuICAgICAgICA0MixcbiAgICAgICAgMTU2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxODUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNixcbiAgICAgICAgNjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICA0NSxcbiAgICAgICAgOTAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMzcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNTgsXG4gICAgICAgIDM4LFxuICAgICAgICA5MSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDM0LFxuICAgICAgICA3NCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIzMixcbiAgICAgICAgNjMsXG4gICAgICAgIDc5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDkxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMzAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjExLFxuICAgICAgICA3MSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDM5LFxuICAgICAgICAxODIsXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxODcsXG4gICAgICAgIDkwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEyLFxuICAgICAgICAxODYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNCxcbiAgICAgICAgNDMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTMsXG4gICAgICAgIDI3LFxuICAgICAgICA5NSxcbiAgICAgICAgMTM2LFxuICAgICAgICA4MixcbiAgICAgICAgMTE4LFxuICAgICAgICAxMDksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDU1LFxuICAgICAgICA1MyxcbiAgICAgICAgMixcbiAgICAgICAgMjI1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDc0LFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgOSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTcyLFxuICAgICAgICAxOSxcbiAgICAgICAgMSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNixcbiAgICAgICAgMTEyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDExMixcbiAgICAgICAgMTU5LFxuICAgICAgICA0NCxcbiAgICAgICAgMjA4LFxuICAgICAgICA2MyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDY2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDU4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNjVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDksXG4gICAgICAgICAgODksXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNjRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNjYsXG4gICAgICAgIDc0LFxuICAgICAgICAyMzksXG4gICAgICAgIDI1MixcbiAgICAgICAgNjQsXG4gICAgICAgIDI5LFxuICAgICAgICA1OSxcbiAgICAgICAgNDgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDg4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjksXG4gICAgICAgIDYzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNCxcbiAgICAgICAgNDYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNCxcbiAgICAgICAgMzQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMzIsXG4gICAgICAgIDg5LFxuICAgICAgICAyNixcbiAgICAgICAgMTE5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNzQsXG4gICAgICAgIDcsXG4gICAgICAgIDk3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDUyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDMwLFxuICAgICAgICA1NyxcbiAgICAgICAgMTA4LFxuICAgICAgICA3NixcbiAgICAgICAgMjIsXG4gICAgICAgIDY5LFxuICAgICAgICA1MyxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDc0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTMyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAzMSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJUak0ySFBYZHVQanJ6VEo2bmpoMkRXY0ExWlhZS0o3YmNiZXpsM1QwdVNFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkwMjU5MDI3MDBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkY5QTEzNTFDMkVDOTYwNkRFM0MxNzdCNUU1M0VERThDXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczNDk4Mjg1NVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkwMjU5MDI3MDBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjQ2MzE1OTFGOEY1Nzg5REY5NkZFRTZFQjdERTJGNkYyXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczNDk4Mjg1NlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJGdWRvT2dSNFQ1U1BHY1FFbGsxSS1RXCIsXG4gIFwicGhvbmVJZFwiOiBcIjJmZTA3MjdmLTQyMTItNGI5OC1iOTIwLWFmNTk3MjAxMTFiMVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5NyxcbiAgICAgIDI0NCxcbiAgICAgIDE5MCxcbiAgICAgIDE3NCxcbiAgICAgIDE0MyxcbiAgICAgIDIyMSxcbiAgICAgIDEzOCxcbiAgICAgIDEzMCxcbiAgICAgIDEwNyxcbiAgICAgIDIwLFxuICAgICAgNSxcbiAgICAgIDk2LFxuICAgICAgMTEyLFxuICAgICAgNjksXG4gICAgICAyNDIsXG4gICAgICA4NyxcbiAgICAgIDUyLFxuICAgICAgOCxcbiAgICAgIDc1LFxuICAgICAgOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNixcbiAgICAgIDIwOCxcbiAgICAgIDU2LFxuICAgICAgNzcsXG4gICAgICAxMjMsXG4gICAgICAyMTgsXG4gICAgICAxNDgsXG4gICAgICAyMjcsXG4gICAgICAxOTgsXG4gICAgICA2NCxcbiAgICAgIDI0NSxcbiAgICAgIDIzMSxcbiAgICAgIDIwNixcbiAgICAgIDI0MCxcbiAgICAgIDksXG4gICAgICAyNTMsXG4gICAgICAxODAsXG4gICAgICA4OCxcbiAgICAgIDIwMyxcbiAgICAgIDI0NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJKWk5SSDhIRFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTAyNTkwMjcwMDoyOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTY1Mzg2NzQxODgzMDk2OjI5QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIlR2XCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT21mODhnREVMNzVwcnNHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJXdSsvY05STlpkWGxqYUJ1djRvbnFCb2lZV0J4TWJhZGRyUG5SbGVYbng0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkhBTjlpdmdndjlyNzFkek1RVmVZcTdITUVTUTg1UGJmYlBpcEdvVS9xV3NCdTZJcys0Y09UWmI3Ry9DdlJOV1FaWmNVYjUyYVVnVjlMY2N0YndyaURRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIi9PTTJscmIvb1hzMktWNHFycGhHUVQvUXNwUDZQY0Q1TU5WTzJQb2pJVDNtNDFNMUZOazNyRmYzZkphMVJVeU5aWGZqS05IaVJrQW1rbGxpUkgwYWdBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwMjU5MDI3MDA6MjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAzMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM0OTgyODUwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTU9KXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNT0ouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJUV2lsTWlScWo2OFYyMlMxQll4anViL1gzdG9qZU5MMnVjV1c3aUxHaHRVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjk1ODE4OTU0NSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzM0OTgyODUzMzUwXCJ9Igp9"  // PUT your SESSION_ID 


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
