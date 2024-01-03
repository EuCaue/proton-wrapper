const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  handleChangeProtonApp: (protonAppName: string) =>
    ipcRenderer.send("change-app", protonAppName),
});
