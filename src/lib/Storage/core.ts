import {IsArray, ToString} from "@/utils";

export default class Store {
    private readonly Storage: Storage;

    public constructor(public type: string = 'local') {
        this.Storage = type === 'local' ? localStorage : sessionStorage;
    }

    public Set(key: string, value: string, sync: boolean = false): void | Promise<any> {
        if (key !== '') {
            if (sync) return new Promise((resolve, reject) => {
                // @ts-ignore
                const _ = this.Storage.setItem(key, require('@/utils').toString(val)) ?? null;

                if (!_) resolve(true);
                else reject(this);
            });
            this.Storage.setItem(key, ToString(value));
        }
    }

    public SetAll(data: Array<any>): this {
        if (IsArray(data))
            data.forEach((i: {
                key: string;
                value: string;
            }) => {
                if (i.key !== '')
                    if (i.value !== '' && ToString(i.value) !== '')
                        this.Storage.setItem(i.key, i.value);
            });
        return this;
    }

    public GetKeys(): Array<string> {
        const arr: Array<string> = [];

        for (let i = 0; i < this.Storage.length; i += 1) {
            // @ts-ignore
            arr.push(this.Storage.key(i));
        }
        return arr;
    }

    public ForEach(): Array<{
        key: string;
        value: string;
    }> {
        const arr: Array<{
            key: string;
            value: string;
        }> = [];

        for (let i = 0; i < this.Storage.length; i += 1) {
            const k = this.Storage.key(i) ?? '';

            arr.push({
                key: k ?? '__',
                value: this.Get(k)
            });
        }
        return arr;
    }

    public Is(key: string): any {
        this.ForEach().find((i) => {
            return i.key === key;
        });
    }

    public Remove(key: string): void {
        if (key !== '')
            return this.Storage.removeItem(key);
    }

    public RemoveAll(): void {
        this.Storage.clear();
    }

    public Get(key: string): string {
        return this.Storage.getItem(key) ?? '';
    }
}