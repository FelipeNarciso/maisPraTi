import { useEffect, useState } from "react";

function UserProfile() {
    const [user, setUser] = useState(null)

    useEffect(() => {
        const fetchUserData = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
            const userData = await response.json()
            setUser(userData)
        }

        fetchUserData()

        return () => setUser(null)
    }, [])

    return (
        <div>
            {user ? (
                <div>
                    <h1>{user.name}</h1>
                    <h1>{user.email}</h1>
                </div>
                    
            ): (
                <p>Carregando perfil do usuário</p>
            )}
        </div>
    )
}

export default UserProfile