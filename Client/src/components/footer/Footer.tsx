import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
       <div className='footer_wrapper'>

           <div className='google_maps_div'>
               <iframe
                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d538.8277827267253!2d44.597786017483536!3d40.18525042552208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406aa3592b5b0bad%3A0x888c28fc221b7e61!2z0JTQttGA0LLQtdC2LCDQldGA0LXQstCw0L0!5e0!3m2!1sru!2sam!4v1677955408030!5m2!1sru!2sam"
                   className='google_map'
                   referrerPolicy="no-referrer-when-downgrade">
               </iframe>
           </div>

       </div>
    );
};

export default Footer;
