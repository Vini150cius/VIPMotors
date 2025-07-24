import { Car, Home, MessageSquareText, Store } from "lucide-react";
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
  const PhotoProfile = null;
  return (
    <nav className={S.navbar}>
      <a className={S.containerLogo} href="/">
        <img alt="Logo da VIPMotors" className={S.logoImg} src={Logo} />
        <h1 className={S.logoTitle}>VIPMotors</h1>
      </a>
      <ul className={S.containerLinks}>
        <li className={S.containerLink}>
          <Link className={S.link} to="/">
            <Home className={S.iconLink} /> Página Inicial
          </Link>
        </li>
        <li className={S.containerLink}>
          <Link className={S.link} to="/">
            <Car className={S.iconLink} /> Veiculos
          </Link>
        </li>
        <li className={S.containerLink}>
          <Link className={S.link} to="/">
            <MessageSquareText className={S.iconLink} /> Fale conosco
          </Link>
        </li>
        <li className={S.containerLink}>
          <Link className={S.link} to="/">
            <Store className={S.iconLink} /> Sobre nós
          </Link>
        </li>
      </ul>
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
    </nav>
  );
}
