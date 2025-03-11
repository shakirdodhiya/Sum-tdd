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
      let delimiter_length = 1;

      // In case of custom length of delimiter
      if(numbers.includes('//[')){
        // Get index of first '['
        const delimiter_start_index = numbers.indexOf('[') + 1;

        // Get substring from 'delimiter_start_index'
        const string_after_first_bracket = numbers.substr(delimiter_start_index);

        // Get index of last ']'
        const delimiter_end_index = string_after_first_bracket.indexOf(']');

        // Get delimiter from string
        delimiter = numbers.substr(delimiter_start_index, delimiter_end_index);

        // Set delimiter length
        // Add +1 to length as string have ']' after delimiter
        delimiter_length = delimiter.length + 1
      }

      // Get remaining string after delimiter
      numbers = numbers.substr(numbers.indexOf(delimiter) + delimiter_length)
    }
    let numbers_arr = numbers.split(delimiter);
    numbers_arr.forEach((num_value) => {
      // Convert string value to integer
      const number = parseInt(num_value.trim(), 10);
      
      // Ignore value if greater than 1000
      if(number <= 1000){
        // If number is negative, push to negative_numbers array
        if(number < 0){
          negative_numbers.push(number)
        }
        sum += num_value.includes('\n') ? add(num_value.split('\n').join(',')) : number;
      }
    })

    return negative_numbers.length ? `negative numbers not allowed ${negative_numbers.join(',')}` : sum
  }
}

exports.add = add