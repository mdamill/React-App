import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Protected({ children, authentication = true }) {
    const navigate = useNavigate()
    const authStatus = useSelector((state) => state.auth.status)

    const [loader, setLoader] = useState(true)

    useEffect(() => {
        // Protect private routes
        if (authentication && !authStatus) {
            navigate("/login")
        } 
        // Prevent showing login/signup if already logged in
        else if (!authentication && authStatus) {
            navigate("/")
        }
        setLoader(false)
    }, [authStatus, authentication, navigate])

    if (loader) {
        return <h1>Loading...</h1>
    }

    return <>{children}</>
}

export default Protected
