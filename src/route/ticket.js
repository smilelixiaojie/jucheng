import Ticket from "../view/ticket"
export default [
    {
        path:"/ticket/:id/:sid",
        exact:true,
        component:Ticket,
        nameStr:"演出详情",
        isShow:false
    }
]