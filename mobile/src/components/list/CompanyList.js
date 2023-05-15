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


const CompanyList = props => {
    const { t }  = useTranslation(['page']);
    const classes = useStyles();
    const { companyList } = props;

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
        <div className="company-list">
            <Box component="span">
                <TablePagination
                component="div"
                count={companyList.length}
                page={page}
                /*labelDisplayedRows={({from, to, count}) => <>{`${from} bis ${to} bon ${count}`}</>}*/
                labelDisplayedRows={({ from, to, count }) => { return from + `${t('about_us.page_until')}` + to + `${t('about_us.page_of')}` + count}}
                rowsPerPage={rowsPerPage}
                rowsPerPageOptions={[10, 20, 50]}
                labelRowsPerPage={t('about_us.row_per_page')}
                onPageChange={handleChange}
                onRowsPerPageChange={handleChangeRowsPerPage}
                showFirstButton
                showLastButton
                classes={{ ul: classes.paginator }}
                />
            </Box>
            
            <List dense component="span">
            <Divider/>
                {companyList
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((companyItem, id) => {
                    return (
                        <div key={id}>
                            <CustomListItem component="span" linkTo={`/about-company/${companyItem.id}`} primary={companyItem.name} secondary={companyItem.activity}/>
                            <ListItem key={id} onClick={() => console.log("")}>
                                <ListItemText
                                id={companyItem.id}
                                primary={companyItem.type}
                                primaryTypographyProps={{ sx: { fontFamily: 'Din Pro Regular', fontSize: '14px', color: "#585858" } }}
                                />
                            </ListItem>
                            <Divider/>
                        </div>
                    );
                })}
            </List>
            
            <Box component="span">
                <TablePagination
                component="div"
                count={companyList.length}
                page={page}
                /*labelDisplayedRows={({from, to, count}) => <>{`${from} bis ${to} bon ${count}`}</>}*/
                labelDisplayedRows={({ from, to, count }) => { return from + `${t('about_us.page_until')}` + to + `${t('about_us.page_of')}` + count}}
                rowsPerPage={rowsPerPage}
                rowsPerPageOptions={[10, 20, 50]}
                labelRowsPerPage={t('about_us.row_per_page')}
                onPageChange={handleChange}
                onRowsPerPageChange={handleChangeRowsPerPage}
                showFirstButton
                showLastButton
                classes={{ ul: classes.paginator }}
                />
            </Box>
        </div>
    );
};

export default CompanyList;
