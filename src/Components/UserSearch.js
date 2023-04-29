import React, { useEffect, useState } from 'react'
import UserDetail from './UserDetail'


const UserSearch = () => {
    const [users, setUsers] = useState([])
    let getData = async () => {
        const response = await fetch("http://localhost:3000/users")
        setUsers(await response.json());

    }

    useEffect(() => {
        getData()
    }, [])


    return (
        <div>
            <div className=' row'>
                <div className='col-sm-6'>
                    <input className='form-control shadow-sm border-0 bg-body rounded' placeholder="Type to search..." />
                </div>
                <div className='col-sm-6 pb-4'>
                    <button className='rounded bg-primary text-white w-50 p-2 border-0 ' >Search</button>
                </div>

            </div>

            <div style={{
                overflowX: 'scroll',
                height: 'fit-content',
                maxHeight: '33vh'
            }}>
                <table className='table table-hover table-hover border p-2'  >
                    <thead>
                        <tr>
                            <th className='text-primary'>Name</th>
                            <th className='text-primary'>Mobile Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((item) => {
                                return (
                                    <>
                                        <tr>
                                            <td className='text-primary'>{item.UserName}</td>
                                            <td className='text-primary'>{item.MobileNumber}</td>
                                        </tr>
                                    </>
                                )
                            })
                        }

                    </tbody>
                </table>
            </div> <br />
            <h4 className='p-2 text-primary'>Profile details</h4>
            <div className="row">

                <UserDetail/>
            </div>




        </div>
    )
}

export default UserSearch