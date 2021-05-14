import React, {useContext} from 'react'
import Context2 from './Context2'
import {UserContext, ChallengeContext} from '../App'

function Context1() {

    const user = useContext(UserContext)
    const challenge = useContext(ChallengeContext)
    return (
        <h1>
           {user} - {challenge} 
           <Context2 />
        </h1>
    )
}

export default Context1
