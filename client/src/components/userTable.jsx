import { useEffect, useState } from "react";
const UserTable = () => {

  const [userData, setUserData] = useState([]);

  useEffect(() => {
      fetch('http://localhost:3001/user/getAllUsers')
      .then((response) => response.json())
      .then((data) => {
          setUserData(data.data)
      })
      .catch(() => console.error('Error obteniendo datos.'));
  }, []);

  return (
      <div className='container-table'>
          <h3 className='text-center mb-4'> Usuarios </h3>
          <table className="table table-striped table-hover">
              <thead>
                  <tr>
                  <th>ID</th>
                  <th>Nombre</th>
                  <th>Email</th>
                  <th>Tipo de perfil</th>
                  </tr>
              </thead>
              <tbody>
                {userData.map((item) => (
                  <tr key={item.userId}>
                    <td>{item.userId}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.profileType}</td>
                  </tr>
                ))}
              </tbody>
          </table>
      </div>
  );
};

export default UserTable;
