import styles from './Dropdown.module.scss';
import React from 'react';
import Slider from '@mui/material/Slider';

function Range() {
  const [isOpen, setIsOpen] = React.useState(false);
  const dropdownRef = React.useRef();

  const [value, setValue] = React.useState(3000);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.path.includes(dropdownRef.current)) {
        setIsOpen(false);
      }
    };

    document.body.addEventListener('click', handleClickOutside);

    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className={styles.range}>
      <span onClick={() => setIsOpen(!isOpen)}>$ {value}</span>
      {isOpen && (
        <div className={styles.rangeBox}>
          <Slider
            getAriaLabel={() => 'price range'}
            min={3000}
            step={1000}
            max={180000}
            value={value}
            onChange={handleChange}
          />
        </div>
      )}
    </div>
  );
}

export default Range;
