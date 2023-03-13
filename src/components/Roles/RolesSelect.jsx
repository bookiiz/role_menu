import { useState } from 'react';

const RoleSelect = ({ onChange }) => {
  const [selectedRole, setSelectedRole] = useState('user');
  
  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
    onChange(event.target.value);
  };
  
  return (
    <div className="role-select">
      <label htmlFor="role-select">Select role:</label>
      <select id="role-select" value={selectedRole} onChange={handleRoleChange}>
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>
    </div>
  );
};

export default RoleSelect;
