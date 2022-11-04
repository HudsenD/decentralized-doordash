//needs to import the order food button
import React from "react"
import Image from "next/image"
import { Button } from "web3uikit"
import { useMoralis } from "react-moralis"
import { useEffect, useState } from "react"
import OrderFoodModal from "./OrderFoodModal"

const FoodItem = ({ foodImg, price, foodName }) => {
    const { isWeb3Enabled } = useMoralis()

    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        if (isWeb3Enabled) {
        }
    }, [isWeb3Enabled])

    const handleOrderClick = () => {
        if (showModal == false) {
            setShowModal(true)
        } else {
            setShowModal(false)
        }
    }

    return (
        <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
            <OrderFoodModal
                isVisible={showModal}
                onCancel={handleOrderClick}
                onCloseButtonPressed={handleOrderClick}
                price={price}
                foodName={foodName}
            />
            <Image className="rounded-xl group-hover:opacity-10" src={foodImg} alt="/" priority />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <h3 className="text-2xl font-bold tracking-wider text-center text-white">{foodName}</h3>
                <p className="pt-2 pb-4 text-center text-white">${price}</p>
                <Button text="Order" onClick={handleOrderClick} />
            </div>
        </div>
    )
}

export default FoodItem
