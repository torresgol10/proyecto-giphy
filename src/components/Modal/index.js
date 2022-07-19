
import { createPortal } from "react-dom"
import "./style.css"
function Modal( {children, onClose} ){
    
    return <div className="modal">
        <div className="modal-content">
            <button className="modal-close" onClick={onClose}>X</button>
            {children}
        </div>
    </div>
}

export default function ModalPortal({children, onClose}) {
    return createPortal(<Modal onClose={onClose}>{children}</Modal>, document.getElementById("modal-root"))
}