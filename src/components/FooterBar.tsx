import React from 'react';
import logo from "../assets/images/logo3.png";
import { Divider, TextField } from '@mui/material';
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const FooterBar = () => {
    return (
        <div className='container-fluid pt-5 pb-5'>
            <div className='container '>
                <div className='row '>
                    <div className='col-md-4 col-sm-12 d-flex ps-md-0  ps-2 flex-column gap-1' >
                        <h5>Hakkımızda</h5>
                        <span className='text-break'>Hakkımızda</span>
                        <div className='mt-3'>
                            <span className=' fw-bold' style={{ color: "#57655f" }}>Adres:</span>
                            <span className=' ms-1'> 562 Wellington Road, Street 32, San Francisco</span>
                        </div>
                        <div>
                            <span className=' fw-bold' style={{ color: "#57655f" }}>Telefon:</span>
                            <span className=' ms-1'>+01 2222 365 </span>
                        </div>
                        <div>
                            <span className=' fw-bold' style={{ color: "#57655f" }}>Mail:</span>
                            <span className=' ms-1'>ecommerce@gmail.com</span>
                        </div>
                    </div>
                    <div className='col-md-2 col-sm-12 mt-md-0 mt-4 ps-md-0  ps-2  align-items-start  d-flex flex-column gap-2'>
                        <h5>Hızlı Alışveriş</h5>
                        <span className='footer-animation-text'>Anasayfa</span>
                        <span className='footer-animation-text'>Ürünlerimiz</span>
                        <span className='footer-animation-text'>Günün Fırsatı</span>
                        <span className='footer-animation-text'>İndirimler</span>
                        <span className='footer-animation-text'>Sepetim</span>
                        <span className='footer-animation-text'>Bize Yazın</span>

                    </div>
                    <div className='col-md-2 col-sm-12 ps-md-5 ps-2 ps-md-0  mt-md-0 mt-4  align-items-start  d-flex flex-column gap-2'>
                        <h5 >Hesabım</h5>
                        <span className='footer-animation-text'>Profilim</span>
                        <span className='footer-animation-text'>Alışverişlerim</span>
                        <span className='footer-animation-text'>Sepet Detaylarım</span>
                        <span className='footer-animation-text'>Geçmiş Ürünlerim</span>
                        <span className='footer-animation-text'>İndirimlerim</span>
                        <span className='footer-animation-text'>İletişim</span>
                    </div>
                    <div className='col-md-4 col-sm-12 ps-2 ps-md-0  ps-md-5 mt-md-0 mt-4  align-items-start  d-flex flex-column gap-2'>
                        <h5 className=''>Mail Bülteni</h5>
                        <span className=''>En son indirimler ve kampanyalar için hemen abone olun</span>
                        <div className="input-group mb-3 mt-2">
                            <input type="text" className="form-control" placeholder="E-posta" aria-label="E-posta" aria-describedby="basic-addon2" />
                            <button className="input-group-text btn" style={{ backgroundColor: '#f5f5f9 !important' }} id="basic-addon2">Mail Gönder</button>
                        </div>
                        <span className='mt-2' style={{ color: "#b9b8b9" }}>Bizi Takip Edin</span>
                        <div className='d-flex flex-row gap-2'>
                            <FaLinkedinIn color='#6f6e70' />
                            <FaFacebookF color='#6f6e70' />
                            <FaInstagram color='#6f6e70' />
                            <FaTwitter color='#6f6e70' />
                        </div>
                    </div>
                </div>
                <Divider className=' mt-5' sx={{
                    borderBottom: '1px solid #f6f8f5',
                    opacity: 1,
                }} />

            </div>
        </div>
    )
}

export default FooterBar