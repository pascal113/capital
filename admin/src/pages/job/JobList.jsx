import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { makeStyles, withStyles } from '@mui/styles';
import { ListItem, List, Divider, Box, ListItemText, TablePagination } from "@mui/material";
import { useTranslation } from 'react-i18next';

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

const MyListItemText = withStyles({
    root: {
        color: "#585858",
        fontFamily: 'Din Pro Bold', 
        fontSize: '14px',
        
        "&:hover": {
            color: "#D30000",
        }
    },
    selected: {}
})(ListItemText);



const CustomListItem = ({ linkTo, primary, secondary }) => (
    <ListItem component="span">
        <Link to={linkTo}>
            <MyListItemText primary={primary} disableTypography={true}/>
            <MyListItemText primary={secondary} disableTypography={true} style={{ fontSize: '18px'}}/>
        </Link>
    </ListItem>
);


const JobList = props => {
    const { t }  = useTranslation(['page']);
    const classes = useStyles();
    const { jobs } = props;

    const jobListData = jobs.map((item) => ({ company: 'German Capital Pharma GmbH', department: item.title,  
                        description: 'Art: ' + item.type + ' | ' + item.location + ' | ' + item.field}));

    console.log('jobListData', jobListData);

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChange = (event, value) => {
        setPage(value);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <div>
            <List dense component="span">
            <Divider/>
                {jobListData
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((jobItem, id) => {
                    return (
                        <div key={id}>
                            <CustomListItem component="span" primary={jobItem.company} secondary={jobItem.department}/>
                            <ListItem key={id} onClick={() => console.log("")}>
                                <ListItemText
                                id={jobItem.id}
                                primary={jobItem.description}
                                primaryTypographyProps={{ sx: { fontFamily: 'Din Pro Regular', fontSize: '14px', color: "#585858" } }}
                                />
                            </ListItem>
                            <Divider/>
                        </div>
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
