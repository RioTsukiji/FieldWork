import React from "react";
import Drawer from "@/components/Drawer";

type Props = {
    title: string
};

const Header: React.FC<Props> = ({title}) => {
    return (
        <div className="h-16 bg-blue-800 flex items-center place-content-between p-6 relative z-50">
            <h1 className="text-left text-white text-2xl">{title}</h1>
            <Drawer/>
        </div>
    );
};

export default Header;