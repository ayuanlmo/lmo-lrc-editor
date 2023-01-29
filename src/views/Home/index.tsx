import '../style.scss';
import {defineComponent} from "vue";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LrcView from '@/components/LrcView';
import MediaController from '@/components/MediaController';

const Home = defineComponent({
    name: 'YHome',
    setup() {
        return (): JSX.Element => {
            return <div class={'lmo-lrc_editor lmo_none_user_select lmo_position_absolute'}>
                <Header/>
                <MediaController/>
                <LrcView />
                <Footer/>
            </div>;
        };
    }
});

export default Home;
