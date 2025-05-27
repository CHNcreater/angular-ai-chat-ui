const {app, BrowserWindow} = require('electron');
const path = require('path');

// Error Handling
process.on('uncaughtException', (error) => {
    console.error("Unexpected error: ", error);
});

function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: true,
            enableRemoteModule: false,
        }
    });
    mainWindow.loadURL(`file://${__dirname}/dist/ra-ai-chat/browser/index.html`);
    // mainWindow.webContents.openDevTools();
}

// App Lifecycle
app.whenReady().then(createWindow);
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});
app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
});