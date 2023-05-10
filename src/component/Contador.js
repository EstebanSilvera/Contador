import React, { useState } from 'react'

const Contador = () => {

    const [contador, setContador] = useState(0)
    const [id, setId] = useState(0)

    const autoContador = () => {
        setContador((prevContador) => prevContador + 1)
        console.log(contador)
    }

    return (
        <div>
            <div className='back'>

                <main className='conta'>

                    <h1 align="center" className='h1'>{contador}</h1>
                    <div className='button'>
                        <button onClick={() => setContador(contador + 1)} className='increase'>AUMENTAR 1</button>

                        <button onClick={() => setContador(0)} className='reset'>BORRAR</button>

                        <button onClick={() => {
                            setInterval(autoContador, 1000);
                            setId(id + 1)
                        }} className='auto'>AUTO INCREASE</button>
                    </div>

                </main>

            </div>
        </div>
    )
}

export default Contador