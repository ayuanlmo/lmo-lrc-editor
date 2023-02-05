import {computed} from "vue";
import {mapState, useStore} from "vuex";

export const useMapState = (keys: Array<string>): any => {
    const store = useStore();
    const State = {};
    const SF = mapState(keys);

    Object.keys(SF).forEach((key) => {
        // @ts-ignore
        State[key] = computed(SF[key].bind({$store: store}));
    });

    return State;
};