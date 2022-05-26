import styles from './Dropdown.module.scss';
import React from 'react';

function Dropdown({ dropdownList }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [value, setValue] = React.useState(0);

  const onClickItem = (i) => {
    setValue(i);
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdown}>
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
