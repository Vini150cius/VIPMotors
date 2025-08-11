import { Footer } from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";
import S from "./DefaultPage.module.css";

export function DefaultPage({ children }) {
  return (
    <div>
      <NavBar />
      <main className={S.main}>
        <div className={S.mainContainer}>{...children}</div>
      </main>
      <Footer />
    </div>
  );
}
