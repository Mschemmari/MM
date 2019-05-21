import { API } from '../../api/api';

const asyncActionTypesCodes = ['GET_DATA',];

const createAsyncActionType = name => {
    if (typeof name !== 'string') {
        // eslint-disable-next-line no-console
        console.warn(
            `Multiple async action middleware expected a string, instead recieved ${typeof name}`
        ); // eslint-disable-line no-console
    }
    return {
        START: name,
        SUCCESS: `${name}_SUCCESS`,
        FAIL: `${name}_FAIL`,
    };
};

const asyncActionTypes = {};
// eslint-disable-next-line no-restricted-syntax
for (const code of asyncActionTypesCodes) {
    asyncActionTypes[code] = createAsyncActionType(code);
}

const apiActions = {
    getData: () => async dispatch => {
        dispatch({ type: asyncActionTypes.GET_DATA.START });
        try {
            const data = await API.getData();
            dispatch({ type: asyncActionTypes.GET_DATA.SUCCESS, data });
            return data;
        } catch (e) {
            console.log(e);

            dispatch({ type: asyncActionTypes.GET_DATA.FAIL });
        }

        return null;
    },
}

export { asyncActionTypes };

export default apiActions