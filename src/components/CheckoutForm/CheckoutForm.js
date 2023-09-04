import { useState } from "react";

const CheckoutForm = ({ onConfirm }) => {
const [name, setName] = useState("");
const [phone, setPhone] = useState("");
const [email, setEmail] = useState("");

const handleConfirm = (event) => {
    event.preventDefault();
    const userData = {
        name,
        phone,
        email,
    };


    onConfirm(userData);
    };

return (
    <div className="">
        <form onSubmit={handleConfirm} className="form">
        <label className="form-label me-3 ms-3">
            Nombre: 
            <input
            className="form-control"
            type="text"
            value={name}
            onChange={({ target }) => setName(target.value)}
        />
        </label>
        <label className="form-label me-3">
            Telefono:
        <input
            className="form-control"
            type="text"
            value={phone}
            onChange={({ target }) => setPhone(target.value)}
        />
        </label>
        <label className="form-label me-3">
            Email:
        <input
            className="form-control"
            type="text"
            value={email}
            onChange={({ target }) => setEmail(target.value)} 
        />
        </label>
        <div>
            <button type="submit" className="btn btn-success m-3">
            Crear Orden
            </button>
        </div>
        </form> 
    </div>
    );
};

export default CheckoutForm;