import './style.scss';
import {defineComponent} from "vue";
import AppConfig from "@/config/AppConfig";
import "@/components/Element/Button";

const Header = defineComponent({
    name: 'YHeader',
    setup() {
        return (): JSX.Element => {
            return <div class={'lmo-lrc_editor_header'}>
                <div class={'lmo-lrc_editor_header_content lmo_flex_box'}>
                    <div class={'lmo-lrc_editor_header_content_title '}>
                        <h2 class={'lmo_cursor_pointer_hover'}>{AppConfig.AppName}</h2>
                    </div>
                    <div>
                        <Y-Button type={'primary'}>按钮</Y-Button>
                        <Y-Button>导入歌词</Y-Button>
                        <Y-Button>打Tag</Y-Button>
                        <Y-Button>播放</Y-Button>
                        <Y-Button>预览</Y-Button>
                        <Y-Button>导出歌词</Y-Button>
                    </div>
                </div>
            </div>;
        };
    }
});

export default Header;