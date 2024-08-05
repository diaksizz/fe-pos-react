import NavColor from "../components/NavColor";
import NavPutih from "../components/NavPutih";
import FrameComponent1 from "../components/FrameComponent1";
import ProductCard from "../components/ProductCard";
import FrameComponent from "../components/FrameComponent";
import "./Katalog.css";

const Katalog = () => {
  return (
    <div className="katalog">
      <div className="secondary-button">
        <b className="secondary-button1">Filter</b>
      </div>
      <main className="navbar-revisi-parent">
        <form className="navbar-revisi">
          <NavColor />
          <NavPutih />
        </form>
        <section className="frame-parent">
          <div className="frame-group">
            <div className="frame-container">
              <div className="rectangle-parent">
                <div className="frame-child" />
                <div className="beranda-parent">
                  <div className="beranda">Beranda</div>
                  <div className="vuesaxlineararrow-down-wrapper">
                    <img
                      className="vuesaxlineararrow-down-icon"
                      alt=""
                      src="/vuesaxlineararrowdown@2x.png"
                    />
                  </div>
                  <div className="katalog1">Katalog</div>
                  <div className="vuesaxlineararrow-down-container">
                    <img
                      className="vuesaxlineararrow-down-icon1"
                      alt=""
                      src="/vuesaxlineararrowdown@2x.png"
                    />
                  </div>
                </div>
                <FrameComponent1
                  urutBerdasarkan="Urut Berdasarkan"
                  radioFilterName="radioGroup-1"
                  jabodetabek="Terdekat"
                  jabodetabek1="Termurah"
                  jabodetabek2="Terlaris"
                />
                <div className="frame-wrapper">
                  <div className="lokasi-parent">
                    <b className="lokasi">Lokasi</b>
                    <div className="filter-lokasi-parent">
                      <div className="filter-lokasi">
                        <div className="filter-lokasi-inner">
                          <div className="frame-div">
                            <div className="radio-filter-wrapper">
                              <input className="radio-filter" type="radio" />
                            </div>
                            <div className="jabodetabek">Jabodetabek</div>
                          </div>
                        </div>
                        <div className="filter-lokasi-child" />
                      </div>
                      <div className="filter-lokasi1">
                        <div className="filter-lokasi-inner1">
                          <div className="frame-parent1">
                            <div className="radio-filter-container">
                              <input className="radio-filter1" type="radio" />
                            </div>
                            <div className="jabodetabek1">Bali</div>
                          </div>
                        </div>
                        <div className="filter-lokasi-item" />
                      </div>
                      <div className="filter-lokasi2">
                        <div className="filter-lokasi-inner2">
                          <div className="frame-parent2">
                            <div className="radio-filter-frame">
                              <input className="radio-filter2" type="radio" />
                            </div>
                            <div className="jabodetabek2">Riau</div>
                          </div>
                        </div>
                        <div className="line-div" />
                      </div>
                      <div className="filter-lokasi3">
                        <div className="filter-lokasi-inner3">
                          <div className="frame-parent3">
                            <div className="radio-filter-wrapper1">
                              <input className="radio-filter3" type="radio" />
                            </div>
                            <div className="jabodetabek3">Batam</div>
                          </div>
                        </div>
                        <div className="filter-lokasi-child1" />
                      </div>
                      <div className="filter-lokasi4">
                        <div className="filter-lokasi-inner4">
                          <div className="frame-parent4">
                            <div className="radio-filter-wrapper2">
                              <input className="radio-filter4" type="radio" />
                            </div>
                            <div className="jabodetabek4">Jawa Timur</div>
                          </div>
                        </div>
                        <div className="filter-lokasi-child2" />
                      </div>
                      <div className="filter-lokasi5">
                        <div className="filter-lokasi-inner5">
                          <div className="frame-parent5">
                            <div className="radio-filter-wrapper3">
                              <input className="radio-filter5" type="radio" />
                            </div>
                            <div className="jabodetabek5">Jawa Tengah</div>
                          </div>
                        </div>
                        <div className="filter-lokasi-child3" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="frame-wrapper1">
                  <div className="kisaran-harga-parent">
                    <b className="kisaran-harga">Kisaran Harga</b>
                    <div className="input-rangeprice">
                      <div className="wrapper">
                        <div className="wrapper1">
                          <div className="input-affix">
                            <b className="text">{`Rp `}</b>
                          </div>
                          <div className="placeholder">
                            <div className="placeholder-left">0</div>
                          </div>
                          <div className="placeholder1">
                            <div className="placeholder-left1">-</div>
                          </div>
                          <div className="placeholder2">
                            <div className="placeholder-right">0</div>
                          </div>
                          <div className="spacer">
                            <div className="ignore" />
                            <div className="ignore1" />
                          </div>
                        </div>
                      </div>
                      <div className="box" />
                      <div className="zero-height">
                        <div className="date-picker-dropdown">
                          <div className="arrow">
                            <img className="arrow-head-icon" alt="" />
                          </div>
                          <div className="picker-header">
                            <img
                              className="header-super-prev-btn-icon"
                              alt=""
                            />
                            <img className="header-prev-btn-icon" alt="" />
                            <img
                              className="header-super-next-btn-icon"
                              alt=""
                            />
                            <img className="header-next-btn-icon" alt="" />
                            <div className="header-view">
                              <div className="oct">Oct</div>
                              <div className="div">2021</div>
                            </div>
                          </div>
                          <div className="picker-body">
                            <div className="picker-content">
                              <div className="tr">
                                <div className="mon">Mon</div>
                                <div className="tue">Tue</div>
                                <div className="wed">Wed</div>
                                <div className="thu">Thu</div>
                                <div className="fri">Fri</div>
                                <div className="sat">Sat</div>
                                <div className="sun">Sun</div>
                              </div>
                              <div className="tr1">
                                <div className="componentspicker-cellmonth">
                                  <div className="value">26</div>
                                </div>
                                <div className="componentspicker-cellmonth1">
                                  <div className="value1">27</div>
                                </div>
                                <div className="componentspicker-cellmonth2">
                                  <div className="value2">28</div>
                                </div>
                                <div className="componentspicker-cellmonth3">
                                  <div className="value3">29</div>
                                </div>
                                <div className="componentspicker-cellmonth4">
                                  <div className="value4">30</div>
                                </div>
                                <div className="componentspicker-cellmonth5">
                                  <div className="value5">1</div>
                                </div>
                                <div className="componentspicker-cellmonth6">
                                  <div className="value6">2</div>
                                </div>
                              </div>
                              <div className="tr2">
                                <div className="componentspicker-cellmonth7">
                                  <div className="value7">3</div>
                                </div>
                                <div className="componentspicker-cellmonth8">
                                  <div className="value8">4</div>
                                </div>
                                <div className="componentspicker-cellmonth9">
                                  <div className="value9">5</div>
                                </div>
                                <div className="componentspicker-cellmonth10">
                                  <div className="value10">6</div>
                                </div>
                                <div className="componentspicker-cellmonth11">
                                  <div className="value11">7</div>
                                </div>
                                <div className="componentspicker-cellmonth12">
                                  <div className="value12">8</div>
                                </div>
                                <div className="componentspicker-cellmonth13">
                                  <div className="value13">9</div>
                                </div>
                              </div>
                              <div className="tr3">
                                <div className="componentspicker-cellmonth14">
                                  <div className="value14">10</div>
                                </div>
                                <div className="componentspicker-cellmonth15">
                                  <div className="value15">11</div>
                                </div>
                                <div className="componentspicker-cellmonth16">
                                  <div className="value16">12</div>
                                </div>
                                <div className="componentspicker-cellmonth17">
                                  <div className="value17">13</div>
                                </div>
                                <div className="componentspicker-cellmonth18">
                                  <div className="value18">14</div>
                                </div>
                                <div className="componentspicker-cellmonth19">
                                  <div className="value19">15</div>
                                </div>
                                <div className="componentspicker-cellmonth20">
                                  <div className="value20">16</div>
                                </div>
                              </div>
                              <div className="tr4">
                                <div className="componentspicker-cellmonth21">
                                  <div className="value21">17</div>
                                </div>
                                <div className="componentspicker-cellmonth22">
                                  <div className="value22">18</div>
                                </div>
                                <div className="componentspicker-cellmonth23">
                                  <div className="value23">19</div>
                                </div>
                                <div className="componentspicker-cellmonth24">
                                  <div className="value24">20</div>
                                </div>
                                <div className="componentspicker-cellmonth25">
                                  <div className="value25">21</div>
                                </div>
                                <div className="componentspicker-cellmonth26">
                                  <div className="value26">22</div>
                                </div>
                                <div className="componentspicker-cellmonth27">
                                  <div className="value27">23</div>
                                </div>
                              </div>
                              <div className="tr5">
                                <div className="componentspicker-cellmonth28">
                                  <div className="value28">24</div>
                                </div>
                                <div className="componentspicker-cellmonth29">
                                  <div className="value29">25</div>
                                </div>
                                <div className="componentspicker-cellmonth30">
                                  <div className="value30">26</div>
                                </div>
                                <div className="componentspicker-cellmonth31">
                                  <div className="value31">27</div>
                                </div>
                                <div className="componentspicker-cellmonth32">
                                  <div className="value32">28</div>
                                </div>
                                <div className="componentspicker-cellmonth33">
                                  <div className="value33">29</div>
                                </div>
                                <div className="componentspicker-cellmonth34">
                                  <div className="value34">30</div>
                                </div>
                              </div>
                              <div className="tr6">
                                <div className="componentspicker-cellmonth35">
                                  <div className="value35">31</div>
                                </div>
                                <div className="componentspicker-cellmonth36">
                                  <div className="value36">1</div>
                                </div>
                                <div className="componentspicker-cellmonth37">
                                  <div className="value37">2</div>
                                </div>
                                <div className="componentspicker-cellmonth38">
                                  <div className="value38">3</div>
                                </div>
                                <div className="componentspicker-cellmonth39">
                                  <div className="value39">4</div>
                                </div>
                                <div className="componentspicker-cellmonth40">
                                  <div className="value40">5</div>
                                </div>
                                <div className="componentspicker-cellmonth41">
                                  <div className="value41">6</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="picker-panelfooter">
                            <div className="footer-extra">
                              <div className="button">
                                <div className="icon">
                                  <div className="width-change-size-here">
                                    <div className="ignore2" />
                                    <div className="ignore3" />
                                  </div>
                                  <div className="icon-wrapper-h">
                                    <div className="height-change-size-here">
                                      <div className="ignore4" />
                                      <div className="ignore5" />
                                    </div>
                                    <img className="icon-wrapper" alt="" />
                                  </div>
                                </div>
                                <div className="text1">
                                  <div className="text2">Button Title</div>
                                </div>
                                <div className="icon-2">
                                  <div className="width-change-size-here1">
                                    <div className="ignore6" />
                                    <div className="ignore7" />
                                  </div>
                                  <div className="icon-wrapper-h1">
                                    <div className="height-change-size-here1">
                                      <div className="ignore8" />
                                      <div className="ignore9" />
                                    </div>
                                    <img className="icon-wrapper1" alt="" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="footer">
                              <div className="now-wrapper">
                                <div className="texttext">
                                  <div className="text3">Now</div>
                                </div>
                              </div>
                              <div className="button1">
                                <div className="icon1">
                                  <div className="width-change-size-here2">
                                    <div className="ignore10" />
                                    <div className="ignore11" />
                                  </div>
                                  <div className="icon-wrapper-h2">
                                    <div className="height-change-size-here2">
                                      <div className="ignore12" />
                                      <div className="ignore13" />
                                    </div>
                                    <img className="icon-wrapper2" alt="" />
                                  </div>
                                </div>
                                <div className="text4">
                                  <div className="text5">Ok</div>
                                </div>
                                <div className="icon-21">
                                  <div className="width-change-size-here3">
                                    <div className="ignore14" />
                                    <div className="ignore15" />
                                  </div>
                                  <div className="icon-wrapper-h3">
                                    <div className="height-change-size-here3">
                                      <div className="ignore16" />
                                      <div className="ignore17" />
                                    </div>
                                    <img className="icon-wrapper3" alt="" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="footer-extra1">
                            <div className="texttext1">
                              <div className="text6">extra footer</div>
                            </div>
                          </div>
                          <div className="footer1">
                            <div className="today">Today</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="frame-wrapper2">
                  <div className="penilaian-parent">
                    <b className="penilaian">Penilaian</b>
                    <div className="frame-parent6">
                      <div className="parent">
                        <div className="div1">5</div>
                        <img
                          className="star-fill-icon"
                          alt=""
                          src="/starfill.svg"
                        />
                      </div>
                      <div className="group">
                        <div className="div2">4</div>
                        <img
                          className="star-fill-icon1"
                          alt=""
                          src="/starfill-1.svg"
                        />
                      </div>
                      <div className="container">
                        <div className="div3">3</div>
                        <img
                          className="star-fill-icon2"
                          alt=""
                          src="/starfill-1.svg"
                        />
                      </div>
                      <div className="parent1">
                        <div className="div4">2</div>
                        <img
                          className="star-fill-icon3"
                          alt=""
                          src="/starfill-1.svg"
                        />
                      </div>
                      <div className="parent2">
                        <div className="div5">1</div>
                        <img
                          className="star-fill-icon4"
                          alt=""
                          src="/starfill-1.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <FrameComponent1
                  urutBerdasarkan="Jenis Pembatalan"
                  jabodetabek="Tidak dapat dibatalkan"
                  jabodetabek1="14 hari sebelum rental"
                  jabodetabek2="7 hari sebelum rental"
                  propWidth="unset"
                  propPadding="0px 0px 0px var(--padding-mid)"
                  propAlignSelf="stretch"
                  propWidth1="unset"
                  propFlex="1"
                  propWidth2="unset"
                  propPadding1="0px 0px 0px var(--padding-mid)"
                  propAlignSelf1="stretch"
                  propWidth3="unset"
                  propFlex1="1"
                  propWidth4="unset"
                  propPadding2="0px 0px 0px var(--padding-mid)"
                  propAlignSelf2="stretch"
                  propWidth5="unset"
                  propFlex2="1"
                />
                <div className="frame-wrapper3">
                  <div className="jenis-pengiriman-parent">
                    <b className="jenis-pengiriman">Jenis Pengiriman</b>
                    <div className="filter-lokasi-group">
                      <div className="filter-lokasi6">
                        <div className="filter-lokasi-inner6">
                          <div className="frame-parent7">
                            <div className="radio-filter-wrapper4">
                              <input className="radio-filter6" type="radio" />
                            </div>
                            <div className="jabodetabek6">Diantar</div>
                          </div>
                        </div>
                        <div className="filter-lokasi-child4" />
                      </div>
                      <div className="filter-lokasi7">
                        <div className="filter-lokasi-inner7">
                          <div className="frame-parent8">
                            <div className="radio-filter-wrapper5">
                              <input className="radio-filter7" type="radio" />
                            </div>
                            <div className="jabodetabek7">Ambil di tempat</div>
                          </div>
                        </div>
                        <div className="filter-lokasi-child5" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame-wrapper4">
                <div className="frame-parent9">
                  <div className="frame-parent10">
                    <div className="frame-parent11">
                      <div className="vector-parent">
                        <img
                          className="frame-item"
                          alt=""
                          src="/rectangle-422.svg"
                        />
                        <h1 className="beralih-ke-sewa">
                          Beralih ke Sewa, Hemat Pengeluaran!
                        </h1>
                        <div className="shadow-wrapper">
                          <img
                            className="shadow-icon"
                            alt=""
                            src="/shadow.svg"
                          />
                        </div>
                      </div>
                      <div className="frame-parent12">
                        <div className="background-complete-parent">
                          <img
                            className="background-complete-icon"
                            alt=""
                            src="/backgroundcomplete.svg"
                          />
                          <div className="background-simple-parent">
                            <img className="background-simple-icon" alt="" />
                            <img
                              className="speech-bubble-icon"
                              loading="lazy"
                              alt=""
                              src="/speechbubble.svg"
                            />
                          </div>
                          <div className="vector-group">
                            <img
                              className="vector-icon"
                              alt=""
                              src="/vector.svg"
                            />
                            <div className="vector-container">
                              <img
                                className="vector-icon1"
                                alt=""
                                src="/vector-1.svg"
                              />
                              <div className="vector-parent1">
                                <img
                                  className="vector-icon2"
                                  alt=""
                                  src="/vector-2.svg"
                                />
                                <img
                                  className="vector-icon3"
                                  alt=""
                                  src="/vector-3.svg"
                                />
                              </div>
                              <b className="car-rent">Car Rent</b>
                              <div className="vector-parent2">
                                <img
                                  className="vector-icon4"
                                  alt=""
                                  src="/vector-4.svg"
                                />
                                <img
                                  className="freepik-car-inject-7-icon"
                                  alt=""
                                  src="/freepikcarinject7.svg"
                                />
                                <img
                                  className="vector-icon5"
                                  alt=""
                                  src="/vector-5.svg"
                                />
                                <img
                                  className="vector-icon6"
                                  alt=""
                                  src="/vector-6.svg"
                                />
                                <img
                                  className="vector-icon7"
                                  alt=""
                                  src="/vector-7.svg"
                                />
                                <img
                                  className="vector-icon8"
                                  alt=""
                                  src="/vector-8.svg"
                                />
                              </div>
                              <div className="vector-parent3">
                                <img
                                  className="vector-icon9"
                                  alt=""
                                  src="/vector1.svg"
                                />
                                <img
                                  className="vector-icon10"
                                  alt=""
                                  src="/vector-9.svg"
                                />
                              </div>
                              <div className="vector-parent4">
                                <img
                                  className="vector-icon11"
                                  alt=""
                                  src="/vector2.svg"
                                />
                                <img
                                  className="vector-icon12"
                                  alt=""
                                  src="/vector-10.svg"
                                />
                              </div>
                              <div className="vector-parent5">
                                <img
                                  className="vector-icon13"
                                  alt=""
                                  src="/vector3.svg"
                                />
                                <img
                                  className="vector-icon14"
                                  alt=""
                                  src="/vector-11.svg"
                                />
                              </div>
                              <button className="frame-button">
                                <img
                                  className="vector-icon15"
                                  alt=""
                                  src="/vector4.svg"
                                />
                                <img
                                  className="vector-icon16"
                                  alt=""
                                  src="/vector-12.svg"
                                />
                                <b className="rent">Rent</b>
                              </button>
                              <div className="vector-parent6">
                                <img
                                  className="vector-icon17"
                                  alt=""
                                  src="/vector-13.svg"
                                />
                                <img
                                  className="vector-icon18"
                                  alt=""
                                  src="/vector-14.svg"
                                />
                              </div>
                            </div>
                            <img
                              className="vector-icon19"
                              alt=""
                              src="/vector-15.svg"
                            />
                            <img
                              className="vector-icon20"
                              alt=""
                              src="/vector-16.svg"
                            />
                          </div>
                        </div>
                        <img
                          className="character-icon"
                          alt=""
                          src="/character.svg"
                        />
                      </div>
                    </div>
                    <div className="beri-tahu-kami-barang-yang-and-parent">
                      <h1 className="beri-tahu-kami">
                        Beri tahu kami barang yang anda butuhkan
                      </h1>
                      <div className="rectangle-group">
                        <div className="frame-inner" />
                        <img
                          className="online-shoppingcuate-icon"
                          loading="lazy"
                          alt=""
                        />
                      </div>
                      <div className="primary-button">
                        <b className="buka-toko">Request</b>
                      </div>
                    </div>
                  </div>
                  <div className="frame-wrapper5">
                    <div className="product-card-parent">
                      <ProductCard
                        rectangle415="/rectangle-415@2x.png"
                        productName="Kamera Cannon"
                        mainPrice="Rp 100.000"
                      />
                      <ProductCard
                        rectangle415="/rectangle-415-1@2x.png"
                        productName="Kamera"
                        mainPrice="Rp 90.000"
                      />
                      <ProductCard
                        rectangle415="/rectangle-415-2@2x.png"
                        productName="Kamera"
                        mainPrice="Rp 100.000"
                      />
                      <ProductCard
                        rectangle415="/rectangle-415-3@2x.png"
                        productName="Infocus IN 144"
                        mainPrice="Rp 70.000"
                      />
                      <ProductCard
                        rectangle415="/rectangle-415-4@2x.png"
                        productName="BENQ MS550"
                        mainPrice="Rp 85.000"
                      />
                      <ProductCard
                        rectangle415="/rectangle-415-4@2x.png"
                        productName="Benq MS550"
                        mainPrice="Rp 85.000"
                      />
                      <ProductCard
                        rectangle415="/rectangle-415-6@2x.png"
                        productName="Laptop HP Stream 14"
                        mainPrice="Rp 400.000"
                      />
                      <ProductCard
                        rectangle415="/rectangle-415-7@2x.png"
                        productName="Laptop ASUS L210"
                        mainPrice="Rp 400.000"
                      />
                      <ProductCard
                        rectangle415="/rectangle-415-8@2x.png"
                        productName="ASUS ROG STRIX-G"
                        mainPrice="Rp 600.000"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-wrapper6">
              <div className="rectangle-container">
                <div className="rectangle-div" />
                <div className="secondary-button2">
                  <b className="secondary-button3">Bergabung</b>
                </div>
                <img className="invitepana-icon" loading="lazy" alt="" />
                <h1 className="daftarkan-barang-anda">
                  Daftarkan Barang Anda dan Dapatkan Keuntungan
                </h1>
              </div>
            </div>
          </div>
          <div className="frame-wrapper7">
            <div className="frame-parent13">
              <div className="frame-parent14">
                <div className="frame-wrapper8">
                  <div className="chevron-left-wrapper">
                    <img
                      className="chevron-left-icon"
                      loading="lazy"
                      alt=""
                      src="/chevronleft.svg"
                    />
                  </div>
                </div>
                <div className="rectangle-parent1">
                  <div className="frame-child1" />
                  <div className="div6">1</div>
                  <div className="div7">2</div>
                  <div className="div8">3</div>
                  <h3 className="h3">...</h3>
                  <div className="div9">5</div>
                  <div className="div10">4</div>
                </div>
              </div>
              <div className="frame-wrapper9">
                <div className="chevron-right-wrapper">
                  <img
                    className="chevron-right-icon"
                    loading="lazy"
                    alt=""
                    src="/chevronright.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FrameComponent />
    </div>
  );
};

export default Katalog;
