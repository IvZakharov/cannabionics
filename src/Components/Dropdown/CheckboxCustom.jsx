
import React from 'react';
import { addItems } from '../../redux/slices/recomendationsSlice';
import { useDispatch } from 'react-redux';
import { FormControlLabel, Checkbox, Typography } from '@mui/material';

function CheckboxCustom({ title, defCheck }) {
  const [check, setCheck] = React.useState(defCheck);
  const dispatch = useDispatch();

  React.useEffect(() => {
    const someAction = {
      type: title,
      payload: check,
    };
    dispatch(addItems(someAction));
  }, [check]);

  return (
    <FormControlLabel
      sx={{
        '& .MuiSvgIcon-root': {
          fontSize: 30,
        },
      }}
      onChange={() => setCheck(!check)}
      control={<Checkbox  defaultChecked={defCheck}  color="primary" />}
      label={<Typography variant="h5">{title}</Typography>}
    />
  );
}

export default CheckboxCustom;
