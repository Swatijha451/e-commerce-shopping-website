import BagItem from "../components/BagItem";
import BagSummary from "../components/BagSummary";


const Bag =()=>{

  const item ={
    id: '008',
    image: 'images/8.jpg',
    company: 'Nivea',
    item_name: 'Men Fresh Deodrant 150ml',
    original_price: 285,
    current_price: 142,
    discount_percentage: 50,
    return_period: 14,
    delivery_date: '10 Oct 2023',
    rating: {
        stars: 4.2,
        count: 5200,
    },
  }
return(
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          <BagItem item={item}></BagItem>
        </div>
        <BagSummary></BagSummary>
      </div>
    </main>
)
}
export default Bag;