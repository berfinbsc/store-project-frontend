import React from 'react'

export default function Profile() {


const {user,logOut}=useContext(AuthContext);




  return (
    <div>
        Hello {user.name}
        <button onClick={logOut}>Logout</button>

    </div>
  )
}
