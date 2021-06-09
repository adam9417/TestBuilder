var getFirstNDigits = function(cardNumber, n) {
  let prePrefix = cardNumber.slice(0, n);
  var prefix = Number(prePrefix);
  return prefix;
};

var detectNetwork = function(cardNumber) {
  var prefixOne = getFirstNDigits(cardNumber, 1);
  var prefixTwo = getFirstNDigits(cardNumber, 2);
  var prefixThree = getFirstNDigits(cardNumber, 3);
  var prefixFour = getFirstNDigits(cardNumber, 4);
  var prefixFive = getFirstNDigits(cardNumber, 5);
  var prefixSix = getFirstNDigits(cardNumber, 6);

  if ((prefixTwo === 38 || prefixTwo === 39) && cardNumber.length === 14) {
    return 'Diner\'s Club';
  } else if ((prefixTwo === 34 || prefixTwo === 37) && cardNumber.length === 15) {
    return 'American Express';
  } else if ((prefixFour === 4903 || prefixFour === 4905 || prefixFour === 4911 || prefixFour === 4936 || prefixSix === 564182 || prefixSix === 633110 || prefixFour === 6333 || prefixFour === 6759) && (cardNumber.length === 16 || cardNumber.length === 18 || cardNumber.length === 19)) {
    return 'Switch';
  } else if ((prefixTwo >= 51 && prefixTwo <= 55) && (cardNumber.length === 16)) {
    return 'MasterCard';
  } else if ((prefixFour === 6011 || (prefixThree >= 644 && prefixThree <= 649) || prefixTwo === 65) && (cardNumber.length === 16 || cardNumber.length === 19)) {
    return 'Discover';
  } else if ((prefixFour === 5018 || prefixFour === 5020 || prefixFour === 5038 || prefixFour === 6304) && (cardNumber.length >= 12 && cardNumber.length <= 19)) {
    return 'Maestro';
  } else if ((prefixSix >= 622126 && prefixSix <= 622925) || (prefixFour >= 6282 && prefixFour <= 6288) || (prefixThree >= 624 && prefixThree <= 626) && (cardNumber.length >= 16 && cardNumber.length <= 19)) {
    return 'China UnionPay';
  } else if ((prefixOne === 4) && (cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19)) {
    return 'Visa';
  }
};