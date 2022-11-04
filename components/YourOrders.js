import React from "react"
import { useMoralis } from "react-moralis"
import { useQuery, gql } from "@apollo/client"
import Orders from "./Orders"

const GET_USER_ACTIVE_ORDER = gql`
    query UserOrders($buyer: String!) {
        activeOrders(first: 5, where: { buyer: $buyer }) {
            id
            buyer
            driver
            orderId
        }
    }
`

const YourOrders = () => {
    const { account, isWeb3Enabled } = useMoralis()
    let buyer = account

    const {
        loading,
        error,
        data: userOrders,
    } = useQuery(GET_USER_ACTIVE_ORDER, {
        variables: { buyer },
    })
    // console.log(error || userOrders)

    return (
        <div className="w-full">
            <div className="max-w-[1240px] mx-auto px-2 py-16">
                <div className="text-xl text-gray-700 tracking-widest uppercase font-bold mb-6">Your Orders</div>
                <div className="flex-wrap grid md:grid-cols-2 gap-8">
                    {isWeb3Enabled ? (
                        loading || !userOrders ? (
                            <div>Loading...</div>
                        ) : (
                            userOrders.activeOrders.map((ActiveOrder) => {
                                const { buyer, driver, orderId } = ActiveOrder

                                return (
                                    <div>
                                        <Orders orderId={orderId} buyer={buyer} driver={driver} key={`${orderId}`} />
                                    </div>
                                )
                            })
                        )
                    ) : (
                        <div>Web3 Currently Not Enabled</div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default YourOrders
