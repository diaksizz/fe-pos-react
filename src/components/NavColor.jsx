import "./NavColor.css";

const NavColor = () => {
  return (
    <header className="nav-color">
      <div className="logo-searchbar">
        <img className="logo-icon" loading="lazy" alt="" src="/logo@2x.png" />
        <div className="logo-searchbar-inner">
          <div className="search-parent">
            <div className="search">
              <div className="frame">
                <img className="leading-icon" alt="" src="/leading-icon.svg" />
                <input className="search1" placeholder="Search" type="text" />
                <img className="trailing-icon" alt="" />
              </div>
            </div>
            <button className="primary-button1">
              <b className="buka-toko1">Cari</b>
            </button>
          </div>
        </div>
      </div>
      <div className="button-navbar-wrapper">
        <div className="button-navbar">
          <div className="bell-parent">
            <img className="bell-icon" alt="" src="/bell.svg" />
            <div className="notifikasi-wrapper">
              <b className="notifikasi">Notifikasi</b>
            </div>
          </div>
          <div className="button-navbar-inner">
            <div className="frame-wrapper10">
              <div className="cart3-parent">
                <img
                  className="cart3-icon"
                  loading="lazy"
                  alt=""
                  src="/cart3.svg"
                />
                <b className="keranjang">Keranjang</b>
              </div>
            </div>
          </div>
          <div className="button-navbar-child">
            <div className="box-parent">
              <img className="box-icon" loading="lazy" alt="" src="/box.svg" />
              <b className="pesanan">Pesanan</b>
            </div>
          </div>
          <button className="primary-button2">
            <b className="buka-toko2">Daftar</b>
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavColor;
