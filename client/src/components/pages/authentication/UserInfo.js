import React from "react";
import { Grid, TextField, IconButton, InputAdornment } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const UserInfo = ({
  name,
  label,
  autoFocus,
  type,
  handleInputChange,
  handleShowPassword,
}) => {
  const handlePasswordVisibility = (type) => {
    return type === "password" ? <Visibility /> : <VisibilityOff />;
  };

  return (
    <Grid item xs={12} sm={12}>
      <TextField
        name={name}
        onChange={handleInputChange}
        variant="outlined"
        required
        fullWidth
        label={label}
        autoFocus={autoFocus}
        type={type}
        InputProps={
          name === "password"
            ? {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleShowPassword}>
                      {handlePasswordVisibility()}
                    </IconButton>
                  </InputAdornment>
                ),
              }
            : null
        }
      />
    </Grid>
  );
};

export default UserInfo;
