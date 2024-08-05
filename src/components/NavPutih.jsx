import "./NavPutih.css";

const NavPutih = () => {
  return (
    <div className="nav-putih">
      <div className="primary-button3">
        <b className="pilih-kategori-barang">Pilih Kategori Barang</b>
        <div className="chevron-wrapper">
          <img className="chevron-icon" alt="" src="/chevron.svg" />
        </div>
      </div>
      <div className="nav-putih-inner">
        <div className="secondary-button-parent">
          <div className="secondary-button4">
            <div className="katalog2">Beranda</div>
          </div>
          <button className="secondary-button5">
            <div className="katalog3">Katalog</div>
          </button>
          <div className="secondary-button6">
            <div className="katalog4">Favorite</div>
          </div>
          <div className="secondary-button7">
            <div className="katalog5">Chat</div>
          </div>
          <div className="secondary-button8">
            <div className="katalog6">Bantuan</div>
          </div>
        </div>
      </div>
      <div className="alamat-wrapper">
        <div className="alamat">
          <div className="secondary-button9">
            <b className="secondary-button10">Secondary Button</b>
          </div>
          <div className="jl-dahlia-blok">Jl. Dahlia Blok J5 No. 32</div>
        </div>
      </div>
    </div>
  );
};

export default NavPutih;
