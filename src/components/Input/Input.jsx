import React, { useRef, useState } from "react";
import { useClickOutSide } from "../../hooks/useClickOutSide";
export default function InputField({ label, register, reset }) {
    const [onFocus, setOnFocus] = useState(false);
    const iconRef = useRef(null);
    useClickOutSide(iconRef, () => {
        onFocus && setTimeout(() => setOnFocus(false), 50);
    });
    return (
        <div className="input_group">
            <label>{label}</label>
            <div className="input_field">
                <input
                    type="text"
                    {...register}
                    placeholder="Почта"
                    onFocus={() => {
                        setOnFocus(true);
                    }}
                />
                {onFocus && (
                    <svg
                        ref={iconRef}
                        className="icon-clear"
                        viewBox="0 0 10 10"
                        xmlns="http://www.w3.org/2000/svg"
                        onClick={() => {
                            reset();
                            setOnFocus(false);
                        }}
                    >
                        <path d="M9.06588 1.99469C9.35877 1.70179 9.35877 1.22692 9.06588 0.934025C8.77298 0.641132 8.29811 0.641132 8.00522 0.934025L5.00002 3.93922L1.99482 0.934026C1.70192 0.641133 1.22705 0.641132 0.934157 0.934026C0.641264 1.22692 0.641264 1.70179 0.934157 1.99469L3.93936 4.99989L0.934147 8.00509C0.641254 8.29799 0.641254 8.77286 0.934147 9.06575C1.22704 9.35865 1.70191 9.35865 1.99481 9.06575L5.00002 6.06054L8.00522 9.06575C8.29812 9.35865 8.77299 9.35865 9.06588 9.06575C9.35878 8.77286 9.35878 8.29799 9.06588 8.00509L6.06068 4.99989L9.06588 1.99469Z" />
                    </svg>
                )}
            </div>
        </div>
    );
}
