import './style.scss';
import {defineComponent, ref} from "vue";

const YTextarea = defineComponent({
    name: 'YTextarea',
    props: {
        modelValue: {
            type: Object,
            default: () => {
                return {
                    value: ''
                };
            }
        },
        name: {
            type: String,
            default: 'myTextarea'
        },
        id: {
            type: String,
            default: ''
        },
        cols: {
            type: String,
            default: '30'
        },
        rows: {
            type: String,
            default: '10'
        }
    },
    setup(props, {emit}) {
        const inputValue = ref<string>('');

        return (): JSX.Element => {
            return <textarea
                    v-model={props.modelValue.value}
                    class={'lmo-textarea'}
                    name={props.name}
                    id={props.id}
                    cols={props.cols}
                    rows={props.rows}
            />;
        };
    }
});

export default YTextarea;