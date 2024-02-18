const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lagos,Nigeria."
global.mongodb= process.env.MONGODB_URI || "mongodb+srv://DARKSHAN:3000@cluster0.t1wsjlv.mongodb.net/"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nigeria";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "2348162935998" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null,2348162935998";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348162935998";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "2348162935998,2349025346468";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "OXLADE␈𓃱" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "OXLADE␈𓃱",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "OXLADE␈𓃱",
  ownername:process.env.OWNER_NAME|| "OXLADE␈𓃱",

  sessionName:process.env.SESSION_ID || "SUHAIL_00_38_02_18_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwic01mSE9nUUFRR0loTUhYcHBrNnlvdy9oZnE0SXZDNkZoVGxIYlVIbXRuZz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcInR5Rm9oTUxSV2JkWVdsdFhvaGQ1TjU4RUV4ZzM3YVppbFcwQWZNY3U5a1U9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiK0ZXcHBEdTBsSU45SDZ2M2ZURE5wSHRVZmk1QjJ2R1Y1d1dLM0JvTDcyYz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcInppQ0dySHE2T1dQdk1Rc0NCQlZ2aElyTGg2MFhHS05vZ3JLTEdDUDBSbXM9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiT0FGTUVIZFBadnFPWkY1QlJtYndtUWhBRGoxMTJaKzRrMTlCM1Y0QklFYz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkJqUWhob0dnMVJua0VoS2FBTDBKdUtwVnpkSHIwSFhUWEVQcWg0dElKbWc9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJVTlh4aTdUOHJTRUp5cGdYbktKUTQwY2VpUE5qUUtLNXVWVEo0dkkzSjJnPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiK3RMM1lkWTZBVi9yUjhPK2lwSXFTY2dEUUUzNGpjZ1k0Q0xhR05zbzdYOD1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJDVnFsUDlOclpPbnk4S3d0NWVPaWlISGNWVjlmY2wwZ0hSKzZpNXdiTVh2bEhlWkt1V2J3SFZPbkU5endnVTdwenQrQVRYVnR1RUxnWU5SQVV2TGREZz09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MTI5LFwiYWR2U2VjcmV0S2V5XCI6XCJXckZHcG9GdStZdTlDUFVvMGticWttbjhtMkZGLzh4eHV2aE1GR3pnOE13PVwiLFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6W3tcImtleVwiOntcInJlbW90ZUppZFwiOlwiMjM0ODE2MjkzNTk5OEBzLndoYXRzYXBwLm5ldFwiLFwiZnJvbU1lXCI6dHJ1ZSxcImlkXCI6XCI0NkU0N0Q5RDVERTEyODlCNjUyQTNFQjQ0NDQ1RjgwNFwifSxcIm1lc3NhZ2VUaW1lc3RhbXBcIjoxNzA4MjE2NzI2fV0sXCJuZXh0UHJlS2V5SWRcIjozMSxcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6MzEsXCJhY2NvdW50U3luY0NvdW50ZXJcIjowLFwiYWNjb3VudFNldHRpbmdzXCI6e1widW5hcmNoaXZlQ2hhdHNcIjpmYWxzZX0sXCJkZXZpY2VJZFwiOlwiSXVoYWNTZTBUbk9JcWhVT3hqY3BIZ1wiLFwicGhvbmVJZFwiOlwiMDJkM2Y2OWEtYjMzMC00ZjlkLWI2YjItOTNhMWUxNzNlNTU4XCIsXCJpZGVudGl0eUlkXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCIveHo0bm93bzl2aTZqT2xXN09icVY1YjczMWs9XCJ9LFwicmVnaXN0ZXJlZFwiOnRydWUsXCJiYWNrdXBUb2tlblwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwid1pnbHNyNjhhMjA5UHNCQzJFa3p1S25sLytBPVwifSxcInJlZ2lzdHJhdGlvblwiOnt9LFwicGFpcmluZ0NvZGVcIjpcIkM1M0VXVjFXXCIsXCJtZVwiOntcImlkXCI6XCIyMzQ4MTYyOTM1OTk4OjRAcy53aGF0c2FwcC5uZXRcIixcImxpZFwiOlwiMjI3MzMzNzkzNzExNTA6NEBsaWRcIixcIm5hbWVcIjpcIvCfh6kg8J+HpiDwn4ezIPCfh6wg8J+HqiDwn4e3IPCfh7Qg8J+HuiDwn4e4ICDwn4enIPCfh7Qg8J+HuSBcIn0sXCJhY2NvdW50XCI6e1wiZGV0YWlsc1wiOlwiQ1BYaW5ib0hFSXlqeGE0R0dBRWdBQ2dBXCIsXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6XCJjVmxUc3p4NVoxQnVDMjkxajJyakVFNFlycDNJZ1h4b3B2bDhObnlUZVNjPVwiLFwiYWNjb3VudFNpZ25hdHVyZVwiOlwiZ1RBMDduV2FLRUh2V0IvTVROeFhNcU9vN3Z2RWZnRU5RSkZ2L0RqTysvbnh6MmZ0OGFlbE9mL3k5aFczOHE3MjRvckJuUUFkZ045RDZDdkFiQmZuQ3c9PVwiLFwiZGV2aWNlU2lnbmF0dXJlXCI6XCJ0SzE1dWZ2NENRVFNSK0l4ajlqTUljWHN1aENBUThGdzRleEt5MDc0NGkyMytqcmpMRG1ZTkp3RzIvTFpDUTV3NnRycG12My9tVVJhRUUwQ0FicjNCdz09XCJ9LFwic2lnbmFsSWRlbnRpdGllc1wiOlt7XCJpZGVudGlmaWVyXCI6e1wibmFtZVwiOlwiMjM0ODE2MjkzNTk5ODo0QHMud2hhdHNhcHAubmV0XCIsXCJkZXZpY2VJZFwiOjB9LFwiaWRlbnRpZmllcktleVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiQlhGWlU3TThlV2RRYmd0dmRZOXE0eEJPR0s2ZHlJRjhhS2I1ZkRaOGsza25cIn19XSxcInBsYXRmb3JtXCI6XCJhbmRyb2lkXCIsXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjoxNzA4MjE2NzE4LFwibXlBcHBTdGF0ZUtleUlkXCI6XCJBQUFBQUd0RFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUd0RC5qc29uIjogIntcImtleURhdGFcIjpcIkJDWmJBK0RPSmFtQm5KYXFLY21uTUtxUUYvTTI1ZklobGI3YjRrR1lCWXc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjAwMTE3MDgwNCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























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
 
