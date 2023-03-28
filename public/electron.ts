import { app, BrowserWindow, Menu, ipcMain } from 'electron';
import * as isDev from 'electron-is-dev';
import * as path from 'path';
import axios, { AxiosResponseHeaders, Method } from 'axios';

interface ParsedFetchString {
  url: string;
  headers: AxiosResponseHeaders;
  method: Method;
}

let win: BrowserWindow;

const createWindow = () => {
  win = new BrowserWindow({
    width: 600,
    minWidth: 500,
    maxWidth: 800,
    height: 750,
    minHeight: 500,
    maxHeight: 800,
    resizable: true,
    fullscreen: false,
    title: 'm3u8 Downloader GUI',
    fullscreenable: false,
    webPreferences: {
      nodeIntegration: true,
      devTools: isDev,
      preload: __dirname + '/preload.js',
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

app.on('ready', () => {
  createWindow();

  ipcMain.on('download', async (event, payload: ParsedFetchString) => {
    const { url, method, headers } = payload;

    const result = await axios({
      url,
      method,
      headers,
    });
    console.log(result);
  });
});

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
