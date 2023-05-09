import { Outlet, useNavigate } from "react-router-dom";
import { AdminHeaders, PrimaryButton } from "./CommonStyled";

const Banners = () => {
  const navigate = useNavigate();

  return (
    <>
      <AdminHeaders>
        <h2>Banners</h2>
        <PrimaryButton
          onClick={() => navigate("/admin/banners/create-banner")}
        >
          Create
        </PrimaryButton>
      </AdminHeaders>
      <Outlet />
    </>
  );
};

export default Banners;
