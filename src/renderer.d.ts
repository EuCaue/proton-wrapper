export interface IElectronAPI {
  handleChangeProtonApp: (protonAppName: string) => void;
}

declare global {
  interface Window {
    electronAPI: IElectronAPI;
  }
}
