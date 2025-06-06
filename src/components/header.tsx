import { SunIcon, MoonIcon } from "@radix-ui/react-icons";

type Props = {
  isDark: boolean;
  setIsDark: (val: boolean) => void;
};

export default function Header({ isDark, setIsDark }: Props) {
  const modelabel = isDark ? <MoonIcon /> : <SunIcon />;
  const modeHandler = () => {
    setIsDark(!isDark);
  };
  return (
    <button
      className="p-2 rounded-md bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-300"
      onClick={modeHandler}
    >
      {modelabel}
    </button>
  );
}
