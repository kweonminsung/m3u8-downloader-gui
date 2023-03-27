import { app, BrowserWindow, Menu } from 'electron';
import * as isDev from 'electron-is-dev';
import * as path from 'path';

let win: BrowserWindow;

const createWindow = () => {
  win = new BrowserWindow({
    width: 600,
    minWidth: 500,
    height: 750,
    minHeight: 500,
    resizable: true,
    fullscreen: false,
    title: 'm3u8 Downloader GUI',
    fullscreenable: false,
    webPreferences: {
      nodeIntegration: true,
      devTools: isDev,
    },
  });

  win.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`
  );

  if (isDev) {
    win.webContents.openDevTools({ mode: 'detach' });
  }

  win.setMenu(Menu.buildFromTemplate([]));

  win.focus();
};

app.on('ready', createWindow);

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
