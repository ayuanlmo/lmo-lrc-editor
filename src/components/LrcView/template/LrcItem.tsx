import {defineComponent} from "vue";
import delIcon from '@/assets/svg/del.svg';
import editIcon from '@/assets/svg/edit.svg';

const LrcItem = defineComponent({
    name: 'YLrcItem',
    props: {
        lrc: {
            type: String,
            default: ''
        },
        index: {
            type: Number,
            default: 0
        }
    },
    setup(props) {
        return (): JSX.Element => {
            const Click = () => {

            };

            return <div class={'lmo-lrc_editor_lrc_view_content_list_item lmo_flex_box lmo_cursor_pointer'}>
                <div>00:00</div>
                <div>{props.lrc}</div>
                <div>
                    <Y-SvgIcon onClick={Click} path={delIcon}/>
                    <Y-SvgIcon path={editIcon}/>
                </div>
            </div>;
        };
    }
});

export default LrcItem;