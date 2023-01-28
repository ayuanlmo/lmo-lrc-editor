import './style.scss';
import {defineComponent, VNode} from "vue";

const Footer = defineComponent({
    name: 'YFooter',
    setup() {
        return (): JSX.Element | VNode => {
            return <div class={'lmo-lrc_editor_footer lmo_position_absolute'}>
                <div class={'lmo-lrc_editor_footer_info'}>
                    <span>Powered by Vue.js on Vite</span>
                    <span>Design by 阿柒</span>
                </div>
            </div>;
        };
    }
});

export default Footer;