import * as React from 'react';
import { 
    Button, 
    TextField,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle 
} from '@mui/material';


const JobForm = (props) => {
    const {open, job, handleClose, handleSubmit } = props;
    const isEditMode = (job!==null)?true:false;

    const onSubmit = (event) => {
        handleSubmit(event);
    };

    return (
        <Dialog open={open} PaperProps={{ sx: {width: "100%"}, }} onClose={handleClose}>
            <DialogTitle>{isEditMode?job.title:"Add New Job"}</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Email Address"
                    type="email"
                    fullWidth
                    variant="standard"
                />
            </DialogContent>
            <DialogActions>
                <Button variant="contained" color="primary" sx={{paddingLeft: "30px", paddingRight: "30px"}} onClick={onSubmit}>Save</Button>
                <Button variant="contained" color="error"  onClick={handleClose}>Cancel</Button>
            </DialogActions>
        </Dialog>
    )
}

export default JobForm