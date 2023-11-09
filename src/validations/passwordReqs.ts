import { ComponentProps } from "react";
import PasswordValidator from "../components/ui/password-validator/PasswordValidator";

export const passwordReqs: ComponentProps<
  typeof PasswordValidator
>["passwordReqs"] = [
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
  {
    id: crypto.randomUUID(),
    label: "Has no consecutive letters ***",
    validator: (password: string) => {
      const CONSECUTIVE = 3;
      if (password.length < CONSECUTIVE) {
        return true;
      }
      let doesNotHaveRepeatedChars = true;
      for (let i = 0; i < password.length; i++) {
        const substr = password.substring(i, i + CONSECUTIVE);
        if (substr.length < CONSECUTIVE) {
          break;
        }
        if (substr.split("").every((char) => char === password[i])) {
          doesNotHaveRepeatedChars = false;
          break;
        }
      }
      return doesNotHaveRepeatedChars;
    },
  },
];
