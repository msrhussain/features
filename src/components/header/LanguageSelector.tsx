import useSelectedLanguage from "../../hooks/useSelectedLanguage";
import { options } from "../../utils/constants";

const LanguageSelector = () => {
  const { selectLanguage: selectLang, handleSelectLanguage } =
    useSelectedLanguage();
  return (
    <select
      className="header_languageSelector"
      name="language"
      value={selectLang}
      onChange={(e) => handleSelectLanguage(e.target.value)}
    >
      {options?.map((opt) => (
        <option value={opt.code} key={opt.code}>
          {opt.language}
        </option>
      ))}
    </select>
  );
};

export default LanguageSelector;
