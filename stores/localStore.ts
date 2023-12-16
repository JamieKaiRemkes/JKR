const LOCAL_STORAGE_KEY = "settings";

const defaultSettings = {
  cookieConsent: false,
};

export const useLocalStore = defineStore("localStore", {
  state: () => ({
    settings: defaultSettings,
  }),
  hydrate(state, initialState) {
    const settings = localStorage.getItem(LOCAL_STORAGE_KEY);
    state.settings = settings ? JSON.parse(settings) : initialState;
  },
  getters: {
    getSettings(state): typeof defaultSettings {
      return this.settings;
    },
    getCookieConsent(state): boolean {
      return this.getSettings.cookieConsent;
    },
  },
  actions: {
    updateSettings(partialSettings: Partial<typeof defaultSettings>) {
      this.settings = {
        ...this.getSettings,
        ...partialSettings,
      };

      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(this.settings));
    },
    acceptCookies() {
      this.updateSettings({
        cookieConsent: true,
      });
    },
    disableCookies() {
      this.updateSettings({
        cookieConsent: false,
      });
    },
  },
});
