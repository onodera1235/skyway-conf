import { decorate, observable, action } from "mobx";

class UiStore {
  error: Error | null;
  isSettingsOpen: boolean;
  isChatOpen: boolean;

  constructor() {
    this.error = null;
    this.isSettingsOpen = true;
    // TODO: debug
    // this.isChatOpen = false;
    this.isChatOpen = true;
  }

  showError(err: Error): Error {
    this.error = err;
    return err;
  }
}
decorate(UiStore, {
  error: observable.ref,
  isSettingsOpen: observable,
  isChatOpen: observable,
  showError: action
});

export default UiStore;
