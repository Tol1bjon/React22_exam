import React, { useState } from 'react';
import { useData } from './Store/Zustand';
import { useAtom } from 'jotai';
import { Data } from './Store/Jotai';
import Add from './Add';
import Info from './Info';

const App = () => {
  const {data, deleteUser} = useData()
  const [datas, setData, deleteAtom] = useAtom(Data)
  const [open, setOpen] = useState(false)
  const [infoOpen, setInfOpen] = useState(null)
  const [infoOpen2, setInfOpen2] = useState(null)

  return (
    <div>
      <button onClick={() => setOpen(true)}>ADD USER</button>
      {data.map((user) => {
        return <div key={user.id}>
          {datas.map((user2) => {
            if(user.id == user2.id)

            return(
            <div key={user2.id}>
              <h1>{user.name}</h1>
              <h3>{user.gmail}</h3>
              <p>{user2.status ? "Active" : "Inactive"}</p>
              <p>{user2.phone}</p>
              <button onClick={() => {
                deleteUser(user.id);
                deleteAtom(user2.id)
              }}>DELETE</button>
              <button>EDIT</button>
              <button onClick={() => {
                setInfOpen(user)
                setInfOpen2(user2)
              }}>INFO</button>
            </div>
          )})}
        </div>
      })}

      <Add open={open} close={() => setOpen(false)}/>
      <Info open={infoOpen} close={() => setInfOpen(null)} user2={infoOpen2}/>
    </div>
  );
}

export default App;
