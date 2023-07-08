const totalValue = products => {
    const results = products.reduce((previous, current) => previous + current.price, 0);
    return results;
}
export { totalValue };