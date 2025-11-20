import React from 'react';
import UserItem from './UserItem';

const UserList = ({ users, onEdit, onDelete }) => {
  return (
    
      Users List
      {users.length === 0 ? (
        No users found. Add one to get started!
      ) : (
        users.map((user) => (
          
        ))
      )}
    
  );
};

export default UserList;
