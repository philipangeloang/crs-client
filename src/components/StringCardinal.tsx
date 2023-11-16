// This converts numbers to cardinal strings (1st, 2nd, 3rd, etc.)
const StringCardinal = (n: number): string => {
  if (n >= 11 && n <= 13) {
    return n + "th";
  }

  const lastDigit = n % 10;
  switch (lastDigit) {
    case 1:
      return n + "st";
    case 2:
      return n + "nd";
    case 3:
      return n + "rd";
    default:
      return n + "th";
  }
}

export default StringCardinal;