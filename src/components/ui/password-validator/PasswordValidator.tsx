import { ComponentProps } from "react";
import Textfield from "../textfield/TextField";
import StatusCircle from "../status-circle/StatusCircle";
import { PasswordValidatorWrapper } from "./styled";

type PasswordReqs = {
  id: string;
  label: string;
  validator: (password: string) => boolean;
};

interface PasswordValidatorProps {
  title: string;
  passwordReqs: PasswordReqs[];
  children?: React.ReactNode;
}

const PasswordValidator = ({
  onChange,
  passwordReqs,
  title,
  value,
}: PasswordValidatorProps & ComponentProps<typeof Textfield>) => {
  const isEveryValueValid = passwordReqs.every((req) => req.validator(value));

  return (
    <>
      <h1>{title}</h1>
      <PasswordValidatorWrapper>
        <div>
          <Textfield value={value} onChange={onChange} />
        </div>
        <div>
          {passwordReqs.map((reqs) => {
            return (
              <StatusCircle
                key={reqs.id}
                label={reqs.label}
                status={reqs.validator(value) ? "success" : "error"}
              />
            );
          })}
        </div>
      </PasswordValidatorWrapper>
      <p>
        {isEveryValueValid
          ? "Congratulations! Your password is safe"
          : "Your password is not very safe"}
      </p>
    </>
  );
};

export default PasswordValidator;
