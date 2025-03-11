const add = (numbers) => {
  if(!Boolean(numbers.trim())){
    return 0;
  }else{
    let sum = 0;

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
      sum += num_value.includes('\n') ? add(num_value.split('\n').join(',')) : parseInt(num_value.trim(), 10)
    })

    return sum
  }
}

exports.add = add