import "./job.css";

import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteJob, getJobs, updateJob, addJob, getJobTypes, getJobLocations, getJobFields } from "../../redux/apiCalls";
import { useTranslation } from 'react-i18next';
import ConfirmDialog from '../../components/confirm/ConfirmDialog';
//import JobList from "./JobList";
import { makeStyles, withStyles } from '@mui/styles';
import { Button, ListItem, List, Divider, Box, ListItemText, TablePagination } from "@mui/material";
import AddIcon from '@material-ui/icons/Add';
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
import JobForm from "./JobForm"

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

const Job = () => {
    const dispatch = useDispatch();
    const types = useSelector((state) => state.job.types);
    const locations = useSelector((state) => state.job.locations);
    const fields = useSelector((state) => state.job.fields);
    const jobs = useSelector((state) => state.job.jobs);
    /*const jobListData = useMemo(() => {
        return jobs.length ? (jobs.data.map((item) => ({ company: 'German Capital Pharma GmbH', department: item.title,  
                        description: 'Art: ' + item.type + ' | ' + item.location + ' | ' + item.field}))): [];
    }, [jobs]);*/

    const { t }  = useTranslation(['page']);
    const classes = useStyles();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [confirmOpen, setConfirmOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(-1);
    const [editOpen, setEditOpen] = useState(false);
    const [editLanguage, setEditLanguage] = useState('de');

    useEffect(() => {
        getJobTypes(dispatch);
        getJobLocations(dispatch);
        getJobFields(dispatch);
    }, []);

    useEffect(() => {
        getJobs(dispatch);
    }, [dispatch]);

    const getRealIndex = (index) => {
        return rowsPerPage*(page) + index;
    }

    const handleAddClick = (e) => {
        setSelectedItem(-1);
        setEditLanguage('de');
        setEditOpen(true);
    };

    const handleEditClick = (event, index, lang) => {
        setSelectedItem(getRealIndex(index));
        setEditLanguage(lang);
        setEditOpen(true);
    };

    const handleDeleteClick = (event, index) => {
        setConfirmOpen(true);
        setSelectedItem(getRealIndex(index));
    };

    const handleClose = () => {
        setEditOpen(false);
    }

    const handleSubmit = (id, data) => {        
        if(id===''){
            onAddJob(id, data);
        }
        else {
            onUpdateJob(id, data);
        }
        setEditOpen(false);
    }

    const onAddJob = (id, job) => {
        addJob(job, dispatch);
    };

    const onUpdateJob = (id, job) => {
        updateJob(id, job, dispatch);
    };

    const onDeleteJob = () => {
        if(selectedItem !== -1) {
            const id = jobs[selectedItem]._id;
            deleteJob(id, dispatch);
        }
        setSelectedItem(-1);
    }

    const handlePageChange = (event, value) => {
        setPage(value);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };


    const getFieldName = (array, id) => {
        for (let i=0, iLen=array.length; i<iLen; i++) {

            if (array[i].id === id) 
            return array[i];
        }
        
        return '';
    }

    const getFieldNames = (id_array, language) => {
        const id_arr_len = id_array.length;
        const name = (language=== 'DE')?'name_de':'name_gb';
        let filed_name = '';

        if(id_arr_len <= 0)
            return filed_name;

        for(let i = 0; i < id_arr_len; i++) {
            const id = id_array[i];
            filed_name += fields[i].name_label;
            if(i < (id_arr_len - 1)) {
                filed_name += ', ';
            }
        }

        return filed_name;
    };

    return (
        <div className="job">
        { editOpen===false? (
            <>
            <div className="jobAddBtn">
                <Button variant="contained" component="label" size="medium" color="primary" startIcon={<AddIcon />} onClick={(event) => handleAddClick(event)}>
                Add
                </Button>
            </div>
            <div className="jobList">
            <List dense>
            <Divider/>
                {(jobs
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((jobItem, index) => {
                    return (
                        <React.Fragment key={index}>
                            {/*<ListItemText
                                sx={{ padding: "5px 10px 2px 0px" }}
                                id={jobItem.id}
                                primary={"German Capital Pharma GmbH"}
                                primaryTypographyProps={listItemTextStyle}
                            />*/}
                        
                            <ListItemText
                                sx={{ padding: "2px 10px 2px 0px" }}
                                
                                primary={jobItem.title}
                                primaryTypographyProps={listItemTextStyle}
                            />
                        
                            <ListItemText 
                                sx={{ padding: "2px 10px 5px 0px" }}
                                primary={'Art: ' + types[jobItem.type] + ' | ' + locations[jobItem.location] + ' | ' + getFieldNames(jobItem.field)}
                                primaryTypographyProps={listItemTextStyle}
                            />
                            <ListItem disablePadding={true} secondaryAction={
                                <IconButton edge="end" aria-label="edit" onClick={(event) => handleEditClick(event, index, 'de')} style={listItemTextStyle}>
                                <EditIcon />Germany
                                </IconButton>} style={{ top: "-30px", right: "200px", left: "auto" }}>
                            </ListItem>

                            <ListItem disablePadding={true} secondaryAction={
                                <IconButton edge="end" aria-label="edit" onClick={(event) => handleEditClick(event, index, 'gb')} style={listItemTextStyle}>
                                <EditIcon />English
                                </IconButton>} style={{ top: "-30px", right: "80px", left: "auto" }}>
                            </ListItem>
                            
                            <ListItem disablePadding={true} secondaryAction={
                                <IconButton color="error" edge="end" aria-label="delete" onClick={(event) => handleDeleteClick(event, index)}>
                                    <DeleteIcon />
                                </IconButton>} style={{ top: "-30px", right: "10px", left: "auto" }}>
                            </ListItem>

                            <Divider/>
                            
                        </React.Fragment>
                    );
                }))}
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
                onPageChange={handlePageChange}
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
                onConfirm={onDeleteJob}
                >
                Are you sure you want to delete this item?
            </ConfirmDialog>
            </div>
            </>
        ) : (
            <JobForm
                job={(selectedItem!==-1)? jobs[selectedItem] : null}
                types={types}
                locations={locations}
                fields={fields}
                open={editOpen}
                editLanguage={editLanguage}
                handleClose={handleClose}  
                onClose={handleClose} 
                onSubmit={handleSubmit}>
            </JobForm> 
        )
        }
        </div>
    )
}

export default Job