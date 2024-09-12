// import  {  FC, useEffect } from "react"
// import { AiOutlineCheckCircle } from "react-icons/ai";
// import { MdOutlineDangerous } from "react-icons/md";
// import { withAlert } from "../withProvider";

// interface Alert{
//     message: string,
//     type: string;
// }
// interface  AlertProps{
//     alert:Alert|null;
//     removeAlert:()=>void;
// }


// const themeMap = {
//     success: {
//         color: "bg-green-400",
//         Icon: AiOutlineCheckCircle,
//     },
//     error: {
//         color: "bg-red-400",
//         Icon: MdOutlineDangerous,
//     },
// }
// const  Alert:FC<AlertProps>=({ alert, removeAlert }) =>{
//     useEffect(function () {
//         if (alert) {
//             const timer = setTimeout(removeAlert, 2000)
//             return function () {
//                 clearTimeout(timer)
//             }
//         }
//     }, [alert,removeAlert]
//     );

//     if (!alert) {
//         return <></>
//     }


//     const { message, type } = alert;
//     const { Icon, color } = themeMap[type as keyof typeof themeMap];
//     console.log("alert", alert);
    
//     return (
//         <div className="bg-gray-100">
//             <div className="bg-white mx-16 flex justify-between pr-4">
//                 <div className="flex gap-10">
//                     <Icon className={"text-5xl " + color} />
//                     <p className="my-auto text-xl">{message}</p>
//                 </div>
//                 <button className="my-auto underline text-blue-500" onClick={removeAlert}>Dismiss</button>
//             </div>

//         </div>
//     )
// }
// export default withAlert(Alert);

import  {FC, useEffect } from 'react'
import { CgDanger } from "react-icons/cg";
import { GrValidate } from "react-icons/gr";
import { withAlert } from '../withProvider';
type Alert= {
    message: string;
    type: 'success' | 'error';
  }
interface AlertContextType {
    alert: Alert | undefined;
   removeAlert: () => void;
  }
const Alert:FC<AlertContextType>=({alert,removeAlert})=> {
    console.log("alert",alert)
   if(!alert){
    return <></>
   }
   
    const {type,message}=alert
 
   
const myTheme={
    error: {
        color: "bg-red-500",
        Icon : CgDanger,
    },
    success: {
        color: "bg-green-500",
        Icon : GrValidate,
    },

}
useEffect(function() {
   const timer= setTimeout(removeAlert,2000)
    return function (){
        clearTimeout(timer)
    }
},[alert])



const {color,Icon}:{color:any,Icon:any}=myTheme[type as keyof typeof myTheme] as any

  return (
    
   <>
    <div className="flex flex-col mt-4 items-center  justify-center  px-4">
        <div role="alert" id="alert" className={"transition duration-150 ease-in-out w-full lg:w-11/12 mx-auto shadow rounded flex flex-col py-4 md:py-0 items-center md:flex-row justify-between "+color}>
            <div className="flex flex-col items-center md:flex-row">
                <div className={"mr-3 p-4 rounded md:rounded-tr-none md:rounded-br-none text-white " +color}>
                    <Icon/>
                </div>

                <div className="h-1 w-1 bg-gray-300 dark:bg-gray-700 rounded-full mr-2 hidden xl:block"></div>
                <p className="text-sm lg:text-base text-white lg:pt-1 xl:pt-0 sm:mb-0 mb-2 text-center sm:text-left">{message}</p>
            </div>
            <div className="flex xl:items-center lg:items-center sm:justify-end justify-center pr-4">

                <button className="focus:outline-none focus:text-gray-400 hover:text-gray-500 text-sm cursor-pointer text-white " onClick={removeAlert}>Dismiss</button>
            </div>
        </div>
    </div>

    </>
  )
}

export default withAlert(Alert)
