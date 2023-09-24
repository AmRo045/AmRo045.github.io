export class Storage {
    constructor(private readonly prefix: string) {}

    set(key: string, data: string): void {
        localStorage.setItem(this.getKeyWithPrefix(key), data);
    }

    get(key: string): string | null {
        return localStorage.getItem(this.getKeyWithPrefix(key));
    }

    remove(key: string): void {
        localStorage.removeItem(this.getKeyWithPrefix(key));
    }

    removeAll(): void {
        const allKeys = Object.keys(localStorage).filter((key: string) =>
            key.startsWith(this.prefix)
        );
        allKeys.forEach((key: string) => this.remove(key));
    }

    private getKeyWithPrefix(key: string): string {
        return `${this.prefix}${key}`;
    }
}
