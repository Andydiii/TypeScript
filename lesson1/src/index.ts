function calculateTax(income: number, taxYear: number): number {
    if (taxYear < 2000) {
        return income * 10;
    } else {
        return 1.3;
    }
}