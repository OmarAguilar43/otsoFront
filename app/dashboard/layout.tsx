import Header from "./_components/header"
import SideBar from "./_components/_SideBar/Sidebar"

export default function Layout({children,count}:Readonly<{
    children: React.ReactNode
  }>){
    return(
        <div className="w-screen h-screen bg-orange-50">
          <Header/>
          <div className="flex flex-row items-center">
            <SideBar/>
            {children}
            {count}
          </div>
          
        </div>
    )
}