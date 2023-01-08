import {defineComponent} from "vue";

const Home = defineComponent({
    setup() {
        return (): JSX.Element => {
            return <div class={'lmo-video_cut_home lmo_none_user_select lmo_position_absolute'}>
               App
            </div>;
        };
    }
});

export default Home;
