// Basic init
const electron = require('electron')
const { app, BrowserWindow, } = electron
const path = require('path')
const url = require('url')

// To avoid being garbage collected
let mainWindow


/** */
function createWindow() {
	mainWindow = new BrowserWindow({ width: 1024, height: 768, })

	const startUrl = url.format({
		pathname: path.join(__dirname, './build/index.html'),
		protocol: 'file:',
		slashes: true,
	})

	mainWindow.loadURL(startUrl)

	mainWindow.on('closed', () => {
		// Dereference the window object, usually you would store windows
		// in an array if your app supports multi windows, this is the time
		// when you should delete the corresponding element.
		mainWindow = null
	})

}

app.on('ready', () => createWindow())

// Quit when all windows are closed.
app.on('window-all-closed', () => {
	// On OS X it is common for applications and their menu bar
	// to stay active until the user quits explicitly with Cmd + Q
	if (process.platform !== 'darwin') {
		app.quit()
	}
})

app.on('activate', function () {
	// On OS X it's common to re-create a window in the app when the
	// dock icon is clicked and there are no other windows open.
	if (mainWindow === null)
		createWindow()
})