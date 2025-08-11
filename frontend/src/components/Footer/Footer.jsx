import S from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={S.footer}>
      <p>© 2023 VIPMotors. Todos os direitos reservados.</p>
      <p>
        Desenvolvido por{" "}
        <a href="https://github.com/Vini150cius" rel="noopener noreferrer" target="_blank">
          Vinicius Porto
        </a>
      </p>
    </footer>
  );
}
