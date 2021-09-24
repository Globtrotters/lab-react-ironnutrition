import React, { useState, useEffect } from 'react';
//import all foods
import allfoods from '../foods.json';
import FoodBox from './FoodBox';
import FoodForm from './FoodForm';
import Search from './Search';

export default function Foods() {
  const [foods, setFoods] = useState(allfoods);
  const [foodsCopy, setFoodsData] = useState(allfoods);
  //This state will hold today's food (right column)
  const [todayFood, setTodayFood] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  //This state will decide whether to show or hide the form
  const [showOrHideForm, setShowOrHideForm] = useState(false);
  //This state will hold the total calories of today's foods
  const [totalCalories, setTotalCalories] = useState(0);
  

  //Function to add food
  const addFood = (newFood) => {
    const newArr = [...foods, newFood];
    const updatedFoodCopy = [...foods, newFood];
    setFoods(newArr);
    setFoodsData(updatedFoodCopy);
  };

  //Function to filter the array of foods with the user search input
  //function to search for food
  const searchFoodFilter = (e) => {
    console.log(e);
    setSearchInput(e.target.value);

    if (e.target.value === '') {
      setFoods(foods);
    }

    const textInputValue = e.target.value.toLowerCase();

    const filteredList = foodsCopy.filter((food) => {
      const foodIncludes = food.name.toLowerCase();
      return foodIncludes.includes(textInputValue);
    });
    setFoods(filteredList);
  };

  //This function changes the value to show or hide the form
  const showForm = () => {
    setShowOrHideForm(!showOrHideForm);
  };

  //this function adds a food to today's food array

  const addTodayFood = (food) => {
    //make a copy of the array
    let today = [...todayFood];
    //Check if the added item is already in the array

    let found = today.find((el) => el.name === food.name);

    //Update calories

    food.calories *= food.quantity;

    if (found) {
      found.quantity += food.quantity;
      found.calories += food.calories;
    } else {
      //If it's not in the array, add it
      today.push(food);
    }
    console.log('today',today)
    setTodayFood(today);
  };

  //This effect hook will update the value of the total calories
  useEffect(
    () =>
      setTotalCalories(todayFood.reduce((acc, val) => acc + val.calories, 0)),
    [todayFood]
  );

  //This function clears the today's food content (array and calories)
	const clearToday = () => {
		setTodayFood([]);
		setTotalCalories(0);
	};

  return (
    <div>
      <h1>IronNutrition</h1>

      <Search filterFoods={searchFoodFilter} searchInput={searchInput} />

      <br />
      <button className="button is-info" onClick={showForm}>
        Add Food
      </button>
      <br />
      {showOrHideForm && <FoodForm addFood={addFood} />}
      <br />
      <div style={{ width: '70%', float: 'left' }}>
        {foods.map((food) => {
          return <FoodBox key={food.name} food={food} addTodayFood={addTodayFood} />;
        })}
      </div>

      <div style={{ width: '30%', float: 'right' }}>
					<h2>Today's food</h2>
					<ul>
						{/* Render a list item for every element in the array  */}
						{todayFood.map((el) => {
							return (
								<li key={el.name}>
									{el.quantity} {el.name} = {el.calories} cal
								</li>
							);
						})}

						{/* Show total calories */}
						<p>Total: {totalCalories} calories</p>
					</ul>
					<button className='button is-info' onClick={clearToday}>
						Clear
					</button>
				</div>
    </div>
  );
}
