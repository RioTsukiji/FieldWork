"use client"
import React, {ReactNode} from "react";
import AddButton from "./AddButton";
import Route from './Route'
import {useCreaterState} from "@/ducks/create/selectors";

type Props = {

};

const List: React.FC<Props> = ({}) => {
    const state = useCreaterState().creater;
    return (
        <div className="flex flex-col w-1/3 ">
            {
                state.route.map((value,index:number)=>(
                    <Route key={index} index ={index} />
                ))
            }
            <AddButton/>
        </div>
    );
};

export default List;