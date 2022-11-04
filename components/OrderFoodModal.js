import { React, useState } from "react"
import { Modal, useNotification, Button } from "web3uikit"
import { useWeb3Contract, useMoralis } from "react-moralis"
import { ethers } from "ethers"
import { abi, contractAddresses } from "../constants"

const OrderFoodModal = ({ isVisible, onCancel, onCloseButtonPressed, price, foodName }) => {
    const { chainId: chainIdHex, isWeb3Enabled } = useMoralis()
    const chainId = parseInt(chainIdHex)
    const contractAddress = chainId in contractAddresses ? contractAddresses[chainId][0] : null

    //const orderTotal = ethPrice + tipAmount
    const newPrice = ethers.utils.parseEther("0.001")
    const [tipFinal, setTipFinal] = useState(ethers.utils.parseEther("0"))
    const [orderTotalFinal, setOrderTotalFinal] = useState("0")

    const dispatch = useNotification()

    const { runContractFunction: orderFood } = useWeb3Contract({
        abi: abi,
        contractAddress: "0xdb51728361a1f42ceada27103a4a71b798ea015a",
        functionName: "orderFood",
        params: { tipAmount: tipFinal },
        msgValue: orderTotalFinal,
    })

    function updateOrderTotal(tip) {
        setTipFinal(ethers.utils.parseEther(tip.toString()))
        setOrderTotalFinal(newPrice.toNumber() + ethers.utils.parseEther(tip).toNumber())
    }

    const handleSuccess = async function (tx) {
        onCloseButtonPressed()
        handleNewTransaction()
        await tx.wait(1)
        handleNewNotification(tx)
    }

    const handleNewNotification = function () {
        dispatch({
            type: "info",
            message: "Transaction Complete!",
            title: "Tx Notification",
            position: "topR",
            icon: "bell",
        })
    }

    const handleNewTransaction = function () {
        dispatch({
            type: "info",
            message: "Transaction sent!",
            title: "Tx Notification",
            position: "topR",
            icon: "bell",
        })
    }

    return (
        <Modal
            isVisible={isVisible}
            okText="Place Order"
            onOk={async () =>
                await orderFood({
                    onSuccess: handleSuccess,
                    onError: (error) => console.log(error),
                })
            }
            onCancel={onCancel}
            onCloseButtonPressed={onCloseButtonPressed}
            title="Checkout"
        >
            <div className="font-bold">Select Driver Tip:</div>
            <div className="m-6 grid md:grid-cols-4 gap-8" type="radio" name="buttonGroup">
                <Button text="No Tip" onClick={() => updateOrderTotal("0")} />
                <Button text="0.002 Eth" onClick={() => updateOrderTotal("0.002")} />
                <Button text="0.004 Eth" onClick={() => updateOrderTotal("0.004")} />
                <Button text="0.006 Eth" onClick={() => updateOrderTotal("0.006")} />
            </div>

            <div>Ordering: 1 x {foodName}</div>
            <div className="text-2xl">
                Your Total is: ${price} + Tip of {ethers.utils.formatEther(tipFinal)} ETH
            </div>
        </Modal>
    )
}

export default OrderFoodModal
