import { useEffect, useState } from "react"
import LeftHome from "../components/leftHome"
import RightHome from "../components/rightHome"


const GlobalFeed = () => {

    return (
        <div className='h-[100vh] w-[100vw] flex'>
            <LeftHome/>
            <div className="h-[100vh] w-[60%] flex flex-col space-y-2 overflow-auto">
                GlobalFeed
            </div>
            <RightHome />
        </div>
    )
}

export default GlobalFeed