import './style.css';
import {createApp} from 'vue';
import Root from './Root';
import Element from "@/components/Element";
import Store from "@/store";

((): void => {
    createApp(Root).use(Element).use(Store).mount(document.getElementById('lmo-app') ?? 'lmo-app');
})();
