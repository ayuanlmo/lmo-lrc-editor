import AppConfig from "@/config/AppConfig";
import Store from "@/lib/Storage/core";

const Namespace: string = AppConfig.StorageOptions.Namespace;
const LmoStorage: Store = new Store(Namespace);

export const set: Function = (key: string, value: any) => {
    return LmoStorage.Set(`${Namespace}${key}`, value, false);
};

export const get: Function = (key: string) => {
    return LmoStorage.Get(`${Namespace}${key}`);
};

export const remove: Function = (key: string) => {
    return LmoStorage.Remove(`${Namespace}${key}`);
};

export const clear: Function = (): void => {
    LmoStorage.RemoveAll();
};