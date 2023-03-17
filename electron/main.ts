import { BrowserWindow, app } from 'electron'

const createWindow = () => {
  const win = new BrowserWindow({
    title: 'Main window',
  })

  if (process.env.VITE_DEV_SERVER_URL)
    win.loadURL(process.env.VITE_DEV_SERVER_URL)
  else win.loadFile('dist-electron/index.html')
}

app.whenReady().then(() => createWindow())
