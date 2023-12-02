"use client";
import { BookOpen, Heart, Settings, ShoppingCart } from "lucide-react";
import "./setting.scss";
import { useState, useEffect, useRef } from "react";
import SettingModal from "../uis/settingmodal";

const Setting = () => {
  const [isOpen, setIsOpen] = useState(false);
  const settingRef = useRef<HTMLDivElement | null>(null);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      settingRef.current &&
      !settingRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <>
      <div
        className={`setting-screen ${isOpen ? "opened" : ""}`}
        ref={settingRef}
      >
        <div className="setting-wrapper">
          <div className="setting-icon-wrapper" onClick={handleClick}>
            <Settings width="18" className="setting-setting-icon" />
            <div className="setting-label">Choose theme Styling </div>
           
          </div>
          <div className="setting-icon-wrapper">
            <Heart width="18" className="setting-heart-icon" />
            <div className="setting-label">Show case</div>
          </div>
          <div className="setting-icon-wrapper">
            <BookOpen width="18" className="setting-bookopen-icon" />
            <div className="setting-label">Theme Documentaion</div>
          </div>
          <div className="setting-icon-wrapper">
            <ShoppingCart width="18" className="setting-shoppingcart-icon" />
            <div className="setting-label">Parchase Theme</div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className={`setting-modal ${isOpen ? "opened" : ""}`}>
          <SettingModal />
        </div>
      )}
    </>
  );
};

export default Setting;
