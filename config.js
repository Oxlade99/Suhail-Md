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


global.devs = "2349025346468" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2349025346468";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349025346468";




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
global.waPresence= process.env.WAPRESENCE ||  "recording" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_46_07_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNSxcbiAgICAgICAgMTcxLFxuICAgICAgICA1MixcbiAgICAgICAgMTQsXG4gICAgICAgIDk5LFxuICAgICAgICAxODIsXG4gICAgICAgIDExOCxcbiAgICAgICAgNDcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjQyLFxuICAgICAgICA5NyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMCxcbiAgICAgICAgNTMsXG4gICAgICAgIDUzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjUyLFxuICAgICAgICA5OCxcbiAgICAgICAgNTMsXG4gICAgICAgIDExLFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTkyLFxuICAgICAgICA4MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDgsXG4gICAgICAgIDc4LFxuICAgICAgICA0OCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDMzLFxuICAgICAgICA1NyxcbiAgICAgICAgMjM4LFxuICAgICAgICA4NyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDI5LFxuICAgICAgICAyNixcbiAgICAgICAgMTk2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTE1LFxuICAgICAgICA3OSxcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTk5LFxuICAgICAgICA2NyxcbiAgICAgICAgMixcbiAgICAgICAgMjExLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjUzLFxuICAgICAgICAwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDQ5LFxuICAgICAgICA1NixcbiAgICAgICAgMzAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTI1LFxuICAgICAgICA2MyxcbiAgICAgICAgMTkzLFxuICAgICAgICA2MCxcbiAgICAgICAgMjMxLFxuICAgICAgICA0MixcbiAgICAgICAgMjI2LFxuICAgICAgICAyMTksXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjksXG4gICAgICAgIDYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjAzLFxuICAgICAgICAxMTksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgODgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTIyLFxuICAgICAgICA0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTE5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNjksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDgsXG4gICAgICAgIDMwLFxuICAgICAgICA1MixcbiAgICAgICAgMTg3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE5MixcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNyxcbiAgICAgICAgMTcwLFxuICAgICAgICA4MSxcbiAgICAgICAgOCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTE0LFxuICAgICAgICA0NCxcbiAgICAgICAgODAsXG4gICAgICAgIDEzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgODIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDEzMixcbiAgICAgICAgOCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDc0LFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTksXG4gICAgICAgIDI1MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDEzMixcbiAgICAgICAgNjYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTIwLFxuICAgICAgICA0NixcbiAgICAgICAgMTQ3LFxuICAgICAgICA1OCxcbiAgICAgICAgMjYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTU0LFxuICAgICAgICA5NixcbiAgICAgICAgOTcsXG4gICAgICAgIDExLFxuICAgICAgICA3OSxcbiAgICAgICAgNzMsXG4gICAgICAgIDc3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMixcbiAgICAgICAgNDksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjAwLFxuICAgICAgICA4MCxcbiAgICAgICAgMTc1LFxuICAgICAgICAzLFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNzhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAzOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE1MixcbiAgICAgICAgNTEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNTIsXG4gICAgICAgIDEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjQwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTI3LFxuICAgICAgICA3MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjMsXG4gICAgICAgIDk5LFxuICAgICAgICA3NSxcbiAgICAgICAgMjQyLFxuICAgICAgICA5NyxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDY2LFxuICAgICAgICA3LFxuICAgICAgICAxNyxcbiAgICAgICAgOTMsXG4gICAgICAgIDcwLFxuICAgICAgICAyOCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI0LFxuICAgICAgICA5OSxcbiAgICAgICAgMSxcbiAgICAgICAgOCxcbiAgICAgICAgNDksXG4gICAgICAgIDM5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTQ2LFxuICAgICAgICA0NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjQxLFxuICAgICAgICA0MSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA3OCxcbiAgICAgICAgMjE0LFxuICAgICAgICAzMixcbiAgICAgICAgMjAxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDkxLFxuICAgICAgICAwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTUxLFxuICAgICAgICA5NSxcbiAgICAgICAgMTI4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA5OCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ6aEFEQllaNGZycEhWdDlpVzY5NlE3b2xGbk5ycmhrY2NRSm9MeU4wUGpNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJScDQwUS1VaVF0U0tiNUJHQktlSnRBXCIsXG4gIFwicGhvbmVJZFwiOiBcImNkMjlmYzFjLTM5YzUtNDE0ZC05ZjMwLWZkMzQyZTc5MzkyNFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5OCxcbiAgICAgIDI0OCxcbiAgICAgIDY4LFxuICAgICAgMTksXG4gICAgICAyNDIsXG4gICAgICAxMDgsXG4gICAgICAyMjIsXG4gICAgICAxODUsXG4gICAgICAxMCxcbiAgICAgIDMwLFxuICAgICAgMTI2LFxuICAgICAgMTY3LFxuICAgICAgMTU1LFxuICAgICAgMTY2LFxuICAgICAgNzYsXG4gICAgICAxNzgsXG4gICAgICA4LFxuICAgICAgMTgxLFxuICAgICAgMTExLFxuICAgICAgOTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDYsXG4gICAgICAxODIsXG4gICAgICAxNjgsXG4gICAgICAxOTUsXG4gICAgICAxMTQsXG4gICAgICA2OSxcbiAgICAgIDIwMyxcbiAgICAgIDQ4LFxuICAgICAgMTI2LFxuICAgICAgMTE2LFxuICAgICAgMTYxLFxuICAgICAgMTEzLFxuICAgICAgNTksXG4gICAgICA5NSxcbiAgICAgIDI1MixcbiAgICAgIDExMCxcbiAgICAgIDIxNyxcbiAgICAgIDU1LFxuICAgICAgMjMyLFxuICAgICAgNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI0VkZaTVQ0RlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTAyNTM0NjQ2ODo1OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIl9fX19fX19fX19fX1/wnZeiIPCdl6sg8J2XnyDwnZeUIPCdl5cg8J2XmMq34bWDy6Ig4bWDIOG1iOG1ieG1kOG1kuKBv/CRgY1cIixcbiAgICBcImxpZFwiOiBcIjU4NjUyMzI1MDgxMjgyOjU5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ08rSTVwc0VFTTc1bzdVR0dBWWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiQzBaZXNva3ZXQUx6bFVQQW9mTnBrN05IZzMvK2dUUDZGUjJ4bWtPbFR4az1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI1YXhETlpvdXlPS3g3Z00wWXNuSXZLaU1XcVh4QUlwTkU1QjJQaG10SGdwd0tGcUQzRmhsOUtlUkhHV3U3VklQZnBpekVIVEZwUnBvakZZUW85YlFBZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJET3BzTnRuaVFZZGhDSDgvNVZxeWw5ZVR3a21pQ3hqOStRV2RNUk84TFNJTDFuSHFZRGFncHplY3BDeUtWMVp2c1hLZkl1UDA4aWFWTU9sWFl0Y1ZoQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDI1MzQ2NDY4OjU5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyMzUwODAxXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "O X L A D E",
  packname: process.env.PACK_NAME || "O X L A D E",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
