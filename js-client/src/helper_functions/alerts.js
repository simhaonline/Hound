import {toast} from 'react-toastify';

const alertError = (message) => {
    toast(message,{style:{background:"#f85c51",color:"#161616",paddingRight:"20px",paddingLeft:"20px"},progress:undefined,position:"top-center",closeOnClick:true})
}

const alertSuccess = (message) => {
    toast(message,{style:{background:"#161616",paddingRight:"20px"},progress:undefined,position:"bottom-right",closeOnClick:true})
}


export {alertError,alertSuccess};