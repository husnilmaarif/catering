import React from "react";

function Navigasi() {
  return (
    <>
      {/* navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container navbar-viga">
          <a className="navbar-brand" href="#">
            CateringSaya
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  HARGA
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  JENIS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  TENTANG
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  HUBUNGI
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* end navbar */}
    </>
  );
}

export default Navigasi;
