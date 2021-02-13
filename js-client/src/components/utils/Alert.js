import React from 'react'
import { ToastContainer} from 'react-toastify';

function Alert() {
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
