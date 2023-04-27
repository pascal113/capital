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
    const [selectedValues, setSelectedValues] = useState([]);
    const { name, options} = props;
    
    return (
        <Select
            name={name}
            multiple
            sx = {{ m: 0, width: '100%', backgroundColor:'white', '& legend': { display: 'none' }, '& fieldset': { top: 0 }, }}
            value={selectedValues}
            onChange={(e) => setSelectedValues(e.target.value)}
            input={<OutlinedInput />}
            renderValue={(selected) => (
            <Stack gap={1} direction="row" flexWrap="wrap">
                {selected.map((value) => (
                <Chip
                    key={value}
                    label={ (options.find( item  => item.value === value)).name}
                    onDelete={() =>
                    setSelectedValues(
                        selectedValues.filter((item) => item !== value)
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
            {options.map((item, id) => (
                <MenuItem
                    key={id}
                    value={item.value ? item.value : item.name}
                    sx={{ justifyContent: "space-between" }}
                >
                    {item.name}
                    {selectedValues.includes(item.value) ? <CheckIcon color="info" /> : null}
                </MenuItem>
            ))}
        </Select>
    );
}

export default CustomMultiSelect;