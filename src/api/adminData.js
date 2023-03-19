import ClearUser from "../adminDashboard/ClearUser";
import CreateSchedule from "../adminDashboard/CreateSchedule";
import Users from "../adminDashboard/Users";
import VerifyUsers from "../adminDashboard/VerifyUsers";


 const items= [
   
    {
        id: "userData",
        label:'User data',
        component: <Users />
        
    },
    {
        id: "verifyUser",
        label:'verify users',
        component: <VerifyUsers />
        
    },
    {
        id:"schedules",
        label:"create schedule",
        component:<CreateSchedule />
    },{
        id:"clearUser",
        label:"clear users",
        component:<ClearUser />
    }
    
]
export  default items