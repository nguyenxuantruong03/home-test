import { ChevronDown, ArrowUpDown,Calendar   } from 'lucide-react';
import './index.scss'

interface SelectIconProps {
  options: {
    value: string;
    label: string;
  }[];
  heading: string;
  icon: string;
}

const SelectIcon: React.FC<SelectIconProps> = ({ options,heading,icon }) => {
  return (
    <div className="select-container">
      <div className="select-wrapper">
        <select className="select-box">
          <option value="0">{heading}</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {icon && (
          <div className="icon-text-field">
            {icon === 'ChevronDown' && <ChevronDown  width="16"/>}
            {icon === 'ArrowUpDown' && <ArrowUpDown  width="16"/>}
            {icon === 'Calendar' && <Calendar   width="16"/>}

          </div>
        )}
      </div>
    </div>
  );
};

export default SelectIcon;
