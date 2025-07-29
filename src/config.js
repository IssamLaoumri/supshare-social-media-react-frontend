export const BASE_URL = '';
export const HOME_PATH = '';

export const MenuOrientation = {
    VERTICAL: 'vertical',
    HORIZONTAL: 'horizontal'
}

export const ThemeMode =  {
    LIGHT: 'light',
    DARK: 'dark',
    SYSTEM: 'system'
}

export const ThemeDirection = {
    LTR: 'ltr',
    RTL: 'rtl'
}

const config = {
    menuOrientation: MenuOrientation.HORIZONTAL,
    miniDrawer: false,
    fontFamily: 'Poppins, sans-serif',
    borderRadius: 24,
    outlineFilled: true,
    mode: ThemeMode.DARK,
    presetColor: 'default',
    i18n: 'en',
    themeDirection: ThemeDirection.LTR,
    container: false
}

export default config;