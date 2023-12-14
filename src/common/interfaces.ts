export interface DishType {
  value: string;
  displayValue: string;
}

export interface Dish {
  id: number;
  dishName: string;
  dishType: string;
  price: number;
}
export interface OrderedDish {
  id: number;
}

export interface CompletedOrder {
  mainDishes: OrderedDish[];
  sideDishes: OrderedDish[];
  desserts?: OrderedDish[];
}
