import { useState } from "react";
import { Stack, TextField, InputAdornment } from "@mui/material";

export const MuiTextField = () => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <Stack spacing={4}>
      {/* Variant */}
      <Stack spacing={2} direction="row">
        <TextField label="Outlined" variant="outlined" />
        <TextField label="Filled" variant="filled" />
        <TextField label="Standard" variant="standard" />
      </Stack>

      {/* size & color */}
      <Stack spacing={2} direction="row">
        <TextField label="Small secondary" size="small" color="secondary" />
      </Stack>

      {/* error */}
      <Stack spacing={2} direction="row">
        <TextField
          label="Form Input"
          required
          helperText={
            !value ? "Required" : "Do not share your password with anyone"
          }
          type="password"
          error={!value}
          value={value}
          onChange={handleChange}
        />
      </Stack>

      {/* InputAdornment */}
      <Stack spacing={2} direction="row">
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        />
      </Stack>
    </Stack>
  );
};
