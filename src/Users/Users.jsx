import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Users = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);
    return (
        <div className='max-w-3xl mx-auto bg-blue-200 rounded-lg'>
            <h2 className='font-bold lg:text-3xl text-slate-700 text-center p-10'>Number of Users : {loadedUsers.length}</h2>

            <div className="overflow-x-auto font-bold text-slate-700">
                <table className="table pl-">
                    {/* head */}
                    <thead className='font-bold text-lg lg:text-2xl'>
                        <tr>
                            <th>Email</th>
                            <th>Created At</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {/* {table body} */}
                    <tbody className='text-sm lg:text-lg'>
                        {
                            users.map(user => <tr>
                               <td>{user.email}</td>
                               <td>{user.createAt}</td>
                               <td>
                                <button className='btn btn-info'>X</button>
                               </td>

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;