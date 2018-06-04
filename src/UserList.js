import React from 'react'

function UserList(props){
  const {likedBy, users} = props;
    if(!likedBy){
      return (<div className='liked-by'><p>None of the current users liked this movie.</p></div>)
    }else{
      return (<div className='liked-by'>
                <p>Liked By:</p>
                <ul>
                  {likedBy.map( userID => (
                    <li key={userID}>{users[userID].name}</li>
                  ))}
                </ul>
              </div>)
    }
}

export default UserList;