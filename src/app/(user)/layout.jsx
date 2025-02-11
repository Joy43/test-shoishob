
import UserSidebarNav from "./_components/usernavbar"


export const metadata={
  title:"User Dashboad"
}
export default function userlayout({children}) {
  return (
    <div>
      
        <div className="h-full w-64 flex-col fixed inset-y-0 z-50 bg-[#oc1e2f] shadow-md">
        <UserSidebarNav/>
        </div>
       
      <div className="ml-64">
      {
        children
      }
      </div>
    </div>
  )
}

