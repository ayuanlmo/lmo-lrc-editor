import './style.css';
import {createApp} from 'vue';
import Root from './Root';
import Element from "@/components/Element";

((): void => {
    createApp(Root).use(Element).mount(document.getElementById('lmo-app') ?? 'lmo-app');
})();
