"use client";
import { useEffect, useState } from "react";

interface User{
  _id:string,
  name:string,
  email:string,
  contact:string,
}

export default function UserComponent() {
  const [message, setMessage] = useState("");
  const [users, setUsers] = useState<User[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setConact] = useState(""); 
  const [editId, setEditId] = useState(null);


const fetchUsers = async () =>{
   const res = await fetch("http://localhost:4000/users");
   const data = await res.json();
   setUsers(data);
};

const addUser = async ()=>{
  if(!name){
    setMessage("❗ Name is required");
    return;
  };
  if(!email){
    setMessage("❗ Email is required");
    return;
  };
  if(!contact){
    setMessage("❗ Contact is required");
    return;
  };
 const res = await fetch("http://localhost:4000/users",{
      method: "POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({name, email, contact})
    });

    if(res.ok){
      setMessage("✅ User added successfully");
    }
    setName("");
    setEmail("");
    setConact("");
    fetchUsers();
}


const deleteUser = async (id)=>{
 const res = await fetch(`http://localhost:4000/users/${id}`, {
    method: "DELETE",
  });
  if(res.ok){
    setMessage("❌ User deleted successfully");
  }
   fetchUsers();
}

const editUser = (user: any) => {
  setEditId(user._id);
  setName(user.name);
  setEmail(user.email);
  setConact(user.contact);
};

const updateUser = async () => {
  const res = await fetch(`http://localhost:4000/users/${editId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, contact}),
  });

  if (res.ok){
    setMessage("✏️ User updated")
  };

  setEditId(null);
  setName("");
  setEmail("");
  setConact("");
  fetchUsers();
};



 useEffect(() => {
    fetchUsers();
  },[]);

useEffect(()=>{
  if(message){
    const timer = setTimeout(()=>{
      setMessage("");
    }, 2000);
    return () => clearTimeout(timer);
  }
},[message])



  return (
    <div style={{ padding: 20 }}>
      <h2>Normal CRUD App </h2>
     {message && <p>{message}</p>}
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{border:'1px solid #000', padding:'10px'}}
      />

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{border:'1px solid #000', padding:'10px'}}
      />
      <input
        placeholder="Contact"
        value={contact}
        onChange={(e) => setConact(e.target.value)}
        style={{border:'1px solid #000', padding:'10px'}}
      />
      {editId ? (
        <button onClick={updateUser} className="edit_btn">Update</button>
      ) : (
        <button onClick={addUser} className="add_btn">Add</button>
      )}
  
      <hr style={{margin:'30px 0'}}/>
     <table style={{border:'1px soild #ddd', width:'100%'}}>
      <tbody>
      {users.map((allusers, index) => (
        <tr key={allusers._id}>
          <td>{index+1}</td>
          <td>{allusers.name}</td>
          <td>{allusers.email}</td>
          <td>{allusers.contact}</td>
          <td><button onClick={() => deleteUser(allusers._id)} className="delete_btn">Delete</button></td>
          <td><button onClick={() => editUser(allusers)} className="update_btn">Update</button></td>
        </tr>
      ))}
      </tbody>
      </table>
    </div>
  );
}
