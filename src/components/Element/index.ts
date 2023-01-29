import {App} from 'vue';
import Button from '@/components/Element/Button';
import Dialog from '@/components/Element/Dialog';
import MessageBox from "@/components/Element/MessageBox";
import SvgIcon from "@/components/SvgIcon";

export default {
    install(app: App) {
        app.component(Button.name, Button);
        app.component(Dialog.name, Dialog);
        app.component(MessageBox.name, MessageBox);
        app.component(SvgIcon.name, SvgIcon);
    }
};