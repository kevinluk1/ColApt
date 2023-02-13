# CS361 Apartment Cost of Living Project by City with LA CoL Microservice - Kevin Luk
Allows the user to look up monthly apartment rent by major city -- data is pulled from 3rd party exteral API (https://zylalabs.com/api-marketplace/data/cities+cost+of+living+and+average+prices+api/226)

## Getting Started
1. Download and install Node.js (https://nodejs.org/en/download/)
2. Clone the ColApt Repo
3. Run > NPM install to install project dependencies 

## Running the app

This program is built using React on the front-end and Express on the back-end for routing.
You will need two terminal instances to spin up the services. One for the front-end and one for the back-end.
If you are using just the microservice, you simply need to spin up the Express back-end.

This can be accomplished by navigating to
> expressAPI

and then running
> node controller.js


### How to REQUEST data

To request data from the microservice, you will need to first make sure that the back-end is running.
Ensure controller.js is listening to port 3002. 

The only endpoint on this app is:

> /laCol

This endpoint will respond with a .JSON of various cost of living datapoints in Los Angeles, specifically. 

### How to RECIEVE data

Data is sent in the standard .JSON array format. For example:

{
"city": "los-angeles-ca"
},
{
"Version": 1,
"Country Name": "United States",
"City Name": "Los Angeles Ca",
"Cost of Living Month Total": "1619.62",
"Currency": "USD",
"Note": "Total Cost of living in Los Angeles for two person with average consumption for one month will be 1619.62 USD, no rent price included",
"Status": 200,
"Success": true,
"Restaurants prices": [
{
"Cost": "Meal in Inexpensive Restaurant",
"Value": "20.00"
},
{
"Cost": "Meal for 2 People, Mid-range Restaurant, Three-course",
"Value": "75.00"
},
{
"Cost": "McMeal at McDonalds or Alternative Combo Meal",
"Value": "9.00"
},
{
"Cost": "Domestic Beer, 0.5 liter Draught",
"Value": "6.50"
},
{
"Cost": "Imported Beer, 0.33 liter Bottle",
"Value": "8.00"
},
{
"Cost": "Cappuccino",
"Value": "4.69"
},
{
"Cost": "Coca-Cola, 0.33 liter Bottle",
"Value": "2.20"
}
],
"Markets prices": [
{
"Cost": "Water, 0.33 liter Bottle",
"Value": "2.04"
},
{
"Cost": "Milk, Regular,1 liter",
"Value": "1.03"
},
{
"Cost": "Loaf of Fresh White Bread, 0.5 kg",
"Value": "3.70"
},
{
"Cost": "White Rice, 1 kg",
"Value": "5.90"
},
{
"Cost": "Eggs, 12 pack",
"Value": "3.43"
},
{
"Cost": "Local Cheese, 1 kg",
"Value": "12.31"
},
{
"Cost": "Chicken Breasts, Boneless and Skinless, 1 kg",
"Value": "12.61"
},
{
"Cost": "Beef Round or Equivalent Back Leg Red Meat, 1 kg",
"Value": "14.54"
},
{
"Cost": "Apples, 1 kg",
"Value": "3.95"
},
{
"Cost": "Banana, 1 kg",
"Value": "1.85"
},
{
"Cost": "Oranges, 1 kg",
"Value": "2.97"
},
{
"Cost": "Tomato, 1 kg",
"Value": "4.22"
},
{
"Cost": "Potato, 1 kg",
"Value": "2.48"
},
{
"Cost": "Onion, 1 kg",
"Value": "2.14"
},
{
"Cost": "Lettuce, 1 head",
"Value": "1.64"
},
{
"Cost": "Water, 1.5 liter Bottle",
"Value": "2.11"
},
{
"Cost": "Bottle of Wine, Mid-Range Price",
"Value": "15.00"
},
{
"Cost": "Domestic Beer, 0.5 liter Bottle",
"Value": "2.58"
},
{
"Cost": "Imported Beer, 0.33 liter Bottle",
"Value": "2.31"
},
{
"Cost": "Pack of Cigarettes",
"Value": "10.00"
}
],
"Transportation prices": [
{
"Cost": "One-way Ticket, Local Transport",
"Value": "1.75"
},
{
"Cost": "Monthly Pass, Regular Price",
"Value": "100.00"
},
{
"Cost": "Taxi Start, Normal Tariff",
"Value": "2.85"
},
{
"Cost": "Taxi, price for 1 km, Normal Tariff",
"Value": "1.68"
},
{
"Cost": "Taxi, price for 1 hour Waiting, Normal Tariff",
"Value": "29.19"
},
{
"Cost": "Gasoline, 1 liter",
"Value": "0.94"
},
{
"Cost": "Volkswagen Golf 1.4 90 KW Trendline (Or Equivalent New Car)",
"Value": "25,000.00"
}
],
"Utilities Per Month prices": [
{
"Cost": "Basic utilities for 85m2 Apartment including Electricity, Heating or Cooling, Water and Garbage",
"Value": "143.39"
},
{
"Cost": "Prepaid Mobile Tariff Local, price per 1 min, No Discounts or Plans",
"Value": "0.13"
},
{
"Cost": "Internet, 60 Mbps or More, Unlimited Data, Cable/ADSL",
"Value": "66.55"
}
],
"Sports And Leisure prices": [
{
"Cost": "Fitness Club, Monthly Fee for 1 Adult",
"Value": "41.42"
},
{
"Cost": "Tennis Court Rent, 1 Hour on Weekend",
"Value": "9.98"
}
],
"Salaries And Financing prices": [
{
"Cost": "Cinema ticket, 1 Seat",
"Value": "15.00"
},
{
"Cost": "Average Monthly Net Salary, After Tax",
"Value": "4,639.08"
},
{
"Cost": "Mortgage Interest Rate in Percentages for 20 Years Fixed-Rate, Yearly, Fixed-Rate",
"Value": "3.75 %"
}
],
"Childcare prices": [
{
"Cost": "Private Preschool or Kindergarten, Monthly for 1 Child",
"Value": "1,038.23"
},
{
"Cost": "International Primary School, Yearly for 1 Child",
"Value": "21,629.57"
}
],
"Clothing And Shoes prices": [
{
"Cost": "Pair of Jeans in a Chain Store Like George, H&M, Zara, etc.",
"Value": "52.37"
},
{
"Cost": "Summer Dress in a Chain Store Like George, H&M, Zara, etc.",
"Value": "38.14"
},
{
"Cost": "Pair of Running Shoes, Mid-Range Price",
"Value": "77.14"
},
{
"Cost": "Pair of Leather Business Shoes",
"Value": "111.94"
}
],
"Rent Per Month prices": [
{
"Cost": "One bedroom apartment in city centre",
"Value": "2,222.82"
},
{
"Cost": "One bedroom apartment outside of city centre",
"Value": "1,792.31"
},
{
"Cost": "Three bedroom apartment in city centre",
"Value": "4,400.41"
},
{
"Cost": "Three bedroom apartment outside of city centre",
"Value": "3,011.30"
}
],
"Buy Apartment prices": [
{
"Cost": "Price per m2 to Buy Apartment in City Center",
"Value": "8,246.14"
},
{
"Cost": "Price per m2 to Buy Apartment Outside of City Center",
"Value": "5,531.74"
}
]
}





