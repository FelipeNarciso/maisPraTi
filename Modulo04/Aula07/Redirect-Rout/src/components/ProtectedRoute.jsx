import { Navigate } from 'react-router-dom'

function ProtectedRoute({IsloggedIn, children}){ 

    if(!IsloggedIn){
        return <Navigate to='/Login'/>
    }
    return children
}

export default ProtectedRoute