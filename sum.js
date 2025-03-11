exports.add = (numbers) => {
  if(!Boolean(numbers.trim())){
    return 0;
  }else{
    let sum = 0;
    let numbers_arr = numbers.split(',');
    numbers_arr.forEach((num_value) => {
      sum += parseInt(num_value.trim(), 10)
    })

    return sum
  }
}