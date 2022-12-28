const cosmos ={
  chainId: "my-test-chain",
  chainName: "monkey",
  rpc: "http://127.0.0.1:26657",
  rest: "http://127.0.0.1:1317",
  bip44: {
    coinType: 118,
  },
  bech32Config: {
    bech32PrefixAccAddr: "cosmos",
    bech32PrefixAccPub: "cosmos" + "pub",
    bech32PrefixValAddr: "cosmos" + "valoper",
    bech32PrefixValPub: "cosmos" + "valoperpub",
    bech32PrefixConsAddr: "cosmos" + "valcons",
    bech32PrefixConsPub: "cosmos" + "valconspub",
  },
  currencies: [
    {
      coinDenom: "stake",
      coinMinimalDenom: "stake",
      coinDecimals: 6,
      coinGeckoId: "cosmos",
    },
    {
      coinDenom: "THETA",
      coinMinimalDenom: "theta",
      coinDecimals: 0,
    },
    {
      coinDenom: "LAMBDA",
      coinMinimalDenom: "lambda",
      coinDecimals: 0,
    },
    {
      coinDenom: "RHO",
      coinMinimalDenom: "rho",
      coinDecimals: 0,
    },
    {
      coinDenom: "EPSILON",
      coinMinimalDenom: "epsilon",
      coinDecimals: 0,
    },
  ],
  feeCurrencies: [
    {
      coinDenom: "stake",
      coinMinimalDenom: "stake",
      coinDecimals: 6,
      coinGeckoId: "cosmos",
    },
  ],
  stakeCurrency: {
    coinDenom: "stake",
    coinMinimalDenom: "stake",
    coinDecimals: 6,
    coinGeckoId: "cosmos",
  },
  coinType: 118,
  gasPriceStep: {
    low: 1,
    average: 1,
    high: 1,
  },
  features: ["stargate", "ibc-transfer", "no-legacy-stdTx"],
}

export default cosmos;