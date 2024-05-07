import { useDispatch, useSelector } from 'react-redux';
import { IoBagAdd } from 'react-icons/io5';
import { MdDelete } from 'react-icons/md';
import { bagSliceAction } from '../store/bagSlice';
// import bagSlice from "../store/bagSlice";

const HomeItem = ({ item }) => {
	const dispatch = useDispatch();
	const bagItems = useSelector((store) => store.bag);
	const foundItems = bagItems.indexOf(item.id) >= 0;

	const handleAddToBag = () => {
		dispatch(bagSliceAction.addToBag(item.id));
	};
	const handleRemove = () => {
		dispatch(bagSliceAction.removeFromBag(item.id));
	};
	return (
		<>
			<div className="item-container">
				<img
					className="item-image"
					src={item.image}
					alt="item image"
				/>
				<div className="rating">
					{item.rating.stars} ⭐ | {item.rating.count}
				</div>
				<div className="company-name">{item.company}</div>
				<div className="item-name">{item.item_name}</div>
				<div className="price">
					<span className="current-price">Rs {item.current_price}</span>
					<span className="original-price">Rs {item.original_price}</span>
					<span className="discount">({item.discount_percentage}% OFF)</span>
				</div>
				{/* <button className="btn-add-bag" >Add to Bag</button> */}
				{foundItems ? (
					<button
						type="button"
						className="btn btn-danger btn-add-bag"
						onClick={handleRemove}>
						<MdDelete />
						remove
					</button>
				) : (
					<button
						type="button"
						className="btn btn-success btn-add-bag "
						onClick={handleAddToBag}>
						<IoBagAdd />
						Add to Bag
					</button>
				)}
			</div>
		</>
	);
};
export default HomeItem;
