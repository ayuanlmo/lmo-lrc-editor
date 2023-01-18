/**
 * This component is a dialog
 * @component YDialog
 * @author ayuanlmo
 * @attribute title {String}
 * @attribute modelValue {@type Ref} {bool}
 * @event close - close dialog {void}
 * @event cancel - cancel event {void}
 * @event confirm - confirm event {void}
 * @description 颖-对话框 & Ying-Dialog
 * @eg <Y-Dialog title="MyDialog" v-model="value">
 *     or use 'h' function
 *     h('YDialog',{
 *         title:''MyDialog,
 *         modelValue:value
 *     },['your slots']);
 * **/

import './style.scss';
import {defineComponent, ref, watch} from "vue";
import closeSVG from '@/assets/svg/close.svg';

const Dialog = defineComponent({
    name: 'YDialog',
    props: {
        title: {
            type: String,
            default: 'lmo Dialog'
        },
        modelValue: {
            type: Object,
            default: () => {
                return {
                    value: false
                };
            }
        }
    },
    setup(props, {slots, emit}) {
        const show = ref<boolean>(props.modelValue.value);

        const closeDialog = (): void => {
            emit('close');
            show.value = false;
        };
        const keydown = (evt: KeyboardEvent) => {
            if (evt.code === 'Escape' && evt.keyCode === 27)
                closeDialog();
        };

        watch(show, () => {
            show.value ? addEventListener('keydown', keydown) : removeEventListener('keydown', keydown);
        });
        watch(props, () => {
            if (props.modelValue.value)
                show.value = true;
        });

        return (): JSX.Element => {
            return show.value ?
                    <div class={'lmo-dialog lmo_position_absolute animated fadeIn'}
                         ref={'dialog'}>
                        <div class={'lmo-dialog_content lmo_position_relative animated fadeInDown'}>
                            <div class={'lmo-dialog_content_header lmo_flex_box lmo_none_user_select'}>
                                <div class={'lmo-dialog_content_header_title'}>{props.title}</div>
                                <div class={'lmo-dialog_content_header_close'}>
                                    <img onClick={closeDialog} class={'lmo_cursor_pointer'} src={closeSVG} alt="close"/>
                                </div>
                            </div>
                            <div class={'lmo-dialog_content_view lmo_position_absolute'}>
                                {
                                        slots.default && slots.default()
                                }
                            </div>
                            {
                                slots.footer ? slots.footer() : <div class={'lmo-dialog_footer lmo_position_absolute'}>
                                    <Y-Button onClick={() => {
                                        emit('cancel');
                                    }
                                    }>取消</Y-Button>
                                    <Y-Button type={'primary'} onClick={emit('confirm')}>确定</Y-Button>
                                </div>
                            }
                        </div>
                    </div> : <div></div>;
        };
    }
});

export default Dialog;