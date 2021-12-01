var initialPrice = document.querySelector("#initial-price");
var quantityStocks = document.querySelector("#quantity");
var currPrice = document.querySelector("#current-price");
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
  
  
  if (initial > current)
  {
    let loss = (initialPrice.value - currPrice.value) * quantityStocks.value;
  var lossPercentage = (loss / initialPrice.value) * 100;
  
  
    outputVal.textContent = `The loss is ${loss} and loss percentage is ${lossPercentage}%`
  
  }
  else if(current > initial)
  {
     var profit = (currPrice.value - initialPrice.value) * quantityStocks.value;
      var profitPercentage = (profit / initialPrice.value) * 100;
    outputVal.textContent = `The profit is ${profit} and profit  percentage is ${profitPercentage}%`;
  }
  else
  {
    outputVal.textContent = "No pain no gain";
  }
}