/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dayRent = 40;

  if (days >= 7) {
    return days * dayRent - 50;
  } else if (days >= 3) {
    return days * dayRent - 20;
  } else {
    return days * dayRent;
  }
}

calculateRentalCost(5);

module.exports = calculateRentalCost;
