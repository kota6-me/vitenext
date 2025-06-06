import Header from "./components/header";
import { useState } from "react";
function App() {
  const [isDark, setIsDark] = useState(false);
  return (
    <div
      className={`${
        isDark ? "dark" : ""
      } bg-white dark:bg-[#0b1215] text-black dark:text-[#fafafa]`}
    >
      <Header isDark={isDark} setIsDark={setIsDark} />
    </div>
  );
}

export default App;
