import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import Stack from '@mui/material/Stack';
import { StaticDatePicker } from '@mui/lab';


export default function YearPickerMUI({setYearDropDown}) {
    const [value, setValue] = useState(new Date());
    setYearDropDown(value.getFullYear())
    // console.log(value.getFullYear())
    return (
        // <DatePicker />
    //   <LocalizationProvider dateAdapter={AdapterDateFns}>
    //     <Stack spacing={3}>
    //       <DatePicker
    //         views={['year']}
    //         label="Year only"
    //         value={value}
    //         onChange={(newValue) => {
    //           setValue(newValue);
    //         }}
    //         renderInput={(params) => <TextField {...params} helperText={null} />}
    //       />
    //     </Stack>
    //   </LocalizationProvider>
    <LocalizationProvider dateAdapter={AdapterDateFns}>
  <StaticDatePicker
    displayStaticWrapperAs="desktop"
    openTo="year"
    value={value}
    onChange={(newValue) => {
      setValue(newValue);
    }}
    renderInput={(params) => <TextField {...params} />}
  />
</LocalizationProvider>

    )
}
