type EventWithListeners = {
    name: string;
    callbacks: CallableFunction[];
};

export type EmitterArgs = { [key: string]: any };

export abstract class Emitter {
    protected listeners: EventWithListeners[] = [];

    on(name: string, callback: CallableFunction): void {
        const event = this.listeners.find(
            (x: EventWithListeners) => x.name === name
        );
        if (event) {
            event.callbacks.push(callback);
            return;
        }

        this.listeners.push({ name, callbacks: [callback] });
    }

    removeListener(name: string, callbackToRemove: CallableFunction): void {
        for (const listener of this.listeners) {
            if (listener.name === name) {
                listener.callbacks = listener.callbacks.filter(
                    (callback: CallableFunction) =>
                        callback === callbackToRemove
                );
            }
        }
    }

    protected emit(name: string): void {
        const event = this.listeners.find(
            (x: EventWithListeners) => x.name === name
        );
        if (!event) return;
        event.callbacks.forEach((callback: CallableFunction) => callback());
    }

    protected emitWithArgs(name: string, args: EmitterArgs): void {
        const event = this.listeners.find(
            (x: EventWithListeners) => x.name === name
        );
        if (!event) return;
        event.callbacks.forEach((callback: CallableFunction) => callback(args));
    }
}
