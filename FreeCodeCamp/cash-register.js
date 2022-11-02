// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/cash-register

// Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.



// cid is a 2D array listing available currency.

// The checkCashRegister() function should always return an object with a status key and a change key.

// Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

// Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

// Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.


// Currency Unit	Amount
// Penny	$0.01 (PENNY)
// Nickel	$0.05 (NICKEL)
// Dime	$0.1 (DIME)
// Quarter	$0.25 (QUARTER)
// Dollar	$1 (ONE)
// Five Dollars	$5 (FIVE)
// Ten Dollars	$10 (TEN)
// Twenty Dollars	$20 (TWENTY)
// One-hundred Dollars	$100 (ONE HUNDRED)


// [
//     ["PENNY", 1.01],
//     ["NICKEL", 2.05],
//     ["DIME", 3.1],
//     ["QUARTER", 4.25],
//     ["ONE", 90],
//     ["FIVE", 55],
//     ["TEN", 20],
//     ["TWENTY", 60],
//     ["ONE HUNDRED", 100]
//   ]


// my failed attempt
function checkCashRegister(price, cash, cid) {
    let res = {};
    let changeDue = cash*100-price*100;
    let cashInDrawer = cid.reduce((total, change) => total+change[1]*100, 0);
  
    // which state
    if(changeDue < cashInDrawer){
        res['status']='OPEN';    
      }else if(changeDue > cashInDrawer){
        res['status']='INSUFFICIENT_FUNDS';
      }else{
        res['status']='CLOSED';
      }
  
    console.log(cashInDrawer)
  
    let changeResult = []; // store change result
  
    let currencyUnit = {
      'ONE HUNDRED': 100,
      'TWENTY':20,
      'TEN':10,
      'FIVE':5,
      'ONE':1,
      'QUARTER':0.25,
      'DIME':0.1,
      'NICKEL':0.05,
      'PENNY':0.01
    }
    // console.log(cid)
  
    let newCid = cid.map((change)=>{
      change[2]=currencyUnit[change[0]]//insert unit
      // console.log(change)
      return change;
    })
    // console.log(newCid)
  
    // sorted in highest to lowest order, as the value of the change key.
    newCid.sort((a,b)=>b[2]-a[2]);//sort in-place 
    
    
    // update change 
    for(let c of newCid){
      console.log(c[1]*100)
      console.log(changeDue)
      if(c[1]*100>changeDue){
        continue;
      }
      changeResult.push(c[0], (changeDue-c[1]*100)/100);
      changeDue -= c[1];
      
    }
    // store change
    res['change'] = changeResult;
    console.log(res)
    return res;
  }
  
  checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);





  

// reference solution
// javascript is not nice to decimals


function checkCashRegister(price, cash, cid) {
    let changeDue = cash*100-price*100;
    let cashInDrawer = cid.reduce((total, change) => total+change[1]*100, 0);
  
    console.log(cashInDrawer)
  
    // which state
    if(changeDue < cashInDrawer){
        let answer = [];
        // reverse cid to sort
        cid = cid.reverse()
        // console.log(cid) 
        let moneyUnits = {
        'ONE HUNDRED': 10000,
        'TWENTY':2000,
        'TEN':1000,
        'FIVE':500,
        'ONE':100,
        'QUARTER':25,
        'DIME':10,
        'NICKEL':5,
        'PENNY':1
      }
        for(let elem of cid){
          elem[1] = elem[1]*100;
          let holder = [elem[0], 0] // money count of each type of money
          // console.log(holder)
          // object check amount of each type of money
          while(changeDue>=moneyUnits[elem[0]] && elem[1]>0){
            // until find proper unit. also check there is actual that unit in the drawer(amount >0)
            changeDue -= moneyUnits[elem[0]];// subtract from current due
            elem[1] -= moneyUnits[elem[0]]; // decrement from cid too
            // add the amount taken out from drawer to holder
            holder[1] += moneyUnits[elem[0]]/100
            // console.log(holder)
          }
          // filter out zero
          if(holder[1]>0){
            answer.push(holder)
          }
        }
        console.log(answer)
        if(changeDue >0){ // not enough that type of money to pay off
            return {status: "INSUFFICIENT_FUNDS", change: []}
        }
        return {status: "OPEN", change: answer}
      }else if(changeDue > cashInDrawer){
        return {status: "INSUFFICIENT_FUNDS", change: []}
      }else{
        return {status: "CLOSED", change: cid};
      }
  
  
  }
  
  checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);