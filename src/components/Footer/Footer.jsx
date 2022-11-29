import React from 'react';
import DataFooter from './utils/DataFooter';
import "./Footer.css";

const Footer = () => {
    return (
      <div>
        <div className="footer">
          {DataFooter.paragraphs.map((paragraph, index) => (
            <div key={index} className="paragraphes-items">
              {paragraph.lignes.map((ligne, index) => (
                <p key={index}>{ligne}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
}

export default Footer;
