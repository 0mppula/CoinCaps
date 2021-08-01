const Burger = ({ burgerActive, setBurgerActive }) => {
	return (
		<div
			id="burger"
			className={`${burgerActive ? 'burger active ' : 'burger'}`}
			tabIndex={0}
			onKeyPress={setBurgerActive}
			onClick={setBurgerActive}
		>
			<div className="line-1"></div>
			<div className="line-2"></div>
			<div className="line-3"></div>
		</div>
	);
};

export default Burger;
