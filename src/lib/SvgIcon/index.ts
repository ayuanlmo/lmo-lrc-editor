/**
 * @class SVG_ICON
 * @constructor
 * @param path {string} not null
 * @param fill {string}
 * @author ayuanlmo
 * @method {CREATE} Promise<string>
 *
 * **/
export default class SVG_ICON {
    private readonly path: string;
    private readonly fill: string;

    constructor(path: string, fill: string = '') {
        this.path = path;
        this.fill = fill;
    }

    public CREATE(): Promise<string> {
        return new Promise((resolve, reject) => {
            const xhr: XMLHttpRequest = new XMLHttpRequest();

            xhr.open('get', this.path, false);
            xhr.addEventListener('load', (res: any) => {
                const svg: string = res.target.response;

                resolve(this.fill === '' ? svg : svg.replace('fill="#E7E7E7"', `fill="${this.fill}"`));
            });
            xhr.send();
        });
    }
}