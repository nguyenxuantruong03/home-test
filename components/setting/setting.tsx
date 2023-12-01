'use client';
import { BookOpen, Heart, Settings, ShoppingCart } from "lucide-react";
import './setting.scss';
import { useState, useEffect, useRef } from "react";
import SettingModal from "../uis/settingmodal";

const Setting = () => {
    const [isOpen, setIsOpen] = useState(false);
    const settingRef = useRef<HTMLDivElement | null>(null);
    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    const handleOutsideClick = (event: MouseEvent) => {
        if (settingRef.current && !settingRef.current.contains(event.target as Node)) {
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
            <div className={`setting-screen ${isOpen ? 'opened' : ''}`} ref={settingRef}>
                <div className="setting-wrapper">
                    <div onClick={handleClick}><Settings width="18" /></div>
                    <div><Heart width="18" /></div>
                    <div><BookOpen width="18" /></div>
                    <div><ShoppingCart width="18" /></div>
                </div>
            </div>
            {isOpen && (
                <div className={`setting-modal ${isOpen ? 'opened' : ''}`}><SettingModal /></div>
            )}
        </>
    );
};

export default Setting;
