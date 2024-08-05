import { useState } from 'react';
import './App.css';
import Popup from './Components/Popup';
function PesananProses() {
    const [buttonPopup, setButtonPopup] = useState(false);
  return (
      <div className="pesanan-belum-dibayar">
          <div className="navbar-revisi">
              <div className="nav-color">
                  <div className="logo-searchbar">
                      <div className="logo">
                          <div className="logo-removebg-preview-1">
                              <img src="img/Logo.png" alt="logo"/>
                          </div>
                      </div>
                      <div className="group-110371">

                          <div className="search-2">
                    <span className="search-3">
                        Search
                      </span>
                          </div>
                          <div className="primary-button">
                  <span className="buka-toko">
                    Cari
                  </span>
                          </div>
                      </div>
                  </div>
                  <div className="button-navbar">
                      <div className="container-6">
                          <div className="frame-109">
                              <div className="bell">
                                  <img className="vector-2" src="icon/bell.svg"/>
                              </div>
                              <div className="frame-107">
                    <span className="notifikasi">
                      Notifikasi
                    </span>
                              </div>
                          </div>
                          <div className="frame-108">
                              <div className="cart-3">
                                  <img className="vector-stroke" src="icon/cart3.svg"/>
                              </div>
                              <div className="keranjang">
                                  Keranjang
                              </div>
                          </div>
                          <div className="frame-106">
                              <div className="box">
                                  <img className="vector-111-stroke" src="icon/box2.svg"/>
                              </div>
                              <div className="pesanan">
                                  Pesanan
                              </div>
                          </div>
                      </div>
                      <div className="primary-button-1">
                <span className="buka-toko-1">
                  Daftar
                </span>
                      </div>
                  </div>
              </div>
              <div className="nav-putih">
                  <div className="primary-button-2">
              <span className="pilih-kategori-barang">
                Pilih Kategori Barang
              </span>
                      <img className="chevron" src="icon/chevron.svg"/>
                  </div>
                  <div className="frame-1071">
                      <div className="secondary-button-7">
                <span className="katalog-6">
                  Beranda
                </span>
                      </div>
                      <div className="secondary-button-8">
                <span className="katalog-7">
                  Katalog
                </span>
                      </div>
                      <div className="secondary-button-9">
                <span className="katalog-8">
                  Favorite
                </span>
                      </div>
                      <div className="secondary-button-10">
                <span className="katalog-9">
                  Chat
                </span>
                      </div>
                      <div className="secondary-button-11">
                <span className="katalog-10">
                  Bantuan
                </span>
                      </div>
                  </div>
                  <div className="alamat">
              <span className="jl-dahlia-blok-j-5-no-32">
                Jl. Dahlia Blok J5 No. 32
              </span>
                  </div>
              </div>
          </div>
          <div className="container-7">
              <div className="side-nav">
                  <div className="nav-brand">
              <span className="cummo">
                Pesanan Saya
              </span>
                  </div>
                  <div className="nav-list">
                      <div className="nav-item">
                          <div className="leading-icon-nav-link">
                              <div className="leading-icon-2">
                                  <img className="vector-3" src="icon/document.svg"/>
                              </div>
                              <div className="nav-link">
                    <span className="dashboard">
                      Pesanan Saya
                    </span>
                              </div>
                          </div>
                          <div className="trailing-icon-badge">
                              <div className="arrow-right-2">
                                  <img className="vector-4" src="icon/arrow-right.svg"/>
                              </div>
                          </div>
                      </div>
                      <div className="nav-item-1">
                          <div className="leading-icon-3">
                              <img className="vector-5" src="icon/love.svg"/>
                          </div>
                          <div className="nav-link-1">
                  <span className="dashboard-1">
                    Favorite Saya
                  </span>
                          </div>
                      </div>
                      <div className="nav-item-3">
                          <div className="leading-icon-5">
                              <img className="vector-7" src="icon/edit-square.svg"/>
                          </div>
                          <div className="nav-link-3">
                  <span className="dashboard-3">
                    Perpanjangan Sewa
                  </span>
                          </div>
                      </div>
                      <div className="nav-item-2">
                          <div className="leading-icon-4">
                              <img className="vector-6" src="icon/image.svg"/>
                          </div>
                          <div className="nav-link-2">
                  <span className="dashboard-2">
                    Penilaian &amp; Ulasan
                  </span>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="container-3">
                  <div className="group-11037">
                      <div className="search">
                          <div className="leading-icon">
                              <img className="vector" src="icon/search2.svg"/>
                          </div>
                          <span className="search-1">
                  Search
                </span>
                      </div>
                  </div>
                  <div className="container">
                      <div className="secondary-button">      
                <span className="katalog">
                  Belum Bayar
                </span>
                      </div>
                      <div className="secondary-button-1">
                      <div className='secondary-button-aktif'>
                <span className="katalog-1">
                  Sedang Diproses
                </span>
                </div>
                      </div>
                      <div className="secondary-button-2">
                <span className="katalog-2">
                  Digunakan
                </span>
                      </div>
                      <div className="secondary-button-3">
                <span className="katalog-3">
                  Pengembalian
                </span>
                      </div>
                      <div className="secondary-button-4">
                <span className="katalog-4">
                  Selesai
                </span>
                      </div>
                      <div className="secondary-button-5">
                <span className="katalog-5">
                  Kerusakan
                </span>
                      </div>
                  </div>
                  <div className="frame-11070">
                      <div className="group-11128">
                          <div className="container-2">
                              <div className="frame-153">
                                  <div className="rectangle-921">
                                      <img src="img/camera.png" alt="kamera-cannon"></img>
                                  </div>
                                  <div className="frame-131">
                                      <div className="kamera-cannon">
                                          Kamera Cannon
                                      </div>
                                      <div className="durasi-2-hari">
                                          Durasi: 2 Hari
                                      </div>
                                      <span className="tanggal-32245224">
                        Tanggal: 3/2/24-5/2/24
                      </span>
                                  </div>
                              </div>
                              <div className="container-1">
                                  <div className="rp-1000001-hari">
                                      Rp 100.000/ 1 Hari
                                  </div>
                                  <span className="total-rp-205000">
                      Total: Rp205.000
                    </span>
                              </div>
                          </div>
                          <div className="line-21">
                          </div>
                          <div className="container-4">
                              <div className="container-5">
                                  <img className="ellipse-4" src="img/toko.png"/>
                                  <div className="serba-ada">
                                      Serba Ada
                                  </div>
                              </div>
                              <button onClick={() => setButtonPopup(true)} className="secondary-button-6">
                    <span className="secondary-button-13">
                      Unggah Barang
                    </span>
                              </button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <Popup trigger={buttonPopup}>

          </Popup>
      </div>
  );
}

export default PesananProses;
