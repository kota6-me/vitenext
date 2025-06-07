import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
import { useTranslation } from "react-i18next";

type Props = {
  isDark: boolean;
  setIsDark: (val: boolean) => void;
  language: "ja" | "en" | "kr";
  setLanguage: (val: "ja" | "en" | "kr") => void;
};

export default function Header({
  isDark,
  setIsDark,
  language,
  setLanguage,
}: Props) {
  const modelabel = isDark ? (
    <SunIcon className="w-6 h-6 m-auto" />
  ) : (
    <MoonIcon className="w-6 h-6 m-auto" />
  );
  const { t } = useTranslation();
  const modeHandler = () => {
    setIsDark(!isDark);
  };
  const languageHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value as "ja" | "en" | "kr");
  };
  return (
    <div className="flex items-center justify-between p-4 bg-white dark:bg-[#0b1215] text-black dark:text-[#fafafa]">
      <h1 className="text-5xl">{t("タイトル")}</h1>
      <div className="flex items-center gap-4">
        <div className="aspect-square w-fit m-auto">
          <select
            className="p-2 rounded-full w-16 aspect-square text-gray-800 dark:text-gray-200 text-2xl dark:hover:bg-gray-300 hover:bg-[#0b1215] dark:hover:text-[#0b1215] hover:text-gray-200 transition-colors duration-300"
            onChange={languageHandler}
            value={language}
          >
            <option value="ja">🇯🇵</option>
            <option value="en">🇬🇧</option>
            <option value="kr">🇰🇷</option>
          </select>
        </div>
        <button
          className="p-2 aspect-square w-16 rounded-full text-gray-800 dark:text-gray-200 dark:hover:bg-gray-300 hover:bg-[#0b1215] dark:hover:text-[#0b1215] hover:text-gray-200 transition-colors duration-300"
          onClick={modeHandler}
        >
          {modelabel}
        </button>
      </div>
    </div>
  );
}
