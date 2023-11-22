import React, { useState } from "react";

type FoodData = {
  [key: string]: { protein: number; carbs: number; fats: number };
};

const DietCalculator = () => {
  const [selectedFood, setSelectedFood] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [foodList, setFoodList] = useState<{ food: string; time: string }[]>(
    []
  );
  const [totalProtein, setTotalProtein] = useState(0);
  const [totalCarbs, setTotalCarbs] = useState(0);
  const [totalFats, setTotalFats] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);
  const [caloriesStatus, setCaloriesStatus] = useState<string | null>(""); // Provide a default value of ''

  const foodData: FoodData = {
    Apple: { protein: 0.5, carbs: 25, fats: 0.3 }, Banana: { protein: 1.1, carbs: 22, fats: 0.3 },
    Milk: { protein: 8, carbs: 12, fats: 8 },Bread: { protein: 2, carbs: 25, fats: 1 },
    Rice: { protein: 2.7, carbs: 45, fats: 0.6 },Grain: { protein: 6, carbs: 80, fats: 2 },
    "Red meat": { protein: 26, carbs: 0, fats: 17 },Chicken: { protein: 31, carbs: 0, fats: 3.6 },
    "Fast Food": { protein: 10, carbs: 40, fats: 25 },Cheese: { protein: 7, carbs: 1, fats: 9 },
  Yogurt: { protein: 5, carbs: 15, fats: 3 },Butter: { protein: 0.9, carbs: 0.1, fats: 81 },
  "Soda Drinks": { protein: 0, carbs: 39, fats: 0 }, Shakes: { protein: 20, carbs: 30, fats: 10 },
    // Add more food items here
  };

  const addFood = () => {
    const food = foodData[selectedFood];

    if (food && selectedTime) {
      const { protein, carbs, fats } = food;
      const foodCalories = protein * 4 + carbs * 4 + fats * 9;

      setFoodList((prevFoodList) => [
        ...prevFoodList,
        { food: selectedFood, time: selectedTime },
      ]);
      setTotalProtein((prev) => prev + protein);
      setTotalCarbs((prev) => prev + carbs);
      setTotalFats((prev) => prev + fats);
      setTotalCalories((prev) => prev + foodCalories);

      setSelectedFood("");
      setSelectedTime("");

      // Determine calories status
      if (foodCalories < 300) {
        setCaloriesStatus("Low Calories");
      } else if (foodCalories > 600) {
        setCaloriesStatus("High Calories");
      } else {
        setCaloriesStatus("Average Calories");
      }
    }
  };

  // Calculate total calories for each time
  const morningCalories = foodList
    .filter((item) => item.time === "morning")
    .reduce((total, item) => {
      const food = foodData[item.food];
      return total + food.protein * 4 + food.carbs * 4 + food.fats * 9;
    }, 0);

  const eveningCalories = foodList
    .filter((item) => item.time === "evening")
    .reduce((total, item) => {
      const food = foodData[item.food];
      return total + food.protein * 4 + food.carbs * 4 + food.fats * 9;
    }, 0);

  const teaTimeCalories = foodList
    .filter((item) => item.time === "tea time")
    .reduce((total, item) => {
      const food = foodData[item.food];
      return total + food.protein * 4 + food.carbs * 4 + food.fats * 9;
    }, 0);

  const nightCalories = foodList
    .filter((item) => item.time === "night")
    .reduce((total, item) => {
      const food = foodData[item.food];
      return total + food.protein * 4 + food.carbs * 4 + food.fats * 9;
    }, 0);

  // Recommendations based on the whole day's total calories
  const dayCaloriesStatus = (totalCalories: number) => {
    if (totalCalories < 500) {
      return "Low Calories";
    } else if (totalCalories > 2500) {
      return "High Calories";
    } else {
      return "Average Calories";
    }
  };
  const clearFoodList = () => {
    setFoodList([]);
    setTotalProtein(0);
    setTotalCarbs(0);
    setTotalFats(0);
    setTotalCalories(0);
    setCaloriesStatus("");
  };
  return (
    <div className="dietcontainer">
      <div className="dietcontainer2">
        <h1>Diet Calculator</h1>
        <label htmlFor="foodName">Select a Food:</label>
        <select
          id="foodName"
          value={selectedFood}
          onChange={(e) => setSelectedFood(e.target.value)}
        >
          <option value="">Select a food</option>
          {Object.keys(foodData).map((foodName) => (
            <option key={foodName} value={foodName}>
              {foodName}
            </option>
          ))}
        </select>

        <label htmlFor="time">Select Intake Time:</label>
        <select
          id="time"
          value={selectedTime}
          onChange={(e) => setSelectedTime(e.target.value)}
        >
          <option value="">Select a time</option>
          <option value="morning">Morning</option>
          <option value="evening">Evening</option>
          <option value="tea time">Tea Time</option>
          <option value="night">Night</option>
        </select>

        <button onClick={addFood}>Add Food</button>
      </div>
      <div className="dietcontainer3">
        <h2>Food List</h2>
        <ul>
          {foodList.map((item, index) => (
            <li key={index}>
              {item.food} ({item.time})
            </li>
          ))}
        </ul>
        <button onClick={clearFoodList}>Clear </button>
        <h2>Nutritional Information</h2>
        <p>Total Protein: {totalProtein.toFixed(2)}g</p>
        <p>Total Carbohydrates: {totalCarbs.toFixed(2)}g</p>
        <p>Total Fats: {totalFats.toFixed(2)}g</p>
        <p>Total Calories:  <strong>{totalCalories.toFixed(2)} kcal</strong></p>
      </div>

      <div className="dietcontainer4">
        <h2>Calories by Time</h2>
        <p>Morning Calories: {morningCalories.toFixed(2)} kcal</p>
        <p>Evening Calories: {eveningCalories.toFixed(2)} kcal</p>
        <p>Tea Time Calories: {teaTimeCalories.toFixed(2)} kcal</p>
        <p>Night Calories: {nightCalories.toFixed(2)} kcal</p>
      </div>

      <div className="dietcontainer5">
        <h2>Whole Day Calories Status: <strong> {dayCaloriesStatus(totalCalories)}</strong></h2>
        <p>
          Recommendations for the whole day:{" "}
         <strong>{getRecommendations(dayCaloriesStatus(totalCalories))}</strong> 
        </p>
      </div>
    </div>
  );
};

const getRecommendations = (caloriesStatus: string | null) => {
  switch (caloriesStatus) {
    case "Low Calories":
      return "Consider adding more calorie-dense foods to your diet.";
    case "High Calories":
      return "Consider reducing high-calorie foods and adding more low-calorie options.";
    case "Average Calories":
      return "Your calorie intake appears to be balanced. Maintain a balanced diet.";
    default:
      return "No specific recommendations at the moment.";
  }
};

export default DietCalculator;
