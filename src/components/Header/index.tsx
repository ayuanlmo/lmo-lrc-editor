import './style.scss';
import {defineComponent, ref, watch} from "vue";
import AppConfig from "@/config/AppConfig";
import {SelectFile} from "@/utils";
import {AnalyzeLrcs, AnalyzeAudio, CreateTag, ExportLrc} from "@/components/Header/funcs";
import LmoAudioPlayer from "@/components/AudioPlayer";
import Store from "@/store";

const Header = defineComponent({
    name: 'YHeader',
    setup() {
        const showImportLrcDialog = ref<boolean>(false);
        const inputValue = ref<string>('');
        const PlayState = ref<boolean>(false);
        const Player = new LmoAudioPlayer('');
        const selectMedia = (): void => {
            SelectFile().then((file: File) => {
                Store.commit('SET_MEDIA_NAME', file.name);
                Player.ResetURL(URL.createObjectURL(file));
                AnalyzeAudio(Player.Ref() as HTMLAudioElement);
            });
        };
        const onConfirm = (): void => {
            onCancel();
            AnalyzeLrcs(inputValue.value);
        };
        const onCancel = (): void => {
            showImportLrcDialog.value = false;
        };

        return (): JSX.Element => {
            return <div class={'lmo-lrc_editor_header'}>
                <Y-Dialog
                        title={'粘贴/输入歌词'}
                        onConfirm={onConfirm}
                        onCancel={onCancel}
                        onClose={onCancel}
                        modelValue={showImportLrcDialog}>
                    <Y-Textarea modelValue={inputValue}/>
                </Y-Dialog>
                <div class={'lmo-lrc_editor_header_content lmo_flex_box'}>
                    <div class={'lmo-lrc_editor_header_content_title '}>
                        <h2 class={'lmo_cursor_pointer_hover'}>{AppConfig.AppName}</h2>
                    </div>
                    <div>
                        <Y-Button
                                onclick={selectMedia}
                                type={'primary'}>
                            导入歌曲
                        </Y-Button>
                        <Y-Button
                                onclick={() => {
                                    showImportLrcDialog.value = true;

                                }
                                }>
                            导入歌词
                        </Y-Button>
                        <Y-Button onclick={() => {
                            CreateTag();
                        }
                        }>打Tag</Y-Button>
                        <Y-Button onclick={() => {
                            if (!Player.Canplay) return;
                            if (!PlayState.value) {
                                Player.Play(false);
                                PlayState.value = true;
                            } else {
                                PlayState.value = false;
                                Player.Pause();
                            }
                        }}>
                            {PlayState.value ? '暂停' : '播放'}
                        </Y-Button>
                        <Y-Button>预览</Y-Button>
                        <Y-Button onclick={async () => {
                            await ExportLrc();
                        }}>导出歌词</Y-Button>
                    </div>
                </div>
            </div>;
        };
    }
});

export default Header;