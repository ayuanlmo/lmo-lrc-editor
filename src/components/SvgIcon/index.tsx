import './style.scss';
import SVG_ICON from "@/lib/SvgIcon";
import {defineComponent, ref} from "vue";

const SvgIcon = defineComponent({
    name: 'YSvgIcon',
    props: {
        path: {
            type: String,
            default: ''
        },
        fill: {
            type: String,
            default: ''
        }
    },
    setup(props, {emit}) {
        const svg = ref<string>('');
        const handleClick = (e: any) => {
            emit('click', e);
        };

        new SVG_ICON(props.path, props.fill).CREATE().then((res: string) => {
            svg.value = res;
        });

        return (): JSX.Element => {
            return <span onClick={handleClick} class={'lmo-svg'} v-html={svg.value}></span>;
        };
    }
});

export default SvgIcon;