import './style.scss';
import {defineComponent} from "vue";
import Slider from '@/components/Slider';
import {useMapState} from "@/store/hooks";
import {FormatSec} from "@/utils";

const MediaController = defineComponent({
    name: 'YMediaController',
    setup() {
        const State = useMapState(['sliderKey','mediaName','media']);

        return (): JSX.Element => {
            return <div class={'lmo-lrc_editor_media_controller'}>
                <div class={'lmo_flex_box'}>
                    <div class={'lmo-lrc_editor_media_controller_media_name'}>
                        {State.mediaName.value === '' ? '请选择音频' : State.mediaName.value}
                    </div>
                    <div class={'lmo-lrc_editor_media_controller_slider lmo_position_relative'}>
                        <Slider value={State.sliderKey.value}/>
                    </div>
                    <div class={'lmo-lrc_editor_media_controller_sec'}>
                        {
                            FormatSec(parseInt(State.media.value.currentTime))
                        }
                        <span>/</span>
                        {
                            FormatSec(parseInt(State.media.value.duration))
                        }
                    </div>
                </div>
            </div>;
        };
    }
});

export default MediaController;