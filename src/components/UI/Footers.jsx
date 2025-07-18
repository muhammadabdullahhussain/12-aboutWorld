import footerContact from '../../api/footerApi.json';
import { NavLink } from 'react-router-dom';

import {MdPlace} from 'react-icons/md';
import {TbMailPlus} from 'react-icons/tb';
import {IoCallSharp} from 'react-icons/io5';



const Footers = () => {
  const footerIcons = {
    MdPlace: <MdPlace />,
    IoCallSharp: <IoCallSharp />,
    TbMailPlus: <TbMailPlus />,
  };

  return (
    <footer className="footer-section">
      <div className="container grid grid-three-cols">
        {footerContact.map ((currData, idx) => {
          const {icon, title, details} = currData;
          return (
            <div className="footer-contact" key={idx}>
              <div className="icon">{footerIcons[icon]}</div>
              <div className="footer-contact-text">
                <p>{title}</p>
                <p>{details}</p>
              </div>
            </div>
          );
        })}
      </div>

       <div className="copyright-area">
        <div className="container">
          <div className="grid grid-two-cols">
            <div className="copyright-text">
              <p>
                Copyright &copy; 2025, All Right Reserved
                <NavLink to="https://iamabdullahhussain.netlify.app/" target="_blank">
                  Muhammad Abdullah Hussain
                </NavLink>
              </p>
            </div>

            <div className="footer-menu">
              <ul>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>

                <li>
                  <NavLink
                    to="https://www.linkedin.com/in/muhammad-abdullah-hussain-6bb460364/"
                    target="_blank"
                  >
                    Social
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="https://github.com/muhammadabdullahhussain"
                    target="_blank"
                  >
                    Source Code
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footers;
