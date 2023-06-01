import React, {ReactNode} from "react";

type Props = {
    value: number|string,
    setNumber: ReactNode,
    label?: string
};

const InputBox: React.FC<Props> = ({value,setValue,label}) => {
    return (
        <div className="flex flex-col p-2.5 w-48 items-center">
            <label className="text-text text-2xl text-center">{label}</label>
            <input type="number" value={value} onChange={event => setValue(event.target.value)} className="bg-secondary w-40 h-12 rounded-xl text-2xl text-center" />
        </div>
    );
};

export default InputBox;