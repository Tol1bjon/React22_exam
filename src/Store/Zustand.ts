import { create } from "zustand";

export const useData = create((set) => ({
    data: [
        {
            name: "Tolibjon",
            gmail: "tolibjon@gmail.com",
            id: 1
        },
        {
            name: "Kenja",
            gmail: "kenja@gmail.com",
            id: 2
        },
        {
            name: "Abu",
            gmail: "abu@gmail.com",
            id: 3
        }
    ],

    deleteUser: (id) => set((state) => ({ data: state.data.filter((user) => user.id != id) })),

    addUser: (user) => set((state) => ({ data: {...state.data, ...user} }))
}))