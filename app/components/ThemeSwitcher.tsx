import { useThemeContext } from "@/app/providers/ThemeProvider";
import { Theme } from "@/app/services/themeManager";

import ToolButton from "@/app/components/common/ToolButton";
import DarkThemeIcon from "@/app/components/svg/DarkThemeIcon";
import LightThemeIcon from "@/app/components/svg/LightThemeIcon";
import PreferredThemeIcon from "@/app/components/svg/PreferredThemeIcon";

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
        <ToolButton onClick={handleClick} title={theme}>
            {getIcon()}
        </ToolButton>
    );
};

export default ThemeSwitcher;
