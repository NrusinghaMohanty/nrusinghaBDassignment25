import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
let PORT = 3000;

let stocks = [
  {
    id: 1,
    name: "reliance industries",
    price: 2500,
    growth: 3.5,
    industry: "finance",
    exchange: "nse",
  },
  {
    id: 2,
    name: "hdfc bank",
    price: 1800,
    growth: 4.2,
    industry: "finance",
    exchange: "bse",
  },
  {
    id: 3,
    name: "icici bank",
    price: 1600,
    growth: 5.1,
    industry: "finance",
    exchange: "nse",
  },
  {
    id: 4,
    name: "tata consultancy services",
    price: 3200,
    growth: 2.9,
    industry: "finance",
    exchange: "bse",
    price: 1900,
  },
  {
    id: 5,
    name: "infosys",
    price: 2900,
    growth: 3.8,
    industry: "finance",
    exchange: "nse",
  },
  {
    id: 6,
    name: "dr. reddy's laboratories",
    price: 2100,
    growth: 4.7,
    industry: "pharma",
    exchange: "bse",
  },
  {
    id: 7,
    name: "sun pharmaceutical",
    price: 2300,
    growth: 3.2,
    industry: "pharma",
    exchange: "nse",
  },
  {
    id: 8,
    name: "cipla",
    growth: 2.6,
    price: 2100,
    exchange: "bse",
    industry: "pharma",
  },
  {
    id: 9,
    name: "ntpc",
    price: 1200,
    growth: 4.1,
    industry: "power",
    exchange: "nse",
  },
  {
    id: 10,
    name: "power grid corporation",
    price: 1500,
    growth: 3.4,
    industry: "power",
    exchange: "bse",
  },
  {
    id: 11,
    name: "adani power",
    price: 2200,
    growth: 5.3,
    industry: "power",
    exchange: "nse",
  },
  {
    id: 12,
    name: "lupin",
    price: 2000,
    growth: 4.5,
    industry: "pharma",
    exchange: "bse",
  },
  {
    id: 13,
    name: "axis bank",
    price: 1750,
    growth: 2.8,
    industry: "finance",
    exchange: "nse",
  },
  {
    id: 14,
    name: "state bank of india",
    price: 1450,
    growth: 3.6,
    industry: "finance",
    exchange: "bse",
  },
  {
    id: 15,
    name: "bajaj finance",
    price: 2650,
    growth: -2.9,
    industry: "finance",
    exchange: "nse",
  },
  {
    id: 16,
    name: "dr. reddy's laboratories",
    price: 1950,
    growth: 4.3,
    industry: "pharma",
    exchange: "bse",
  },
  {
    id: 17,
    name: "biocon",
    price: 1850,
    growth: 3.9,
    industry: "pharma",
    exchange: "nse",
  },
  {
    id: 18,
    name: "torrent power",
    price: 1600,
    growth: 2.4,
    industry: "power",
    exchange: "bse",
  },
  {
    id: 19,
    name: "tata power",
    price: 1750,
    growth: 4.0,
    industry: "power",
    exchange: "nse",
  },
  {
    id: 20,
    name: "jsw energy",
    price: 1450,
    growth: 3.1,
    industry: "power",
    exchange: "bse",
  },
];



// Exercise 1
const sortByPricing = (value1, value2,pricing) => {
  return pricing === "low-to-high" ? value1.price - value2.price : value2.price - value1.price
}

app.get('/stocks/sort/pricing',(req, res) => {
  let pricing = req.query.pricing
  let sortedStocks = stocks.slice()
  sortedStocks.sort((value1,value2) => sortByPricing(value1,value2,pricing))
  res.json({ stocks: sortedStocks})
})


// Exercise 2
const sortByGrowth = (value1, value2,growth) => {
  return growth === "low-to-high" ? value1.growth - value2.growth : value2.growth - value1.growth
}

app.get('/stocks/sort/growth',(req, res) => {
  let growth = req.query.growth
  let sortedStocks = stocks.slice()
  sortedStocks.sort((value1,value2) => sortByGrowth(value1,value2,growth))
  res.json({ stocks: sortedStocks})
})


// Exercise 3
const filterByExchange = (value, exchange) => {
  return value.exchange.toLowerCase() === exchange.toLowerCase()
}

app.get('/stocks/filter/exchange',(req, res) => {
  let exchange = req.query.exchange
  let exchangeType = stocks.filter((value)=> filterByExchange (value,exchange))
  res.json({ stocks: exchangeType })
})


// Exercise 4
const filterByIndustry = (value, industry) => {
  return value.industry.toLowerCase() === industry.toLowerCase()
}

app.get('/stocks/filter/industry',(req, res) => {
  let industry = req.query.industry
  let industryType = stocks.filter((value)=> filterByIndustry (value,industry))
  res.json({ stocks: industryType })
})


// Exercise 5
app.get('/stocks',(req, res) => {
  res.json(stocks)
})


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
