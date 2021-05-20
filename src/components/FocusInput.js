import React, {useEffect,useRef} from 'react'

function FocusInput() {

    const Inputref = useRef(null)

    useEffect(() => {
        Inputref.current.focus()
    }, [])
    return (
        <div>
            <input type="text" ref={Inputref} />
        </div>
    )
}

export default FocusInput
