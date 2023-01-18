import {App} from 'vue';
import Button from '@/components/Element/Button';
import Dialog from '@/components/Element/Dialog';

export default {
    install(app: App) {
        app.component(Button.name, Button);
        app.component(Dialog.name, Dialog);
    }
};