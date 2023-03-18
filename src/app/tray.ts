import type {
  BrowserWindow,
  MenuItem,
  MenuItemConstructorOptions,
} from 'electron'
import { Menu, Tray, app, nativeImage } from 'electron'
import { store } from './store'

const currentIcon = ''

type Language = 'zh' | 'en'

export const initTray = (mainWindow: BrowserWindow) => {
  const tray = new Tray(nativeImage.createFromDataURL(currentIcon))

  const handleClickLangRadio = (lang: Language) => {
    store.set('language', lang)
    initTray(mainWindow)
    mainWindow.webContents.executeJavaScript(`window.setLanguage('${lang}')`)
  }

  const lang = store.get('language')

  const template: Array<MenuItemConstructorOptions | MenuItem> = [
    // {
    //   label: cl.language,
    //   type: 'submenu',
    //   submenu: [
    //     {
    //       label: '简体中文',
    //       type: 'radio',
    //       checked: lang === 'zh',
    //       click: handleClickLangRadio.bind(null, 'zh'),
    //     },
    //     {
    //       label: 'English',
    //       type: 'radio',
    //       checked: lang === 'en',
    //       click: handleClickLangRadio.bind(null, 'en'),
    //     },
    //   ],
    // },
    {
      label: '退出',
      // accelerator: 'CmdOrCtrl+Q',
      click: () => app.quit(),
    },
  ]

  const menu = Menu.buildFromTemplate(template)

  tray.setContextMenu(menu)
}
