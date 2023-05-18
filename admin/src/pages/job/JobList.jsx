import React, { useState, useEffect, useMemo } from "react";
import { makeStyles, withStyles } from '@mui/styles';
import { ListItem, List, Divider, Box, ListItemText, TablePagination } from "@mui/material";
import { useTranslation } from 'react-i18next';
import ConfirmDialog from '../../components/confirm/ConfirmDialog';
import { getBaseURL } from "../../requestMethods";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';



import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%",
        backgroundColor: 'white',
    },
    paginator: {
        justifyContent: "right",
        marginTop: '20px'
    },
}));

const listItemTextStyle = {
    color: "#585858",
    fontFamily: 'Din Pro Bold', 
    fontSize: '14px',
};

const JobList = props => {
    console.log('JobList rendering ...');
    const { t }  = useTranslation(['page']);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [confirmOpen, setConfirmOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(-1);
    const [editOpen, setEditOpen] = useState(false);
    const classes = useStyles();
    const {jobs, onRemove} = props;
    const jobListData = useMemo(() => {
        return jobs.map((item) => ({ company: 'German Capital Pharma GmbH', department: item.title,  
                        description: 'Art: ' + item.type + ' | ' + item.location + ' | ' + item.field}));
    }, [jobs]);

    const handleChange = (event, value) => {
        setPage(value);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const getRealIndex = (index) => {
        return rowsPerPage*(page) + index;
    }

    const handleEditClick = (event, index) => {
        setSelectedItem(getRealIndex(index));
        setEditOpen(true);
    };

    const handleDeleteClick = (event, index) => {
        setConfirmOpen(true);
        setSelectedItem(getRealIndex(index));
    };

    const deleteJob = () => {
        if(selectedItem !== -1) {
            onRemove(jobs[selectedItem]._id);
        }
        setSelectedItem(-1);
    }

    return (
        <>
        { editOpen===false? (
            <div className="jobList">
            <List dense>
            <Divider/>
                {jobListData
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((jobItem, id) => {
                    return (
                        <React.Fragment key={id}>
                            <ListItemText
                                sx={{ padding: "5px 10px 2px 0px" }}
                                id={jobItem.id}
                                primary={jobItem.company}
                                primaryTypographyProps={listItemTextStyle}
                            />
                        
                            <ListItemText
                                sx={{ padding: "2px 10px 2px 0px" }}
                                id={jobItem.id}
                                primary={jobItem.department}
                                primaryTypographyProps={listItemTextStyle}
                            />
                        
                            <ListItemText 
                                sx={{ padding: "2px 10px 5px 0px" }}
                                id={jobItem.id}
                                primary={jobItem.description}
                                primaryTypographyProps={listItemTextStyle}
                            />
                            <ListItem disablePadding={true} secondaryAction={
                                <IconButton edge="end" aria-label="edit" onClick={(event) => handleEditClick(event, id)}>
                                <EditIcon />
                                </IconButton>} style={{ top: "-30px", right: "80px", left: "auto" }}>
                            </ListItem>
                            
                            <ListItem disablePadding={true} secondaryAction={
                                <IconButton color="error" edge="end" aria-label="delete" onClick={(event) => handleDeleteClick(event, id)}>
                                    <DeleteIcon />
                                </IconButton>} style={{ top: "-30px", right: "10px", left: "auto" }}>
                            </ListItem>

                            <Divider/>
                            
                        </React.Fragment>
                    );
                })}
            </List>
            <Box component="span">
                <TablePagination
                component="div"
                count={jobs.length}
                page={page}
                labelDisplayedRows={({ from, to, count }) => { return from + `${t('jobs.page_until')}` + to + `${t('jobs.page_of')}` + count}}
                rowsPerPage={rowsPerPage}
                rowsPerPageOptions={[10, 20, 50]}
                labelRowsPerPage={t('jobs.row_per_page')}
                onPageChange={handleChange}
                onRowsPerPageChange={handleChangeRowsPerPage}
                showFirstButton
                showLastButton
                classes={{ ul: classes.paginator }}
                />
            </Box>
            <ConfirmDialog
                title="Delete Job?"
                open={confirmOpen}
                setOpen={setConfirmOpen}
                onConfirm={deleteJob}
                >
                Are you sure you want to delete this item?
            </ConfirmDialog>
            </div>
        ) : (
            
                <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                    <div>
                    <TextField
                        label="With normal TextField"
                        id="outlined-start-adornment"
                        sx={{ m: 1, width: '25ch' }}
                        InputProps={{
                        startAdornment: <InputAdornment position="start">kg</InputAdornment>,
                        }}
                    />
                    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                        <OutlinedInput
                        id="outlined-adornment-weight"
                        endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                        aria-describedby="outlined-weight-helper-text"
                        inputProps={{
                            'aria-label': 'weight',
                        }}
                        />
                        <FormHelperText id="outlined-weight-helper-text">Weight</FormHelperText>
                    </FormControl>
                    <FormControl fullWidth sx={{ m: 1 }}>
                        <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                        <OutlinedInput
                        id="outlined-adornment-amount"
                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                        label="Amount"
                        />
                    </FormControl>
                    </div>
                    <div>
                    <TextField
                        label="With normal TextField"
                        id="filled-start-adornment"
                        sx={{ m: 1, width: '25ch' }}
                        InputProps={{
                        startAdornment: <InputAdornment position="start">kg</InputAdornment>,
                        }}
                        variant="filled"
                    />
                    <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
                        <FilledInput
                        id="filled-adornment-weight"
                        endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                        aria-describedby="filled-weight-helper-text"
                        inputProps={{
                            'aria-label': 'weight',
                        }}
                        />
                        <FormHelperText id="filled-weight-helper-text">Weight</FormHelperText>
                    </FormControl>
                    <FormControl fullWidth sx={{ m: 1 }} variant="filled">
                        <InputLabel htmlFor="filled-adornment-amount">Amount</InputLabel>
                        <FilledInput
                        id="filled-adornment-amount"
                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                        />
                    </FormControl>
                    </div>
                    <div>
                    <TextField
                        label="With normal TextField"
                        id="standard-start-adornment"
                        sx={{ m: 1, width: '25ch' }}
                        InputProps={{
                        startAdornment: <InputAdornment position="start">kg</InputAdornment>,
                        }}
                        variant="standard"
                    />
                    <FormControl variant="standard" sx={{ m: 1, mt: 3, width: '25ch' }}>
                        <Input
                        id="standard-adornment-weight"
                        endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                        aria-describedby="standard-weight-helper-text"
                        inputProps={{
                            'aria-label': 'weight',
                        }}
                        />
                        <FormHelperText id="standard-weight-helper-text">Weight</FormHelperText>
                    </FormControl>
                    <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                        <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
                        <Input
                        id="standard-adornment-amount"
                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                        />
                    </FormControl>
                    </div>
                </Box>
                
            )
        
        }
        </>
    );
};

export default JobList;
