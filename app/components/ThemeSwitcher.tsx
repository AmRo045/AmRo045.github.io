import { useEffect, useState } from "react";
import { Theme, ThemeManager } from "../services/themeManager";
import styles from "./ThemeSwitcher.module.css";

import DarkThemeIcon from "./svg/DarkThemeIcon";
import LightThemeIcon from "./svg/LightThemeIcon";
import PreferredThemeIcon from "./svg/PreferredThemeIcon";

const themeManager = new ThemeManager(
    typeof document === "undefined" ? null : document.documentElement,
    "theme",
    Theme.Preferred
);

const ThemeSwitcher = (): JSX.Element => {
    const [theme, setTheme] = useState<Theme>(themeManager.defaultTheme!);
    const [isRestored, setIsRestored] = useState<boolean>(false);

    const getIcon = () => {
        switch (theme) {
            case Theme.Light:
                return <LightThemeIcon />;
            case Theme.Dark:
                return <DarkThemeIcon />;
            case Theme.Preferred:
                return <PreferredThemeIcon />;
        }
    };

    const handleClick = () => {
        if (theme === Theme.Light) setTheme(Theme.Preferred);
        else if (theme === Theme.Dark) setTheme(Theme.Light);
        else if (theme === Theme.Preferred) setTheme(Theme.Dark);
    };

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
    }, []);

    useEffect(() => {
        if (!isRestored) return;
        themeManager.set(theme);
    }, [theme, isRestored]);

    if (!isRestored) return <></>;

    return (
        <button className={styles.button} onClick={handleClick}>
            {getIcon()}
        </button>
    );
};

export default ThemeSwitcher;
