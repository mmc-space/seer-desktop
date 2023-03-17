"use strict";const e=require("electron"),n=()=>{new e.BrowserWindow({title:"Main window"}).loadFile("dist-electron/index.html")};e.app.whenReady().then(()=>n());
