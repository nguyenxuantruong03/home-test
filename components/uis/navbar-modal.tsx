'use client'
import { ArrowLeft } from "lucide-react";
import "./index.scss";
import { useState } from "react";
import CardNavbarProduct from "./card-navbar-product";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle  } from "react-icons/ai";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import { FiInstagram } from "react-icons/fi";
import { BsPinterest } from "react-icons/bs";

const NavbarModal = () => {
    const [activeSection, setActiveSection] = useState(null);
    const [activeItem, setActiveItem] = useState(null);
  
    const handleSectionClick = (sectionIndex:any) => {
      if (activeSection === sectionIndex) {
        // If the clicked section is already active, close it
        setActiveSection(null);
        setActiveItem(null);
      } else {
        // Otherwise, set the clicked section as active and close other sections
        setActiveSection(sectionIndex);
        setActiveItem(null);
      }
    };
  
    const handleBackButtonClick = () => {
      setActiveItem(null);
      setActiveSection(null);
    };
  
    const handleItemClick = (itemIndex:any) => {
      setActiveItem(itemIndex);
    };
  
    const renderItems = (items:any) => (
      <ul>
        {items.map((item:any, itemIndex:any) => (
          <li key={itemIndex} className="navbarmodal-items">
            {typeof item === "string" ? (
              <p >{item}</p>
            ) : (
              <>
                <p className="navbarmodal-subnav" onClick={() => handleItemClick(itemIndex)}>
                  {item.item}
                </p>
                {activeItem === itemIndex && renderItems(item.subitems)}
              </>
            )}
          </li>
        ))}
      </ul>
    );
    const menuItems = [
        {
          section: "Home",
          items: [
            "Home 1 - Background Image",
            "Home 2 - Youtube Video",
            "Home 3 - Google Inspired",
            "Home 4 - Travel Site",
          ],
        },
        {
          section: "Tours",
          items: [
            "Tour classic Fullwidth",
            {
              item: "Tour Classic Sidebar",
              subitems: ["Right Sidebar", "Left Sidebar"],
            },
            "Tour Gird Fullwidth",
            {
              item: "Tour Gird Sidebar",
              subitems: ["2 Columns", "3 Columns", "4 Columns", "Right Sidebar", "Left Sidebar"],
            },
            {
              item: "Tour List Sidebar",
              subitems: ["Right Sidebar", "Left Sidebar"],
            },
            {
              item: "Tour Header Type",
              subitems: ["Featured Image", "Video"],
            },
            {
              item: "Tour Categories",
              subitems: ["Rural", "Snow & Ice", "Wildlife", "Mountain"],
            },
          ],
        },
        {
          section: "Booking",
          items: [
            {
              item: "Online Payment for Booking",
              subitems: ["Variable Tour Pricing", "Simple Tour Pricing"],
            },
            {
              item: "Customer Booking",
              subitems: ["Booking Form + Sub Tour Date", "Booking Form + Custom Date"],
            },
            {
              item: "Tour Durations",
              subitems: ["Single Day Tour", "Multiple Days Tour"],
            },
            "Custom Booking URL for Affiliate",
            "Custom Booking using customer HTML & Shortcode",
            {
              item: "Header Options",
              subitems: ["Standard Background Header", "Video Background Header"],
            },
            {
              item: "Layout Options",
              subitems: ["With Sidebar", "Fullwidth"],
            },
          ],
        },
        {
          section: "Destinations",
          items: [
            "Destination Fullwidth",
            "Desination + Video Header",
            "Destination Right Sidebar",
            "Destionation Left Sidebar",
            "Single Destination",
            "Single Destination + Video",
          ],
        },
        {
          section: "Pages",
          items: [
            "About Us",
            "Contact Us",
            "FAQs",
            "Gallery",
            "Page Fullwidth",
            "Page + Video Background Header",
            "Page Right Sidebar",
            "Page Left Sidebar",
          ],
        },
        {
          section: "Blog",
          items: [
            "Blog Right Sidebar",
            "Blog Left Sidebar",
            "Blog Fullwidth",
            "Blog Grid Right Sidebar",
            "Blog Grid Left Sidebar",
            "Blog Grid Fullwidth",
            "Blog Full + Grid Right Sidebar",
            "Blog Full + Grid Left Sidebar",
            "BLog Full + Grid Fullwidth",
          ],
        },
        {
          section: "Shortcodes",
          items: [
            "Accordion & Toggles",
            "Alert Boxes",
            "Animated Content",
            "Buttons & Social Icons",
            "Columns",
            "Google Maps",
            "Image Frame & Animation",
            "Image Teasers",
            "Pricing Tables",
            "Tabs",
          ],
        },
        {
          section: "Shop",
          items: [
            "Shop Fullwidth",
            "Shop Sidebar",
            "Signle Product Fullwdith",
            "Singhle Product With Sidebar",
          ],
        },
      ];
      return (
        <>
        <div className="navbarmodal-screen">
          {activeSection !== null && (
            <div>
              <label className="navbarmodal-back" onClick={handleBackButtonClick}><ArrowLeft width="18"/>Back</label>
            </div>
          )}
          {activeSection === null ? (
            // Render all sections when no section is active
            menuItems.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <span onClick={() => handleSectionClick(sectionIndex)}>
                  {section.section}
                </span>
              </div>
            ))
          ) : (
            // Render only the clicked section and its items
            <div>
              <span onClick={() => handleSectionClick(activeSection)}>
                {menuItems[activeSection].section}
              </span>
              {renderItems(menuItems[activeSection].items)}
            </div>
          )}
        </div>
        <CardNavbarProduct 
        review={5}
        heading="Truong"
        star={4}
        url="/images/card-navbar-product-1.jpeg"
        value={50}
        />
        <div className="navbarmodal-cardnavbar-margintop">
<CardNavbarProduct 
        review={5}
        heading="Truong"
        star={4}
        url="/images/card-navbar-product-1.jpeg"
        value={50}
        />
        <div className="navbar-modal-social">
        <span className="navbar-facebook"><FaFacebook className="navbar-facebook-icon"/></span>
                    <span className="navbar-twitter"><AiFillTwitterCircle className="navbar-twitter-icon"/></span>
                    <span className="navbar-youtube"><TiSocialYoutubeCircular className="navbar-youtube-icon"/></span>
                    <span className="navbar-pinterest"><BsPinterest className="navbar-pinterest-icon"/></span>
                    <span><FiInstagram className="navbar-instagram-icon"/></span>
        </div>
        </div>
        </>
      );
    };
    
    export default NavbarModal;