import { useSelector } from 'react-redux';
import BagItem from '../components/BagItem';
import BagSummary from '../components/BagSummary';

const Bag = () => {
	const bagitems = useSelector((state) => state.bag);
	const items = useSelector((state) => state.items);
	const finalItems = items.filter((item) => {
		const itemIndex = bagitems.indexOf(item.id);
		return itemIndex >= 0;
	});

	return (
		<main>
			<div className="bag-page">
				<div className="bag-items-container">
					{finalItems.map((item) => (
						<BagItem item={item}></BagItem>
					))}
				</div>
				<BagSummary></BagSummary>
			</div>
		</main>
	);
};
export default Bag;
