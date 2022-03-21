import React, { useEffect, useState } from 'react';
import './UserData.css';
import data from './FakeUserData.js';
import UserCart from '../UserCart/UserCart';
import Employe from '../EmployeCart/Employe';

const UserData = () => {
    const [users, setUsers] = useState([]);
    const [employes, setEmployes] = useState([]);

    useEffect(() => {
        setUsers(data);
    }, []);

    const handleAddCart = (employe) => {
        const data = employes.find(employee => employee.name === employe.name);
        if(!data){
            setEmployes([...employes, employe]);
        }
        else{
            alert('Already added');
        }
    }
    const totalSalary = employes.reduce((sum, employee) => sum + Number(employee.salary), 0);

    return (
        <div className="containers">
            <div className="user-display">

                <h4 className="employeeStatus">Total Players : {users.length}</h4>
                {
                    users.map(user => <UserCart data={user} key={user.name} handleAddCart={handleAddCart}></UserCart>)
                }

            </div>


            <div className='seleced-area'>
                <Employe employes={employes}></Employe>
                <hr />

                <div id='salary'>
                    <h4>Total salary: ${totalSalary.toLocaleString('en-US')}</h4>
                </div>
            </div>

        </div>
    );
};

export default UserData;