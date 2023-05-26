import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { makeStyles, withStyles } from '@mui/styles';
import { ListItem, List, Divider, Box, ListItemText, TablePagination } from "@mui/material";
import { useTranslation } from 'react-i18next';
import commonContext from '../../contexts/common/commonContext';

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



const CustomListItem = ({ linkTo, primary }) => (
    <ListItem component="span">
        <Link to={linkTo}>
            <MyListItemText primary={primary} disableTypography={true} style={{ fontSize: '18px'}}/>
        </Link>
    </ListItem>
);


const CompanyList = props => {
    const { t }  = useTranslation(['page']);
    const classes = useStyles();    
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const { companyList } = props;
    const companyListItem = Array.from(companyList);
    const { curLanguage } = useContext(commonContext);

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
                {companyListItem
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((companyItem, id) => {
                    let activity = '';
                    let type = '';
                    if(curLanguage == 'GB') {
                        activity = companyItem.activity_gb;
                        type = companyItem.type_gb;
                    }
                    else {
                        activity = companyItem.activity_de;
                        type = companyItem.type_de;
                    }

                    
                    return (
                        <div key={id}>
                            <CustomListItem component="span" linkTo={`/about-company/${companyItem.id}`} primary={activity} />
                            <ListItem key={id} onClick={() => console.log("")}>
                                <ListItemText
                                id={companyItem.id}
                                primary={type}
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
                style={{ fontSize: '16px'}}
                />
            </Box>
        </div>
    );
};

export default CompanyList;