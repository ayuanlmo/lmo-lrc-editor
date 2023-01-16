import {createStore} from "vuex";
import {StoreStateTypes} from "@/interface/Store";
import * as TYPE from '@/const/MutationTypes';

const Store = createStore<any>({
    state(): StoreStateTypes {
        return {
            mediaBlob: '',
            lrcList: [],
            currentLrcTag: [],
            media: {
                play: false,
                currentTime: 0,
                duration: 0
            }
        };
    },
    mutations: {
        [TYPE.SET_MEDIA_BLOB](state: StoreStateTypes, payLoad: string): void {
            state.mediaBlob = payLoad;
        },
        [TYPE.SET_LRC_LIST](state: StoreStateTypes, payLoad: Array<string>): void {
            state.lrcList = payLoad;
        },
        [TYPE.SET_CURRENT_LRC_TAG](state: StoreStateTypes, payLoad: Array<{ time: string, lrc: string }>): void {
            state.currentLrcTag = payLoad;
        },
        [TYPE.SET_MEDIA_PLAY_STATE](state: StoreStateTypes, payLoad: boolean | undefined | null): void {
            state.media.play = payLoad ?? false;
        },
        [TYPE.SET_MEDIA_CURRENT_TIME](state: StoreStateTypes, payLoad: number): void {
            state.media.currentTime = payLoad;
        },
        [TYPE.SET_MEDIA_CURRENT_DURATION](state: StoreStateTypes, payLoad: number): void {
            state.media.duration = payLoad;
        },
        [TYPE.RESET_CURRENT_AUDIO](state: StoreStateTypes) {
            state.media = {
                play: false,
                currentTime: 0,
                duration: 0
            };
        },
        [TYPE.RESET_CURRENT_LRC_TAG](state: StoreStateTypes) {
            state.currentLrcTag = [];
        },
        [TYPE.RESET_LRC_LIST](state: StoreStateTypes) {
            state.lrcList = [];
        }
    }
});

export default Store;