import '../style.scss';
import {defineComponent} from "vue";
import Header from '@/components/Header';
import MediaController from '@/components/MediaController';


const Home = defineComponent({
    setup() {
        return (): JSX.Element => {
            return <div class={'lmo-lrc_editor lmo_none_user_select lmo_position_absolute'}>
                <Header />
                <MediaController />
            </div>;
        };
    }
});

export default Home;
