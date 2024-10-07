import { Button } from '@mui/material';
import React from 'react';

const AddWidgetButton = ({ onAdd }: { onAdd: () => void }) => {
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={onAdd}
      sx={{
        boxShadow: 1,
      }}
    >
      Add Widget
    </Button>
  );
};

export default AddWidgetButton;
