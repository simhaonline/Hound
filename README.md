
## Project Description

“Hound” facilitates online private selling and auctions for property online through a web application. Sellers are users who wish to advertise their property to sell. They will provide property details like address, number of bedrooms, bathrooms, garage, and other amenities in addition to photos on sales notices that are aggregated on a dashboard and map view. Sellers can set the starting and closing dates of their offers as well as declare a reserve price on their properties. Buyers are users who wish to acquire property and have access to the dashboard and map listing available properties. They can filter properties based on location, number of bedrooms, bathrooms, amenities, and price. If a buyer finds a property they would like to buy, they can submit an application for purchase via the web application. If a buyer finds a property, they would like to attend an auction, they can register as a bidder and begin participating in the auction. To guarantee the intent to buy and financial integrity of buyers, a collateral fee is taken from buyer’s balances (linked through crypto wallets, PayPal, or other banking services) to attend an auction or submit a purchase contract. This collateral is a portion of the initial deposit and will be refunded if the buyer is unsuccessful in an auction or has their application for purchase rejected. 
Auctions operate as normal, with bidders only being able to bid higher than the last bid and the minimum bid price. If a bid is placed within 5 minutes of auction closing, the auction will be extended by 2 minutes to allow other bidders fairness to participate further. During an auction, the seller can view bid history while bidders can view the current bid price and previous bid price. Once the auction is over, the seller will be sent a bidding history report and information regarding the highest bidder. The application will provide recommendations for conveyors and automate exchange of contracts at this point.
The platform also provides recommendations to buyers based on their search history, user behaviour, and preferences to facilitate their house hunting.







## Requirements

You need the following before you can start developing:
- Docker: https://www.docker.com/products/docker-desktop
- Docker-compose : https://docs.docker.com/compose/install/
- Go : https://golang.org/
- node (npm) :  https://nodejs.org/en/



## How to run this project

To run this project, at the root of the repository simply run:

```
docker-compose up -d

```

This will trigger a postgres database, a chat server and the frontend running on your localhost on port 80. This frontend wont reflect any current changes in your code for that you need to do the following.

For development try running your react app by accessing the folder js-client and running:

```
npm start
```
Now you can access your react app in port 3000.

Now, there is one last thing you need to do, that is run the graphql server that is currently used for authentification.This server will contain all the backend logic in the future.

From the root directory of the repository do the following:

```
cd ./graphql_server/server 
go run main.go

```

You should now be ready to go and continue building !.



## Accessing the database (optional)


Note: If you are familiar with relational databases you can access the postgres database by doing:

```
docker exec -it postgres bash
psql -U postgres
# you are now inside the db try a sql query:
select * from users;
# try looking at the tables
\d
# try looking at some properties
select * from house;
```


