import "./BigPanel.css";
import Carousel from "react-material-ui-carousel";
import image_1 from "../../assets/hình ảnh banner/1. banner lớn/game_1.jpg";
import image_2 from "../../assets/hình ảnh banner/1. banner lớn/game_2.jpg";
import image_3 from "../../assets/hình ảnh banner/1. banner lớn/game_3.jpg";
import image_4 from "../../assets/hình ảnh banner/1. banner lớn/game_4.jpg";
import prev from "../../assets/icon_website/prev.svg";
import next from "../../assets/icon_website/next.svg";
import indicator from "../../assets/icon_website/indicator_1.svg";

function BigPanel() {
	return (
		<div className="carousel">
			<Carousel
				navButtonsAlwaysVisible
				indicators={{
					className: "indicator-big-contain",
				}}
				IndicatorIcon={
					<img src={indicator} alt="" className="indicator" />
				}
				PrevIcon={<img src={prev} alt="icon" className="icon-big" />}
				NextIcon={<img src={next} alt="icon" className="icon-big" />}
				navButtonsProps={{
					style: {
						margin: "0 0",
						backgroundColor: "transparent",
						padding: "0 0",
					},
				}}
				activeIndicatorIconButtonProps={{
					className: "indicator_1_2",
				}}
				className="big-carousel"
			>
				<div>
					<img src={image_1} alt="test" className="bigPanel" />
					<div className="price">
						<div className="left">
							<p className="discount">-33%</p>
						</div>
						<div className="right">
							<p>990.000 đ</p>
							<h4>663.500đ</h4>
						</div>
					</div>
				</div>
				<div>
					<img src={image_2} alt="test" className="bigPanel" />
					<div className="price">
						<div className="left">
							<p className="discount">-50%</p>
						</div>
						<div className="right">
							<p id="game2">1.290.000đ</p>
							<h4>645.000đ</h4>
						</div>
					</div>
				</div>
				<div>
					<img src={image_3} alt="test" className="bigPanel" />
					<div className="price">
						<div className="left">
							<p className="discount">-80%</p>
						</div>
						<div className="right">
							<p>440.000 đ</p>
							<h4 id="the-witcher"> 80.000đ</h4>
						</div>
					</div>
				</div>
				<div>
					<img src={image_4} alt="test" className="bigPanel" />
					<div className="ass-price">
						<h4>1.000.000đ</h4>
					</div>
				</div>
			</Carousel>
		</div>
	);
}

export default BigPanel;
