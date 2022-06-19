import React from 'react'
import "../HomePage/Home.css";



const Home = () => {
    return (
        <>
            <header className='haiderbox'>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-2 col-md-2 p-0">
                            <div className='firstbox'>
                                <p className='menu'>MENU</p>
                                <div className='d-flex'>
                                    <img src="" alt="" />
                                    <p className='home'>Home</p>
                                </div>
                                <div className='d-flex'>
                                    <i class="fa-solid fa-house"></i>
                                    <p>Home</p>
                                </div>
                                <div className='d-flex'>
                                    <i class="fa-solid fa-house"></i>
                                    <p>Home</p>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <i class="fa-solid fa-house"></i>
                                    <p>Home</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-8 col-md-8 p-0'>
                            <div className='middlebox'>
                                <h2>Hello zahid</h2>
                            </div>
                        </div>
                        <div className='col-lg-2 col-md-2 p-0'>
                            <div className='lastbox'>
                                <h1>Hello h2</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Home
