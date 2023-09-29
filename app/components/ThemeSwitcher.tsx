import styles from "./ThemeSwitcher.module.css";

import { Theme } from "../services/themeManager";
import { useThemeContext } from "../providers/ThemeProvider";

import DarkThemeIcon from "./svg/DarkThemeIcon";
import LightThemeIcon from "./svg/LightThemeIcon";
import PreferredThemeIcon from "./svg/PreferredThemeIcon";

const ThemeSwitcher = (): JSX.Element => {
    const { theme, setTheme, isRestored } = useThemeContext();

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

    if (!isRestored) return <></>;

    return (
        <button className={styles.button} onClick={handleClick} title={theme}>
            {getIcon()}
        </button>
    );
};

export default ThemeSwitcher;
