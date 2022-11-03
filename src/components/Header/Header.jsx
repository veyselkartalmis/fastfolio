import React, { useState } from 'react';
import "./header.scss";

const Header = () => {
  const [isOpen, setisOpen] = useState(false);

  const handleToggle = () => {
    !isOpen ? setisOpen(true) : setisOpen(false);
  }

  return (
    <header>
      <div className="logo">
        <svg width="266.788" height="53.454" viewBox="0 0 266.788 53.454"> <g transform="translate(-249.32 -367.8)"> <path d="M249.325,385.377h4.819v-2.584q0-6.216,2.686-9.079t8.483-2.863c1.164,0,2.351.056,3.562.177a26.282,26.282,0,0,1,2.794.382l.908.14v8.031a31.021,31.021,0,0,0-4.33-.349,3.433,3.433,0,0,0-2.654.805,4.65,4.65,0,0,0-.7,2.966v2.375h6.844v7.962h-6.844v27.936H254.139V393.338H249.32v-7.962Z" transform="translate(0 -1.363)" fill="#fff" /> <path d="M341.078,437.3H330.392v-4.19c-.093.14-.219.312-.382.521a9.812,9.812,0,0,1-1.22,1.117,14.2,14.2,0,0,1-2.1,1.429,13.641,13.641,0,0,1-3.036,1.155,15.181,15.181,0,0,1-4.013.521,17.041,17.041,0,0,1-12.115-4.47q-4.782-4.47-4.782-13.689,0-8.8,4.959-13.828a16.327,16.327,0,0,1,12.082-5.028,15.348,15.348,0,0,1,6.006,1.117,10.176,10.176,0,0,1,3.632,2.235l.978,1.048v-3.771h10.685V437.3Zm-25.417-11.1a7.781,7.781,0,0,0,6.216,2.584A8.344,8.344,0,0,0,328.3,426.3a9.811,9.811,0,0,0,2.3-6.947,9.366,9.366,0,0,0-2.444-6.877A8.625,8.625,0,0,0,321.737,410a7.669,7.669,0,0,0-6.076,2.547,9.951,9.951,0,0,0-2.235,6.807A10.077,10.077,0,0,0,315.661,426.193Z" transform="translate(-28.553 -17.386)" fill="#fff" /> <path d="M401.853,425.526a12.905,12.905,0,0,0,1.01,1.048,13.4,13.4,0,0,0,2.477,1.639,7.063,7.063,0,0,0,3.422,1.01q2.863,0,2.863-2.654a2.747,2.747,0,0,0-1.429-2.337,17.691,17.691,0,0,0-3.455-1.709,34.7,34.7,0,0,1-4.051-1.848,9.131,9.131,0,0,1-3.455-3.422,10.982,10.982,0,0,1-1.429-5.829,10.533,10.533,0,0,1,3.455-8.171,12.427,12.427,0,0,1,8.693-3.143,16.873,16.873,0,0,1,4.432.559A13.563,13.563,0,0,1,417.739,402a18.552,18.552,0,0,1,2.235,1.536,8.229,8.229,0,0,1,1.359,1.327l.349.559-5.1,6.146a8.839,8.839,0,0,0-6.006-2.724q-2.584,0-2.584,2.375a2.646,2.646,0,0,0,1.434,2.2,19.071,19.071,0,0,0,3.455,1.746,33.162,33.162,0,0,1,4.013,1.918,9.481,9.481,0,0,1,3.422,3.492,11.034,11.034,0,0,1,1.429,5.8q0,5.587-3.385,8.52a12.8,12.8,0,0,1-8.693,2.933,19.243,19.243,0,0,1-4.819-.591,14.738,14.738,0,0,1-3.734-1.429,23.546,23.546,0,0,1-2.514-1.676,11.713,11.713,0,0,1-1.574-1.4l-.419-.629Z" transform="translate(-78.713 -16.999)" fill="#fff" /> <path d="M456.18,390.026h5.1v-7.962l10.685-2.514v10.476h6.565v7.822h-6.565v15.644a6.139,6.139,0,0,0,.629,3.245,2.656,2.656,0,0,0,2.375.94,20.156,20.156,0,0,0,3.771-.559v8.171a27.932,27.932,0,0,1-8.171,1.327q-9.289,0-9.289-8.87v-19.9h-5.1Z" transform="translate(-110.547 -6.012)" fill="#fff" /> <g transform="translate(371.329 368.3)"> <path d="M511.375,385.377h4.819v-2.584q0-6.216,2.687-9.079t8.483-2.863c1.164,0,2.351.056,3.562.177a27.565,27.565,0,0,1,2.794.382l.908.14v8.031a31.023,31.023,0,0,0-4.33-.349,3.433,3.433,0,0,0-2.654.805,4.65,4.65,0,0,0-.7,2.966v2.375h6.844v7.962h-6.844v27.936H516.189V393.338H511.37v-7.962Z" transform="translate(-511.37 -369.663)" fill="none" stroke="#f47701" stroke-width="1" /> <path d="M570.779,405.38a18.938,18.938,0,0,1,13.791-5.271q8.59,0,13.931,5.238a19.714,19.714,0,0,1-.107,27.1,19,19,0,0,1-13.828,5.308q-8.451,0-13.828-5.2T565.36,418.9A18.064,18.064,0,0,1,570.779,405.38Zm7.543,20.635a7.786,7.786,0,0,0,6.248,2.654,7.9,7.9,0,0,0,6.286-2.654,10.486,10.486,0,0,0,2.3-7.124,10.341,10.341,0,0,0-2.3-7.086,7.936,7.936,0,0,0-6.286-2.617,7.791,7.791,0,0,0-6.248,2.654,12.186,12.186,0,0,0,0,14.173Z" transform="translate(-540.222 -385.3)" fill="none" stroke="#f47701" stroke-width="1" /> <path d="M672.586,422.316H661.97V372.8h10.616Z" transform="translate(-591.851 -370.705)" fill="none" stroke="#f47701" stroke-width="1" /> <path d="M700.826,370.186a6.923,6.923,0,0,1,9.5,0,6.41,6.41,0,0,1,0,9.219,6.923,6.923,0,0,1-9.5,0,6.41,6.41,0,0,1,0-9.219Zm10.057,49.726H700.267v-35.9h10.615Z" transform="translate(-611.571 -368.3)" fill="none" stroke="#f47701" stroke-width="1" /> <path d="M744.02,405.38a18.938,18.938,0,0,1,13.791-5.271q8.59,0,13.931,5.238a19.714,19.714,0,0,1-.107,27.1,19,19,0,0,1-13.828,5.308q-8.451,0-13.828-5.2T738.6,418.9A18.1,18.1,0,0,1,744.02,405.38Zm7.543,20.635a7.786,7.786,0,0,0,6.248,2.654,7.9,7.9,0,0,0,6.286-2.654,10.486,10.486,0,0,0,2.3-7.124,10.341,10.341,0,0,0-2.3-7.086,7.936,7.936,0,0,0-6.286-2.617,7.791,7.791,0,0,0-6.248,2.654,10.49,10.49,0,0,0-2.272,7.054A10.63,10.63,0,0,0,751.562,426.016Z" transform="translate(-632.803 -385.3)" fill="none" stroke="#f47701" stroke-width="1" /> </g> </g> </svg>
      </div>
      <div className="links">
        <a href="javascript:;" className="link-item templates">Templates
          <span>
            <svg width="98.202" height="70.427" viewBox="0 0 98.202 70.427"> <path id="Path_1" data-name="Path 1" d="M19.858,5.583c10.344,0,65.3-9.252,57.868,12.2,2.131,3.8-26.9,2.373-26.9,7.263,0,9.323,46.729,23.061,21.153,33.9-4.313,3.042-42.827-6.317-48.738-6.317-6.734,0-25.07,6.389-30.04,2.229C-12.661,49.947-4.34,33.543-4.34,25.042c0-6.444-17.521-29.914-13.676-34.789C-13.107-15.973,11.068,5.583,19.858,5.583Z" transform="translate(18.568 10.876)" fill="rgba(9,17,51,0.18)" /> </svg>
            <svg width="91.339" height="71.616" viewBox="0 0 91.339 71.616"> <path id="Path_2" data-name="Path 2" d="M21.952,5.22c2.153,0,1.595-13.054,10.074-17.3,6.459-3.238,21.475,17.5,25.715,17.3,14.761-.69,19.376.451,22.078,12.2.063.271-.11-.551,0,0,2.131,3.8-26.9,2.373-26.9,7.263,0,9.323,46.729,23.061,21.153,33.9-4.313,3.042-42.827-6.317-48.738-6.317-6.734,0-25.07,6.389-30.04,2.229-5.866-4.908,2.455-21.312,2.455-29.813,0-6.444-10.353-20.929-6.508-25.8C-3.845-7.35,13.162,5.22,21.952,5.22Z" transform="translate(9.611 12.428)" fill="rgba(9,17,51,0.18)" /> </svg>
            <svg width="96.406" height="75.57" viewBox="0 0 96.406 75.57"> <path id="Path_3" data-name="Path 3" d="M19.858,5.583c10.344,0,53.662-8.781,57.868,12.2,2.131,3.8-26.9,2.373-26.9,7.263,0,9.323,43.3,4.486,17.725,15.326-1.738,1.226-7.539-2.739-13.191,1.963C47.4,48.955,38.753,64.695,35.224,64.695c-3.374,0-6.076-14.185-15.366-16.18C11.065,46.626-4.316,56.931-6.8,54.855-9.679,44.886,3.625,39.344,3.638,35.432c.025-8.885-7.978-4.337-7.978-10.39,0-6.444-17.521-29.914-13.676-34.789C-13.107-15.973,11.068,5.583,19.858,5.583Z" transform="translate(18.568 10.876)" fill="rgba(9,17,51,0.18)" /> </svg>
          </span>
        </a>
        <a href="javascript:;" className="link-item">Developers</a>
      </div>
      <div className={`mobile-btn ${isOpen ? "active" : ""}`} onClick={handleToggle}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className={`mobile-menu  ${isOpen ? "active" : ""}`}>
        <a className="link" href="javascript:;">Templates</a>
        <a className="link" href="javascript:;" >Developers</a>
      </div>
    </header >
  )
}

export default Header;