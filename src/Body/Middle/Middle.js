import khuyenmai1 from "../../assets/hình ảnh banner/1. banner lớn/5.png";
import khuyenmai2 from "../../assets/hình ảnh banner/1. banner lớn/6.png";
import khuyenmai3 from "../../assets/hình ảnh banner/1. banner lớn/7.png";
import prev from "../../assets/icon_website/prev.svg";
import next from "../../assets/icon_website/next.svg";
import Carousel from "react-material-ui-carousel";
import indicator from "../../assets/icon_website/small_indicator_1.svg";
import "./Middle.css";
import advertise_left from "../../assets/hình ảnh banner/7. banner quảng cáo lề trang/left.png";
import advertise_right from "../../assets/hình ảnh banner/7. banner quảng cáo lề trang/right.png";
import img1 from "../../assets/hình ảnh banner/2. banner khuyễn mãi/1.jpg";
import img2 from "../../assets/hình ảnh banner/2. banner khuyễn mãi/2.jpg";
import img3 from "../../assets/hình ảnh banner/2. banner khuyễn mãi/3.jpg";
import img4 from "../../assets/hình ảnh banner/2. banner khuyễn mãi/4.jpg";
import img5 from "../../assets/hình ảnh banner/2. banner khuyễn mãi/5.jpg";
import img6 from "../../assets/hình ảnh banner/2. banner khuyễn mãi/6.jpg";
import img7 from "../../assets/hình ảnh banner/2. banner khuyễn mãi/7.jpg";
import img8 from "../../assets/hình ảnh banner/2. banner khuyễn mãi/8.jpg";
import img9 from "../../assets/hình ảnh banner/2. banner khuyễn mãi/9.jpg";
import img10 from "../../assets/hình ảnh banner/2. banner khuyễn mãi/10.jpg";
import img11 from "../../assets/hình ảnh banner/2. banner khuyễn mãi/11.jpg";
import img12 from "../../assets/hình ảnh banner/2. banner khuyễn mãi/12.jpg";
import img13 from "../../assets/hình ảnh banner/2. banner khuyễn mãi/13.jpg";
import img14 from "../../assets/hình ảnh banner/2. banner khuyễn mãi/14.jpg";
import img15 from "../../assets/hình ảnh banner/2. banner khuyễn mãi/15.jpg";
import img16 from "../../assets/hình ảnh banner/2. banner khuyễn mãi/16.jpg";
import img17 from "../../assets/hình ảnh banner/2. banner khuyễn mãi/17.jpg";
import img18 from "../../assets/hình ảnh banner/2. banner khuyễn mãi/18.jpg";
import img19 from "../../assets/hình ảnh banner/2. banner khuyễn mãi/19.jpg";
import img20 from "../../assets/hình ảnh banner/2. banner khuyễn mãi/20.jpg";
import img21 from "../../assets/hình ảnh banner/2. banner khuyễn mãi/21.jpg";
import img22 from "../../assets/hình ảnh banner/2. banner khuyễn mãi/22.jpg";
import img23 from "../../assets/hình ảnh banner/2. banner khuyễn mãi/23.jpg";
import img24 from "../../assets/hình ảnh banner/2. banner khuyễn mãi/24.jpg";

import img_1 from "../../assets/hình ảnh banner/3. banner mua nhiều trong ngày/1.png";
import img_2 from "../../assets/hình ảnh banner/3. banner mua nhiều trong ngày/2.png";
import img_3 from "../../assets/hình ảnh banner/3. banner mua nhiều trong ngày/3.png";
import img_4 from "../../assets/hình ảnh banner/3. banner mua nhiều trong ngày/4.png";
import img_5 from "../../assets/hình ảnh banner/3. banner mua nhiều trong ngày/5.png";
import img_6 from "../../assets/hình ảnh banner/3. banner mua nhiều trong ngày/6.png";
import img_7 from "../../assets/hình ảnh banner/3. banner mua nhiều trong ngày/7.png";
import img_8 from "../../assets/hình ảnh banner/3. banner mua nhiều trong ngày/8.png";
import img_9 from "../../assets/hình ảnh banner/3. banner mua nhiều trong ngày/9.png";
import img_10 from "../../assets/hình ảnh banner/3. banner mua nhiều trong ngày/10.png";
import img_11 from "../../assets/hình ảnh banner/3. banner mua nhiều trong ngày/11.png";
import img_12 from "../../assets/hình ảnh banner/3. banner mua nhiều trong ngày/12.png";
import img_13 from "../../assets/hình ảnh banner/3. banner mua nhiều trong ngày/13.png";
import img_14 from "../../assets/hình ảnh banner/3. banner mua nhiều trong ngày/14.png";
import img_15 from "../../assets/hình ảnh banner/3. banner mua nhiều trong ngày/15.png";
import img_16 from "../../assets/hình ảnh banner/3. banner mua nhiều trong ngày/16.png";
import img_17 from "../../assets/hình ảnh banner/3. banner mua nhiều trong ngày/17.png";
import img_18 from "../../assets/hình ảnh banner/3. banner mua nhiều trong ngày/18.png";
import img_19 from "../../assets/hình ảnh banner/3. banner mua nhiều trong ngày/19.png";
import img_20 from "../../assets/hình ảnh banner/3. banner mua nhiều trong ngày/20.png";
import img_21 from "../../assets/hình ảnh banner/3. banner mua nhiều trong ngày/21.png";
import img_22 from "../../assets/hình ảnh banner/3. banner mua nhiều trong ngày/22.png";
import img_23 from "../../assets/hình ảnh banner/3. banner mua nhiều trong ngày/23.png";
import img_24 from "../../assets/hình ảnh banner/3. banner mua nhiều trong ngày/24.png";

function Middle() {
	return (
		<div className="middle">
			<div className="khuyenMai">
				<img src={khuyenmai1} alt="" />
				<img src={khuyenmai2} alt="" />
				<img src={khuyenmai3} alt="" className="hide_km" />
			</div>

			<img className="advertise_left" src={advertise_left} alt="" />
			<img className="advertise_right" src={advertise_right} alt="" />

			<div className="btn_khuyenmai">
				<p className="text">Khuyến mãi</p>
			</div>
			<div className="div-carousel-1">
				<Carousel
					navButtonsAlwaysVisible
					IndicatorIcon={
						<img src={indicator} alt="" className="indicator-img" />
					}
					PrevIcon={
						<img src={prev} alt="icon" className="prev_icon" />
					}
					NextIcon={
						<img src={next} alt="icon" className="next_icon" />
					}
					navButtonsProps={{
						style: {
							backgroundColor: "transparent",
							padding: "0 0",
						},
					}}
					activeIndicatorIconButtonProps={{
						className: "indicator_2",
					}}
					navButtonsWrapperProps={{
						style: {
							marginBottom: "10",
						},
						className: "btn_wrapper",
					}}
					className="carousel-1"
				>
					<div className="item-list">
						<div className="item-km" id="first">
							<img src={img1} alt="" className="item-img" />
							<div className="contain-price">
								<div className="discount-price">
									<div className="left-price">
										<p className="discount-1">-50%</p>
									</div>
									<div className="right-price">
										<p>310.000 đ</p>
										<h4>155.500đ</h4>
									</div>
								</div>
							</div>
						</div>
						<div className="item-km">
							<img src={img2} alt="" className="item-img" />
							<div className="contain-price">
								<div className="discount-price">
									<div className="left-price">
										<p className="discount-1">-33%</p>
									</div>
									<div className="right-price">
										<p>310.000 đ</p>
										<h4>207.500đ</h4>
									</div>
								</div>
							</div>
						</div>
						<div className="item-km">
							<img src={img3} alt="" className="item-img" />
							<div className="contain-price">
								<div className="discount-price">
									<div className="left-price">
										<p className="discount-1">-50%</p>
									</div>
									<div className="right-price">
										<p>340.000 đ</p>
										<h4>170.500đ</h4>
									</div>
								</div>
							</div>
						</div>
						<div className="item-km">
							<img src={img4} alt="" className="item-img" />
							<div className="contain-price">
								<div className="discount-price">
									<div className="left-price">
										<p className="discount-1">-40%</p>
									</div>
									<div className="right-price">
										<p>390.000 đ</p>
										<h4>234.500đ</h4>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="item-list">
						<div className="item-km" id="first">
							<img src={img5} alt="" className="item-img" />
							<div className="contain-price">
								<div className="discount-price">
									<div className="left-price">
										<p className="discount-1">-25%</p>
									</div>
									<div className="right-price">
										<p>950.000 đ</p>
										<h4>712.500đ</h4>
									</div>
								</div>
							</div>
						</div>
						<div className="item-km">
							<img src={img6} alt="" className="item-img" />
							<div className="contain-price">
								<div className="discount-price">
									<div className="left-price">
										<p className="discount-1">-50%</p>
									</div>
									<div className="right-price">
										<p>480.000 đ</p>
										<h4>240.000đ</h4>
									</div>
								</div>
							</div>
						</div>
						<div className="item-km">
							<img src={img7} alt="" className="item-img" />
							<div className="contain-price">
								<div className="discount-price">
									<div className="left-price">
										<p className="discount-1">-30%</p>
									</div>
									<div className="right-price">
										<p>220.000 đ</p>
										<h4>154.500đ</h4>
									</div>
								</div>
							</div>
						</div>
						<div className="item-km">
							<img src={img8} alt="" className="item-img" />
							<div className="contain-price">
								<div className="discount-price">
									<div className="left-price">
										<p className="discount-1">-33%</p>
									</div>
									<div className="right-price">
										<p>999.000 đ</p>
										<h4>670.000đ</h4>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="item-list">
						<div className="item-km" id="first">
							<img src={img9} alt="" className="item-img" />
							<div className="contain-price">
								<div className="discount-price">
									<div className="left-price">
										<p className="discount-1">-75%</p>
									</div>
									<div className="right-price">
										<p>700.000 đ</p>
										<h4>175.500đ</h4>
									</div>
								</div>
							</div>
						</div>
						<div className="item-km">
							<img src={img10} alt="" className="item-img" />
							<div className="contain-price">
								<div className="discount-price">
									<div className="left-price">
										<p className="discount-1">-20%</p>
									</div>
									<div className="right-price">
										<p>220.000 đ</p>
										<h4>176.500đ</h4>
									</div>
								</div>
							</div>
						</div>
						<div className="item-km">
							<img src={img11} alt="" className="item-img" />
							<div className="contain-price">
								<div className="discount-price">
									<div className="left-price">
										<p className="discount-1">-88%</p>
									</div>
									<div className="right-price">
										<p>950.000 đ</p>
										<h4>114.500đ</h4>
									</div>
								</div>
							</div>
						</div>
						<div className="item-km">
							<img src={img12} alt="" className="item-img" />
							<div className="contain-price">
								<div className="discount-price">
									<div className="left-price">
										<p className="discount-1">-33%</p>
									</div>
									<div className="right-price">
										<p>990.000 đ</p>
										<h4>663.500đ</h4>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="item-list">
						<div className="item-km" id="first">
							<img src={img13} alt="" className="item-img" />
							<div className="contain-price">
								<div className="discount-price">
									<div className="left-price">
										<p className="discount-1">-35%</p>
									</div>
									<div className="right-price">
										<p>990.000 đ</p>
										<h4>700.500đ</h4>
									</div>
								</div>
							</div>
						</div>
						<div className="item-km">
							<img src={img14} alt="" className="item-img" />
							<div className="contain-price">
								<div className="discount-price">
									<div className="left-price">
										<p className="discount-1">-77%</p>
									</div>
									<div className="right-price">
										<p>650.000 đ</p>
										<h4>149.500đ</h4>
									</div>
								</div>
							</div>
						</div>
						<div className="item-km">
							<img src={img15} alt="" className="item-img" />
							<div className="contain-price">
								<div className="discount-price">
									<div className="left-price">
										<p className="discount-1">-50%</p>
									</div>
									<div className="right-price">
										<p>499.000 đ</p>
										<h4>249.500đ</h4>
									</div>
								</div>
							</div>
						</div>
						<div className="item-km">
							<img src={img16} alt="" className="item-img" />
							<div className="contain-price">
								<div className="discount-price">
									<div className="left-price">
										<p className="discount-1">-45%</p>
									</div>
									<div className="right-price">
										<p>188.000 đ</p>
										<h4>103.500đ</h4>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="item-list">
						<div className="item-km" id="first">
							<img src={img17} alt="" className="item-img" />
							<div className="contain-price">
								<div className="discount-price">
									<div className="left-price">
										<p className="discount-1">-75%</p>
									</div>
									<div className="right-price">
										<p>990.000 đ</p>
										<h4>250.500đ</h4>
									</div>
								</div>
							</div>
						</div>
						<div className="item-km">
							<img src={img18} alt="" className="item-img" />
							<div className="contain-price">
								<div className="discount-price">
									<div className="left-price">
										<p className="discount-1">-33%</p>
									</div>
									<div className="right-price">
										<p>990.000 đ</p>
										<h4>663.500đ</h4>
									</div>
								</div>
							</div>
						</div>
						<div className="item-km">
							<img src={img19} alt="" className="item-img" />
							<div className="contain-price">
								<div className="discount-price">
									<div className="left-price">
										<p className="discount-1">-10%</p>
									</div>
									<div className="right-price">
										<p>188.000 đ</p>
										<h4>169.500đ</h4>
									</div>
								</div>
							</div>
						</div>
						<div className="item-km">
							<img src={img20} alt="" className="item-img" />
							<div className="contain-price">
								<div className="discount-price">
									<div className="left-price">
										<p className="discount-1">-33%</p>
									</div>
									<div className="right-price">
										<p>188.000 đ</p>
										<h4>126.500đ</h4>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="item-list">
						<div className="item-km" id="first">
							<img src={img21} alt="" className="item-img" />
							<div className="contain-price">
								<div className="discount-price">
									<div className="left-price">
										<p className="discount-1">-40%</p>
									</div>
									<div className="right-price">
										<p>165.000 đ</p>
										<h4>100.500đ</h4>
									</div>
								</div>
							</div>
						</div>
						<div className="item-km">
							<img src={img22} alt="" className="item-img" />
							<div className="contain-price">
								<div className="discount-price">
									<div className="left-price">
										<p className="discount-1">-33%</p>
									</div>
									<div className="right-price">
										<p>990.000 đ</p>
										<h4>663.500đ</h4>
									</div>
								</div>
							</div>
						</div>
						<div className="item-km">
							<img src={img23} alt="" className="item-img" />
							<div className="contain-price">
								<div className="discount-price">
									<div className="left-price">
										<p className="discount-1">-33%</p>
									</div>
									<div className="right-price">
										<p>990.000 đ</p>
										<h4>663.500đ</h4>
									</div>
								</div>
							</div>
						</div>
						<div className="item-km">
							<img src={img24} alt="" className="item-img" />
							<div className="contain-price">
								<div className="discount-price">
									<div className="left-price">
										<p className="discount-1">-33%</p>
									</div>
									<div className="right-price">
										<p>990.000 đ</p>
										<h4>663.500đ</h4>
									</div>
								</div>
							</div>
						</div>
					</div>
				</Carousel>
			</div>

			<div className="btn_muanhieu">
				<p className="text">Mua nhiều trong ngày</p>
			</div>
			<div className="div-carousel-2">
				<Carousel
					navButtonsAlwaysVisible
					IndicatorIcon={
						<img src={indicator} alt="" className="indicator-img" />
					}
					PrevIcon={
						<img src={prev} alt="icon" className="prev_icon" />
					}
					NextIcon={
						<img src={next} alt="icon" className="next_icon" />
					}
					navButtonsProps={{
						style: {
							backgroundColor: "transparent",
							padding: "0 0",
						},
					}}
					activeIndicatorIconButtonProps={{
						className: "indicator_2",
					}}
					navButtonsWrapperProps={{
						style: {
							marginBottom: "10",
						},
						className: "btn_wrapper",
					}}
					className="carousel-1"
				>
					<div className="item-list">
						<div className="item-km" id="first">
							<img src={img_1} alt="" className="item-img" />
							<div className="contain-price">
								<div className="discount-price">
									<div className="left-price">
										<p className="discount-1">-50%</p>
									</div>
									<div className="right-price">
										<p>310.000 đ</p>
										<h4>155.500đ</h4>
									</div>
								</div>
							</div>
						</div>
						<div className="item-km">
							<img src={img_2} alt="" className="item-img" />
							<div className="contain-price">
								<div className="discount-price">
									<div className="left-price">
										<p className="discount-1">-33%</p>
									</div>
									<div className="right-price">
										<p>310.000 đ</p>
										<h4>207.500đ</h4>
									</div>
								</div>
							</div>
						</div>
						<div className="item-km">
							<img src={img_3} alt="" className="item-img" />
							<div className="contain-price">
								<div className="discount-price">
									<div className="left-price">
										<p className="discount-1">-50%</p>
									</div>
									<div className="right-price">
										<p>340.000 đ</p>
										<h4>170.500đ</h4>
									</div>
								</div>
							</div>
						</div>
						<div className="item-km">
							<img src={img_4} alt="" className="item-img" />
							<div className="contain-price">
								<div className="discount-price">
									<div className="left-price">
										<p className="discount-1">-40%</p>
									</div>
									<div className="right-price">
										<p>390.000 đ</p>
										<h4>234.500đ</h4>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="item-list">
						<div className="item-km" id="first">
							<img src={img_5} alt="" className="item-img" />
							<div className="contain-price">
								<div className="discount-price">
									<div className="left-price">
										<p className="discount-1">-25%</p>
									</div>
									<div className="right-price">
										<p>950.000 đ</p>
										<h4>712.500đ</h4>
									</div>
								</div>
							</div>
						</div>
						<div className="item-km">
							<img src={img_6} alt="" className="item-img" />
							<div className="contain-price">
								<div className="discount-price">
									<div className="left-price">
										<p className="discount-1">-50%</p>
									</div>
									<div className="right-price">
										<p>480.000 đ</p>
										<h4>240.000đ</h4>
									</div>
								</div>
							</div>
						</div>
						<div className="item-km">
							<img src={img_7} alt="" className="item-img" />
							<div className="contain-price">
								<div className="discount-price">
									<div className="left-price">
										<p className="discount-1">-30%</p>
									</div>
									<div className="right-price">
										<p>220.000 đ</p>
										<h4>154.500đ</h4>
									</div>
								</div>
							</div>
						</div>
						<div className="item-km">
							<img src={img_8} alt="" className="item-img" />
							<div className="contain-price">
								<div className="discount-price">
									<div className="left-price">
										<p className="discount-1">-33%</p>
									</div>
									<div className="right-price">
										<p>999.000 đ</p>
										<h4>670.000đ</h4>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="item-list">
						<div className="item-km" id="first">
							<img src={img_9} alt="" className="item-img" />
							<div className="contain-price">
								<div className="discount-price">
									<div className="left-price">
										<p className="discount-1">-75%</p>
									</div>
									<div className="right-price">
										<p>700.000 đ</p>
										<h4>175.500đ</h4>
									</div>
								</div>
							</div>
						</div>
						<div className="item-km">
							<img src={img_10} alt="" className="item-img" />
							<div className="contain-price">
								<div className="discount-price">
									<div className="left-price">
										<p className="discount-1">-20%</p>
									</div>
									<div className="right-price">
										<p>220.000 đ</p>
										<h4>176.500đ</h4>
									</div>
								</div>
							</div>
						</div>
						<div className="item-km">
							<img src={img_11} alt="" className="item-img" />
							<div className="contain-price">
								<div className="discount-price">
									<div className="left-price">
										<p className="discount-1">-88%</p>
									</div>
									<div className="right-price">
										<p>950.000 đ</p>
										<h4>114.500đ</h4>
									</div>
								</div>
							</div>
						</div>
						<div className="item-km">
							<img src={img_12} alt="" className="item-img" />
							<div className="contain-price">
								<div className="discount-price">
									<div className="left-price">
										<p className="discount-1">-33%</p>
									</div>
									<div className="right-price">
										<p>990.000 đ</p>
										<h4>663.500đ</h4>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="item-list">
						<div className="item-km" id="first">
							<img src={img_13} alt="" className="item-img" />
							<div className="contain-price">
								<div className="discount-price">
									<div className="left-price">
										<p className="discount-1">-35%</p>
									</div>
									<div className="right-price">
										<p>990.000 đ</p>
										<h4>700.500đ</h4>
									</div>
								</div>
							</div>
						</div>
						<div className="item-km">
							<img src={img_14} alt="" className="item-img" />
							<div className="contain-price">
								<div className="discount-price">
									<div className="left-price">
										<p className="discount-1">-77%</p>
									</div>
									<div className="right-price">
										<p>650.000 đ</p>
										<h4>149.500đ</h4>
									</div>
								</div>
							</div>
						</div>
						<div className="item-km">
							<img src={img_15} alt="" className="item-img" />
							<div className="contain-price">
								<div className="discount-price">
									<div className="left-price">
										<p className="discount-1">-50%</p>
									</div>
									<div className="right-price">
										<p>499.000 đ</p>
										<h4>249.500đ</h4>
									</div>
								</div>
							</div>
						</div>
						<div className="item-km">
							<img src={img_16} alt="" className="item-img" />
							<div className="contain-price">
								<div className="discount-price">
									<div className="left-price">
										<p className="discount-1">-45%</p>
									</div>
									<div className="right-price">
										<p>188.000 đ</p>
										<h4>103.500đ</h4>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="item-list">
						<div className="item-km" id="first">
							<img src={img_17} alt="" className="item-img" />
							<div className="contain-price">
								<div className="discount-price">
									<div className="left-price">
										<p className="discount-1">-75%</p>
									</div>
									<div className="right-price">
										<p>990.000 đ</p>
										<h4>250.500đ</h4>
									</div>
								</div>
							</div>
						</div>
						<div className="item-km">
							<img src={img_18} alt="" className="item-img" />
							<div className="contain-price">
								<div className="discount-price">
									<div className="left-price">
										<p className="discount-1">-33%</p>
									</div>
									<div className="right-price">
										<p>990.000 đ</p>
										<h4>663.500đ</h4>
									</div>
								</div>
							</div>
						</div>
						<div className="item-km">
							<img src={img_19} alt="" className="item-img" />
							<div className="contain-price">
								<div className="discount-price">
									<div className="left-price">
										<p className="discount-1">-10%</p>
									</div>
									<div className="right-price">
										<p>188.000 đ</p>
										<h4>169.500đ</h4>
									</div>
								</div>
							</div>
						</div>
						<div className="item-km">
							<img src={img_20} alt="" className="item-img" />
							<div className="contain-price">
								<div className="discount-price">
									<div className="left-price">
										<p className="discount-1">-33%</p>
									</div>
									<div className="right-price">
										<p>188.000 đ</p>
										<h4>126.500đ</h4>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="item-list">
						<div className="item-km" id="first">
							<img src={img_21} alt="" className="item-img" />
							<div className="contain-price">
								<div className="discount-price">
									<div className="left-price">
										<p className="discount-1">-40%</p>
									</div>
									<div className="right-price">
										<p>165.000 đ</p>
										<h4>100.500đ</h4>
									</div>
								</div>
							</div>
						</div>
						<div className="item-km">
							<img src={img_22} alt="" className="item-img" />
							<div className="contain-price">
								<div className="discount-price">
									<div className="left-price">
										<p className="discount-1">-33%</p>
									</div>
									<div className="right-price">
										<p>990.000 đ</p>
										<h4>663.500đ</h4>
									</div>
								</div>
							</div>
						</div>
						<div className="item-km">
							<img src={img_23} alt="" className="item-img" />
							<div className="contain-price">
								<div className="discount-price">
									<div className="left-price">
										<p className="discount-1">-33%</p>
									</div>
									<div className="right-price">
										<p>990.000 đ</p>
										<h4>663.500đ</h4>
									</div>
								</div>
							</div>
						</div>
						<div className="item-km">
							<img src={img_24} alt="" className="item-img" />
							<div className="contain-price">
								<div className="discount-price">
									<div className="left-price">
										<p className="discount-1">-33%</p>
									</div>
									<div className="right-price">
										<p>990.000 đ</p>
										<h4>663.500đ</h4>
									</div>
								</div>
							</div>
						</div>
					</div>
				</Carousel>
			</div>
		</div>
	);
}

export default Middle;
