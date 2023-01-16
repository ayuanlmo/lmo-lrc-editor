import './style.scss';
import {defineComponent, onMounted, ref, watch} from "vue";

const Slider = defineComponent({
    name: 'YComponentSlider',
    props: {
        value: {
            type: Number,
            default: 0,
            required: true
        },
        disable: {
            type: Boolean,
            default: false
        }
    },
    setup(props, {emit}) {
        const value = ref<number>(0);
        const isMouseDown = ref<boolean>(false);
        const elId = ref<string>(String(parseInt(String(Math.random() * 100))));

        const init: Function = (): void => {
            value.value = props.value / 100;
        };
        const mousedownHandler = (evt: any) => {
            if (props.disable)
                return;
            const e: any = evt ? evt : window.event;
            const sliderRef: Element | null | any = document.getElementById(`lmo_slider${elId.value}`);

            if (e !== undefined && sliderRef) {
                e.preventDefault();
                e.stopPropagation();
                isMouseDown.value = true;
                const mouseX: number = sliderRef.getBoundingClientRect().left;
                const w: number = sliderRef.offsetWidth;

                document.addEventListener('mousemove', mousemove);
                document.addEventListener("mouseup", mouseup);
                value.value = Math.min(1, Math.max(0, (evt.clientX - mouseX) / w));
                emit('change', value.value);

                function mousemove(evt: any) {
                    evt.preventDefault();
                    evt.stopPropagation();
                    const x: number = evt.clientX - mouseX;

                    value.value = Math.min(1, Math.max(0, x / w));
                    emit('change', value.value);
                }

                function mouseup(evt: any) {
                    evt.preventDefault();
                    evt.stopPropagation();

                    document.removeEventListener("mousemove", mousemove);
                    document.removeEventListener("mouseup", mouseup);
                    isMouseDown.value = false;
                }
            }
        };

        onMounted((): void => {
            init();
        });

        watch(props, (): void => {
            init();
        });

        return (): JSX.Element => {
            return <div class={'lmo-lrc_editor_slider lmo_cursor_pointer lmo_position_relative'}
                        id={`lmo_slider${elId.value}`}
                        onMousedown={mousedownHandler}>
                <div class={'lmo-lrc_editor_slider_bg lmo_position_absolute'}/>
                <div class={'lmo-lrc_editor_slider_progress lmo_position_absolute'}
                     style={`width:${value.value * 100}%`}/>
                <div class={'lmo-lrc_editor_slider_key'}
                     style={`left:${value.value * 100}%`}
                     onMousedown={mousedownHandler}/>
            </div>;
        };
    }
});

export default Slider;