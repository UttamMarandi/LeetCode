// Q. Use RegEx to test password strength in JavaScript?

const checkPasswordStrength = (password) => {
  const regex = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
  );
  if (regex.test(password)) {
    return `This is valid password`;
  } else {
    return `Passwords need to be strong`;
  }
};

console.log(checkPasswordStrength("12@Hsfjspodfpes"));
console.log(checkPasswordStrength("12@Hsfj"));
