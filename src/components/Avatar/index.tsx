import React from 'react'
import { useAppContext } from '../../hooks/useAppContext'

const Avatar = () => {

    const context = useAppContext()

    if (!context.user) {
        return <h1>Loading ...</h1>
    }
    return (
        <div>
            
            <img src={context.user?.img} alt="" width="100px" height="100px"/>
            <p>{context.user?.name}</p>
        </div>
    )
}

export default Avatar