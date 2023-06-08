import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type CreaterState = {
    route: Array<Route>;
    routeNumber: number;
    loading: boolean;
    error: boolean;
    errorMessage: string;
}

export type Route = {
    spot: string;
    startTime: string;
    endTime: string;
}

export const initialRouteState: Route = {
    spot: "乃木坂",
    startTime: "14:00",
    endTime: "14:30",
}
export const initialState: CreaterState = {
    route: [initialRouteState],
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
        incrementInputBox(state, action: PayloadAction<Route>){
            state.route.push(action.payload)
        },
    }
})

export default createrSlice;