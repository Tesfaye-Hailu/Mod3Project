import React from 'react';

function DepartmentFilter({ departments, onChange }) {
  return (
    <div>
      <label htmlFor="department">Filter by Department:</label>
      <select id="department" onChange={onChange}>
        <option value="">All Departments</option>
        {departments.map((department) => (
          <option key={department} value={department}>
            {department}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DepartmentFilter;