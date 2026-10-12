import { atom } from "jotai";

export const Data = atom([
    {
        phone: "123456789",
        status: true,
        id: 1
    },
    {
        phone: "987654321",
        status: false,
        id: 2
    },
    {
        phone: "123459876",
        status: true,
        id: 3
    }
])

export const deleteAtom = atom(null, (get, set, id) => {
    set(Data, get(Data).filter((user) => user.id != id))
})

export const addAtom = atom(null, (get, set, user) => {
    set(Data, [...get(Data), user])
})