'use client'
import 'react'
import { useEffect } from 'react'

const Error = ({error}: {error: Error}) => {
    useEffect(() => {
        console.log(error);
    }, [error])
    return (
        <div>ERROR...</div>
    )
}

export default Error