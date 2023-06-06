import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type CreaterState = {
    course: Array<Route>;
    routeNumber: number;
    loading: boolean;
    error: boolean;
    errorMessage: string;
}

type Route = {
    startSpot: string;
    endSpot: string;
    startTime: string;
    endTime: string;
}

const initialRouteState: Route = {
    startSpot: "乃木坂",
    endSpot: "けやき坂",
    startTime: "",
    endTime: "",
}
export const initialState: CreaterState = {
    course: [initialRouteState],
    routeNumber: 0,
    loading: false,
    error: false,
    errorMessage: '',
};

const createrSlice = createSlice({
    name: 'creater',
    initialState,
    reducers: {
        incrementRoute(state, action: PayloadAction<number>){
            state.routeNumber += action.payload
        },
    }
})

export default createrSlice;