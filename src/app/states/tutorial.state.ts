import { Action, Selector, State, StateContext } from "@ngxs/store";
import { Tutorial } from "../models/tutorial.model";
import { Add_Tutorial, Remove_Tutorial } from "../actions/tutorial.action";

export class Tutorial_State_Model {
    tutorials: Tutorial[] = []
}

@State<Tutorial_State_Model>({
    name: "tutorials",
    defaults: {
        tutorials: []
    }
})

export class Tutorial_State {
    @Selector()
    static get_tutorials(state: Tutorial_State_Model) {
        return state.tutorials;
    }

    @Action(Add_Tutorial)
    add({ getState, patchState }: StateContext<Tutorial_State_Model>, { payload }: Add_Tutorial) {
        const state = getState();
        patchState({
            tutorials: [...state.tutorials, payload]
        })
    }

    @Action(Remove_Tutorial)
    remove({ getState, patchState }: StateContext<Tutorial_State_Model>, { payload }: Remove_Tutorial) {
        patchState({
            tutorials: getState().tutorials.filter(a => a.name != payload)
        })
    }
}