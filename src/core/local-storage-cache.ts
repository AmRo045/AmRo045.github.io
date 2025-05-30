type CacheValue<T> = {
    value: T;
    expiresAt?: number;
};

export default class LocalStorageCache {
    constructor(private readonly prefix: string) {}

    get<T>(key: string): T | null {
        const serializedValue = localStorage.getItem(this.getKey(key));

        if (serializedValue) {
            const decodedValue = this.decodeBase64(serializedValue);
            const value: CacheValue<T> = JSON.parse(decodedValue);

            if (!this.isExpired(value)) {
                return value.value;
            }
            this.remove(key);
        }

        return null;
    }

    set<T>(key: string, value: T, expiresInMs?: number): void {
        const cacheValue: CacheValue<T> = { value };

        if (expiresInMs) {
            cacheValue.expiresAt = Date.now() + expiresInMs;
        }

        const serializedValue = JSON.stringify(cacheValue);
        const encodedValue = this.encodeBase64(serializedValue);

        localStorage.setItem(this.getKey(key), encodedValue);
    }

    remove(key: string): void {
        localStorage.removeItem(this.getKey(key));
    }

    private getKey(key: string): string {
        return `${this.prefix}_${key}`;
    }

    private isExpired<T>(value: CacheValue<T>): boolean {
        if (!value.expiresAt) {
            return false;
        }
        const now = Date.now();

        return now >= value.expiresAt;
    }

    private encodeBase64(value: string): string {
        const encoder = new TextEncoder();
        const data = encoder.encode(value);
        const dataArray = Array.from(data.slice());

        return btoa(String.fromCharCode(...dataArray));
    }

    private decodeBase64(value: string): string {
        const decoder = new TextDecoder();
        const data = Uint8Array.from(atob(value), (c) => c.charCodeAt(0));

        return decoder.decode(data);
    }
}
