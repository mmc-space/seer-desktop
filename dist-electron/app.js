"use strict";const e=require("electron"),n=()=>{new e.BrowserWindow({height:500,width:500}).loadFile("dist-electron/index.html")};e.app.whenReady().then(()=>n());
