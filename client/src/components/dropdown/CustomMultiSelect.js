import React, { useState } from "react";
import {
    OutlinedInput,
    MenuItem,
    Select,
    Stack,
    Chip
} from "@mui/material";

import CancelIcon from "@mui/icons-material/Cancel";
import CheckIcon from "@mui/icons-material/Check";

const CustomMultiSelect = (props) => {
    const [selectedNames, setSelectedNames] = useState([]);
    const { name, options} = props;

    return (
        <Select
            name={name}
            multiple
            sx = {{ m: 0, width: '100%', backgroundColor:'white', '& legend': { display: 'none' }, '& fieldset': { top: 0 }, }}
            value={selectedNames}
            onChange={(e) => setSelectedNames(e.target.value)}
            input={<OutlinedInput />}
            renderValue={(selected) => (
            <Stack gap={1} direction="row" flexWrap="wrap">
                {selected.map((value) => (
                <Chip
                    key={value}
                    label={value}
                    onDelete={() =>
                    setSelectedNames(
                        selectedNames.filter((item) => item !== value)
                    )
                    }
                    deleteIcon={
                        <CancelIcon
                            onMouseDown={(event) => event.stopPropagation()}
                        />
                    }
                />
                ))}
            </Stack>
            )}
        >
            {options.map((name) => (
            <MenuItem
                key={name}
                value={name}
                sx={{ justifyContent: "space-between" }}
            >
                {name}
                {selectedNames.includes(name) ? <CheckIcon color="info" /> : null}
            </MenuItem>
            ))}
        </Select>
    );
}

export default CustomMultiSelect;