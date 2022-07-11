import React from "react";
import Link from "next/link";

const Footer = () => {
    return (
        <>
            <div className="b-example-divider text-center mt-5">
                <div className='align-bottom' style={{ marginTop: "9px", fontSize: "20px", color: "#ff6000", fontWeight: "800" }}>
                    FOOTER ALT 2
                </div>
            </div>
            <div className="p-footer">
                <div className="row mb-4">
                    <div className="col-9">
                        <span className="sepetFooterLinkTitle">MeKaShop</span>
                    </div>
                    <div className="col-3">
                        <a href="/siparislerim" className="sepetFooterLink">Siparişlerim</a>
                        <a href="/cozummerkezi" className="sepetFooterLink ms-2">Çözüm Merkezi</a>

                    </div>
                </div>
                <div className="row">
                    <div className="col-3 sepetUrunleriCart">

                        <a href="/kargoteslimat">
                            <div className="sepetFooterTitle">Hızlı Teslimat</div>
                            <div className="sepetFooterImg">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/5/52/Delivery_truck.svg"
                                    alt="kargo teslimat"
                                />
                            </div>
                            <div className="sepetFooterDesc">
                                <h1>
                                    Saat 14:00'e kadar verdiğiniz siparişler aynı gün kapınızda
                                </h1>
                            </div>
                        </a>

                    </div>
                    <div className="col-3 sepetUrunleriCart">

                        <a href="/kargoteslimatone">
                            <div className="sepetFooterTitle">Güvenli Alışveriş</div>
                            <div className="sepetFooterImg">
                                <img
                                    src="/images/security.png"
                                    alt="kargo teslimat"
                                />
                            </div>
                            <div className="sepetFooterDesc">
                                <h1>
                                    Ödeme ve adres bilgilerinizi kaydedin, güvenli alışveriş yapın.
                                </h1>
                            </div>
                        </a>

                    </div>
                    <div className="col-3 sepetUrunleriCart">

                        <a href="/kargoteslimattwo">
                            <div className="sepetFooterTitle">Mobil Cebinizde</div>
                            <div className="sepetFooterImg">
                                <img
                                    src="/images/mobilepng-removebg-preview.png"
                                    alt="kargo teslimat"
                                />
                            </div>
                            <div className="sepetFooterDesc">
                                <h1>
                                    Dilediğiniz her yerden güvenli alışverişin keyfini çıkarın.
                                </h1>
                            </div>
                        </a>

                    </div>
                    <div className="col-3 sepetUrunleriCart">

                        <a href="/kargoteslimatthree">
                            <div className="sepetFooterTitle">Kolay İade</div>
                            <div className="sepetFooterImg">
                                <img
                                    src="https://shippingchimp.com/static/images/features/returns-center.png"
                                    alt="kargo teslimat"
                                />
                            </div>
                            <div className="sepetFooterDesc">
                                <h1>
                                    Aldığınız ürünü iade etmek hiç bu kadar kolay olmamıştı.
                                </h1>
                            </div>
                        </a>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
