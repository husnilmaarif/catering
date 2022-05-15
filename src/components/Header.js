import React from "react";
import employee from "../img/employee.png";
import hires from "../img/hires.png";
import security from "../img/security.png";
import pelanggan from "../img/pelanggan.jpg";

function Header() {
  return (
    <>
      {/* header */}
      <div className="container-fluid text-center header">
        <div className="container col-lg-6 offset-lg-3">
          <h1>
            Acara <span>spesial</span>,<br /> perlu hidangan <span>spesial</span>
          </h1>
          <p className="text-center text-light">Kami menyediakan paket catering untuk membantu menyiapkan makanan dalam acara anda dengan baik dan praktis</p>
          <a href="#" className="btn btn-primary mt-3">
            Lihat Catering
          </a>
        </div>
      </div>
      {/* end header */}

      {/* container */}
      <div className="container">
        {/* panel */}
        <div className="row justify-content-center panel">
          <div className="col-10">
            <div className="row">
              <div className="col-lg-4 col-sm-8 p-3 col-panel">
                <img src={employee} alt="employee" className="float-start img-panel p-1 mx-2" />
                <h4 className="mt-2">12 Menu</h4>
                <p>Yang tersedia di CateringSaya</p>
              </div>
              <div className="col-lg-4 col-sm-8 p-3 col-panel">
                <img src={hires} alt="hires" className="float-start img-panel p-1 mx-2" />
                <h4 className="mt-2">30 Pelanggan</h4>
                <p>Yang puas menggunakan layanan kami</p>
              </div>
              <div className="col-lg-4 col-sm-8 p-3 col-panel">
                <img src={security} alt="security" className="float-start img-panel p-1 mx-2" />
                <h4 className="mt-2">120 Foto</h4>
                <p>Berbagai menu dan service</p>
              </div>
            </div>
          </div>
        </div>
        {/* end panel */}
      </div>
      {/* end container */}
    </>
  );
}

export default Header;
