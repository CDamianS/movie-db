import { TopBar } from "../components/TopBar";
import { Outlet } from "react-router-dom";

const PrivateRouter = () =>{
    return(
        <>
            <TopBar />
            <Outlet />
        </>
    )
}

export default PrivateRouter