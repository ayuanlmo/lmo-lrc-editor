import './style.css';
import {createApp} from 'vue';
import Root from './Root';

((): void => {
    createApp(Root).mount(document.getElementById('lmo-app') ?? 'lmo-app');
})();
