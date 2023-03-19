import { contextBridge, ipcRenderer } from 'electron'

declare global {
  interface Window {
    versions: {
      node: () => string
      chrome: () => string
      electron: () => string
    }
    app: {
      ping: () => Promise<string>
    }
  }
}

const versions = {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
}

const app = {
  ping: () => ipcRenderer.invoke('ping'),
}

if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('versions', versions)
    contextBridge.exposeInMainWorld('app', app)
  }
  catch (error) {
    console.warn(error)
  }
}
else {
  window.versions = versions
  window.app = app
  // ...
}
