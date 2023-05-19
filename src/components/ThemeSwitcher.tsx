import { useEffect, useState } from "react";
import styles from "./ThemeSwitcher.module.css";
import { ThemeManager, Theme } from "../services/themeManager";

import { ReactComponent as PreferredThemeIcon } from "../assets/svg/preferred-theme.svg";
import { ReactComponent as DarkThemeIcon } from "../assets/svg/dark-theme.svg";
import { ReactComponent as LightThemeIcon } from "../assets/svg/light-theme.svg";

const themeManager = new ThemeManager(
    document.documentElement,
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
