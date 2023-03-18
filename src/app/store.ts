import { app } from 'electron'
import Store from 'electron-store'

interface IStore {
  alwaysOnTop: boolean
  ignoreMouseEvents: boolean
  showTool: boolean
  language: 'zh' | 'en'
}

export const store = new Store<IStore>({
  name: 'config',
  defaults: {
    alwaysOnTop: true,
    ignoreMouseEvents: false,
    showTool: true,
    language: app.getLocale().includes('zh') ? 'zh' : 'en',
  },
})
