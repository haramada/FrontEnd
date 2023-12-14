import useFamousDish from "../../hooks/useFamousDish";

export default function FamousReportComponent() {
  const { data: mainDishes } = useFamousDish("main");

  const { data: sideDishes } = useFamousDish("side");

  return (
    <>
      <h3>Famous Dishes Report</h3>
      <h1> ' '</h1>

      {mainDishes && (
        <>
          <h4>
            Most Famous Main Dish Is [{mainDishes.dishName} {mainDishes.price} Rs]{" "}
          </h4>
          <h4>
            Most Famous Main Side Dish Is [{sideDishes?.dishName} {sideDishes?.price} Rs]{" "}
          </h4>
        </>
      )}
    </>
  );
}
