"use client"
import {useState} from 'react'
import './index.scss'
import {Search } from 'lucide-react'

type TextIconProps = {
    placeholder?: string;
    onChange?: (value: string) => void;
    name?: string;
    value?: any;
    icon: string;
  };
  
  // Define the TextIcon component
  export const TextIcon:React.FC<TextIconProps> = ({ onChange, placeholder, name, value,icon }) => {
    const [inputValue, setInputValue] = useState<string>('');
  
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      setInputValue(value);
      if (onChange) {
        onChange(value);
      }
    };
  
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      console.log(inputValue);
    };
  
    return (
      <form className="input-container" onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <input
            className="inline"
            placeholder={placeholder}
            onChange={handleChange}
            name={name}
            value={inputValue}
          />
          {icon && (
          <div className="icon-text-field">
            {icon === 'Search' && <Search width="16"/>}
            {icon === '$' && "$"}

          </div>
        )}
        </div>
      </form>
    );
  };