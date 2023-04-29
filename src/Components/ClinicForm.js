
import React from 'react'
import UserSearch from './UserSearch'

const ClinicForm = () => {
    return (
        <>
            <div className="container-fluid d-flex">
                <div className="row  m-4 p-2">
                    <div className='card col-sm-4 shadow p-3 m-4 bg-body rounded '>
                        <UserSearch />
                    </div>

                    <div className="card col-sm-7 shadow p-3 m-4 bg-body rounded border-0'">
                        <div class="row m-4 p-2">

                            <div className="col-md-6 p-2">
                                <p className='text-primary ps-2'>Details</p>
                                <div className='p-2'>
                                    <select className="form-select shadow-sm  bg-body rounded" aria-label="Default select example">
                                        <option selected>Select Doctor</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <div className='p-2'>
                                    <select class="form-select shadow-sm  bg-body rounded" aria-label="Default select example">
                                        <option selected>Select Appointment Channel</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>

                                <div className='p-2'>
                                    <input type="email" placeholder='Appointment title' className="form-control shadow-sm  bg-body rounded"></input>
                                </div>
                                <div className='p-2'>
                                    <input type="text" placeholder='Reason' className="form-control shadow-sm  bg-body rounded"></input>
                                </div>

                            </div>

                            <div className="col-md-6">
                                <p className='text-primary'>Appointment Details</p>
                                <div className='row'>
                                    <div className='col-sm-6'>Name</div>
                                    <div className='col-sm-6'>User Id</div>
                                </div>
                                <div className="form-check form-switch ">
                                    <label >Walk In Appointment</label>
                                    <input className="form-check-input" type="checkbox" />

                                </div>
                                <div className='row'>
                                    <div className='col-sm-6 p-2'>
                                        <input type="date" placeholder='date' className="form-control shadow-sm  bg-body rounded"></input>
                                    </div>
                                    <div className='col-sm-6 p-2'>
                                        <input type="time" placeholder='time' class="form-control shadow-sm  bg-body rounded"></input>
                                    </div>
                                </div>
                                <select className="form-select shadow-sm  bg-body rounded p-2" aria-label="Default select example">
                                    <option selected>Select Appointment Type</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>

                            </div>
                            <div>
                                <p className='text-primary p-2'>Vital Verification</p>
                            </div>
                            <div className='row ms-1 p-2'>
                                <div className="col-sm-2 p-2 "><input type="text" placeholder='BP' class="form-control"></input></div>
                                <div className="col-sm-2 p-2"><input type="text" placeholder='Temp' class="form-control"></input></div>
                                <div className="col-sm-2 p-2"><input type="text" placeholder='Height' class="form-control"></input></div>
                                <div className="col-sm-2 p-2 "><input type="text" placeholder='Weight' class="form-control"></input></div>
                                <div className="col-sm-2 p-2"><input type="text" placeholder='SPO2' class="form-control"></input></div>
                                <div className="col-sm-2 p-2"><input type="text" placeholder='Not for Doctor' class="form-control"></input></div>
                            </div>
                            <div className='row ms-1 p-2'>
                                <div className='col-sm-6 p-2'>
                                    <input type="text" placeholder='Appointment title' className="form-control shadow-sm  bg-body rounded"></input>
                                </div>

                                <div className='col-sm-6 p-2 '>
                                    <select className="form-select shadow-sm  bg-body rounded" aria-label="Default select example">
                                        <option selected>Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>
                            <div className='row '>
                                <div className='col-sm-6 d-flex flex-row-reverse p-2'>
                                    <button className='rounded-pill bg-primary text-white p-2 w-25 border-0'>Reset</button>
                                </div>
                                <div className='col-sm-6 p-2 '>
                                    <button className='rounded-pill bg-primary text-white p-2 w-25 border-0'>Submit</button>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ClinicForm