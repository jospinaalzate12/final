import { Card } from "@mui/material";
import Footer from "../Footer";
import NavBar from "../NavBar";


export default function Layout({children}){//chidren guarda todo el contemido que haya en layout
    return(
        <div style={{display:'grid',justifyContent:'center'}}>
        <NavBar></NavBar>
        <Card sx={{
            minHeight:'85vh',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
        }}>
               {children}
        </Card>
     
        <Footer></Footer>
        </div>
    )
}