var initialPrice = document.querySelector(".initial-price");
var quantityStocks = document.querySelector(".quantity");
var currPrice = document.querySelector(".current-price");
var submitBtn = document.querySelector("#calc");
var outputVal = document.querySelector("#output-val");

submitBtn.addEventListener("click", submitHandler);

function submitHandler()
{
  var ip = Number(initialPrice.value);
  var qty = Number(quantityStocks.value);
  var curr = Number(currPrice.value);
  calcProfitAndLoss(ip, qty, curr);
}

function calcProfitAndLoss(initial, quantity, current)
{
  
  var ip = Number(initialPrice.value);
  var qty = Number(quantityStocks.value);
  var curr = Number(currPrice.value);
  
  
  if (initial > current)
  {
    let loss = (ip * qty) - (curr * qty);
    var lossPercentage = ((loss/(ip * qty))*100);
    
    outputVal.textContent = `The loss is ${loss} and loss percentage is ${lossPercentage}%`
  
  }
  else if(current > initial)
  {
    var profit = (curr * qty) - (ip * qty);
    var profitPercentage = ((profit/(ip * qty))*100);
    outputVal.textContent = `The profit is ${profit} and profit  percentage is ${profitPercentage}%`;
  }
  else
  {
    outputVal.textContent = "No pain no gain";
  }
}
