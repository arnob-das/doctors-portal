import React from 'react';
import { Link } from 'react-router-dom';
import footer from '../../assets/images/footer.png'

const Footer = () => {
    return (
        <footer
            style={{
                background: `url(${footer})`,
                backgroundSize: "cover"
            }}
            className="px-4 py-10 lg:px-12 lg:pt-28">
            <div className="footer">
                <div>
                    <span className="footer-title">Services</span>
                    <Link to="" className="link link-hover">Branding</Link>
                    <Link to="" className="link link-hover">Design</Link>
                    <Link to="" className="link link-hover">Marketing</Link>
                    <Link to="" className="link link-hover">Advertisement</Link>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <Link to="" className="link link-hover">About us</Link>
                    <Link to="" className="link link-hover">Contact</Link>
                    <Link to="" className="link link-hover">Jobs</Link>
                    <Link to="" className="link link-hover">Press kit</Link>
                </div>
                <div>
                    <Link to="" className="footer-title">Legal</Link>
                    <Link to="" className="link link-hover">Terms of use</Link>
                    <Link to="" className="link link-hover">Privacy policy</Link>
                    <Link to="" className="link link-hover">Cookie policy</Link>
                </div>
            </div>
            <div>
                <p className='text-center mt-10 mb-0'>Copyright © 2022 - All right reserved by Doctors Portal</p>
            </div>
        </footer>
    );
};

export default Footer;