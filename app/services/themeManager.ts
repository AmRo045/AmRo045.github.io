import { Emitter } from "./emitter";
import { Storage } from "./storage";

export enum Theme {
    Light = "light",
    Dark = "dark",
    Preferred = "preferred",
}

export class ThemeManager extends Emitter {
    private readonly storage: Storage;
    constructor(
        private readonly root: HTMLElement | null,
        private readonly key: string,
        public readonly defaultTheme: Theme | null
    ) {
        super();
        this.storage = new Storage("__");
        this.listenToPreferredColorSchemeChanges();
    }

    set(theme: Theme): void {
        this.storage.set(this.key, theme);

        if (theme === Theme.Preferred) {
            this.apply(ThemeManager.getPreferredColorScheme());
        } else {
            this.apply(theme);
        }
    }

    get(): Theme {
        const current = this.storage.get(this.key);
        if (current) return current as Theme;

        this.storage.set(this.key, this.getDefaultTheme());
        return this.getDefaultTheme();
    }

    toggle(): void {
        const current = this.get();
        if (current === Theme.Preferred) return;

        this.set(current === Theme.Light ? Theme.Dark : Theme.Light);
    }

    restore(): void {
        const saved = this.get();
        if (saved === Theme.Preferred)
            this.apply(ThemeManager.getPreferredColorScheme());
        else this.apply(saved);
    }

    private getDefaultTheme(): Theme {
        return this.defaultTheme ?? Theme.Light;
    }

    private apply(theme: Theme): void {
        this.root!.dataset.theme = theme;
        this.emit("change");
    }

    private listenToPreferredColorSchemeChanges(): void {
        if (typeof window === "undefined") return;

        window
            .matchMedia("(prefers-color-scheme: dark)")
            .addEventListener("change", this.onPreferredColorSchemeChanged);
    }

    private static getPreferredColorScheme(): Theme {
        if (typeof window === "undefined") return Theme.Dark;

        const isDark =
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches;
        return isDark ? Theme.Dark : Theme.Light;
    }

    private onPreferredColorSchemeChanged = (e: MediaQueryListEvent): void => {
        if (this.get() === Theme.Preferred) {
            this.apply(ThemeManager.getPreferredColorScheme());
        }
    };
}
