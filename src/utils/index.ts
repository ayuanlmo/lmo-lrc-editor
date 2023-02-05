import {CreateFileBase64StringTypes} from "@/interface/Utils";

export const CreateWebSocketUrl: Function = (url: string = location.origin): string => {
    const urls: Array<string> = location.origin.split(':');
    const origin: string = location.host;

    if (urls[0].indexOf('http') !== -1)
        return urls[0] === 'https' ? `wss:${origin}${url}` : `ws:${origin}${url}`;
    return url;
};

export const IsObject: Function = (data: any = {}): boolean => {
    return typeof data === 'object' && Object.prototype.toString.call(data).toLowerCase() === '[object object]' && data.length;
};

export const IsArray: Function = (data: any): boolean => {
    return Object.prototype.toString.call(data) === "[object Array]";
};

export const ToString: Function = (data: any): string => {
    if (typeof data === 'boolean')
        return `${data}`;
    if (typeof data === 'string')
        return data;
    if (typeof data === 'number')
        return `${data}`;
    if (typeof data === 'object' && IsObject(data))
        return JSON.stringify(data);
    return '';
};

export const IsString: Function = (str: any = ''): boolean => {
    return typeof str === 'string';
};

export const CreateFileBase64String: Function = (file: File): Promise<string> => {
    return new Promise(function (resolve, reject) {
        const fr: FileReader = new FileReader();

        fr.readAsDataURL(file);

        // @ts-ignore
        fr.onload = function (res: CreateFileBase64StringTypes): void {
            resolve(res.srcElement.result ?? res.target.result);
        };
        fr.onerror = (msg) => {
            reject(msg);
        };
    });
};

export const SelectFile: Function = (multiple: false): Promise<any> => {
    return new Promise((resolve, reject) => {
        const i: HTMLInputElement = document.createElement('input');

        if (multiple)
            i.multiple = true;
        i.type = 'file';
        i.addEventListener('change', () => {
            // @ts-ignore
            resolve(multiple ? i.files : i.files[0]);
        });
        i.click();
    });
};

export const GetRouterQuery: Function = (): object => {
    const res: Array<string> = [];
    const query: object = {};

    location.search.split('?').map((i: string) => {
        if (i !== '')
            res.push(i);
    });
    res.map((i: string) => {
        i.split('&').map((j: string) => {
            const arr: Array<string> = j.split('=');

            // @ts-ignore
            query[arr[0]] = arr[1];
        });
    });
    return {};
};

export const DownloadFile: Function = (conf: {
    download: string,
    href: string
}): Promise<any> => {
    const a: HTMLAnchorElement = document.createElement('a');

    return new Promise((resolve, reject) => {
        a.download = `${conf.download}`;
        a.href = conf.href;
        resolve(a);
    });
};

export const FormatSec: Function = (sec: number, isMs: boolean): string => {
    if (isMs)
        sec /= 10000;

    let s: string = String(parseInt(String(sec / 60)));
    let s1 = String(parseInt(String(sec % 60)));

    if (s.length === 1)
        s = `0${s}`;
    if (s1.length === 1)
        s1 = `0${s1}`;
    return `${s}:${s1}`;
};

export const CreateFormData: Function = (data: object = {}) => {
    const fd: FormData = new FormData();

    Object.keys(data).map((i: string) => {
        if (data.hasOwnProperty(i)) {
            // @ts-ignore
            fd.append(i, data[i]);
        }
    });
};

export const GetMediaType: Function = (mediaName: string): string => {
    if (mediaName === '')
        return '';
    return mediaName.split('.')[1];
};

export const CreateHTTPQueryParams: Function = (data: object = {}): string => {
    let str = '?';

    Object.keys(data).map((i: string) => {
        // @ts-ignore
        str += `${i}=${data[i]}&`;
    });
    return str.substring(0, str.length - 1);
};

export const IsMobileDevice: Function = (): boolean => {
    const type: object | null = navigator.userAgent.match(/Mobile/i);

    return type !== null;
};

export const CreateFileBlobUrl: Function = (file: File): any[] | string => {
    return URL.createObjectURL(file);
};

export const CreateTextFile = (text: string) => {
    return URL.createObjectURL(new Blob([text],{
        type:'text/plain;charset=utf-8'
    }));
};