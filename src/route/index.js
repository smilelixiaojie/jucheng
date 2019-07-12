import Home from "../view/home";
import Move from "../view/move";
import Picket from "../view/picket";
import Mine from "../view/mine";
import Login from "../view/login";

export default [
    {
        path:"/",
        exact:true,
        component:Home,
        nameStr:"首页",
        isShow:true
    },
    {
        path:"/move",
        exact:false,
        component:Move,
        nameStr:"影院",
        isShow:true
    },
    {
        path:"/picket",
        exact:false,
        component:Picket,
        nameStr:"票夹",
        isAuthorization:true,
        isShow:false
    },
    {
        path:"/mine",
        exact:false,
        component:Mine,
        nameStr:"我的",
        isAuthorization:true,
        isShow:false
    },
    {
        path:"/login",
        exact:false,
        component:Login,
        nameStr:"登陆",
        isShow:false
    }
]