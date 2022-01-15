function getHistory(){
    return  document.getElementById("history-value").innerText;
   
}

// Print History

function PrintHistory(num){
    document.getElementById("history-value").innerText = num;  
}

// function for output the results

function getOutput(){
    return document.getElementById("output-value").innerText;
}

function PrintOutput(num){
    if(num ==''){
        document.getElementById("output-value").innerText = num;
    }
    else{
    document.getElementById("output-value").innerText = getFormating(num);
}
}

// Making a function to get comma seperated values
function getFormating(number){
    if(number == "-"){
        return "";
    }
    let val = Number(number);
    return val.toLocaleString('en');
}

// Function to make string to numbers in Print output functions

function convertNumber(num){
    return Number(num.replace(/,/g,''));
}

// Function for operators on actions

 let operator = document.getElementsByClassName("operators");
 for(let i = 0; i < operator.length;  i++){
      operator[i].addEventListener('click', function(){
          if(this.id == 'clear'){
              PrintHistory("");
              PrintOutput("");
          }
         else if(this.id == "backspace"){
             let output = convertNumber(getOutput()).toString();
              if(output){ // output has a value 
              output = output.substr(0,output.length - 1);
              PrintOutput(output)
              }
          }
          else{
              let output = getOutput();
              let history = getHistory();
              if(output == "" && history != "" ){
                  if(isNaN(history[history.length - 1])){
                      history = history.substr(0, history.length - 1);
                  }
              }
              if(output !="" || history != ""){
                  output =  output == " "? output:convertNumber(output);
                  history = history + output;
                  if(this.id == "="){
                      let result = eval(history);
                      PrintOutput(result);
                      PrintHistory("");
                  }
                  else{
                      history = history + this.id;
                      PrintHistory(history);
                      PrintOutput("");
                  }
              }
          }
      })
 }


// Function for numbers on pressing the number

let number = document.getElementsByClassName("num");
for(let i = 0; i < number.length;  i++){
     number[i].addEventListener('click', function(){
        let output = convertNumber(getOutput());
        if(output != NaN){
            output = output  + this.id;
            PrintOutput(output);
        }
     })
}
