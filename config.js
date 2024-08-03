const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_41_08_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNzIsXG4gICAgICAgIDUxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTIwLFxuICAgICAgICA2NyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgOTQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTcwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTcyLFxuICAgICAgICA5OCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAzNyxcbiAgICAgICAgNDgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzcsXG4gICAgICAgIDU4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDQsXG4gICAgICAgIDgwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDcyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjI2LFxuICAgICAgICA0OSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTg3LFxuICAgICAgICAxMDksXG4gICAgICAgIDU0LFxuICAgICAgICA1OCxcbiAgICAgICAgMTc2LFxuICAgICAgICA1NCxcbiAgICAgICAgNjksXG4gICAgICAgIDY4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDM3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjUxLFxuICAgICAgICA1MCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDc2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxODQsXG4gICAgICAgIDk4LFxuICAgICAgICA1NCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTYzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDY3LFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgODIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjU1LFxuICAgICAgICAzNCxcbiAgICAgICAgODMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDI0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDQyLFxuICAgICAgICAxODksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNCxcbiAgICAgICAgMzYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNTYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDc5LFxuICAgICAgICAzMixcbiAgICAgICAgMTQ0LFxuICAgICAgICA2MCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgOTgsXG4gICAgICAgIDE3LFxuICAgICAgICA0OSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDY5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjMzLFxuICAgICAgICAxODcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTg1LFxuICAgICAgICA1LFxuICAgICAgICAxMjksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjYsXG4gICAgICAgIDE3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1OSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgODgsXG4gICAgICAgIDY0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDU4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNzQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDU5LFxuICAgICAgICA0MCxcbiAgICAgICAgOTAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjI1LFxuICAgICAgICA3NyxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTIyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgOTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgOTAsXG4gICAgICAgIDExNixcbiAgICAgICAgMjAzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTA2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTA0LFxuICAgICAgICA3NyxcbiAgICAgICAgMTIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNzIsXG4gICAgICAgIDczLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEwNixcbiAgICAgICAgNSxcbiAgICAgICAgMTg3LFxuICAgICAgICA0MyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE2LFxuICAgICAgICA4LFxuICAgICAgICA5MSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDk4LFxuICAgICAgICAyNixcbiAgICAgICAgMzYsXG4gICAgICAgIDIwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIwLFxuICAgICAgICA2NixcbiAgICAgICAgMjM3LFxuICAgICAgICAxNzksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxODksXG4gICAgICAgIDIzNCxcbiAgICAgICAgNDUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDk0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjIyLFxuICAgICAgICA1OCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMSxcbiAgICAgICAgNjAsXG4gICAgICAgIDgxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTMwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJaZitackJteW00WGVLUHFiVWlnNk1qb0FoYnl2ZUV4clROM3NnZGZ2ZkFrPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgxMTIyOTE4NTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkRGNURFRDgxRDEyRTdFMUNFMzU1MDk4NDQ5OEM0QzMyXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjcxNDA5MVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgxMTIyOTE4NTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkJEOUZCRjJFODA5MEJEQzQzRUFCRDcyNzQxNUYxODJFXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjcxNDA5MVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ3RXhYeDdvbFRyMldEMkRLSWNSYXRRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjY5NzM2ZDQ3LWVkMWItNGRhZS1iMTdmLWE1YWY4OTE3YTZkZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5OSxcbiAgICAgIDE1NixcbiAgICAgIDI3LFxuICAgICAgMjMyLFxuICAgICAgNzIsXG4gICAgICA5NyxcbiAgICAgIDE3LFxuICAgICAgMjA4LFxuICAgICAgODcsXG4gICAgICAxMTYsXG4gICAgICA1MSxcbiAgICAgIDE2MyxcbiAgICAgIDEzLFxuICAgICAgMTI2LFxuICAgICAgNyxcbiAgICAgIDU0LFxuICAgICAgMzMsXG4gICAgICAxMjYsXG4gICAgICAxNTQsXG4gICAgICA3NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTQsXG4gICAgICAyMDYsXG4gICAgICAxNTMsXG4gICAgICAxMTYsXG4gICAgICAxNjYsXG4gICAgICA2OCxcbiAgICAgIDIxNixcbiAgICAgIDIzMyxcbiAgICAgIDIzNixcbiAgICAgIDk3LFxuICAgICAgNjUsXG4gICAgICAyMCxcbiAgICAgIDIxOSxcbiAgICAgIDIzNCxcbiAgICAgIDE2MCxcbiAgICAgIDE2OSxcbiAgICAgIDYyLFxuICAgICAgNTcsXG4gICAgICAxMjEsXG4gICAgICAxNzRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiU1JUUTNHNTVcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxMTIyOTE4NTc6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjMwMDYwNDI2NTg0Mjc3OjFAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiQXl6ZXLwn5iOXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSTMveEVFUTVZKzZ0UVlZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ1UnAwLzA2clNBWmR4UmtiaUJNVUFpTWF6MWV0OXg4bkdQQ2FIQ2NOdGh3PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjhjc0Q0eVZxUTM0dXAwdnNIQTBnTXl5Rm9MM1pZQUc2b2YvbjBoN3BsMk5XUlh4QkVrRXI3N1FLeGRMK1ZoQU15SFB4MlhsTVgvdzFRajVxTDI1a0JnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlhOWWxYK2Eva3FWdi9ZOS93VXM0dDV5aytYNGQyV1lQTXJEcDRHN0dLRWpYQ0gyWXhrOGlYQWE2eDhTcVJrQzFiSXk0YVNLcWYzN3BnbkxGaVBVUGlnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxMTIyOTE4NTc6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyNzE0MDg4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRmFLXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGYUsuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJqR3FKYjhXSTRLYWNmaWJPcmp3YWJ1MWRjTjRuNTZqWkNSUW4xYjR2V04wPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEzNzQ0NTI2MSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIyNzE0MDkwMzQxXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Ayzer",
  packname: process.env.PACK_NAME || "Ayzer",
  botname : process.env.BOT_NAME  || "Daone",
  ownername:process.env.OWNER_NAME|| "Ayzer",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
