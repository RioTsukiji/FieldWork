import React from "react";
import MenuIcon from "@/components/icons/MenuIcon";

type Props = {
    title: string
};

const Header: React.FC<Props> = ({title}) => {
    return (
        <div className="h-16 bg-blue-800 flex items-center place-content-between p-6">
            <h1 className="text-left text-white text-2xl">{title}</h1>
            <button className="bg-transparent">
                <MenuIcon/>
            </button>
        </div>
    );
};

export default Header;