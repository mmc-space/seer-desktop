import { BrowserWindow, app } from 'electron'
import { initTray } from './tray'

const createWindow = () => {
  const win = new BrowserWindow({
    // frame: false, // 去掉窗口边框和标题栏
    // transparent: true, // 窗口透明
    // skipTaskbar: true, // 任务栏不显示图标
    resizable: false, // 是否允许改变窗口尺寸
    // alwaysOnTop: true, // 窗口是否总是在最前端
  })

  // load menus
  initTray(win)

  // load html
  if (process.env.VITE_DEV_SERVER_URL)
    win.loadURL(process.env.VITE_DEV_SERVER_URL)
  else win.loadFile('dist-electron/index.html')
}

app.whenReady().then(createWindow)
