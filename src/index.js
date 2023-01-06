module.exports = function reverse(n) {
    let str = String(Math.abs(n));
    const rev = [];
    for (let i = str.length - 1; i >= 0; i--) {
        rev.push(str[i]);
    }
    return Number(rev.join(""));
};
// console.log(reverse(-291));
