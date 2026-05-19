import { create } from "zustand";
import {Dark, Light} from '../styles/themes'

interface ThemeState {
    theme: string;
    themeStyle: any; // O el tipo correcto para tus temas
    setTheme: () => void;
}

export const useThemeStore = create<ThemeState>((set, get) => ({
    theme: "light",
    themeStyle: Light,
    setTheme: () => {
        const { theme } = get();
        set({
            theme: theme === "light" ? "dark" : "light"
        })
        set({
            themeStyle: theme === "light" ? Dark : Light
        })
    }
}));