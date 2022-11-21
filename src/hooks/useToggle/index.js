import { useCallback, useState } from "react";

// create a custom toggle hook that returns an initial value and
// a callback function to update the value.
const useToggle = initialValue => {
  const [value, setValue] = useState(initialValue);
  const handleChange = useCallback(() => setValue(value => !value), []);
  return [value, handleChange];
};

export default useToggle;
