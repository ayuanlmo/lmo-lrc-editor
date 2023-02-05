import Store from '@/store/index';
import {CreateTextFile, DownloadFile, FormatSec} from "@/utils";
import AppConfig from "@/config/AppConfig";

let TagIndex: number = 0;

// 解析歌词
export const AnalyzeLrcs = (lrc: string): void => {
    Store.commit('SET_LRC_LIST', lrc.split('\n').filter(i => {
        return i !== '';
    }));
};

// 解析音频信息
export const AnalyzeAudio = (Audio: HTMLAudioElement): void => {
    Audio.addEventListener('canplaythrough', () => {
        Store.commit('SET_MEDIA_CURRENT_DURATION', Audio.duration);// 当前音频持续时间
    });
    Audio.addEventListener('timeupdate', () => {
        Store.commit('SET_SLIDER_KEY', Math.ceil(parseInt(String(Audio.currentTime)) / Audio.duration * 100));// 当前进度
        Store.commit('SET_MEDIA_CURRENT_TIME', Audio.currentTime);// 当前音频播放时间
    });
};

// 创建Tag
export const CreateTag = () => {
    Store.commit('SET_CURRENT_LRC_TAG', {
        time: FormatSec(Store.state.media.currentTime, true),
        lrc: Store.state.lrcList[TagIndex]
    });

    TagIndex += 1;
};

// 导出歌词文件
export const ExportLrc = () => {
    let texts: string = '';

    texts += `[ar]:\n`;// 艺人
    texts += `[ti]:\n`;// 曲名称
    texts += `[al]:\n`;// 专辑名
    texts += `[offset]:\n`;// 补偿
    texts += `[by]:${AppConfig.AppName}\n`;
    texts += `[by:Chapter Chang]${AppConfig.AppName}\n`;
    Store.state.currentLrcTag.map((i: any) => {
        texts += `[${i.time}] ${i.lrc}\n`;
    });
    const Blob = CreateTextFile(texts);

    DownloadFile({
        download: `${Store.state.mediaName}.lrc`,
        href: Blob
    }).then((a: HTMLAnchorElement) => {
        a.click();
        URL.revokeObjectURL(Blob);
    });
};