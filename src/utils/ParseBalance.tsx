export const ParseBalance = (balanceStr: string) => {
    if (!balanceStr) return 0;
    const onlyNumberStr = balanceStr.toString().replace(/[₺\s]/g, '');
    const noThousands = onlyNumberStr.replace(/\./g, '');
    const withDot = noThousands.replace(',', '.');
    const num = parseFloat(withDot);
    return isNaN(num) ? 0 : num;
}

