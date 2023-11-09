import { ComponentProps } from "react";
import Textfield from "../textfield/TextField";
import StatusCircle from "../status-circle/StatusCircle";

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
  return (
    <>
      <h1>{title}</h1>
      <Textfield value={value} onChange={onChange} />
      {passwordReqs.map((reqs) => {
        return (
          <StatusCircle
            key={reqs.id}
            label={reqs.label}
            status={reqs.validator(value) ? "success" : "error"}
          />
        );
      })}
    </>
  );
};

export default PasswordValidator;
