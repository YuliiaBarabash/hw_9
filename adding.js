function addNumber() {
    let totalNumber = 0;
    return function(num) {
      totalNumber += num;
      return totalNumber;
    }
  }
  
  let count = addNumber();
  
  console.log(count(4));
  console.log(count(6));
  console.log(count(35));