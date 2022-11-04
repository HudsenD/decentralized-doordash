import React from "react"
import { Card } from "web3uikit"

const Orders = ({ orderId, buyer, driver }) => {
    return (
        <div>
            <Card>
                <div className="p-2">
                    <div className="flex flex-col items-end gap-2">
                        <div>Order id: {orderId}</div>
                        <div>Buyer: {buyer}</div>
                        <div>
                            Order Status:
                            {driver == "0x0000000000000000000000000000000000000000"
                                ? " No driver assigned"
                                : ` Order delivered by ${driver}`}
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default Orders
