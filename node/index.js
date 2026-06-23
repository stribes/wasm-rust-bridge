// This assumes you have already ran
// `wasm-pack build --target nodejs`
const { add } = require("./pkg");

console.log(add(2, 3));
