import { FreshContext } from "$fresh/server.ts";
import {Menu}from "../components/Menu.tsx"

const Layout = async(req:Request, ctx:FreshContext)=>{
    const Component= ctx.Component;
    const route= ctx.route;
    const page= route.split("/").pop()|| "default";
    let selected= page;


    return(
        <>
        <Menu class="layout" selected={selected as "Aclient" | "Aserver"}/>
        <Component/>
        </>
    )
}
export default Layout;