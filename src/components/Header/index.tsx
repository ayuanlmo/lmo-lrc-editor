import './style.scss';
import {defineComponent} from "vue";
import AppConfig from "@/config/AppConfig";

const Header = defineComponent({
    setup() {
        return (): JSX.Element => {
            return <div class={'lmo-lrc_editor_header'}>
                <div class={'lmo-lrc_editor_header_content'}>
                    <div class={'lmo-lrc_editor_header_content_title '}>
                        <h2 class={'lmo_cursor_pointer_hover'}>{AppConfig.AppName}</h2>
                    </div>
                </div>
            </div>;
        };
    }
});

export default Header;