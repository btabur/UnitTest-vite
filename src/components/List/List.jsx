import React from 'react'

const List = ({users}) => {
  return (
  <table className='table  table-hover'>
    <thead>
      <tr>
        <th>İsim</th>
        <th>EMail</th>
        <th>Yaş</th>
      </tr>
    </thead>
    <tbody data-testid="table-body">
        {users.map((user,i) => (
          <tr key={i}>
            <td>{user.name} </td>
            <td>{user.email}</td>
            <td>{user.age}</td>
          </tr>
        ))}
      </tbody>
  </table>
  )
}

export default List