import Link from "next/link"
import { Button, ConnectButton } from "web3uikit"
import { useMoralis } from "react-moralis"

const Header = () => {
    const { chainId: chainIdHex } = useMoralis()
    const chainId = parseInt(chainIdHex)
    return (
        <div className="w-full">
            <div className="max-w-[1240px] mx-auto justify-center w-full h-auto border-b-4 border-slate-400">
                <div className="grid md:grid-cols-4 gap-6">
                    <div className="text-2xl font-mono font-bold text-gray-700 mt-3">Decentralized Doordash</div>
                    <Link href={"/"}>
                        <p className="m-4 py-3 text-lg font-bold font-mono text-center text-gray-700 bg-slate-400 rounded-lg cursor-pointer">
                            Home
                        </p>
                    </Link>
                    <Link href={"/orders"}>
                        <p className=" m-4 py-3 text-lg font-bold font-mono text-center text-gray-700 bg-slate-400 rounded-lg cursor-pointer">
                            Orders
                        </p>
                    </Link>

                    <div className="m-4">
                        <ConnectButton moralisAuth={false} />
                        <p className="font-bold text-xs mt-5 text-red-500">
                            {isNaN(chainId) ? "Please Connect!" : chainId != 5 ? "Please Switch to Goerli!" : ""}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
