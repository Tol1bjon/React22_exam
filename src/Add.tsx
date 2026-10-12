import React from 'react';
import { useData } from './Store/Zustand';
import { useAtom } from 'jotai';
import { addAtom } from './Store/Jotai';

const Add = ({ open, close }) => {
    const {addUser} = useData()
    const addAtom2 = useAtom(addAtom)

    const addNewUser = (e) => {
        e.preventDefault()
        const ID = Date.now()

        const newUser = {
            name: e.target.name.value,
            gmail: e.target.gmail.value,
            id: ID
        }
        const newUser2 = {
            phone: e.target.phone.value,
            status: e.target.status.value == "true",
            id: ID
        }
        addUser(newUser)
        addAtom2(newUser2)
        close()
    }

    return (
        <dialog open={open}>
            <form>
                <input type="text" placeholder='Name' name='name' />
                <input type="text" placeholder='Gmail' name='gmail' />
                <input type="text" placeholder='Phone' name='phone' />
                <select name='status'>
                    <option value={"true"}>Active</option>
                    <option value={"false"}>Inactive</option>
                </select>
                <button type='button' onClick={close}>CLOSE</button>
                <button>SAVE</button>
            </form>
        </dialog>
    );
}

export default Add;
