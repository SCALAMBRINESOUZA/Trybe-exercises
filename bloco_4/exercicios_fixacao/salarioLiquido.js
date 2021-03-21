let grossSalary = 3000.00;
let taxesInss;
let taxesIr;

if (grossSalary <= 1556.94) {
  taxesInss = grossSalary * 0.08;
} else if (grossSalary <= 2594.92) {
  taxesInss = grossSalary * 0.09;
} else if (grossSalary <= 5189.82) {
  taxesInss = grossSalary * 0.11;
} else {
  taxesInss = 570.88
} 

let baseSalary = grossSalary - taxesInss;

if (baseSalary <= 1903.98) {
  taxesIr = 0;
} else if (baseSalary <= 2826.65) {
  taxesIr = (baseSalary * 0.075) - 142.80;
} else if (baseSalary <= 3751.05) {
  taxesIr = (baseSalary * 0.15) - 354.80;
} else if (baseSalary <= 4664.68) {
  taxesIr = (baseSalary * 0.225) - 636.13;
} else {
  taxesIr = (baseSalary * 0.275) - 869.36;
}
  console.log("Salario: " + (baseSalary - taxesIr));