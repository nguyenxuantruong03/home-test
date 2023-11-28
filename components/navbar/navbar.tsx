import { ChevronDown, ChevronRight, Menu, ShoppingCart } from "lucide-react";
import "./navbar.scss";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="screen-navbar">
      <div className="navbar">
        <Image
          src="/images/logo2.png"
          className="logo"
          height="22"
          width="92"
          alt="logo"
        />
        <div className="menuwrapper ">
          <span className="item modal">
            Home
            <ChevronDown width="14" className="item-icon" />
          </span>
        <ul className="hide">
            <li className="menu-item-none-boder">Home 1 - Background Image</li>
            <li className="menu-item">Home 2 - Youtube Video</li>
            <li className="menu-item">Home 3 - Google Inspired</li>
            <li className="menu-item">Home 4 - Travel Site</li>
        </ul> 
          <span className="item modal">
            Tours
            <ChevronDown width="14" className="item-icon" />
          </span>
          <ul className="hide">
                <li className="menu-item-multi-level menu-item-none-boder">
              Tour classic Fullwidth <ChevronRight width="13" className="menu-item-icon" />
             <div className="hide2">
              <p className="menu-item-multi-none-border">2 Columns</p>
              <p className="menu-item-multi">3 Columns</p>
              <p className="menu-item-multi">4 Columns</p>
             </div>
            </li>
            <li className="menu-item-multi-level ">
            Tour Classic Sidebar <ChevronRight width="13" className="menu-item-icon" />
             <div className="hide2">
              <p className="menu-item-multi-none-border">Right Sidebar</p>
              <p className="menu-item-multi">Left Sidebar</p>
             </div>
            </li>
            <li className="menu-item-multi-level  ">
            Tour Gird Fullwidth <ChevronRight width="13" className="menu-item-icon" />
             <div className="hide2">
              <p className="menu-item-multi-none-border">2 Columns</p>
              <p className="menu-item-multi">3 Columns</p>
              <p className="menu-item-multi">4 Columns</p>
             </div>
            </li>
            <li className="menu-item-multi-level  ">
            Tour Gird Sidebar <ChevronRight width="13" className="menu-item-icon" />
             <div className="hide2">
              <p className="menu-item-multi-none-border">Right Sidebar</p>
              <p className="menu-item-multi">Left Sidebar</p>
             </div>
            </li>
            <li className="menu-item-multi-level  ">
            Tour List Sidebar <ChevronRight width="13" className="menu-item-icon" />
             <div className="hide2">
              <p className="menu-item-multi-none-border">Right Sidebar</p>
              <p className="menu-item-multi">Left Sidebar</p>
             </div>
            </li>
            <li className="menu-item-multi-level  ">
            Tour Header Type <ChevronRight width="13" className="menu-item-icon" />
             <div className="hide2">
              <p className="menu-item-multi-none-border">Featured Image</p>
              <p className="menu-item-multi">Video</p>
             </div>
            </li>
            <li className="menu-item-multi-level  ">
            Tour Categories <ChevronRight width="13" className="menu-item-icon" />
             <div className="hide2">
              <p className="menu-item-multi-none-border">Rural</p>
              <p className="menu-item-multi">Snow & Ice</p>
              <p className="menu-item-multi">Wildlife</p>
              <p className="menu-item-multi">Mountain</p>
             </div>
            </li>
        </ul>  
          <span className="item modal">
            Booking
            <ChevronDown width="14" className="item-icon" />
          </span>
          <ul className="hide">
          <li className="menu-item-multi-level menu-item-none-boder">
          Online Payment for Booking <ChevronRight width="13" className="menu-item-icon" />
             <div className="hide2">
              <p className="menu-item-multi-none-border">Variable Tour Pricing</p>
              <p className="menu-item-multi">Simple Tour Pricing</p>
             </div>
            </li>
            <li className="menu-item-multi-level  ">
            Customer Booking  <ChevronRight width="13" className="menu-item-icon" />
             <div className="hide2">
              <p className="menu-item-multi-none-border">Booking Form + Sub Tour Date</p>
              <p className="menu-item-multi">Booking Form + Custom Date</p>
             </div>
            </li>
            <li className="menu-item-multi-level  ">
            Tour Durations  <ChevronRight width="13" className="menu-item-icon" />
             <div className="hide2">
              <p className="menu-item-multi-none-border">Single Day Tour</p>
              <p className="menu-item-multi">Multiple Days Tour</p>
             </div>
            </li>
            <li className="menu-item">Custom Booking URL for Affiliate Your</li>
            <li className="menu-item">Custom Booking using customer HTML & Shortcode</li>
            <li className="menu-item-multi-level  ">
            Header Options  <ChevronRight width="13" className="menu-item-icon" />
             <div className="hide2">
              <p className="menu-item-multi-none-border">Standard Background Header</p>
              <p className="menu-item-multi">Video Background Header</p>
             </div>
            </li>
            <li className="menu-item-multi-level  ">
            Layout Options   <ChevronRight width="13" className="menu-item-icon" />
             <div className="hide2">
              <p className="menu-item-multi-none-border">With Sidebar</p>
              <p className="menu-item-multi">Fullwidth</p>
             </div>
            </li>
        </ul> 

          <span className="item modal">
            Destinations
            <ChevronDown width="14" className="item-icon" />
          </span>
          <ul className="hide">
            <li className="menu-item-none-boder">Destination Fullwidth</li>
            <li className="menu-item">Desination + Video Header</li>
            <li className="menu-item">Destination Right Sidebar</li>
            <li className="menu-item">Destionation Left Sidebar</li>
            <li className="menu-item">Single Destination</li>
            <li className="menu-item">Single Destination + Video</li>
        </ul>  

          <span className="item modal">
            Pages
            <ChevronDown width="14" className="item-icon" />
          </span>
          <ul className="hide">
            <li className="menu-item-none-boder">About Us</li>
            <li className="menu-item">Contact Us</li>
            <li className="menu-item">FAQs</li>
            <li className="menu-item">Gallery</li>
            <li className="menu-item">Page Fullwidth</li>
            <li className="menu-item">Page + Video Background Header</li>
            <li className="menu-item">Page Right Sidebar</li>
            <li className="menu-item">Page Left Sidebar</li>
        </ul>  

          <span className="item modal">
            Blog
            <ChevronDown width="14" className="item-icon" />
          </span>
          <ul className="hide">
            <li className="menu-item-none-boder">Blog Right Sidebar</li>
            <li className="menu-item">Blog Left Sidebar</li>
            <li className="menu-item">Blog Fullwidth</li>
            <li className="menu-item">Blog Grid Right Sidebar</li>
            <li className="menu-item">Blog Grid Left Sidebar</li>
            <li className="menu-item">Blog Grid Fullwidth</li>
            <li className="menu-item">Blog Full + Grid Right Sidebar</li>
            <li className="menu-item">Blog Full + Grid Left Sidebar</li>
            <li className="menu-item">BLog Full + Grid Fullwidth</li>
        </ul> 

          <span className="item modal">
            Shrotcodes
            <ChevronDown width="14" className="item-icon" />
          </span>
          <ul className="hide">
          <li className="menu-item-none-boder">Accordion & Toggles</li>
            <li className="menu-item">Alert Boxes</li>
            <li className="menu-item">Animated Content</li>
            <li className="menu-item">Buttons & Social Icons</li>
            <li className="menu-item">Columns</li>
            <li className="menu-item">Google Maps</li>
            <li className="menu-item">Image Frame & Animation</li>
            <li className="menu-item">Image Teasers</li>
            <li className="menu-item">Pricing Tables</li>
            <li className="menu-item">Tabs</li>
        </ul>  

          <span className="item modal">
            Shop
            <ChevronDown width="14" className="item-icon" />
          </span>
          <ul className="hide">
            <li className="menu-item-none-boder">Shop Fullwidth</li>
            <li className="menu-item">Shop Sidebar</li>
            <li className="menu-item">Signle Product Fullwdith</li>
            <li className="menu-item">Singhle Product With Sidebar</li>
        </ul>  

          <span className="item1">
            <Menu width="16" />
          </span>
          <span className="item2">
            <ShoppingCart width="14" />
            <p className="dot">0</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
