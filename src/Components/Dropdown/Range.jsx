import styles from './Dropdown.module.scss';
import React from 'react';
import Slider from '@mui/material/Slider';
import { addItems } from '../../redux/slices/recomendationsSlice';
import { useDispatch } from 'react-redux';

function Range({ title }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const dropdownRef = React.useRef();
  const dispatch = useDispatch();

  const [value, setValue] = React.useState(10000);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  React.useEffect(() => {
    const someAction = {
      type: title,
      payload: value,
    };
    dispatch(addItems(someAction));
  }, [value]);

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
            min={10000}
            step={10000}
            max={200000}
            value={value}
            onChange={handleChange}
          />
        </div>
      )}
    </div>
  );
}

export default Range;
