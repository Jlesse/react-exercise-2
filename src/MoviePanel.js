import React from 'react';
import UserList from './UserList.js';

function MoviePanel(props){
  const {users, likedBy, movieName} = props;
  return(
    <div className='MoviePanel'>
      <h1>{movieName}</h1>
      <UserList users={users} likedBy={likedBy}/>
    </div>
  )
}

export default MoviePanel;