/**
 * This component is a button
 * @author ayuanlmo
 * @date 2023/01
 * @event click
 * @event dblclick
 * @param type 'default' |  'primary'
 * **/

import './style.scss';

import {defineComponent} from "vue";

const Button = defineComponent({
    name: 'YButton',
    props: {
        type: {
            type: String,
            default: 'default'
        }
    },
    setup(props, {emit, slots}) {
        const onClick = (evt: any) => {
            emit('click', evt);
        };
        const onDblclick = (evt: any) => {
            emit('dblclick', evt);
        };
        const getButtonClass = (): string => {
            const classNames: Array<string> = ['lmo-button', 'lmo_cursor_pointer'];

            props.type === 'primary' ? classNames.push('lmo-button_primary') : classNames.push('lmo-button_default');
            return classNames.join(' ');
        };

        return (): JSX.Element => {
            return <button
                    class={getButtonClass()}
                    onClick={onClick}
                    onDblclick={onDblclick}
            >{slots.default && slots.default()}</button>;
        };
    }
});

export default Button;