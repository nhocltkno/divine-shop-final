import logo_divine from "../assets/icon_website/logo_divineshop.svg";
import facebook from "../assets/icon_website/facebook.svg";
import google from "../assets/icon_website/google.svg";
import phone from "../assets/icon_website/phone.svg";
import "./Footer.css";

const Footer = () => {
	return (
		<div className="footer">
			<div className="details-footer">
				<img src={logo_divine} alt="logo" className="logo-footer" />
				<p className="content-footer">
					© 2020 Divine Shop. Đã đăng ký Bản quyền. Tất cả các nhãn
					hiệu là tài sản của chủ sở hữu tương ứng của họ ở Việt Nam
					và các quốc gia khác. VAT đã bao gồm trong tất cả các mức
					giá nếu có.
				</p>
			</div>
			<div className="contact-footer">
				<div className="facebook">
					<img
						src={facebook}
						alt="facebook"
						className="icon-footer"
					/>
					<p className="contact-details">
						https://www.facebook.com/divineshop.vn/
					</p>
				</div>
				<div className="google">
					<img src={google} alt="google" className="icon-footer" />
					<p className="contact-details">
						https://www.facebook.com/divineshop.vn/
					</p>
				</div>
				<div className="phone">
					<img src={phone} alt="phone" className="icon-footer" />
					<p className="contact-details">
						https://www.facebook.com/divineshop.vn/
					</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
