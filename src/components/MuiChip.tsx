import { Stack, Chip, Avatar } from "@mui/material";
import { useState } from "react";

export const MuiChip = () => {
  const [chips, setChips] = useState(["Chip 1", "Chip 2", "Chip 3"]);
  const handleDelete = (chipToDelete: string) => {
    setChips((chips) => chips.filter((chip) => chip !== chipToDelete));
  };

  return (
    <Stack direction="row" spacing={1}>
      <Chip
        label="Delete"
        color="error"
        size="small"
        variant="outlined"
        avatar={<Avatar>V</Avatar>}
        onClick={() => alert("Clicked")}
        onDelete={() => alert("Delete")}
      />
      {chips.map((chip) => (
        <Chip key={chip} label={chip} onDelete={() => handleDelete(chip)} />
      ))}
    </Stack>
  );
};
