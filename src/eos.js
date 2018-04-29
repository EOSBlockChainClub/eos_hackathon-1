const Eos = require("eosjs"); // Eos = require('./src')
// const Eos = import("eosjs");

console.log("Eos", Eos);
const keyProvider = [
  "5KWWaZbfYJRmXoSEa1hkZ5mfBnX4YfoAQS1S7t5C3EjEEA8VxSJ"
  // Eos.modules.ecc.seedPrivate("currency")
];

// Optional configuration..
const config = {
  keyProvider: keyProvider, // WIF string or array of keys..
  // httpEndpoint: 'http://127.0.0.1:8888',
  // httpEndpoint: "http://52.178.132.109",
  httpEndpoint: "http://verifund.tk",
  // httpEndpoint: "http://testnet1.eos.io",
  mockTransactions: () => "pass", // or 'fail'
  // transactionHeaders: (expireInSeconds, callback) => {
  //   callback(null /*error*/, headers);
  // },
  expireInSeconds: 60,
  broadcast: true,
  debug: false,
  sign: true
};

const eos = Eos.Localnet(config);
// const options = { broadcast: true };
// eos.transfer(
//   { from: "inita", to: "initb", quantity: "1 EOS", memo: "" },
//   options
// );
// eos.getCurrentBalance()
eos.getBlock(1).then(result => {
  console.log("res", result);
});
console.log("eos", eos);

export default eos;
