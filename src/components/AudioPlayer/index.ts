/**
 * This component is an audio player
 * @author ayuanlmo
 * @date 2023/01
 * @class LmoAudioPlayer
 * @constructor
 * @param url {string} Audio url
 * **/

export default class LmoAudioPlayer {
    private Url: string;
    private Audio: HTMLAudioElement;
    private IsDestroy: boolean;
    public Canplay: boolean;

    public constructor(public url: string) {
        this.Url = url;
        this.IsDestroy = false;
        this.Canplay = false;
        this.Audio = new Audio(this.Url);
        this.CreatePlayer();
    }

    private CreatePlayer(): void {
        if (this.Audio === null && !this.IsDestroy) {
            this.Audio = new Audio(this.Url);
        }
        this.Audio.addEventListener('ended', () => {
            this.Pause().then(async () => {
                await this.Pause();
            });
        });
        this.Audio.addEventListener('canplay', () => {
            this.Canplay = true;
        });

    }

    public ResetURL(url: string): void {
        this.Audio.src = url;
        this.Url = url;
        this.Load();
    }

    public Load(): void {
        this.Audio.load();
    }

    public Play(sfc: boolean = true): void {
        this.Pause().then(async () => {
            if (sfc) {
                this.Audio.currentTime = 0;
                setTimeout(async () => {
                    await this.Audio.play();
                });
            } else {
                await this.Continue();
            }
        });
    }

    public Ref(): HTMLAudioElement | null {
        return this.Audio;
    }

    public CanplayType(type: string): boolean {
        return this.Audio.canPlayType(type) !== '';
    }

    public Destroy(): void {
        if (!this.Audio.paused) {
            this.Audio.pause();
        }
        // @ts-ignore
        this.Audio = null;
        this.IsDestroy = true;
    }

    public SetVolume(v: number): void {
        this.Audio.volume = v;
    }

    public AddEventListener(event: string, listener: any): void {
        if (event)
            this.Audio.addEventListener(event, listener);
    }

    public RemoveEventListener(event: string, listener: any): void {
        if (event)
            this.Audio.removeEventListener(event, listener);
    }

    public SetCurrentTime(time: number): void {
        this.Audio.currentTime = time;
    }

    public Pause(): Promise<void> {
        return new Promise((resolve) => {
            setTimeout(() => {
                if (!this.Audio.paused)
                    this.Audio.pause();
                resolve();
            });
        });
    }

    public async Continue(): Promise<void> {
        await this.Audio.play();
    }
}