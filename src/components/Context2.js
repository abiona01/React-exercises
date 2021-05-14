import React from 'react'
import {UserContext, ChallengeContext} from '../App'

function Context2() {
    return (
        <div>
          <UserContext.Consumer>
            {user => {
                return(
                    <ChallengeContext.Consumer>
                        {challenge => {
                            return(
                                <h1>
                                    User context value: {user}. Challenge title is: {challenge}
                                </h1>
                            )
                        }}
                    </ChallengeContext.Consumer>
                )
            }}
            </UserContext.Consumer>  
        </div>
    )
}

export default Context2
