import Homeproduct from "./Homeproduct";

function Sneakers() {
  return (
    <Homeproduct
      cols={3}
      filters={{
        categories: ["Shoes"],
      }}
    />
  );
}

export default Sneakers;
