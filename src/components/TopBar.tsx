import React, { useState } from 'react';
import { FaEarthAfrica } from "react-icons/fa6";
import { MdOutlinePerson } from "react-icons/md";
import { FaDollarSign, FaEuroSign } from "react-icons/fa";

import { AiOutlineGold } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";


const TopBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenRate, setIsOpenRate] = useState(false);

  const [selectedLanguage, setSelectedLanguage] = useState("Türkçe");
  const [selectedRate, setSelectedRate] = useState("Dolar");
  return (
    <div className='row p-0 m-0 w-100  ' style={{ backgroundColor: '#e0f4e4' }}>
      <div className='col-md-6 d-flex flex-row mt-2 justify-content-center   p-2 gap-4'>
        <h6>About</h6>
        <h6>Contact</h6>
        <h6>Help</h6>
        <h6>FAQ</h6>
      </div>
      <div className='col-md-6 d-flex flex-row justify-content-center  align-items-center p-2 gap-4'>
        <div className='d-flex flex-row align-items-center gap-1'>
          <MdOutlinePerson size={20} />
          <a className='text-black auth-class' href='#'>Kayıt Ol / Giriş Yap</a>
        </div>
        <div className='d-flex flex-row align-items-center'>
          <AiOutlineGold />
          <div
            className="dropdown position-relative d-inline-block"
            onMouseEnter={() => setIsOpenRate(true)}
            onMouseLeave={() => setIsOpenRate(false)}
          >
            <a
              className="btn btn-sm dropdown-toggle"
              href="#"
              role="button"
              id="dropdownMenuLink"
              aria-haspopup="true"
              aria-expanded={isOpenRate}
              onClick={(e) => e.preventDefault()}
            >
              {selectedRate}
            </a>
            <AnimatePresence>
              {isOpenRate && (
                <motion.div
                  className="dropdown-menu show position-absolute d-block z-3 top-100"
                  aria-labelledby="dropdownMenuLink"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  style={{ left: -10, }}
                >
                  <div className='d-flex align-items-center hover-rate '>
                    <div className='col-md-2 text-end'> <FaDollarSign /></div>
                    <div className='col-md-10'>
                      <a href='#' className="dropdown-item" onClick={(e) => { e.preventDefault(); setSelectedRate("Dolar"); setIsOpenRate(false); }}>Dolar</a>
                    </div>
                  </div>
                  <div className='d-flex align-items-center hover-rate'>
                    <div className='col-md-2 text-end'> <FaEuroSign /></div>
                    <div className='col-md-10'>
                      <a href='#' className="dropdown-item" onClick={(e) => { e.preventDefault(); setSelectedRate("Euro"); setIsOpenRate(false); }}>Euro</a>
                    </div>
                  </div>

                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        <div className='d-flex flex-row align-items-center'>
          <FaEarthAfrica />
          <div
            className="dropdown position-relative d-inline-block"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <a
              className="btn btn-sm dropdown-toggle"
              href="#"
              role="button"
              id="dropdownMenuLink"
              aria-haspopup="true"
              aria-expanded={isOpen}
              onClick={(e) => e.preventDefault()}
            >
              {selectedLanguage}
            </a>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  className="dropdown-menu show position-absolute d-block z-3 top-100"
                  aria-labelledby="dropdownMenuLink"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  style={{ left: -10, }}
                >
                  <a href='#' className="dropdown-item" onClick={(e) => { e.preventDefault(); setSelectedLanguage("Türkçe"); setIsOpen(false); }}>Türkçe</a>
                  <a href='#' className="dropdown-item" onClick={(e) => { e.preventDefault(); setSelectedLanguage("İngilizce"); setIsOpen(false); }}>İngilizce</a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopBar