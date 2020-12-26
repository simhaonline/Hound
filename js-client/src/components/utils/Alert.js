import React from 'react'
import { ToastContainer, toast } from 'react-toastify';

function Alert() {
    const notify = () => {
        toast("Welcome to Photon!",{style:{background:"black",paddingRight:"20px"},progress:undefined,position:"bottom-right"})
    };
    setTimeout(() => {
        notify()
    },2000)
    return (
        <ToastContainer
            autoClose={5000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
      />
    )
}

export default Alert
