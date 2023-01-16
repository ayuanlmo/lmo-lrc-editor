export interface StoreStateTypes {
    mediaBlob: string;
    lrcList: Array<any>;
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