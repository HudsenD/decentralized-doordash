# Decentralized Doordash Website

This is a mock food ordering website that allows users to interact with the doordash
payments smart contract I made and deployed to goerli test network. Users can make an order,
choose the delivery driver tip, and see the status of their past orders. I used nextJS,
moralis, and The Graph to build this project. NextJS allows me to make a smooth,
interactive website. I used moralis to connect users to my site and to call functions on the
contract. Finally, The Graph allows me to index events triggered by calling functions on the
contract, only display orders made by the connected user, as well as keeping track of order
status.

Future Features I'd like to implement include:

-   Add more events to keep better track of order status
-   Eth price API that charges correct eth amount equal to usd at the time of ordering
-   Ability to pay with erc20 stablecoins like USDC

## Backend

Here is the code for the smart contract that connects to this project:
https://github.com/HudsenD/Trustless-Doordash-Payments

## Technologies

Project is made with:

-   Moralis-v1/React-Moralis
-   NextJS
-   The Graph

## Demo

https://decentralized-doordash.vercel.app/

## License

[MIT](https://choosealicense.com/licenses/mit/)
