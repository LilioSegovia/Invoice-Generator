import * as React from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import UploadIcon from '@mui/icons-material/Upload';

export default function UploadButtons() {
  return (

      <Button variant="contained" component="label">
        <input hidden accept="image/*" multiple type="file" />
      </Button>

  );
}
