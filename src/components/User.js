
import { useState } from 'react'
import { AiOutlineUserDelete, AiFillEdit } from 'react-icons/ai'
export default function User(props) {
    const { user, handleDelete, handleEdit } = props 
    const [editName, setEditName] = useState(user.name);
    const [editAge, setEditAge] = useState(user.age); 
    const handleChange = () => {

    }
    const onEdit = () => {
        const us = {
            id: user.id,
            name: editName,
            age: editAge
        }
        console.log(us);
        handleEdit(us);
    }
    const onDelete = () => {
        handleDelete(user.id)
    }
    return (
        <tr>
            <td><input type="text"
                value={user.id}
                onChange={handleChange}
                disabled
            /></td>
            <td><input onChange={(e) => { setEditName(e.target.value); }}

                value={editName}
                type="text"
            /></td>
            <td><input onChange={(e) => setEditAge(e.target.value)}

                type="number"
                value={editAge}

            /></td>
            <td>  <AiFillEdit onClick={onEdit} className="text-primary iconSize" />
                <AiOutlineUserDelete onClick={onDelete}
                    className="text-danger iconSize" /></td>


        </tr>

    )
}