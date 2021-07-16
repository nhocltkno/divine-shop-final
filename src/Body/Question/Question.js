import "./Question.css";

const Question = () => {
	return (
		<div className="question">
			<h1 className="question-title">Bạn là người mới?</h1>
			<p className="question-des">
				Hãy đăng kí tài khoản để cập nhập những ưu đãi mới nhất từ
				Divine Shop
			</p>
			<p className="question-dk">Đăng ký ngay</p>
			<p className="question-des">
				Hoặc <span className="question-dn">đăng nhập</span> nếu bạn đã
				có tài khoản
			</p>
		</div>
	);
};

export default Question;
