var btc = require("./coins/btc.js");
var ltc = require("./coins/ltc.js");
var pgn = require("./coins/pgn.js");
var rtm = require("./coins/rtm.js");
var vnb = require("./coins/vnb.js");
var trtm = require("./coins/trtm.js");
var pyrk = require("./coins/pyrk.js");
var tnowp = require("./coins/tnowp.js");

module.exports = {
	BTC: btc,
	LTC: ltc,
	PGN: pgn,
	VNB: vnb,
	RTM: rtm,
	tRTM: trtm,
	PYRK: pyrk,
	TNOWP: tnowp,

	coins: ["BTC", "LTC", "PGN", "VNB", "tVNB", "RTM", "tRTM", "PYRK", "TNOWP"],

	networks: {
		VNB: {
			bitcoinjs: {
				messagePrefix: "VnBC Signed Message:\n",
				bech32: "rc",
				bip32: {
					public: 0x0488b21e,
					private: 0x0488ade4,
				},
				pubKeyHash: 60,
				scriptHash: 122,
				wif: 128,
			},
			name: "VnBC",
			alias: "vnbc",
			pubkeyhash: 60,
			privatekey: 128,
			scripthash: 122,
			xpubkey: 0x0488b21e,
			xprivkey: 0x0488ade4,
			networkMagic: 0x6251665e,
			port: 8333,
			dnsSeeds: ["blockchain.vnbc.vn"],
		},
		tRTM: {
			bitcoinjs: {
				messagePrefix: "\x18VnBC Signed Message:\n",
				bech32: "rc",
				bip32: {
					public: 0x0488b21e,
					private: 0x0488ade4,
				},
				pubKeyHash: 123,
				scriptHash: 19,
				wif: 128,
			},
			name: "VnBC Testnet",
			alias: "vnbc testnet",
			pubkeyhash: 123,
			privatekey: 239,
			scripthash: 19,
			xpubkey: 0x043587cf,
			xprivkey: 0x04358394,
			networkMagic: 0x7472746d,
			port: 10225,
			dnsSeeds: ["blockchain.vnbc.vn"],
			assetSupported: true,
		},
	},
};

