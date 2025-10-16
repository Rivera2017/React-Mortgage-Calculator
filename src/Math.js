

export default function calculateMortgage(balance, rate, term) {
  const principal = parseFloat(balance);
  const monthlyRate = parseFloat(rate) / 100 / 12;
  const totalPayments = parseInt(term) * 12;

  const monthly =
    (principal * monthlyRate * Math.pow(1 + monthlyRate, totalPayments)) /
    (Math.pow(1 + monthlyRate, totalPayments) - 1);

  return monthly.toFixed(2); // just return the number
}