import { useRef, useState } from "react"
import { AiOutlineUserAdd } from "react-icons/ai";
import './../App.css';
import User from "./User";
export default function UserTable() {
  const initialData = [
    { id: 1, name: 'Amine', age: 12 },
    { id: 2, name: 'Karim', age: 12 },
    { id: 3, name: 'Ayoub', age: 12 },
    { id: 4, name: 'Ahmed', age: 12 },
    { id: 5, name: 'Rajaa', age: 12 },
    { id: 6, name: 'Mohammed', age: 12 },
    { id: 7, name: 'Aziz', age: 12 },
    { id: 8, name: 'Mehdi', age: 12 },

  ]
  const [users, setUsers] = useState(initialData)
  const nameRef = useRef()
  const ageRef = useRef()
  const getLastId = () => {
    users.sort(function (a, b) {
      return parseInt(a.id) - parseInt(b.id);
    });
    return users[users.length - 1].id
  }
  const addUser = () => {
   const user = {
      id: getLastId() + 1,
      name: nameRef.current.value,
      age: ageRef.current.value
    }
    setUsers([...users, user])
    nameRef.current.value = ""
    ageRef.current.value = ""
  }
const handleEdit=(userE)=>{  

  const index = users.findIndex(u => userE.id === u.id)
  users[index] = userE
  
  setUsers(users)   
}
const handleDelete=(id)=>{ 
 
  setUsers(users.filter(user => {
    return user.id != id
  }))
}
  return (

    <div>
      <table className="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nom</th>
            <th scope="col">Age</th>
            <th scope="col">#</th>
          </tr>
        </thead>
        <tbody>

          {users?.map((u) => (
            <User user={u} handleDelete={handleDelete} handleEdit={handleEdit}/>
          ))}

          <tr>
            <td><input

              type="text"
              disabled
            /></td>
            <td><input
              ref={nameRef}
              type="text"

            /></td>
            <td><input
              ref={ageRef}
              type="number"
            /></td>
            <td>

              <AiOutlineUserAdd onClick={addUser} className="text-primary iconSize" /></td>
          </tr>
        </tbody>
      </table>
      <div>
        {users?.map((x, index) => (
          x.id
        ))}
      </div>
    </div>
  );
}