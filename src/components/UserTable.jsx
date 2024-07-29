import { PropTypes } from "prop-types"

export default function UserTable({ users, deleteUser, editRow }) {

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th style={{ textAlign: 'center' }}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.length > 0 
          ? (users.map(user => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td style={{ 
                  display: 'flex', 
                  justifyContent: 'center',
                  gap: '2rem',
                }}>
                  <p 
                    style={{ 
                      cursor: 'pointer',
                      fontSize: '25px' 
                    }} 
                    onClick={() => editRow(user)}
                  >
                    &#128397;
                  </p>

                  <p 
                    style={{ 
                      cursor: 'pointer', 
                      fontSize: '25px' 
                    }} 
                    onClick={() => deleteUser(user.id)}>
                    &#128465;
                  </p>
                </td>

              </tr>
            )))
          : (
            <tr>
              <td colSpan={3}>No users</td>
            </tr>
          )
        }   
      </tbody>
    </table>
  )
}

UserTable.propTypes = {
  users: PropTypes.array,
  deleteUser: PropTypes.func,
  editRow: PropTypes.func
}
