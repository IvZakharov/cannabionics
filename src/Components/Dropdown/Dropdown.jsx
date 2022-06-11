import styles from './Dropdown.module.scss';
import React from 'react';

function Dropdown({ dropdownList }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [value, setValue] = React.useState(0);
  const dropdownRef = React.useRef();

  const onClickItem = (i) => {
    setValue(i);
    setIsOpen(false);
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
    <div ref={dropdownRef} className={styles.dropdown}>
      <span onClick={() => setIsOpen(!isOpen)}>{dropdownList[value]}</span>
      {isOpen && (
        <ul>
          {dropdownList.map((item, i) => (
            <li
              key={i}
              onClick={() => onClickItem(i)}
              className={value === i ? `${styles.active}` : ''}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
