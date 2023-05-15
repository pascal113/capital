import "./job.css";
import ImageCard from "../../components/image_card/imageCard";
import { useEffect, useMemo, useState } from "react";
import { userRequest } from "../../requestMethods";
import {Button} from '@mui/material';
import AddIcon from '@material-ui/icons/Add';
import { useDispatch, useSelector } from "react-redux";
import { deleteJob, getJobs, updateJob, addJob } from "../../redux/apiCalls";

const Job = () => {
    const dispatch = useDispatch();
    const jobs = useSelector((state) => state.job.jobs);

    useEffect(() => {
        getJobs(dispatch);
    }, [dispatch]);

    const handleEdit = (id, job) => {
        updateJob(id, job, dispatch);
    };

    const handleRemove = (id) => {
        deleteJob(id, dispatch);
    };

    const handleCreate = (e) => {
    };
    return (
        <div className="job">
            <div className="jobAddBtn">
                <Button variant="contained" component="label" size="medium" color="primary" startIcon={<AddIcon />}>
                Add
                </Button>
            </div>
            <div className="jobList">
                {
                jobs.map((item, index) => (
                    <ImageCard key={index} item={item} onDelete={handleRemove} onEdit={handleEdit}/>
                ))
                }
            </div>
        </div>
    )
}

export default Job