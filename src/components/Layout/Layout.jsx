import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";



export default function Layout(){
    return(<>
    <Navbar />
    <div className="mt-11 ms-5 me-5">
        <Outlet/>
    </div>
    <Footer/>
    </>)
}