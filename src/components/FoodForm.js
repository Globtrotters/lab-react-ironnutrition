import React, {useState} from 'react'

export default function FoodForm(props) {
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [calories, setCalories] = useState(50);
    const [servings, setServings] = useState(5);

    //Function to update the state for every change in the form
    const handleNameInput = e => setName(e.target.value)
    const handleImageInput = e => setImage(e.target.value)
    const handleCaloriesInput = e => setCalories(e.target.value)
    const handleServingsInput = e => setServings(e.target.value)

    //Function to handle the submission the form
    const handleSubmit = (e) =>{
        e.preventDefault();

        const newFood = {name, image, calories, servings}

        props.addFood(newFood)

        //set the inputs back to the initial state
        setName("");
        setImage("");
        setCalories("50");
        setServings("5");
    }

    return (
        <div className= "addFood">
    
    {/*adding the form*/}
    <form onSubmit={handleSubmit}>
			<br />
			<input
				className='input custom'
				onChange={handleNameInput}
				name='foodName'
				type='text'
				value={name}
				placeholder='tomato'
			/>
			<br />
            <input
				className='input custom'
				onChange={handleImageInput}
				name='foodImg'
				type='text'
				value={image}
				placeholder='https://i.imgur.com/5ktcSzF.jpg'
			/>
			
			<br />
			<input
				className='input custom'
				onChange={handleCaloriesInput}
				type='number'
				name='calories'
				min={0}
				value={calories}
			/>
			<br />
            <input
				className='input custom'
				onChange={handleServingsInput}
				type='number'
				name='servings'
				min={0}
				value={servings}
			/>
			<button className='button' type='submit'>
				Add
			</button>
		</form>


</div>
    )
}
