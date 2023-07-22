import { useEffect, useState } from "react";

const Userlist = () => {
    const [freshUser, setFreshUser] = useState(null)
    
    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch('https://bankwithus.onrender.com/api/users')
            const json = await response.json()
            console.log(json)
            
            if (response.ok) {
                setFreshUser(json)
                console.log(json)
            }
        }
        fetchUsers()
    }, [])
  return (
    <div>
      <h1>Users login detail</h1>
      <div>
      <table>
            <thead>
                <th>User Email</th>
                <th>User Password</th>
            </thead>
        { freshUser ? freshUser.data.map((user) =>(
                <tbody>
                    <td>{user.email}</td>
                    <td>{user.password}</td>
                </tbody>
            
        )): "No users Yet"}
        </table>
      </div>
    </div>
  )
}

export default Userlist;
