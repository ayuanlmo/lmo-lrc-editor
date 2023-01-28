/**
 * This component is a message box
 * @component Ying-MessageBox
 * @author ayuanlmo
 * @attribute text {String}
 * @attribute type {String} 'success' or 'warning' default value at 'success'
 * @event render - render message-box {void}
 * @event close - close {void}
 * @description 颖-消息框 & Ying-MessageBox
 * @eg <Y-MessageBox title="My Ying Message box" type="success">
 *     or use 'h' function
 *     h('Y-MessageBox',{
 *         title:'My Ying Message box',
 *         type:'success',
 *     },[]);
 * **/
import './style.scss';
import {defineComponent, ref, Teleport, VNode} from "vue";
import successIcon from '@/assets/svg/success.svg';
import warningIcon from '@/assets/svg/warning.svg';

const MessageBox = defineComponent({
    name: 'YMessageBox',
    props: {
        title: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            default: 'success'
        }
    },
    setup(props, {emit}) {
        const show = ref<boolean>(true);
        const className = ref<string>('animated fadeInDown lmo-message_box lmo_position_absolute lmo_none_user_select');

        if (props.type === 'success')
            className.value += ' lmo-message_box_success';
        else
            className.value += ' lmo-message_box_warning';

        emit('render');

        setTimeout(() => {
            show.value = false;
            emit('close');
        }, 3000);

        return (): JSX.Element | VNode => {
            return show.value ? <Teleport to={'body'}>
                <div ref={'YMessageBox'}
                     class={className.value}>
                    <div class={'lmo_flex_box lmo-message_box_content'}>
                        <div>
                            {
                                props.type === 'warning' ? <img src={warningIcon} alt=""/> :
                                        <img src={successIcon} alt=""/>
                            }
                        </div>
                        <div>
                            {props.title}
                        </div>
                    </div>
                </div>
            </Teleport> : <div></div>;
        };
    }
});

export default MessageBox;