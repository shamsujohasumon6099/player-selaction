import React from 'react';
import './UserCart.css'

const UserCart = (props) => {
    const { name, img, salary } = props.data;
    return (
        <div className="user-cart">
            <div>
                <img src={img} alt='user' width='300px'></img>
            </div>
            <div>
                <p><span>{name}</span></p>
                <p><small>Salary: ${salary}</small></p>
                <button onClick={() => props.handleAddCart(props.data)} type="submit">Add Cart</button>
            </div>
        </div>
    );
};

export default UserCart;