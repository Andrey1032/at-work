import React from "react";

export default function ModalWindow({ modalRef, options, id }) {
    return (
        <div ref={modalRef} className="modal-window">
            {options?.map((option) => (
                <p key={option.title} className="modal-window__item" onClick={() => option.func()}>
                    {option.title}
                </p>
            ))}
        </div>
    );
}
