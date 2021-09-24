import React, {useState} from 'react'

export default function FoodBox(props) {
  //This state will handle the quantity input value
	const [quantity, setQuantity] = useState(1);
    const {food,addTodayFood } = props

    //This function will handle every change of number in the quantity input
	const handleChange = (event) => {
		const { value } = event.target;
    console.log(value)
		setQuantity(Number(value));
	};

    return (
        <div className="box">
  <article className="media">
    <div className="media-left">
      <figure className="image is-64x64">
        <img src={food.image} />
      </figure>
    </div>
    <div className="media-content">
      <div className="content">
        <p>
          <strong>{food.name}</strong> <br />
          <small>{food.calories}</small>
        </p>
      </div>
    </div>
    <div className="media-right">
      <div className="field has-addons">
        <div className="control">
          <input className="input" type="number" onChange={handleChange} value={quantity} />
        </div>
        <div className="control">
          <button className="button is-info" onClick={()=>addTodayFood({...food, quantity})}>
            +
          </button>
        </div>
      </div>
    </div>
  </article>
</div>
    )
}
