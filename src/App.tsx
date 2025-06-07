import Header from "./components/header";
import { useState, useEffect } from "react";
import i18n from "./i18n";
import "./index.css";
import Footer from "./components/footer";

function App() {
  const [isDark, setIsDark] = useState<true | false>(false);
  const [language, setLanguage] = useState<"ja" | "en" | "kr">("ja");

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  return (
    <div
      className={`${
        isDark ? "dark" : ""
      } bg-white dark:bg-[#0b1215] text-black dark:text-[#fafafa]`}
    >
      <Header
        isDark={isDark}
        setIsDark={setIsDark}
        language={language}
        setLanguage={setLanguage}
      />
      <div className="bg-[#fb923c] w-full lg:w-[1024px] lg:mx-auto">
        article
      </div>
      <Footer />
    </div>
  );
}

export default App;
