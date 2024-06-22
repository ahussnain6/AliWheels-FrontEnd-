import React from 'react'
import "./styles/Footer.css";
import { footer } from '../../public/Features';
const Footer = () => {
  return (
    <>
        <section class="footer">
      <div class="footer-row">
        <div class="footer-col">
          <h4>Info</h4>
          <ul class="links">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Showroom</a></li>
            <li><a href="#">Customers</a></li>
            <li><a href="#">Service</a></li>
            <li><a href="#">Collection</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Explore</h4>
          <ul class="links">
            <li><a href="#">Free Designs</a></li>
            <li><a href="#">Inspection</a></li>
            <li><a href="#">Car Parts</a></li>
            <li><a href="#">Resale Value</a></li>
            <li><a href="#">Art Skills</a></li>
            <li><a href="#">Upcoming Cars</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Legal</h4>
          <ul class="links">
            <li><a href="#">Customer Agreement</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">GDPR</a></li>
            <li><a href="#">Security</a></li>
            <li><a href="#">Testimonials</a></li>
            <li><a href="#">Social Media</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Newsletter</h4>
          <p>
          {footer.part1}
          </p>
        </div>
      </div>
    </section>
    
    </>
  )
}

export default Footer;