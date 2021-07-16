import "./Navbar.css";
import icon_game from "../../assets/icon_website/game.svg";
import icon_settings from "../../assets/icon_website/settings_1.svg";
import icon_intro from "../../assets/icon_website/intro_1.svg";
import icon_menu from "../../assets/icon_website/menu_1.svg";
import icon_money from "../../assets/icon_website/money.svg";
import icon_cart from "../../assets/icon_website/cart_1.svg";
import icon_enter from "../../assets/icon_website/entertainment.svg";
import icon_work from "../../assets/icon_website/work.svg";
import icon_ulity from "../../assets/icon_website/ulity.svg";
import icon_support from "../../assets/icon_website/support_1.svg";

function Navbar() {
	return (
		<div className="nav">
			<div className="menu">
				<div className="dropdown">
					<img src={icon_menu} alt="logo" className="logo" />
					<img src={icon_menu} alt="logo" className="logo2" />
					<p className="text">Danh mục sản phẩm</p>
				</div>
				<div className="dropdown_menu">
					<div className="item_menu">
						<img src={icon_game} alt="logo" className="logo" />
						<p className="text">Game bản quyền</p>
					</div>
					<div className="item_menu">
						<img src={icon_enter} alt="logo" className="logo" />
						<p className="text">Ứng dụng giải trí</p>
					</div>
					<div className="item_menu">
						<img src={icon_work} alt="logo" className="logo" />
						<p className="text">Ứng dụng làm việc</p>
					</div>
					<div className="item_menu">
						<img src={icon_money} alt="logo" className="logo" />
						<p className="text">Nạp card</p>
					</div>
					<div className="item_menu">
						<img src={icon_ulity} alt="logo" className="logo" />
						<p className="text">Tiện ích</p>
					</div>
				</div>
			</div>
			<div className="support">
				<img src={icon_support} alt="support" className="logo" />
				<p className="text">Hỗ trợ</p>
			</div>
			<div className="intro">
				<img src={icon_intro} alt="Intro" className="logo" />
				<p className="text">Giới thiệu</p>
			</div>
			<div className="setting">
				<img src={icon_settings} alt="Settings" className="logo" />
				<p className="text">Thiết lập</p>
			</div>
			<div className="cart">
				<img src={icon_cart} alt="Cart" className="logo" />
				<p className="text">Giỏ hàng</p>
			</div>
		</div>
	);
}

export default Navbar;
