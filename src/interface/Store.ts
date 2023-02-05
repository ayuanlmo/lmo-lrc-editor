export interface StoreStateTypes {
    mediaBlob: string;
    lrcList: Array<any>;
    sliderKey: number;
    mediaName: string;
    currentLrcTag: Array<{
        time: string;
        lrc: string;
    }>;
    media: {
        play: boolean;
        currentTime: number;
        duration: number;
    }
}