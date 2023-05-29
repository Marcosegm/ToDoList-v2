import { useState } from "react"

const useStorageListener = (sicronize) => {
    
    const [storageChange, setStorageChange] = useState(false);

    window.addEventListener("storage", (change) => {
        if (change.key === "TODOS_V1") {
            console.log("hubo cambios ")
            setStorageChange(true);
        }
    });

    const toggleShow = () => {
        sicronize();
        setStorageChange(false);
    }

    return {
        show:storageChange,
        toggleShow: toggleShow
  
    }
    
}

export {useStorageListener}