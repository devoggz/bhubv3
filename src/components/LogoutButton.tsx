import { logout } from "../../actions/auth";
import { Button } from "./ui/button";

const Logout = () => {
  <Button onClick={() => logout}>Logout</Button>;
};

export default Logout;
