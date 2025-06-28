import { BreadCrumb } from 'primereact/breadcrumb';
import React from 'react'
import { Breadcrumbs, Typography, Link as MuiLink } from '@mui/material';
import { IoHomeOutline } from 'react-icons/io5';
import { Link as RouterLink } from 'react-router';
import type { BreadCrumbItem } from '../types/BreadCrumbItem';

const BreadCrumbComponent = ({ items = [] }: { items: BreadCrumbItem[] }) => {
    return (
        <div className={`${location.pathname.includes("/admin") ? 'py-1' : 'py-3'} container-fluid px-0`} style={{ backgroundColor: location.pathname.includes("/admin") ? "transparent" : "#f7f8f9" }}>
            <div className={`container ${location.pathname.includes("/admin") ? 'px-0' : 'px-4'} `}>
                <Breadcrumbs aria-label="breadcrumb">
                    <MuiLink
                        className='d-flex align-items-center'
                        component={RouterLink}
                        to={location.pathname.includes("/admin") ? '/admin' : '/'}
                        color="inherit"
                        underline="hover"
                        sx={{ color: 'text.secondary', }}
                    >
                        <IoHomeOutline className='me-1' />
                    </MuiLink>
                    {items.map((item, index) => {
                        const isActive = location.pathname === item.path;
                        return isActive ? (
                            <span key={index} className='text-black'>
                                {item.label}
                            </span>
                        ) : (
                            <MuiLink
                                key={index}
                                component={RouterLink}
                                to={item.path || '#'}
                                underline="hover"
                                color="inherit"
                            >
                                {item.label}
                            </MuiLink>
                        );
                    })}
                </Breadcrumbs>
            </div>

        </div>
    );
};


export default BreadCrumbComponent