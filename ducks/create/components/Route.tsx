import React, {ReactNode} from "react";
import {useCreaterState} from "@/ducks/create/selectors";

type Props = {
    index: number;
};

const Route: React.FC<Props> = ({index}) => {
    const state = useCreaterState().creater;
    return (
        <div className="flex flex-row h-1/6 place-content-between p-6">
            <h1 className="text-2xl">{state.route[index]["spot"]}</h1>
            <div className="flex flex-row">
                <h2 className="text-2xl">{state.route[index]["startTime"]}</h2>
                <h2 className="text-2xl">-</h2>
                <h2 className="text-2xl">{state.route[index]["endTime"]}</h2>
            </div>
        </div>
    );
};

export default Route;