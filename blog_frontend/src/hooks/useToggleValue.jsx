import { useState } from "react";

export default function useToggleValue(inititalValue = false) {
  const [value, setValue] = useState(inititalValue);
  const handleToggleValue = () => {
    setValue(!value);
  };
  return {
    value,
    handleToggleValue,
  };
}
