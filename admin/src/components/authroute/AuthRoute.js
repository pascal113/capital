import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

const AuthRoute = props => {
    const isAdmin = useSelector((state) => state.user.isAdmin)
    if (!isAdmin) return <Redirect to="/login" />;

    return <Route {...props} />;
    };

    const mapStateToProps = ({ isAdmin }) => ({
        isAdmin
});

export default connect(mapStateToProps)(AuthRoute);