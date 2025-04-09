import { HomeIcon } from "@primer/octicons-react";
import { LuStore, LuTruck, LuUser, LuUsers, LuWheat } from "react-icons/lu";
import { RiUserLocationFill } from "react-icons/ri";
import { NavItem } from './NavItem';


export default function SideBar(){
    return(
        <nav className="w-[10vh] h-[90vh] bg-orange-400 flex flex-col items-center py-20 justify-center gap-10">
            
            <NavItem icon= {<LuStore className="text-4xl"/>} path="/dashboard"/>
            <NavItem icon={<LuTruck className="text-4xl"/>} path="/dashboard/providers"/>
            <NavItem icon={<LuWheat className="text-4xl"/>}path="/dashboard/products"/>
            <NavItem icon={<LuUser className="text-4xl"/>} path="/dashboard/managers"/>
            <NavItem icon={<LuUsers className="text-4xl"/>  } path="/dashboard/employees"/>
        </nav>
    )
}