import { ChangeEvent, useCallback, useState } from "react";

import { EndStudents } from "./useEndStudents";

const useSearchInput = () => {
  const [searchInput, setSearchInput] = useState<string>("");

  const onChangeSearch = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.currentTarget.value);
  }, []);

  const filterSearch = useCallback(
    (student: [string, EndStudents[]]) => {
      if (searchInput === "") return true;

      const name = student[0].split(" ")[1];

      if (name.includes(searchInput)) return true;
      else return false;
    },
    [searchInput]
  );

  return [searchInput, onChangeSearch, filterSearch] as const;
};

export default useSearchInput;
