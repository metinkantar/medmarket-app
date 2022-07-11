import Link from 'next/link';
import React, { useState } from 'react';
import { useSelector } from "react-redux";
import {
  MdSearch, MdOutlineAccountCircle,
  MdOutlineFavoriteBorder,
  MdOutlineShoppingBag, MdOutlinePhone, MdOutlineEmail
} from "react-icons/md";
import { Navbar } from "react-bootstrap";
import Image from 'next/image';
import Sepet from "../components/home/Sepet";

const Header = () => {
  const cart = useSelector((state) => state.cart.cartItems);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* <nav className="navbar navbar-light bg-beyaz p-0 m-0">
        <div className="container-fluid d-flex justify-content-end">
          <span className="navbar-brand top-navbar me-3">İndirim Kuponlarım </span>
          <span className="navbar-brand top-navbar me-3">MeKaShop'da Satış Yap</span>
          <span className="navbar-brand top-navbar me-3">Yardım & Destek</span>
        </div>
      </nav> */}
      <Navbar bg="orange" className="p-0 m-0">
        <div className='container-fluid' >
          <div className="d-flex justify-content-start">
            <Navbar.Brand className=" text-dark headerText">
              <MdOutlineEmail size="16" /> destek@mekashop.com
              <MdOutlinePhone size="16" className="ms-4"  />+90{" "}555{" "}555{" "}55{" "}55 {" "}
            </Navbar.Brand>
          </div>
          <div className="d-flex justify-content-end">
            <span className="navbar-brand top-navbar me-3">İndirim Kuponlarım </span>
            <span className="navbar-brand top-navbar me-3">MeKaShop'da Satış Yap</span>
            <span className="navbar-brand top-navbar me-3">Yardım & Destek</span>
          </div>
        </div>
      </Navbar>

      <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-beyaz">
        <div className="container-fluid">
          <Link href="/">
            <a className='me-5'>
              <Image
                src="/images/logo.png"
                alt="Picture of the author"
                width={100}
                height={30}
              />
            </a>
          </Link>

          <div className="top-menu-search">
            <div className="top-menu-search-box d-flex justify-content-center ">
              <input className="top-menu-search-input" type="search" placeholder="Aradığınız ürün, kategori veya markayı yazınız" aria-label="Search" />
              <div className=""><MdSearch size={35} color='#ff6000' />
              </div>
            </div>
          </div>


          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>



          <div className="collapse navbar-collapse float-end" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-6">

              <li className="nav-item girisLink">
                <Link href="/">
                  <a className="nav-link top-menu-link" ><MdOutlineAccountCircle size="23" className="icon me-1" /><span className='align-middle'>Hesabım</span></a>
                </Link>
                <ul className="dropdown-menu-giris" aria-labelledby="dropdownMenuLink">
                  <li>
                    <Link href="/giris">
                      <a>
                        <button className='btn bg-orange dropdown-item-giris dropdown-item-giris-button'>Giriş Yap</button>
                      </a>
                    </Link>
                  </li>
                  <li><a>
                    <button className='btn dropdown-item-kayit dropdown-item-kayit-button'>Kayıt Ol</button>
                  </a></li>
                </ul>
              </li>

              <li className="nav-item">
                <Link href="/">
                  <a className="nav-link top-menu-link" ><MdOutlineFavoriteBorder size="23" className="icon me-1" /><span className='align-middle'>Favorilerim</span></a>
                </Link>
              </li>

              <li className="nav-item">

                <a className="nav-link top-menu-link" onClick={handleShow}>
                  <MdOutlineShoppingBag size="23" className="icon" />
                  <span className='align-middle'>Sepetim</span>
                  <span
                    className="translate-middle-meka badge rounded-pill fw-bold d-inline"
                    style={{
                      backgroundColor: "#E9ECEF",
                      color: "#ff6f00",
                      border: "1px",
                      borderStyle: "solid",
                      borderColor: "white",
                      fontSize: "14px",
                    }}
                  >
                    {cart.length}
                  </span>
                </a>

                {/* <Button variant="primary" onClick={handleShow}>
                  Sepet
                </Button> */}
                <Sepet show={show} handleClose={handleClose} />
              </li>

            </ul>
          </div>
        </div>
      </nav>


      <ul className="main-nav m-0">
        <li className="main-nav-link">
          <a href="/butik/liste/1/kadin" className="category-header">Kadın</a>
        </li>
        <li className="main-nav-link">
          <a href="/butik/liste/2/erkek" className="category-header">Erkek</a>
        </li>
        <li className="main-nav-link">
          <a href="/butik/liste/3/cocuk" className="category-header">Çocuk</a>
        </li>
        <li className="main-nav-link">
          <a href="/butik/liste/12/ev--yasam" className="category-header">Ev &amp; Yaşam</a>
        </li>
        <li className="main-nav-link">
          <a href="/butik/liste/16/supermarket" className="category-header">Süpermarket</a>
        </li>
        <li className="main-nav-link">
          <a href="/butik/liste/11/kozmetik" className="category-header">Kozmetik</a>
        </li>
        <li className="main-nav-link">
          <a href="/butik/liste/9/ayakkabi--canta" className="category-header">Ayakkabı &amp; Çanta</a>
        </li>
        <li className="main-nav-link">
          <a href="/butik/liste/10/saat--aksesuar" className="category-header">Saat &amp; Aksesuar</a>
        </li>
        <li className="main-nav-link">
          <a href="/butik/liste/5/elektronik" className="category-header">Elektronik</a>
        </li>
        <li className="main-nav-link">
          <a href="/butik/liste/22/spor--outdoor" className="category-header">Spor &amp; Outdoor</a>
        </li>
      </ul>

    </>
  )
}

export default Header;
