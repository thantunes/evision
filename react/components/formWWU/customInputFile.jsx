import "./styles.global.css";
import { useRef, useEffect, useState } from 'react'



const InputFile = () => {
    const file = useRef()
    const [up, setup] = useState(false)

    useEffect(() => {
        function updateScrollPosition(e) {
            console.log(e, 'epa')
            e.target.value == "" ? setup(false) : setup(true)
        }

        if (file && file.current) {
            file.current.addEventListener("change", updateScrollPosition, false);
        }

        console.log('file', file)
    }, [])
    return (
        <div className="InputFile-app">
            <div className="InputFile-parent">
                <div className="InputFile-file-upload">
                    
                    <h3>{up ? "Arquivo selecionado" : "Faça o upload do seu currículo aqui"}</h3>
                    <input ref={file} className="InputFile-input" type="file" />

                </div>
            </div>
        </div>
    );
}

export { InputFile }