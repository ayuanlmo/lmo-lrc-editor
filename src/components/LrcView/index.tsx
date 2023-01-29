import './style.scss';
import {defineComponent, VNode} from "vue";
import LrcItem from "@/components/LrcView/template/LrcItem";

const LrcView = defineComponent({
    name: 'YLrcView',
    setup() {
        return (): JSX.Element | VNode => {
            return <div class={'lmo-lrc_editor_lrc_view'}>
                <div class={'lmo-lrc_editor_lrc_view_content'}>
                    <div class={'lmo-lrc_editor_lrc_view_content_header lmo_flex_box'}>
                        <div>时间标记</div>
                        <div>歌词</div>
                        <div>操作</div>
                    </div>
                    <div class={'lmo-scroll_view'} style={'overflow-y: auto'}>
                        <div class={'lmo-lrc_editor_lrc_view_content_list'}>
                            <LrcItem />
                        </div>;
                    </div>
                </div>
            </div>;
        };
    }

});

export default LrcView;