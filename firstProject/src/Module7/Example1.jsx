import React from "react";

const Example1 = [
  {
    category: "Breakfast",
    items: [
      { name: "Idli", image: "/images/idli.jpg" },
      { name: "Dosa", image: "/images/dosa.jpg" },
      { name: "Poori", image: "/images/poori.jpg" },
      { name: "Upma", image: "/images/upma.jpg" }
    ]
  },
  {
    category: "Lunch",
    items: [
      { name: "Veg Biryani", image: "/images/biryani.jpg" },
      { name: "Meals", image: "/images/meals.jpg" },
      { name: "Fried Rice", image: "/images/friedrice.jpg" },
      { name: "Paneer Curry", image: "/images/paneer.jpg" }
    ]
  },
  {
    category: "Dinner",
    items: [
      { name: "Chapati", image: "/images/chapati.jpg" },
      { name: "Butter Naan", image: "/images/naan.jpg" },
      { name: "Chicken Curry", image: "/images/chicken.jpg" },
      { name: "Jeera Rice", image: "/images/jeerarice.jpg" }
    ]
  },
  {
    category: "Desserts",
    items: [
      { name: "Gulab Jamun", image: "/images/gulabjamun.jpg" },
      { name: "Ice Cream", image: "/images/icecream.jpg" },
      { name: "Rasgulla", image: "/images/rasgulla.jpg" },
      { name: "Chocolate Cake", image: "/images/cake.jpg" }
    ]
  }
];

function HotelMenu() {
  return (
    <div>
      <h1>Hotel Menu</h1>

      <ul>
        {hotelMenu.map((menu, index) => (
          <li key={index}>
            <h2>{menu.category}</h2>

            <ul>
              {menu.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <img
                    src={item.image}
                    alt={item.name}
                    width="100"
                    height="100"
                  />
                  <p>{item.name}</p>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Example1;