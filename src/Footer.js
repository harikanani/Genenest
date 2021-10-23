import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="box">
          <h2 className="f-title" style={{ textAlign: "left" }}>
            Genenest
          </h2>
          {/* <div className="items">
            <div className="key">Landline</div>
            <div className="value">01141756925</div>
            <div className="key"></div>
            <div className="value"></div>
          </div>
          <div className="items">
            <div className="key">Phone</div>
            <div className="value">7982454888</div>
            <div className="key"></div>
            <div className="value"></div>
          </div> */}
          <table className="tab">
            <tr>
              <td>Landline</td>
              <td>:01141756925</td>
            </tr>
            <tr>
              <td>Phone</td>
              <td>:7982454888</td>
            </tr>
          </table>
          <table className="tab">
            <tr>
              <td>For Enquiry</td>
              <td>:info@gmail.in</td>
            </tr>
            <tr>
              <td>For Orders</td>
              <td>:order@biodx.in</td>
            </tr>
          </table>
          <div className="address">
            <p>
              206, Aggarwal Square Plaza, plot No 9, Pocket 7, Sector 12,
              Dwarka, New Delhi, Delhi 110075
            </p>
          </div>
          <div className="socials">
            <div className="icons">
              <i className="fab fa-instagram"></i>
            </div>
            <div className="icons">
              <i className="fab fa-facebook-f"></i>
            </div>
            <div className="icons">
              <i className="fab fa-twitter"></i>
            </div>
          </div>
        </div>
        <div className="box">
          <ul className="f-items">
            <div className="c-table">
              <h3 className="f-title">OUR PRODUCTS</h3>
              <li className="f-item">item1</li>
              <li className="f-item">item2</li>
              <li className="f-item">item3</li>
              <li className="f-item">item4</li>
              <li className="f-item">item5</li>
              <li className="f-item">item6</li>
              <li className="f-item">item7</li>
              <li className="f-item">item8</li>
              <li className="f-item">item9</li>
            </div>
          </ul>
        </div>
        <div className="box">
          <ul className="f-items">
            <div className="c-table">
              <h3 className="f-title">QUICK LINKS</h3>
              <li className="f-item">Home</li>
              <li className="f-item">About us</li>
              <li className="f-item">Consulting</li>
              <li className="f-item">Production</li>
              <li className="f-item">Venchures</li>
            </div>
          </ul>
        </div>
      </div>
      <div className="f-text">
        <p>Copyright &copy; Genenest Biotech</p>
      </div>
    </div>
  );
};

export default Footer;
