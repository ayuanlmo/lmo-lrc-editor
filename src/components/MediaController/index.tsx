import './style.scss';

import {defineComponent} from "vue";
import Slider from '@/components/Slider';

const MediaController = defineComponent({
    setup() {
        return (): JSX.Element => {
            return <div class={'lmo-lrc_editor_media_controller'}>
                <div class={'lmo_flex_box'}>
                    <div class={'lmo-lrc_editor_media_controller_media_name'}>
                        《忽然》-李志
                    </div>
                    <div class={'lmo-lrc_editor_media_controller_slider lmo_position_relative'}>
                        <Slider value={20} />
                    </div>
                    <div class={'lmo-lrc_editor_media_controller_sec'}>
                        00:00:00
                    </div>
                </div>
            </div>;
        };
    }
});

export default MediaController;