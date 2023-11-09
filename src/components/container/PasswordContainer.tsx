import { useState } from "react";
import PasswordValidator from "../ui/password-validator/PasswordValidator";
import { PasswordContainerWrapper } from "./styled";
import { passwordReqs } from "../../validations/passwordReqs";

const PasswordContainer = () => {
  const [password, setPassword] = useState("");

  return (
    <PasswordContainerWrapper>
      <PasswordValidator
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        passwordReqs={passwordReqs}
        title="Password Component"
      />
    </PasswordContainerWrapper>
  );
};

export default PasswordContainer;
