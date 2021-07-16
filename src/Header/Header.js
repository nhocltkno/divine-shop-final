import logo_divine from "../assets/icon_website/logo_divineshop.svg";
import search_icon from "../assets/icon_website/search_1.svg";
import login_icon from "../assets/icon_website/login.svg";
import "./Header.css";

function Header() {
	return (
		<div className="header">
			<img src={logo_divine} alt="logo" className="logo_title" />
			<input className="search" placeholder="Nhập tên sản phẩm" />
			<img src={search_icon} alt="icon" className="search_icon" />
			<div className="login">
				<img src={login_icon} alt="icon" className="login_icon" />
				<span className="login_dn">Đăng nhập</span>
			</div>
		</div>
	);
}

export default Header;
