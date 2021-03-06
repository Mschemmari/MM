import { asyncActionTypes } from '../actions/api-actions'

const InitialState = {
    isLoading: false,
    images: []
}

const data = (state = { ...InitialState }, action) => {
    switch (action.type) {
        case asyncActionTypes.GET_DATA.START:
            return { ...state, isLoading: true, }
        case asyncActionTypes.GET_DATA.SUCCESS:

            return { ...state, images: action.data }
        case asyncActionTypes.GET_DATA.FAIL:
            return { ...state, isLoading: false }
        default:
            return state;
    }
}

export default data