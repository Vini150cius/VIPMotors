import { Car, Home, MessageSquareText, Store } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "@/assets/react.svg";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/Avatar/Avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/Dropdown-menu/Dropdown-menu";
import S from "./NavBar.module.css";

export default function NavBar() {
  const [burger, setBurguer] = useState(false);

  const toggleBurger = () => {
    setBurguer((prevState) => {
      if (prevState) {
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        document.body.style.overflow = "";
        const scrollY = Number.parseInt(document.body.dataset.scrollY || "0");
        window.scrollTo(0, scrollY);
      } else {
        const scrollY = window.scrollY;
        document.body.style.position = "fixed";
        document.body.style.top = `-${scrollY}px`;
        document.body.style.width = "100%";
        document.body.style.overflow = "hidden";
        document.body.dataset.scrollY = scrollY.toString();
      }
      return !prevState;
    });
  };

  const PhotoProfile = null;
  return (
    <nav className={S.navbar}>
      <a className={S.containerLogo} href="/">
        <img alt="Logo da VIPMotors" className={S.logoImg} src={Logo} />
        <h1 className={S.logoTitle}>VIPMotors</h1>
      </a>
      <ul className={`${S.containerLinks} ${S.linksContainer}`}>
        <li className={S.containerLink}>
          <Link className={S.link} to="/">
            <Home className={S.iconLink} /> Página Inicial
          </Link>
        </li>
        <li className={S.containerLink}>
          <Link className={S.link} to="/veiculos">
            <Car className={S.iconLink} /> Veículos
          </Link>
        </li>
        <li className={S.containerLink}>
          <Link className={S.link} to="/contato">
            <MessageSquareText className={S.iconLink} /> Fale conosco
          </Link>
        </li>
        <li className={S.containerLink}>
          <Link className={S.link} to="/sobre">
            <Store className={S.iconLink} /> Sobre nós
          </Link>
        </li>
      </ul>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          margin: "0 4vw",
        }}
      >
        <div className={`${S.burger} ${S.burgerContainer}`}>
          <label className={S.burger}>
            <input checked={burger} onChange={toggleBurger} type="checkbox" />
            <span />
            <span />
            <span />
          </label>
        </div>

        <div className={S.containerProfile}>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar className={S.containerProfileAvatar}>
                <AvatarImage src={PhotoProfile} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className={S.contentDropdown}>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className={`${S.drawerMenu} ${burger ? S.active : ""}`}>
        <div className={S.drawerMenuContainer}>
          <div className={S.logoContainer}>
            <img alt="Logo da VIPMotors" src={Logo} />
          </div>
          <ul className={S.drawerMenuLinks}>
            <li>
              <Link onClick={toggleBurger} to="/">
                <Home className={S.iconLink} /> Página Inicial
              </Link>
            </li>
            <li>
              <Link onClick={toggleBurger} to="/veiculos">
                <Car className={S.iconLink} /> Veículos
              </Link>
            </li>
            <li>
              <Link onClick={toggleBurger} to="/contato">
                <MessageSquareText className={S.iconLink} /> Fale conosco
              </Link>
            </li>
            <li>
              <Link onClick={toggleBurger} to="/sobre">
                <Store className={S.iconLink} /> Sobre nós
              </Link>
            </li>

            <div className={S.buttonContainer}>
              <Link
                className={S.signInButton}
                id="signInButton"
                onClick={toggleBurger}
                role="link"
                state={{ mode: "signIn" }}
                to="/login"
              >
                Entrar
              </Link>
              <Link
                className={S.signUpButton}
                id="signUpButton"
                onClick={toggleBurger}
                role="link"
                state={{ mode: "signUp" }}
                to="/login"
              >
                Criar
              </Link>
            </div>
          </ul>
        </div>
      </div>

      {burger && (
        <div
          className={S.overlay}
          onClick={toggleBurger}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 9999,
          }}
        />
      )}
    </nav>
  );
}
