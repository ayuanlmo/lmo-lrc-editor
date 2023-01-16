import '@/style/lmo-style.scss';
import '@/style/default.css';
import '@/style/animate.min.css';
import {defineComponent} from "vue";
import Home from '@/views/Home';

const Root = defineComponent({
    name: 'YRootApp',
    setup() {
        return (): JSX.Element => {
            return <Home/>;
        };
    }
});

export default Root;
