import chickFilA from "../public/foodItems/chickFilA.jpg"
import dominosPizza from "../public/foodItems/dominosPizza.jpg"
import FoodItem from "./FoodItem"
import React from "react"

const Foods = () => {
    return (
        <div className="w-full">
            <div className="max-w-[1240px] mx-auto px-2 py-16">
                <p className="text-xl tracking-widest uppercase font-bold text-gray-700 mb-6">Food Available</p>
                <div className="grid md:grid-cols-2 gap-8">
                    <FoodItem foodImg={chickFilA} price="7.99" foodName="Chick Fil A chicken sandwich" />
                    <FoodItem foodImg={dominosPizza} price="15.99" foodName="Domino's pepperoni pizza" />
                </div>
            </div>
        </div>
    )
}

export default Foods
