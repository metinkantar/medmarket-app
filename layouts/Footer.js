import React from 'react';
import Image from 'next/image';
import Foooter from "./FooterAlt2";
import { FaFacebookF, FaInstagram, FaTwitter, FaPinterestP, FaYoutube, FaVimeoV, FaGooglePlusG, FaBoxes, FaBox, FaCheckCircle, FaTeamspeak, FaHandPointer, FaExpeditedssl } from "react-icons/fa";
const Footer = () => {
    return (
        <>


            <div className="b-example-divider text-center">
                <div className='align-bottom' style={{ marginTop: "9px", fontSize: "20px", color: "#ff6000", fontWeight: "800" }}>
                    FOOTER ALT 1
                </div>
            </div>

            <div className="container div-shadow mt-5">
                <div className="row p-4">
                    <div className="col-2">
                        <div className='text-center'><FaExpeditedssl color="red" size={60} /></div>
                        <div className='text-center footer-text-title'>Güvenli Ödeme</div>
                        <div className='text-center footer-text-info'>256bit SSL Sertifikası ile %100 güvenli alışveriş.</div>
                    </div>
                    <div className="col-2">
                        <div className='text-center'><FaBoxes color="red" size={60} /></div>
                        <div className='text-center footer-text-title'>Aynı Gün Kargo</div>
                        <div className='text-center footer-text-info'>Satın aldığınız ürünler özenle paketlenir ve kargolanır.</div>
                    </div>
                    <div className="col-2">
                        <div className='text-center'><FaTeamspeak color="red" size={60} /></div>
                        <div className='text-center footer-text-title'>Müşteri Destek Hattı</div>
                        <div className='text-center footer-text-info'>444 44 44 veya site@eposta.com</div>
                    </div>
                    <div className="col-2">
                        <div className='text-center'><FaBox color="red" size={60} /></div>
                        <div className='text-center footer-text-title'>Ücretsiz Kargo</div>
                        <div className='text-center footer-text-info'>1000.00 TL ve üzeri alışverişlerde ücretsiz kargo!</div>
                    </div>
                    <div className="col-2">
                        <div className='text-center'><FaHandPointer color="red" size={60} /></div>
                        <div className='text-center footer-text-title'>Hijyenik Paketleme</div>
                        <div className='text-center footer-text-info'>Satın aldığınız tüm ürünler hijyen kurallarına uygun şekilde kargolanır.</div>
                    </div>
                    <div className="col-2">
                        <div className='text-center'><FaCheckCircle color="red" size={60} /></div>
                        <div className='text-center footer-text-title'>ÜRÜN GARANTİSİ</div>
                        <div className='text-center footer-text-info'>%100 Orjinal Ürün Grantisi</div>
                    </div>
                </div>
            </div>

            <Foooter />

            <div className="container-fluid bg-verydark">
                <div className="p-5">
                    <div className="row">
                        <div className="col-2">
                            <span className='footer-baslik'>POPÜLER KATEGORİLER</span>
                            <ul className="nav flex-column mt-2">
                                <li className="nav-item mb-2"><a href="#" className="footer-link p-0">Kadın Giyim</a></li>
                                <li className="nav-item mb-2"><a href="#" className="footer-link p-0">Erkek Giyim</a></li>
                                <li className="nav-item mb-2"><a href="#" className="footer-link p-0">Petshop</a></li>
                                <li className="nav-item mb-2"><a href="#" className="footer-link p-0">Bebek Giyim</a></li>
                                <li className="nav-item mb-2"><a href="#" className="footer-link p-0">Kadın Parfüm</a></li>
                            </ul>
                        </div>

                        <div className="col-2">
                            <span className='footer-baslik'>ALIŞVERİŞ BİLGİLERİ</span>
                            <ul className="nav flex-column mt-2">
                                <li className="nav-item mb-2"><a href="#" className="footer-link p-0">Sipariş</a></li>
                                <li className="nav-item mb-2"><a href="#" className="footer-link p-0">Sepetim</a></li>
                                <li className="nav-item mb-2"><a href="#" className="footer-link p-0">İade Taleplerim</a></li>
                                <li className="nav-item mb-2"><a href="#" className="footer-link p-0">Sipariş Takibi</a></li>
                                <li className="nav-item mb-2"><a href="#" className="footer-link p-0">Hesabım</a></li>
                            </ul>
                        </div>

                        <div className="col-2">
                            <span className='footer-baslik'>MÜŞTERİ HİZMETLERİ</span>
                            <ul className="nav flex-column mt-2">
                                <li className="nav-item mb-2"><a href="#" className="footer-link p-0">Canlı Destek</a></li>
                                <li className="nav-item mb-2"><a href="#" className="footer-link p-0">Yardım</a></li>
                                <li className="nav-item mb-2"><a href="#" className="footer-link p-0">Destek</a></li>
                                <li className="nav-item mb-2"><a href="#" className="footer-link p-0">Korona Tedbirleri</a></li>
                                <li className="nav-item mb-2"><a href="#" className="footer-link p-0">Garanti & İade Sorgulama</a></li>
                                <li className="nav-item mb-2"><a href="#" className="footer-link p-0">Sıkça Sorunlar Sorular</a></li>
                                <li className="nav-item mb-2"><a href="#" className="footer-link p-0">Üyelik Sözleşmesi</a></li>

                            </ul>
                        </div>

                        <div className="col-2">
                            <span className='footer-baslik'>KURUMSAL</span>
                            <ul className="nav flex-column mt-2">
                                <li className="nav-item mb-2"><a href="#" className="footer-link p-0">Hakkımızda</a></li>
                                <li className="nav-item mb-2"><a href="#" className="footer-link p-0">İletişim</a></li>
                                <li className="nav-item mb-2"><a href="#" className="footer-link p-0">Kariyer</a></li>
                                <li className="nav-item mb-2"><a href="#" className="footer-link p-0">Rehber</a></li>
                            </ul>
                        </div>

                        <div className="col-4">
                            <form>
                                <h5 className='text-white'>E-Bültene Kayıt Ol!</h5>
                                <p className='text-white footer-link' style={{ fontSize: "15px" }}>İndirim, kampanya, duyuru ve fırsatlar ile ilgili e-posta almak ister misiniz?</p>
                                <div className="d-flex w-100">
                                    <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                                    <input id="newsletter1" type="text" className="form-control" placeholder="E-posta adresinizi yazın..." />
                                    <button className="btn btn-outline-danger" type="button">Gönder</button>
                                </div>
                                <div className='mt-4'>
                                    <p className='h5 mb-3 text-white'>
                                        Bizi Takip Edin
                                    </p>
                                    <FaFacebookF className='me-3' color="#4267B2" size={30} />
                                    <FaInstagram className='me-3' color="#fb3958" size={30} />
                                    <FaTwitter className='me-3' color="#1DA1F2" size={30} />
                                    <FaYoutube className='me-3' color="#c4302b" size={30} />
                                    <FaGooglePlusG className='me-3' color="#DD4B39" size={30} />
                                    <FaPinterestP className='me-3' color="#E60023" size={30} />
                                    <FaVimeoV size={30} />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


            <footer className="row bg-verydark justify-content-center mt-0 pt-0 row-1 mb-0 px-sm-3 px-2">
                <div className="col-12">
                    <div className="row my-4 row-1 no-gutters">
                        <div className="col-sm-3 col-auto text-white text-center fw-bold fs-5"><small>&#9400; MeKaShop</small></div>
                        <div className="col-md-3 col-auto"></div>
                        <div className="col-md-3 col-auto">


                        </div>
                        <div className="col">
                            <Image
                                src="/images/payment-support.png"
                                alt="Picture of the author"
                                width={500}
                                height={33}
                            />
                            {/* <span>
                                <img src="https://i.imgur.com/TtB6MDc.png" className="img-fluid" width="25" />
                            </span>
                            <span>
                                <img src="https://i.imgur.com/N90KDYM.png" className="img-fluid " width="25" />
                            </span> */}
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;
