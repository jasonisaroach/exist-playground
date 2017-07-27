const {app, BrowserWindow, session} = require('electron');
const path = require('path');
const url = require('url')

//global reference for 'window' object.
// Keeps window from terminating after garbage
// collection
let win;

var createWindow = () => {
    // create new browser window
    win = new BrowserWindow({width: 800, height: 600});

    // loads index.html to window
    // win.loadURL(`file://${__dirname}/index.html`)
    win.loadURL(url.format({
      pathname: path.join(__dirname, '../index.html'),
      protocol: 'file:',
      slashes: true
    }));

    // open dev tools
    win.webContents.openDevTools()

    // Emitted on window close
    win.on('closed', () => {
      // de-reference window to delete the element
      win = null;
    });
};

// called after initialization, to prevent early use of
// certain API's
app.on('ready', createWindow);

//Quit after all windows are closed
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  };
});
//abcdefghijklmnopqrstuvwxyz
// active, , before-quit, open-file(macOS), quit, ready, 
// will-finish-launching, will-quit, 
// window-all-closed