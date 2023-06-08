"use client"

import PlusIcon from "@/components/icons/Plusicon";
import React from "react";
import { useDispatch } from 'react-redux';
import createrSlice from '../slice';
import { useCreaterState } from '../selectors';
import {initialRouteState} from "../slice";

const AddButton = () => {
    const dispatch = useDispatch();
    const state = useCreaterState().creater;
    const handleLogout = async () => {
        await dispatch(createrSlice.actions.incrementRoute(1))
        await dispatch(createrSlice.actions.incrementInputBox(initialRouteState))
        console.log(state.route)
    }
    return (
        <button className="w-full py-2 px-4 bg-transparent" onClick={handleLogout}>
            <PlusIcon/>
        </button>
    );
};

export default AddButton;