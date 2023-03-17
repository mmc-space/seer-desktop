import { app, BrowserWindow } from "electron";

const createWindow = () => {
  const win = new BrowserWindow({
    title: "Main window",
  });

  win.loadFile("dist-electron/index.html");
};

app.whenReady().then(() => createWindow());
