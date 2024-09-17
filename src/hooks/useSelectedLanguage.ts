import { useState } from "react";

const useSelectedLanguage = () => {
  const [selectLanguage, setSelectLanguage] = useState<string>("en");

  const handleSelectLanguage = (lang: string) => {
    setSelectLanguage(lang);
  };

  return { selectLanguage, handleSelectLanguage };
};

export default useSelectedLanguage;
