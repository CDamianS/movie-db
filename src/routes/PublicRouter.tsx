import { TopBar } from "../components/TopBar";
import { Outlet } from "react-router-dom";

const PublicRouter = () =>{
    return(
        <>
            <div>Public Router</div>
            <Outlet />
        </>
    )
}

export default PublicRouter