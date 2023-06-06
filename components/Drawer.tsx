import React from "react";
import MenuIcon from "@/components/icons/MenuIcon";
import Link from 'next/link';
import LogoutButton from "@/ducks/logout/LogoutButton";

type Props = {
    title?: string
};

const Drawer: React.FC<Props> = ({title}) => {
    return (
        <div className="drawer-end">
            <input id="my-drawer" type="checkbox" className="drawer-toggle"/>
            <div className="drawer-content">
                <label htmlFor="my-drawer">
                    <MenuIcon/>
                </label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer" className="drawer-overlay "></label>
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content text-2xl relative z-50">
                    <li className="m-4"><Link href='/top'>ダッシュボード</Link></li>
                    <li className="m-4"><Link href='/create'>巡検コース作成</Link></li>
                    <li className="m-4"><Link href='/edit'>巡検コース編集</Link></li>
                    <li className="m-4"><Link href='/document'>ドキュメントの作成</Link></li>
                    <div className="m-4">
                        <LogoutButton/>
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default Drawer;