import '../style.scss';
import {defineComponent} from "vue";
import Header from '@/components/Header';

const Home = defineComponent({
    setup() {
        return (): JSX.Element => {
            return <div class={'lmo-lrc_editor lmo_none_user_select lmo_position_absolute'}>
                <Header />
            </div>;
        };
    }
});

export default Home;
