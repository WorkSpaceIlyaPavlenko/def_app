import {ToastContainer} from 'react-toastify'
export default function ModalRoot(){
    return(
        <>
            <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            pauseOnHover
            />
        </>
    )
}