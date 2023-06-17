let bank = [
    {
        company: "Mexdi Industry",
        budget: 100000,
        tax: 13,
        expenses: [1000,4000,2000] 
    },
    {
        company: "Mexr mexlari",
        budget: 300000,
        tax: 20,
        expenses: [10000,2300,14000] 
    },
    {
        company: "Samir samokatlari",
        budget: 250000,
        tax: 10,
        expenses: [10000,2300,14000] 
    },
    {
        company: "Aziz chamoqlari",
        budget: 70000,
        tax: 7,
        expenses: [2000,1000,400] 
    },
    {
        company: "Jafar tursuk maykalar",
        budget: 130000,
        tax: 12,
        expenses: [4000,2000,500] 
    },
    {
        company: "Dilshod idishlari",
        budget: 40000,
        tax: 19,
        expenses: [900,2222,1922] 
    },
    {
        company: "Emin nosfrush",
        budget: 10000,
        tax: 7,
        expenses: [200,100,400] 
    },
]

for (let i = 0; i < bank.length; i++) {
    let company = bank[i];
    let totalExpenses = company.expenses.reduce((sum, expense) => sum + expense, 0);
    let totalExpensesWithTax = totalExpenses * (1 + company.tax / 100);
    company.totalExpensesWithTax = totalExpensesWithTax;
}


let overallTotalExpensesWithTax = bank.reduce((sum, company) => sum + company.totalExpensesWithTax, 0);

console.log(bank);
console.log("итого: " + overallTotalExpensesWithTax);