import { BreadCrumb } from 'primereact/breadcrumb';
import React from 'react'
import { IoHomeOutline } from 'react-icons/io5';
import { Link } from 'react-router';

const BreadCrumbComponent = ({ items = [] as any[] }) => {
    const home = {
        template: () => (
            <Link to="/">
                <IoHomeOutline style={{ fontSize: '1.1rem' }} className='text-muted' />
            </Link>
        )
    };

    return (
        <div className='container-fluid' style={{ backgroundColor: "#f7f8f9" }}>
            <BreadCrumb className='container d-flex align-items-center ps-0 border-0' style={{ backgroundColor: "#f7f8f9" }} model={items} home={home} />

        </div>
    );
}

export default BreadCrumbComponent