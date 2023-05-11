import { Outlet, useNavigate } from "react-router-dom";
import { AdminHeaders, PrimaryButton } from "./CommonStyled";

const Hamburgers = () => {
  const navigate = useNavigate();

  return (
    <>
      <AdminHeaders>
        <h2>Hamburgers</h2>
        <PrimaryButton
          onClick={() => navigate("/admin/hamburgers/create-hamburger")}
        >
          Create
        </PrimaryButton>
      </AdminHeaders>
      <Outlet />
    </>
  );
};

export default Hamburgers;
