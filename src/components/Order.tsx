import { useState } from "react";
import useDishes from "../hooks/useDishes";
import { CompletedOrder, Dish, DishType } from "../common/interfaces";
import addOrder from "../hooks/addOrder";

export default function Order() {
  const dishTypes: DishType[] = [
    { value: "main", displayValue: "Main Dishes" },
    { value: "side", displayValue: "Side Dishes" },
    { value: "dessert", displayValue: "Desserts" },
  ];

  let [dishType, setDishType] = useState<string>("main");
  const [selectedDishes, setSelectedDishes] = useState<Dish[]>([]);

  const { data: dishes, error, isLoading } = useDishes(dishType);

  let order: CompletedOrder = { mainDishes: [], sideDishes: [] };

  let { mutate, error: mutateError, isSuccess } = addOrder(order);

  let total = 0;
  const prices = selectedDishes.map((item) => item.price);
  if (prices.length > 0) total = prices.reduce((prev, cur) => (cur += prev));

  if (isLoading) {
    return (
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const order: CompletedOrder = {
          mainDishes: selectedDishes.filter((item) => item.dishType === "main"),
          sideDishes: selectedDishes.filter((item) => item.dishType === "side"),
        };

        mutate(order);
        if (isSuccess) setSelectedDishes([]);
      }}
    >
      <div>
        <h1 className="mb-3">Welcome to the Colombo Restaurant</h1>
        <h3 className="mb-3">Select a Dish Type</h3>
        {mutateError && (
          <div className="alert alert-danger" role="alert">
            {mutateError.message}
            {(mutateError = null)}
          </div>
        )}
        {error && (
          <div className="alert alert-danger" role="alert">
            {error.message}
          </div>
        )}
        {isSuccess && (
          <div className="alert alert-success" role="alert">
            Order Completion Successfull!
          </div>
        )}

        <select
          onChange={(event) => {
            setDishType(event.currentTarget.value);
          }}
          className="form-select mb-2"
          aria-label="Default select example"
        >
          {dishTypes.map((type) => (
            <option key={type.value} value={type.value}>
              {type.displayValue}
            </option>
          ))}
        </select>
        <h4>Please Select Your Dishes</h4>
        <select
          onChange={(event) => {
            let selectingDish = dishes?.find((dish) => dish.id === parseInt(event.currentTarget.value));
            if (selectingDish) setSelectedDishes([...selectedDishes, selectingDish]);
          }}
          className="form-select mb-3"
          size={5}
          aria-label="Size 2 select example"
        >
          {dishes?.map((dish) => (
            <option value={dish.id} key={dish.id}>
              {dish.dishName}
            </option>
          ))}
        </select>
        <div className="hstack gap-3">
          <p className="p-2 font-weight-bold">Total Bill Value Is {total} Rs</p>
          <button type="submit" className="btn btn-success mb-2 p-2 ms-auto" disabled={selectedDishes.length === 0}>
            Complete Order
          </button>
        </div>
        <div className="overflow = true">
          <table id="dtDynamicVerticalScrollExample" className="table table-striped table-bordered table-sm" cellSpacing={0} width="100%">
            <thead>
              <tr>
                <th scope="col">Dish Name</th>
                <th scope="col">Dish Type</th>
                <th scope="col">Price</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {selectedDishes.map((dish) => (
                <tr>
                  <td>{dish.dishName}</td>
                  <td>{dish.dishType}</td>
                  <td>{dish.price}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => {
                        const index = selectedDishes.findIndex((dishItem) => dishItem.id === dish.id);
                        const filtered = [...selectedDishes];
                        filtered.splice(index, 1);
                        setSelectedDishes(filtered);
                      }}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </form>
  );
}
