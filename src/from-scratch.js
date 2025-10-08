// Basic Variable & Expression Functions
const calculateArea = (width, height) => {
  return width*height
};

const isEven = (number) => {
 return number%2==0
};

const convertToFahrenheit = (celsius) => {
  return (celsius * 9/5) + 32
};

// String & Variable Functions
const createGreeting = (name) => {
 return `hello ${name}`
};

const getInitials = (firstName, lastName) => {
  return `${firstName[0]}.${lastName[1]}`
};

const formatPrice = (price) => {
  return `$${price}.00`
};

// Function Logic Functions
const getLarger = (num1, num2) => {
  return num1>num2?num1:num2
};

const isValidAge = (age) => {
  return age>120 && age>0
};

module.exports = {
  calculateArea,
  isEven,
  convertToFahrenheit,
  createGreeting,
  getInitials,
  formatPrice,
  getLarger,
  isValidAge,
};
