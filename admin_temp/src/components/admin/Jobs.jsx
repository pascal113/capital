import { Outlet, useNavigate } from "react-router-dom";
import { AdminHeaders, PrimaryButton } from "./CommonStyled";

const Jobs = () => {
  const navigate = useNavigate();

  return (
    <>
      <AdminHeaders>
        <h2>Jobs</h2>
        <PrimaryButton
          onClick={() => navigate("/admin/jobs/create-job")}
        >
          Create
        </PrimaryButton>
      </AdminHeaders>
      <Outlet />
    </>
  );
};

export default Jobs;
