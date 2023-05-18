import React, { useState, useEffect } from "react";
import { makeStyles, withStyles } from '@mui/styles';
import { ListItem, List, Divider, Box, ListItemText, TablePagination } from "@mui/material";
import { useTranslation } from 'react-i18next';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';

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
    const { t }  = useTranslation(['page']);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const classes = useStyles();
    const jobs = props.jobs;
    const jobListData = jobs.map((item) => ({ company: 'German Capital Pharma GmbH', department: item.title,  
                        description: 'Art: ' + item.type + ' | ' + item.location + ' | ' + item.field}));

    const handleChange = (event, value) => {
        setPage(value);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleEditClick = (event, index) => {
        console.log('edit', index);
    };

    const handleDeleteClick = (event, index) => {
        console.log('delete', index);
    };

    return (
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

            {<Box component="span">
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
            </Box>}
        </div>
    );
};

export default JobList;
