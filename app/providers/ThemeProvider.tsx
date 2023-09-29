import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { Theme, ThemeManager } from "@/app/services/themeManager";

type ThemeContextProps = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
    isRestored: boolean;
};

const ThemeContext = createContext<ThemeContextProps | null>(null);

type Props = {
    children: React.ReactNode;
};

export const ThemeProvider = ({ children }: Props) => {
    const themeManager = useMemo(() => {
        return new ThemeManager(
            typeof document === "undefined" ? null : document.documentElement,
            "theme",
            Theme.Preferred
        );
    }, []);

    const [isRestored, setIsRestored] = useState<boolean>(false);
    const [theme, setTheme] = useState<Theme>(themeManager.defaultTheme!);

    const handleThemeChange = (newTheme: Theme) => {
        if (newTheme === undefined) return;

        setTheme(newTheme);
    };

    useEffect(() => {
        themeManager.restore();
        setTheme(themeManager.get());
        setIsRestored(true);

        themeManager.on("change", handleThemeChange);
        return () => themeManager.removeListener("change", handleThemeChange);
    }, [themeManager]);

    useEffect(() => {
        if (!isRestored) return;
        themeManager.set(theme);
    }, [theme, isRestored, themeManager]);

    const value = {
        theme,
        setTheme,
        isRestored,
    };

    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    );
};

export const useThemeContext = (): ThemeContextProps => {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error(
            "useThemeContext must be used inside the ThemeProvider"
        );
    }

    return context;
};
