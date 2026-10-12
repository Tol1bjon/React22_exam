import React from 'react';

const Info = ({ open, close, user2 }) => {
    return (
        <dialog open={open}>
            <div key={user2?.id}>
                <div key={open?.id}>
                    <h1>{open?.name}</h1>
                    <h1>{open?.gmail}</h1>
                    <h1>{user2?.phone}</h1>
                    <h1>{user2?.status ? "ACTIVE" : "INACTIVE"}</h1>
                    <button onClick={close}>CLOSE</button>
                </div>
            </div>
        </dialog>
    );
}

export default Info;
