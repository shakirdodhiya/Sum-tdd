const add = (numbers) => {
  if(!Boolean(numbers.trim())){
    return 0;
  }else{
    let sum = 0;
    let negative_numbers = [];

    // Default delimiter ','
    let delimiter = ',';
    
    // If string starts with '//', get delimiter
    if(numbers.startsWith('//')){
      // To get the delimiter
      delimiter = numbers[2];

      // Get remaining string after delimiter
      numbers = numbers.substr(3)
    }
    let numbers_arr = numbers.split(delimiter);
    numbers_arr.forEach((num_value) => {
      // Convert string value to integer
      const number = parseInt(num_value.trim(), 10);
      
      // If number is negative, push to negative_numbers array
      if(number < 0){
        negative_numbers.push(number)
      }
      sum += num_value.includes('\n') ? add(num_value.split('\n').join(',')) : number;
    })

    return negative_numbers.length ? `negative numbers not allowed ${negative_numbers.join(',')}` : sum
  }
}

exports.add = add