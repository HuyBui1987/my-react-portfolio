import React from 'react';
import { FaGithubSquare, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Footer() {
  const iconItems = [
    {
      icon: (
        <a
          href="https://github.com/HuyBui1987"
          target="_blank"
          rel="noopener noreferrer"
          whilehover={{ scale: 1.1 }}
          whiletap={{ scale: 0.9 }}>
          <FaGithubSquare />
        </a>
      )
    },
    {
      icon: (
        <a
          href="https://www.linkedin.com/in/huy-bui-xuan-b0b079238/"
          target="_blank"
          rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      )
    },
    {
      icon: (
        <a href="mailto:huybuixuan87@gmail.com" aria-label="Send me an e-mail for questions">
          <FaEnvelope />
        </a>
      )
    }
  ];

  return (
    <footer className="footer">
      <div className="flex items-center justify-center">
        {iconItems.map((item) => (
          <div key={item.href}>
            <div className="nav-link">
              <div className="icon-padding">
                <div>{item.icon}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
