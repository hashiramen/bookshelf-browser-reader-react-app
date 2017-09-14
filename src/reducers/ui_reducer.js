import _ from 'lodash'
import { ui as uiAction} from '../actions/constants'

const initialState = {
    open: true
}

export const ui = {}

ui.switchNavigation = (state = initialState, action) => {
    console.log(state.open)
    switch(action.type)
    {
        case uiAction.SWITCH_NAVIGATION:
            return { open: !state.open }
    }

    return state
}