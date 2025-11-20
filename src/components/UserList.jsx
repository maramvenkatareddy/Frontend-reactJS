import React from 'react';
import UserItem from './UserItem';

const UserList = ({ users, onEdit, onDelete }) => {
  return (
    <div className="user-list">
      <h3>Users List</h3>
      {users.length === 0 ? (
        <p>No users found. Add one to get started!</p>
      ) : (
        users.map((user) => (
          <UserItem
            key={user.id}
            user={user}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))
      )}
    </div>
  );
};

export default UserList;
