import styles from './Dropdown.module.scss';
import React from 'react';
import { FormControl, RadioGroup, FormControlLabel, Radio, Typography } from '@mui/material';
import { addItems } from '../../redux/slices/recomendationsSlice';
import { useDispatch } from 'react-redux';

function RangeRadio({ title, list }) {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState(list[0]);

  React.useEffect(() => {
    const someAction = {
      type: title,
      payload: value,
    };
    dispatch(addItems(someAction));
  }, [value]);

  return (
    <FormControl>
      <div className={styles.radioControl}>
        <RadioGroup
          row
          color={'primary'}
          aria-labelledby={`${title}-radio-buttons-group-label`}
          defaultValue={list[0]}
          name="radio-buttons-group">
          {list.map((item, index) => (
            <FormControlLabel
              labelPlacement="bottom"
              onClick={() => setValue(item)}
              key={index}
              value={item}
              style={{
                minWidth: '70px',
              }}
              control={
                <Radio
                  sx={{
                    '& .MuiSvgIcon-root': {
                      fontSize: 30,
                    },
                  }}
                  style={{
                    background: '#fff',
                    width: '20px',
                    border: 'none',
                    color: '#7732E4',
                  }}
                />
              }
              label={<Typography variant="h5">{item}</Typography>}
            />
          ))}
        </RadioGroup>
      </div>
    </FormControl>
  );
}

export default RangeRadio;
