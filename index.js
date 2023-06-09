function multiplyNumbers(a, b, callback) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      callback("Invalid arguments. Please provide numbers."); 
    } else {
      const result = a * b;
      callback(null, result); 
    }
  }
  
  function handleResult(error, result) {
    if (error) {
      console.error("An error occurred:", error);
    } else {
      console.log("Result:", result);
    }
  }
  
  multiplyNumbers(5, 2, handleResult);
  //callback

  setTimeout(()=>{
    console.log("1");
    setTimeout(()=>{
        console.log("2");
        setTimeout(()=>{
            console.log("3");
            setTimeout(()=>{
                console.log("4");
                setTimeout(()=>{
                    console.log("5");
                    setTimeout(()=>{
                        console.log("6")
                        setTimeout(()=>{
                            console.log("7")
                        },7000);
                    },6000);
                },5000);
            },4000);
        },3000);
    },2000);
},1000);
//callback hell

function printNumberWithDelay(number, delay) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(number);
        resolve();
      }, delay);
    });
  }
  
  function printNumbersWithDelays() {
    let delay = 1000; 
  
    for (let i = 1; i <= 7; i++) {
      printNumberWithDelay(i, delay);
      delay += 1000;
    }
  }
  
  printNumbersWithDelays();
  //3

  function processPromise(arg) {
    return new Promise((resolve, reject) => {
      if (arg === "yes") {
        resolve("Promise Resolved");
      } else {
        reject(new Error("Promise Rejected"));
      }
    });
  }
  
  // Example usage:
  processPromise("yes")
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      console.error(error);
    });
  
  processPromise()
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      console.error(error);
    });
    //4

    function divideNumbers_(a, b, successCallback, errorCallback) {
        if (b === 0) {
          errorCallback("Division by zero error.");
        } else {
          const result = a / b;
          successCallback(result);
        }
      }
      
      function handleSuccess(result) {
        console.log("Result:", result);
      }
      
      function handleError(error) {
        console.error("An error occurred:", error);
      }
      
      divideNumbers_(10, 5, handleSuccess, handleError);
      divideNumbers_(8, 0, handleSuccess, handleError);
      //5

      function divideNumbers(a, b) {
        return new Promise((resolve, reject) => {
          if (b === 0) {
            reject("Division by zero error."); 
          } else {
            const result = a / b;
            resolve(result); 
          }
        });
      }
      divideNumbers(10, 5)
        .then(result => console.log(result))
        .catch(error => console.error(error));
        //7

        function divideNumber(a, b) {
            return new Promise((resolve, reject) => {
              if (b === 0) {
                reject("Division by zero error."); 
              } else {
                const result = a / b;
                resolve(result); 
              }
            });
          }
          
          async function performDivision() {
            try {
              const result = await divideNumber(10, 5); 
              console.log(result);
            } catch (error) {
              console.error(error);
            }
          }
          performDivision();
          //8

          function multiplyNumbers(a, b) {
            return new Promise((resolve, reject) => {
              if (typeof a !== 'number' || typeof b !== 'number') {
                reject("Invalid arguments. Please provide numbers."); 
              } else {
                const result = a * b;
                resolve(result);
              }
            });
          }
          
          const promise1 = multiplyNumbers(5, 2);
          const promise2 = multiplyNumbers(3, 4);
          const promise3 = multiplyNumbers(7, 1);
          
          Promise.all([promise1, promise2, promise3])
            .then(results => {
              console.log("All promises resolved:");
              results.forEach(result => console.log(result));
            })
            .catch(error => {
              console.error("An error occurred:", error);
            });//9