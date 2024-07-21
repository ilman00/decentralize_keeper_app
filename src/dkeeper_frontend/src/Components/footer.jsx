import React from "react";

let currentDate = new Date();
let currentYear = currentDate.getFullYear();

function Footer(){
    return <footer className="footer">
        <p>Copyright &#169; {currentYear} </p>
    </footer>
}

export default Footer;