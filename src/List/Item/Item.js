import { useState } from "react";
import "./Item.css";
const Item = (data) => {
	data = data.data;
	const [show, setShow] = useState(false);
	const category = data.category.map((name) => (
		<div className="category">{name}</div>
	));
	let imageHover = "";
	if (data.imageHover) {
		imageHover = data.imageHover.map((src) => (
			<img src={src} className="hover-img" alt="hover" />
		));
	}
	const onMouseOver = () => {
		setShow(true);
	};

	const onMouseOut = () => {
		setShow(false);
	};
	return (
		<div
			className="item-item"
			onMouseMove={onMouseOver}
			onMouseLeave={onMouseOut}
		>
			<img className="imageCover" src={data.imageCover} alt="cover" />
			<div className="details">
				<div className="details-left">
					<h1 className="title">{data.title}</h1>
					<p className="des">{data.des}</p>
				</div>
				<div className="item-price">
					{data.discount ? (
						<div className="discount">-{data.discount}%</div>
					) : (
						""
					)}
					{data.discount ? (
						<div className="item-discount-price">
							<p className="pre-price">{data.prePrice}</p>
							<p className="after-price">{data.price}</p>
						</div>
					) : (
						<div className="price-only">
							<p className="price-number">{data.price}</p>
						</div>
					)}
				</div>
			</div>
			{show ? (
				<div className="hover-item">
					<h1 class="hover-title">{data.title}</h1>
					<p className="hover-rating">
						Đánh giá: <span className="rating">{data.rating}</span>
						(300)
					</p>
					<div className="list-cate">{category}</div>
					{imageHover}
				</div>
			) : (
				""
			)}
		</div>
	);
};

export default Item;
