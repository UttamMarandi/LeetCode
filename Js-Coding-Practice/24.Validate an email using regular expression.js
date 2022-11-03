// Write a function to validate an email using regular expression?

const checkEmail = (mail) => {
  const regexExp = /\S+@\S+\.\S+/;
  return regexExp.test(mail);
};

console.log(checkEmail("Uttam"));
console.log(checkEmail("Uttam@23.com"));
