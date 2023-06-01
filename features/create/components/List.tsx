import React, {ReactNode} from "react";

type Props = {

};

const List: React.FC<Props> = ({}) => {
    return (
        <div className="flex flex-col w-1/3 ">
            <div className="flex flex-row h-1/6 place-content-between p-6">
                <h1 className="text-2xl">乃木坂</h1>
                <div className="flex flex-row">
                    <h2 className="text-2xl">14:00</h2>
                    <h2 className="text-2xl">→</h2>
                    <h2 className="text-2xl">14:30</h2>
                </div>
            </div>
            <div className="flex flex-row h-1/6 place-content-between p-6">
                <h1 className="text-2xl">けやき坂</h1>
                <div className="flex flex-row">
                    <h2 className="text-2xl">14:30</h2>
                    <h2 className="text-2xl">→</h2>
                    <h2 className="text-2xl">15:00</h2>
                </div>
            </div>
            <div className="flex flex-row h-1/6 place-content-between p-6">
                <h1 className="text-2xl">日向坂</h1>
                <div className="flex flex-row">
                    <h2 className="text-2xl">15:00</h2>
                    <h2 className="text-2xl">→</h2>
                    <h2 className="text-2xl">16:30</h2>
                </div>
            </div>
        </div>
    );
};

export default List;