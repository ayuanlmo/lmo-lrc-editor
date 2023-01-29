import {defineComponent} from "vue";
import delIcon from '@/assets/svg/del.svg';
import editIcon from '@/assets/svg/edit.svg';

const LrcItem = defineComponent({
    name: 'YLrcItem',
    setup() {
        return (): JSX.Element => {
            const Click = () => {
                console.log('emm');
            };

            return <div class={'lmo-lrc_editor_lrc_view_content_list_item lmo_flex_box lmo_cursor_pointer'}>
                <div>00:00</div>
                <div>昨天在梦里，我又见到你</div>
                <div>
                    <Y-SvgIcon onClick={Click} path={delIcon}/>
                    <Y-SvgIcon path={editIcon}/>
                </div>
            </div>;
        };
    }
});

export default LrcItem;