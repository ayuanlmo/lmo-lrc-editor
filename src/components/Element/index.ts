import {App} from 'vue';
import Button from '@/components/Element/Button';

export default {
    install(app: App) {
        app.component(Button.name, Button);
    }
};