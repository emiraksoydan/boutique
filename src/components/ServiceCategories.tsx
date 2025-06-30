import React from 'react'
import features1 from "../assets/images/feature-1.png";
import features2 from "../assets/images/feature-2.png";
import features3 from "../assets/images/feature-3.png";

const ServiceCategories = () => {
    return (
        <div className='container mt-3'>
            <div className='row justify-content-center m-0 p-0'>
                <div className="col-md-4 col-sm-12 " >
                    <div className=' d-flex align-items-center border text-black p-3 rounded'>
                        <img
                            src={features1}
                            alt="Ürün"
                            className="me-2 me-md-5 img-fluid"
                            style={{ objectFit: 'contain' }}
                        />
                        <div className='p-1 rounded' style={{ backgroundColor: "#d7e6f2" }}>
                            <h6 className="mb-0" style={{ color: "#468078" }}>Online Alışveriş</h6>
                        </div>
                    </div>
                </div>
                <div className=" col-md-4 col-sm-12  mt-2 mt-md-0" >
                    <div className=' d-flex align-items-center border text-black p-3 rounded'>
                        <img
                            src={features2}
                            alt="Ürün"
                            className="me-2 me-md-5 img-fluid"
                            style={{ objectFit: 'contain' }}
                        />
                        <div className='p-1 rounded' style={{ backgroundColor: "#f2dbf5" }} >
                            <h6 className="mb-0" style={{ color: "#468078" }}>Mutlu Alışveriş</h6>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 col-sm-12 mt-2 mt-md-0 " >
                    <div className=' d-flex align-items-center border text-black p-3 rounded'>
                        <img
                            src={features3}
                            alt="Ürün"
                            className="me-2 me-md-5 img-fluid"
                            style={{ objectFit: 'contain' }}
                        />
                        <div className=' p-1 rounded' style={{ backgroundColor: "#fbf3e6" }}>
                            <h6 className="mb-0" style={{ color: "#468078" }}>7/24 Destek</h6>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default ServiceCategories