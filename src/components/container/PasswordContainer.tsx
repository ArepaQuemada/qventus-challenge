import { ComponentProps, useState } from "react";
import PasswordValidator from "../ui/password-validator/PasswordValidator";

const passwordReqs: ComponentProps<typeof PasswordValidator>["passwordReqs"] = [
  {
    id: crypto.randomUUID(),
    label: "Has Number 0-9",
    validator: (password: string) => /[0-9]/.test(password),
  },
  {
    id: crypto.randomUUID(),
    label: "Has a special char  !@#$%^&*",
    validator: (password: string) => /[!@#$%^&*]/.test(password),
  },
  {
    id: crypto.randomUUID(),
    label: "Has uppercase Letter",
    validator: (password: string) => /[A-Z]/.test(password),
  },
];

const PasswordContainer = () => {
  const [password, setPassword] = useState("");

  return (
    <main>
      <PasswordValidator
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        passwordReqs={passwordReqs}
        title="Password Component"
      />
    </main>
  );
};

export default PasswordContainer;
