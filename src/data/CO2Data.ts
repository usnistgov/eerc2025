// matches to zipcode not state
export const CO2Factors = {
	AK: 128.637551,
	AL: 116.4436196,
	AR: 146.4277744,
	AZ: 103.4298782,
	CA: 64.3577425,
	CO: 120.9257871,
	CT: 117.9582831,
	DC: 126.613503,
	DE: 131.3429625,
	FL: 89.9524643,
	GA: 114.9598676,
	HI: 205.2099915,
	IA: 88.71600431,
	ID: 114.7743986,
	IL: 134.9905194,
	IN: 140.2145629,
	KS: 109.4267091,
	KY: 115.1144251,
	LA: 155.2684633,
	MA: 119.8129731,
	MD: 126.613503,
	ME: 87.32498682,
	MI: 134.2177319,
	MN: 88.22142031,
	MO: 123.645999,
	MS: 145.0676684,
	MT: 115.1144251,
	NC: 116.0417701,
	ND: 89.1796768,
	NE: 90.75616329,
	NH: 127.7572285,
	NJ: 126.8298835,
	NM: 104.5426922,
	NV: 101.6060997,
	NY: 94.99103876,
	OH: 139.5963329,
	OK: 124.387875,
	OR: 114.0016111,
	PA: 133.5067675,
	RI: 117.7419026,
	SC: 117.0309381,
	SD: 93.90913626,
	TN: 113.5688501,
	TX: 96.59843674,
	UT: 115.2689826,
	VA: 121.6367515,
	VT: 64.1104505,
	WA: 87.47954432,
	WI: 116.7527346,
	WV: 140.6164124,
	WY: 121.0803446,
	DistOil: 78.134,
	ResidOil: 79.337,
	NatGas: 56.011,
	LPG: 65.21,
	Coal: 100.249,
};

// social cost of carbon table
// not in same units as BLCC
// $/ton to $/kg?
export const CO2ePrices: {
	startyear: number;
	endyear: number;
	duration: number;
	NONE: { [key: string]: number }; // Corrected index signature
	LOW: { [key: string]: number };
	MEDIUM: { [key: string]: number };
	HIGH: { [key: string]: number };
} = {
	startyear: 2024,
	endyear: 2054,
	duration: 30,
	NONE: {
		"2024": 0,
		"2025": 0,
		"2026": 0,
		"2027": 0,
		"2028": 0,
		"2029": 0,
		"2030": 0,
		"2031": 0,
		"2032": 0,
		"2033": 0,
		"2034": 0,
		"2035": 0,
		"2036": 0,
		"2037": 0,
		"2038": 0,
		"2039": 0,
		"2040": 0,
		"2041": 0,
		"2042": 0,
		"2043": 0,
		"2044": 0,
		"2045": 0,
		"2046": 0,
		"2047": 0,
		"2048": 0,
		"2049": 0,
		"2050": 0,
		"2051": 0,
		"2052": 0,
		"2053": 0,
		"2054": 0,
	},
	LOW: {
		"2024": 0.02,
		"2025": 0.02,
		"2026": 0.021,
		"2027": 0.021,
		"2028": 0.022,
		"2029": 0.022,
		"2030": 0.023,
		"2031": 0.023,
		"2032": 0.024,
		"2033": 0.025,
		"2034": 0.026,
		"2035": 0.026,
		"2036": 0.027,
		"2037": 0.028,
		"2038": 0.028,
		"2039": 0.029,
		"2040": 0.03,
		"2041": 0.031,
		"2042": 0.031,
		"2043": 0.032,
		"2044": 0.033,
		"2045": 0.033,
		"2046": 0.034,
		"2047": 0.035,
		"2048": 0.036,
		"2049": 0.037,
		"2050": 0.038,
		"2051": 0.039,
		"2052": 0.04,
		"2053": 0.041,
		"2054": 0.042,
	},
	MEDIUM: {
		"2024": 0.066,
		"2025": 0.067,
		"2026": 0.068,
		"2027": 0.07,
		"2028": 0.071,
		"2029": 0.073,
		"2030": 0.074,
		"2031": 0.075,
		"2032": 0.077,
		"2033": 0.078,
		"2034": 0.079,
		"2035": 0.08,
		"2036": 0.082,
		"2037": 0.083,
		"2038": 0.084,
		"2039": 0.086,
		"2040": 0.087,
		"2041": 0.089,
		"2042": 0.09,
		"2043": 0.092,
		"2044": 0.093,
		"2045": 0.094,
		"2046": 0.096,
		"2047": 0.097,
		"2048": 0.099,
		"2049": 0.1,
		"2050": 0.102,
		"2051": 0.103,
		"2052": 0.104,
		"2053": 0.106,
		"2054": 0.107,
	},
	HIGH: {
		"2024": 0.198,
		"2025": 0.202,
		"2026": 0.206,
		"2027": 0.211,
		"2028": 0.215,
		"2029": 0.219,
		"2030": 0.224,
		"2031": 0.228,
		"2032": 0.233,
		"2033": 0.237,
		"2034": 0.242,
		"2035": 0.246,
		"2036": 0.251,
		"2037": 0.255,
		"2038": 0.26,
		"2039": 0.264,
		"2040": 0.269,
		"2041": 0.273,
		"2042": 0.277,
		"2043": 0.281,
		"2044": 0.285,
		"2045": 0.289,
		"2046": 0.294,
		"2047": 0.298,
		"2048": 0.302,
		"2049": 0.307,
		"2050": 0.311,
		"2051": 0.315,
		"2052": 0.319,
		"2053": 0.324,
		"2054": 0.328,
	},
};

// probably wont need this
export const CO2FutureEmissions = {
	startyear: 2024,
	endyear: 2054,
	duration: 30,
	AK: {
		"2024": 1,
		"2025": 0.9,
		"2026": 0.8,
		"2027": 0.71,
		"2028": 0.619,
		"2029": 0.609,
		"2030": 0.599,
		"2031": 0.608,
		"2032": 0.618,
		"2033": 0.628,
		"2034": 0.637,
		"2035": 0.647,
		"2036": 0.651,
		"2037": 0.655,
		"2038": 0.658,
		"2039": 0.662,
		"2040": 0.666,
		"2041": 0.657,
		"2042": 0.648,
		"2043": 0.639,
		"2044": 0.63,
		"2045": 0.62,
		"2046": 0.612,
		"2047": 0.604,
		"2048": 0.596,
		"2049": 0.587,
		"2050": 0.579,
		"2051": 0.571,
		"2052": 0.563,
		"2053": 0.555,
		"2054": 0.547,
	},
	AL: {
		"2024": 1,
		"2025": 0.896,
		"2026": 0.792,
		"2027": 0.725,
		"2028": 0.658,
		"2029": 0.757,
		"2030": 0.856,
		"2031": 0.904,
		"2032": 0.951,
		"2033": 0.999,
		"2034": 1.047,
		"2035": 1.095,
		"2036": 1.118,
		"2037": 1.14,
		"2038": 1.162,
		"2039": 1.185,
		"2040": 1.207,
		"2041": 1.181,
		"2042": 1.156,
		"2043": 1.13,
		"2044": 1.104,
		"2045": 1.079,
		"2046": 1.06,
		"2047": 1.042,
		"2048": 1.023,
		"2049": 1.005,
		"2050": 0.987,
		"2051": 0.969,
		"2052": 0.952,
		"2053": 0.935,
		"2054": 0.918,
	},
	AR: {
		"2024": 1,
		"2025": 0.935,
		"2026": 0.87,
		"2027": 0.795,
		"2028": 0.719,
		"2029": 0.696,
		"2030": 0.673,
		"2031": 0.668,
		"2032": 0.664,
		"2033": 0.66,
		"2034": 0.655,
		"2035": 0.651,
		"2036": 0.645,
		"2037": 0.64,
		"2038": 0.634,
		"2039": 0.629,
		"2040": 0.623,
		"2041": 0.605,
		"2042": 0.587,
		"2043": 0.569,
		"2044": 0.552,
		"2045": 0.534,
		"2046": 0.526,
		"2047": 0.517,
		"2048": 0.509,
		"2049": 0.501,
		"2050": 0.493,
		"2051": 0.485,
		"2052": 0.478,
		"2053": 0.47,
		"2054": 0.463,
	},
	AZ: {
		"2024": 1,
		"2025": 0.79,
		"2026": 0.581,
		"2027": 0.488,
		"2028": 0.396,
		"2029": 0.368,
		"2030": 0.34,
		"2031": 0.372,
		"2032": 0.404,
		"2033": 0.435,
		"2034": 0.467,
		"2035": 0.498,
		"2036": 0.528,
		"2037": 0.558,
		"2038": 0.588,
		"2039": 0.618,
		"2040": 0.648,
		"2041": 0.651,
		"2042": 0.654,
		"2043": 0.657,
		"2044": 0.66,
		"2045": 0.663,
		"2046": 0.668,
		"2047": 0.673,
		"2048": 0.678,
		"2049": 0.683,
		"2050": 0.688,
		"2051": 0.693,
		"2052": 0.698,
		"2053": 0.704,
		"2054": 0.709,
	},
	CA: {
		"2024": 1,
		"2025": 0.787,
		"2026": 0.574,
		"2027": 0.439,
		"2028": 0.305,
		"2029": 0.248,
		"2030": 0.192,
		"2031": 0.195,
		"2032": 0.197,
		"2033": 0.2,
		"2034": 0.202,
		"2035": 0.205,
		"2036": 0.184,
		"2037": 0.163,
		"2038": 0.142,
		"2039": 0.121,
		"2040": 0.1,
		"2041": 0.088,
		"2042": 0.077,
		"2043": 0.065,
		"2044": 0.053,
		"2045": 0.041,
		"2046": 0.033,
		"2047": 0.024,
		"2048": 0.016,
		"2049": 0.008,
		"2050": 0,
		"2051": 0,
		"2052": 0,
		"2053": 0,
		"2054": 0,
	},
	CO: {
		"2024": 1,
		"2025": 0.893,
		"2026": 0.785,
		"2027": 0.663,
		"2028": 0.54,
		"2029": 0.458,
		"2030": 0.377,
		"2031": 0.37,
		"2032": 0.363,
		"2033": 0.356,
		"2034": 0.349,
		"2035": 0.342,
		"2036": 0.348,
		"2037": 0.354,
		"2038": 0.36,
		"2039": 0.365,
		"2040": 0.371,
		"2041": 0.369,
		"2042": 0.367,
		"2043": 0.365,
		"2044": 0.363,
		"2045": 0.361,
		"2046": 0.368,
		"2047": 0.375,
		"2048": 0.381,
		"2049": 0.388,
		"2050": 0.395,
		"2051": 0.402,
		"2052": 0.41,
		"2053": 0.417,
		"2054": 0.425,
	},
	CT: {
		"2024": 1,
		"2025": 0.956,
		"2026": 0.913,
		"2027": 0.874,
		"2028": 0.836,
		"2029": 0.83,
		"2030": 0.824,
		"2031": 0.826,
		"2032": 0.829,
		"2033": 0.832,
		"2034": 0.835,
		"2035": 0.838,
		"2036": 0.833,
		"2037": 0.829,
		"2038": 0.824,
		"2039": 0.82,
		"2040": 0.816,
		"2041": 0.806,
		"2042": 0.797,
		"2043": 0.788,
		"2044": 0.778,
		"2045": 0.769,
		"2046": 0.76,
		"2047": 0.75,
		"2048": 0.741,
		"2049": 0.731,
		"2050": 0.722,
		"2051": 0.713,
		"2052": 0.704,
		"2053": 0.695,
		"2054": 0.686,
	},
	DC: {
		"2024": 1,
		"2025": 0.924,
		"2026": 0.847,
		"2027": 0.753,
		"2028": 0.659,
		"2029": 0.643,
		"2030": 0.626,
		"2031": 0.629,
		"2032": 0.632,
		"2033": 0.635,
		"2034": 0.637,
		"2035": 0.64,
		"2036": 0.645,
		"2037": 0.65,
		"2038": 0.655,
		"2039": 0.66,
		"2040": 0.665,
		"2041": 0.666,
		"2042": 0.667,
		"2043": 0.669,
		"2044": 0.67,
		"2045": 0.671,
		"2046": 0.67,
		"2047": 0.668,
		"2048": 0.667,
		"2049": 0.666,
		"2050": 0.665,
		"2051": 0.664,
		"2052": 0.663,
		"2053": 0.662,
		"2054": 0.661,
	},
	DE: {
		"2024": 1,
		"2025": 0.955,
		"2026": 0.91,
		"2027": 0.852,
		"2028": 0.794,
		"2029": 0.82,
		"2030": 0.846,
		"2031": 0.862,
		"2032": 0.878,
		"2033": 0.894,
		"2034": 0.911,
		"2035": 0.927,
		"2036": 0.941,
		"2037": 0.955,
		"2038": 0.968,
		"2039": 0.982,
		"2040": 0.996,
		"2041": 0.995,
		"2042": 0.994,
		"2043": 0.992,
		"2044": 0.991,
		"2045": 0.99,
		"2046": 0.985,
		"2047": 0.98,
		"2048": 0.976,
		"2049": 0.971,
		"2050": 0.966,
		"2051": 0.961,
		"2052": 0.957,
		"2053": 0.952,
		"2054": 0.947,
	},
	FL: {
		"2024": 1,
		"2025": 0.897,
		"2026": 0.795,
		"2027": 0.702,
		"2028": 0.608,
		"2029": 0.652,
		"2030": 0.695,
		"2031": 0.73,
		"2032": 0.765,
		"2033": 0.8,
		"2034": 0.835,
		"2035": 0.869,
		"2036": 0.904,
		"2037": 0.938,
		"2038": 0.973,
		"2039": 1.007,
		"2040": 1.042,
		"2041": 1.069,
		"2042": 1.096,
		"2043": 1.124,
		"2044": 1.151,
		"2045": 1.178,
		"2046": 1.188,
		"2047": 1.198,
		"2048": 1.208,
		"2049": 1.218,
		"2050": 1.228,
		"2051": 1.238,
		"2052": 1.248,
		"2053": 1.258,
		"2054": 1.269,
	},
	GA: {
		"2024": 1,
		"2025": 0.895,
		"2026": 0.791,
		"2027": 0.725,
		"2028": 0.659,
		"2029": 0.76,
		"2030": 0.862,
		"2031": 0.911,
		"2032": 0.96,
		"2033": 1.008,
		"2034": 1.057,
		"2035": 1.106,
		"2036": 1.129,
		"2037": 1.151,
		"2038": 1.174,
		"2039": 1.197,
		"2040": 1.219,
		"2041": 1.193,
		"2042": 1.166,
		"2043": 1.14,
		"2044": 1.113,
		"2045": 1.087,
		"2046": 1.068,
		"2047": 1.049,
		"2048": 1.031,
		"2049": 1.012,
		"2050": 0.993,
		"2051": 0.975,
		"2052": 0.957,
		"2053": 0.94,
		"2054": 0.923,
	},
	HI: {
		"2024": 1,
		"2025": 0.9,
		"2026": 0.8,
		"2027": 0.71,
		"2028": 0.619,
		"2029": 0.609,
		"2030": 0.599,
		"2031": 0.608,
		"2032": 0.618,
		"2033": 0.628,
		"2034": 0.637,
		"2035": 0.647,
		"2036": 0.651,
		"2037": 0.655,
		"2038": 0.658,
		"2039": 0.662,
		"2040": 0.666,
		"2041": 0.657,
		"2042": 0.648,
		"2043": 0.639,
		"2044": 0.63,
		"2045": 0.62,
		"2046": 0.612,
		"2047": 0.604,
		"2048": 0.596,
		"2049": 0.587,
		"2050": 0.579,
		"2051": 0.571,
		"2052": 0.563,
		"2053": 0.555,
		"2054": 0.547,
	},
	IA: {
		"2024": 1,
		"2025": 0.797,
		"2026": 0.593,
		"2027": 0.482,
		"2028": 0.37,
		"2029": 0.406,
		"2030": 0.442,
		"2031": 0.467,
		"2032": 0.492,
		"2033": 0.518,
		"2034": 0.543,
		"2035": 0.568,
		"2036": 0.586,
		"2037": 0.605,
		"2038": 0.623,
		"2039": 0.641,
		"2040": 0.659,
		"2041": 0.663,
		"2042": 0.667,
		"2043": 0.671,
		"2044": 0.675,
		"2045": 0.679,
		"2046": 0.683,
		"2047": 0.686,
		"2048": 0.689,
		"2049": 0.692,
		"2050": 0.695,
		"2051": 0.698,
		"2052": 0.701,
		"2053": 0.705,
		"2054": 0.708,
	},
	ID: {
		"2024": 1,
		"2025": 0.862,
		"2026": 0.724,
		"2027": 0.613,
		"2028": 0.502,
		"2029": 0.461,
		"2030": 0.42,
		"2031": 0.443,
		"2032": 0.466,
		"2033": 0.488,
		"2034": 0.511,
		"2035": 0.534,
		"2036": 0.556,
		"2037": 0.579,
		"2038": 0.601,
		"2039": 0.624,
		"2040": 0.646,
		"2041": 0.644,
		"2042": 0.641,
		"2043": 0.639,
		"2044": 0.636,
		"2045": 0.633,
		"2046": 0.64,
		"2047": 0.646,
		"2048": 0.652,
		"2049": 0.658,
		"2050": 0.664,
		"2051": 0.67,
		"2052": 0.676,
		"2053": 0.683,
		"2054": 0.689,
	},
	IL: {
		"2024": 1,
		"2025": 0.93,
		"2026": 0.86,
		"2027": 0.773,
		"2028": 0.687,
		"2029": 0.666,
		"2030": 0.645,
		"2031": 0.654,
		"2032": 0.663,
		"2033": 0.672,
		"2034": 0.682,
		"2035": 0.691,
		"2036": 0.67,
		"2037": 0.65,
		"2038": 0.63,
		"2039": 0.61,
		"2040": 0.589,
		"2041": 0.544,
		"2042": 0.499,
		"2043": 0.454,
		"2044": 0.409,
		"2045": 0.363,
		"2046": 0.322,
		"2047": 0.281,
		"2048": 0.24,
		"2049": 0.199,
		"2050": 0.158,
		"2051": 0.133,
		"2052": 0.111,
		"2053": 0.093,
		"2054": 0.078,
	},
	IN: {
		"2024": 1,
		"2025": 0.976,
		"2026": 0.951,
		"2027": 0.903,
		"2028": 0.855,
		"2029": 0.852,
		"2030": 0.849,
		"2031": 0.853,
		"2032": 0.858,
		"2033": 0.862,
		"2034": 0.867,
		"2035": 0.871,
		"2036": 0.878,
		"2037": 0.885,
		"2038": 0.891,
		"2039": 0.898,
		"2040": 0.905,
		"2041": 0.904,
		"2042": 0.903,
		"2043": 0.901,
		"2044": 0.9,
		"2045": 0.899,
		"2046": 0.897,
		"2047": 0.894,
		"2048": 0.892,
		"2049": 0.89,
		"2050": 0.887,
		"2051": 0.885,
		"2052": 0.883,
		"2053": 0.881,
		"2054": 0.878,
	},
	KS: {
		"2024": 1,
		"2025": 0.811,
		"2026": 0.621,
		"2027": 0.453,
		"2028": 0.284,
		"2029": 0.295,
		"2030": 0.306,
		"2031": 0.328,
		"2032": 0.349,
		"2033": 0.371,
		"2034": 0.393,
		"2035": 0.414,
		"2036": 0.433,
		"2037": 0.452,
		"2038": 0.47,
		"2039": 0.489,
		"2040": 0.508,
		"2041": 0.516,
		"2042": 0.524,
		"2043": 0.532,
		"2044": 0.54,
		"2045": 0.549,
		"2046": 0.553,
		"2047": 0.556,
		"2048": 0.56,
		"2049": 0.564,
		"2050": 0.568,
		"2051": 0.572,
		"2052": 0.576,
		"2053": 0.581,
		"2054": 0.585,
	},
	KY: {
		"2024": 1,
		"2025": 0.988,
		"2026": 0.977,
		"2027": 0.983,
		"2028": 0.989,
		"2029": 1.073,
		"2030": 1.157,
		"2031": 1.183,
		"2032": 1.209,
		"2033": 1.236,
		"2034": 1.262,
		"2035": 1.288,
		"2036": 1.286,
		"2037": 1.283,
		"2038": 1.281,
		"2039": 1.279,
		"2040": 1.277,
		"2041": 1.261,
		"2042": 1.244,
		"2043": 1.228,
		"2044": 1.212,
		"2045": 1.195,
		"2046": 1.177,
		"2047": 1.159,
		"2048": 1.141,
		"2049": 1.123,
		"2050": 1.105,
		"2051": 1.087,
		"2052": 1.07,
		"2053": 1.053,
		"2054": 1.037,
	},
	LA: {
		"2024": 1,
		"2025": 0.961,
		"2026": 0.923,
		"2027": 0.863,
		"2028": 0.804,
		"2029": 0.795,
		"2030": 0.786,
		"2031": 0.776,
		"2032": 0.765,
		"2033": 0.755,
		"2034": 0.744,
		"2035": 0.734,
		"2036": 0.721,
		"2037": 0.707,
		"2038": 0.694,
		"2039": 0.681,
		"2040": 0.668,
		"2041": 0.642,
		"2042": 0.615,
		"2043": 0.589,
		"2044": 0.563,
		"2045": 0.537,
		"2046": 0.527,
		"2047": 0.516,
		"2048": 0.506,
		"2049": 0.495,
		"2050": 0.485,
		"2051": 0.475,
		"2052": 0.465,
		"2053": 0.456,
		"2054": 0.446,
	},
	MA: {
		"2024": 1,
		"2025": 0.929,
		"2026": 0.858,
		"2027": 0.782,
		"2028": 0.706,
		"2029": 0.648,
		"2030": 0.591,
		"2031": 0.575,
		"2032": 0.558,
		"2033": 0.542,
		"2034": 0.526,
		"2035": 0.509,
		"2036": 0.499,
		"2037": 0.488,
		"2038": 0.477,
		"2039": 0.467,
		"2040": 0.456,
		"2041": 0.444,
		"2042": 0.431,
		"2043": 0.419,
		"2044": 0.406,
		"2045": 0.393,
		"2046": 0.388,
		"2047": 0.382,
		"2048": 0.376,
		"2049": 0.37,
		"2050": 0.365,
		"2051": 0.359,
		"2052": 0.354,
		"2053": 0.348,
		"2054": 0.343,
	},
	MD: {
		"2024": 1,
		"2025": 0.924,
		"2026": 0.847,
		"2027": 0.753,
		"2028": 0.659,
		"2029": 0.643,
		"2030": 0.626,
		"2031": 0.629,
		"2032": 0.632,
		"2033": 0.635,
		"2034": 0.637,
		"2035": 0.64,
		"2036": 0.645,
		"2037": 0.65,
		"2038": 0.655,
		"2039": 0.66,
		"2040": 0.665,
		"2041": 0.666,
		"2042": 0.667,
		"2043": 0.669,
		"2044": 0.67,
		"2045": 0.671,
		"2046": 0.67,
		"2047": 0.668,
		"2048": 0.667,
		"2049": 0.666,
		"2050": 0.665,
		"2051": 0.664,
		"2052": 0.663,
		"2053": 0.662,
		"2054": 0.661,
	},
	ME: {
		"2024": 1,
		"2025": 0.916,
		"2026": 0.833,
		"2027": 0.744,
		"2028": 0.655,
		"2029": 0.617,
		"2030": 0.579,
		"2031": 0.573,
		"2032": 0.568,
		"2033": 0.563,
		"2034": 0.558,
		"2035": 0.552,
		"2036": 0.557,
		"2037": 0.562,
		"2038": 0.568,
		"2039": 0.573,
		"2040": 0.578,
		"2041": 0.581,
		"2042": 0.585,
		"2043": 0.589,
		"2044": 0.592,
		"2045": 0.596,
		"2046": 0.598,
		"2047": 0.601,
		"2048": 0.604,
		"2049": 0.607,
		"2050": 0.609,
		"2051": 0.612,
		"2052": 0.615,
		"2053": 0.617,
		"2054": 0.62,
	},
	MI: {
		"2024": 1,
		"2025": 0.985,
		"2026": 0.97,
		"2027": 0.963,
		"2028": 0.956,
		"2029": 0.955,
		"2030": 0.954,
		"2031": 0.961,
		"2032": 0.968,
		"2033": 0.975,
		"2034": 0.982,
		"2035": 0.989,
		"2036": 0.991,
		"2037": 0.992,
		"2038": 0.993,
		"2039": 0.995,
		"2040": 0.996,
		"2041": 0.995,
		"2042": 0.993,
		"2043": 0.992,
		"2044": 0.991,
		"2045": 0.99,
		"2046": 0.983,
		"2047": 0.976,
		"2048": 0.969,
		"2049": 0.963,
		"2050": 0.956,
		"2051": 0.949,
		"2052": 0.943,
		"2053": 0.936,
		"2054": 0.929,
	},
	MN: {
		"2024": 1,
		"2025": 0.787,
		"2026": 0.574,
		"2027": 0.449,
		"2028": 0.325,
		"2029": 0.354,
		"2030": 0.384,
		"2031": 0.404,
		"2032": 0.424,
		"2033": 0.444,
		"2034": 0.464,
		"2035": 0.484,
		"2036": 0.497,
		"2037": 0.51,
		"2038": 0.523,
		"2039": 0.536,
		"2040": 0.549,
		"2041": 0.549,
		"2042": 0.549,
		"2043": 0.549,
		"2044": 0.549,
		"2045": 0.549,
		"2046": 0.55,
		"2047": 0.552,
		"2048": 0.553,
		"2049": 0.554,
		"2050": 0.556,
		"2051": 0.557,
		"2052": 0.559,
		"2053": 0.56,
		"2054": 0.561,
	},
	MO: {
		"2024": 1,
		"2025": 0.86,
		"2026": 0.72,
		"2027": 0.597,
		"2028": 0.473,
		"2029": 0.446,
		"2030": 0.419,
		"2031": 0.439,
		"2032": 0.459,
		"2033": 0.48,
		"2034": 0.5,
		"2035": 0.52,
		"2036": 0.524,
		"2037": 0.528,
		"2038": 0.531,
		"2039": 0.535,
		"2040": 0.539,
		"2041": 0.541,
		"2042": 0.543,
		"2043": 0.545,
		"2044": 0.547,
		"2045": 0.55,
		"2046": 0.538,
		"2047": 0.527,
		"2048": 0.516,
		"2049": 0.505,
		"2050": 0.494,
		"2051": 0.484,
		"2052": 0.474,
		"2053": 0.463,
		"2054": 0.454,
	},
	MS: {
		"2024": 1,
		"2025": 0.966,
		"2026": 0.933,
		"2027": 0.887,
		"2028": 0.841,
		"2029": 0.851,
		"2030": 0.86,
		"2031": 0.857,
		"2032": 0.854,
		"2033": 0.85,
		"2034": 0.847,
		"2035": 0.844,
		"2036": 0.832,
		"2037": 0.821,
		"2038": 0.81,
		"2039": 0.799,
		"2040": 0.787,
		"2041": 0.763,
		"2042": 0.738,
		"2043": 0.714,
		"2044": 0.689,
		"2045": 0.665,
		"2046": 0.653,
		"2047": 0.641,
		"2048": 0.629,
		"2049": 0.616,
		"2050": 0.604,
		"2051": 0.593,
		"2052": 0.581,
		"2053": 0.57,
		"2054": 0.559,
	},
	MT: {
		"2024": 1,
		"2025": 0.864,
		"2026": 0.727,
		"2027": 0.618,
		"2028": 0.509,
		"2029": 0.469,
		"2030": 0.429,
		"2031": 0.451,
		"2032": 0.473,
		"2033": 0.495,
		"2034": 0.517,
		"2035": 0.539,
		"2036": 0.561,
		"2037": 0.583,
		"2038": 0.605,
		"2039": 0.627,
		"2040": 0.649,
		"2041": 0.646,
		"2042": 0.644,
		"2043": 0.641,
		"2044": 0.638,
		"2045": 0.636,
		"2046": 0.641,
		"2047": 0.647,
		"2048": 0.653,
		"2049": 0.659,
		"2050": 0.664,
		"2051": 0.67,
		"2052": 0.676,
		"2053": 0.682,
		"2054": 0.688,
	},
	NC: {
		"2024": 1,
		"2025": 0.866,
		"2026": 0.733,
		"2027": 0.63,
		"2028": 0.526,
		"2029": 0.504,
		"2030": 0.482,
		"2031": 0.466,
		"2032": 0.451,
		"2033": 0.436,
		"2034": 0.421,
		"2035": 0.406,
		"2036": 0.384,
		"2037": 0.362,
		"2038": 0.34,
		"2039": 0.317,
		"2040": 0.295,
		"2041": 0.264,
		"2042": 0.233,
		"2043": 0.202,
		"2044": 0.17,
		"2045": 0.139,
		"2046": 0.124,
		"2047": 0.109,
		"2048": 0.094,
		"2049": 0.079,
		"2050": 0.064,
		"2051": 0.054,
		"2052": 0.046,
		"2053": 0.039,
		"2054": 0.033,
	},
	ND: {
		"2024": 1,
		"2025": 0.796,
		"2026": 0.592,
		"2027": 0.481,
		"2028": 0.37,
		"2029": 0.406,
		"2030": 0.441,
		"2031": 0.467,
		"2032": 0.492,
		"2033": 0.517,
		"2034": 0.543,
		"2035": 0.568,
		"2036": 0.586,
		"2037": 0.604,
		"2038": 0.622,
		"2039": 0.64,
		"2040": 0.659,
		"2041": 0.663,
		"2042": 0.667,
		"2043": 0.671,
		"2044": 0.675,
		"2045": 0.68,
		"2046": 0.683,
		"2047": 0.686,
		"2048": 0.689,
		"2049": 0.692,
		"2050": 0.695,
		"2051": 0.698,
		"2052": 0.701,
		"2053": 0.704,
		"2054": 0.707,
	},
	NE: {
		"2024": 1,
		"2025": 0.806,
		"2026": 0.612,
		"2027": 0.502,
		"2028": 0.391,
		"2029": 0.418,
		"2030": 0.444,
		"2031": 0.467,
		"2032": 0.49,
		"2033": 0.513,
		"2034": 0.536,
		"2035": 0.559,
		"2036": 0.576,
		"2037": 0.594,
		"2038": 0.612,
		"2039": 0.629,
		"2040": 0.647,
		"2041": 0.651,
		"2042": 0.656,
		"2043": 0.66,
		"2044": 0.665,
		"2045": 0.669,
		"2046": 0.673,
		"2047": 0.677,
		"2048": 0.68,
		"2049": 0.684,
		"2050": 0.688,
		"2051": 0.692,
		"2052": 0.696,
		"2053": 0.7,
		"2054": 0.704,
	},
	NH: {
		"2024": 1,
		"2025": 0.97,
		"2026": 0.94,
		"2027": 0.937,
		"2028": 0.934,
		"2029": 0.943,
		"2030": 0.952,
		"2031": 0.954,
		"2032": 0.957,
		"2033": 0.959,
		"2034": 0.962,
		"2035": 0.964,
		"2036": 0.951,
		"2037": 0.937,
		"2038": 0.923,
		"2039": 0.909,
		"2040": 0.895,
		"2041": 0.872,
		"2042": 0.848,
		"2043": 0.825,
		"2044": 0.801,
		"2045": 0.778,
		"2046": 0.765,
		"2047": 0.752,
		"2048": 0.738,
		"2049": 0.725,
		"2050": 0.712,
		"2051": 0.7,
		"2052": 0.688,
		"2053": 0.675,
		"2054": 0.664,
	},
	NJ: {
		"2024": 1,
		"2025": 0.939,
		"2026": 0.878,
		"2027": 0.79,
		"2028": 0.702,
		"2029": 0.699,
		"2030": 0.695,
		"2031": 0.697,
		"2032": 0.7,
		"2033": 0.702,
		"2034": 0.704,
		"2035": 0.707,
		"2036": 0.716,
		"2037": 0.726,
		"2038": 0.736,
		"2039": 0.746,
		"2040": 0.756,
		"2041": 0.758,
		"2042": 0.761,
		"2043": 0.763,
		"2044": 0.766,
		"2045": 0.768,
		"2046": 0.768,
		"2047": 0.769,
		"2048": 0.769,
		"2049": 0.769,
		"2050": 0.769,
		"2051": 0.769,
		"2052": 0.769,
		"2053": 0.769,
		"2054": 0.77,
	},
	NM: {
		"2024": 1,
		"2025": 0.817,
		"2026": 0.633,
		"2027": 0.517,
		"2028": 0.401,
		"2029": 0.32,
		"2030": 0.238,
		"2031": 0.249,
		"2032": 0.26,
		"2033": 0.271,
		"2034": 0.282,
		"2035": 0.293,
		"2036": 0.296,
		"2037": 0.298,
		"2038": 0.301,
		"2039": 0.303,
		"2040": 0.306,
		"2041": 0.284,
		"2042": 0.262,
		"2043": 0.24,
		"2044": 0.218,
		"2045": 0.196,
		"2046": 0.18,
		"2047": 0.164,
		"2048": 0.149,
		"2049": 0.133,
		"2050": 0.117,
		"2051": 0.105,
		"2052": 0.094,
		"2053": 0.085,
		"2054": 0.076,
	},
	NV: {
		"2024": 1,
		"2025": 0.832,
		"2026": 0.665,
		"2027": 0.553,
		"2028": 0.441,
		"2029": 0.374,
		"2030": 0.307,
		"2031": 0.326,
		"2032": 0.346,
		"2033": 0.366,
		"2034": 0.386,
		"2035": 0.406,
		"2036": 0.425,
		"2037": 0.444,
		"2038": 0.464,
		"2039": 0.483,
		"2040": 0.503,
		"2041": 0.505,
		"2042": 0.507,
		"2043": 0.509,
		"2044": 0.51,
		"2045": 0.512,
		"2046": 0.515,
		"2047": 0.518,
		"2048": 0.521,
		"2049": 0.524,
		"2050": 0.527,
		"2051": 0.53,
		"2052": 0.533,
		"2053": 0.536,
		"2054": 0.539,
	},
	NY: {
		"2024": 1,
		"2025": 0.933,
		"2026": 0.867,
		"2027": 0.718,
		"2028": 0.568,
		"2029": 0.45,
		"2030": 0.332,
		"2031": 0.286,
		"2032": 0.24,
		"2033": 0.194,
		"2034": 0.148,
		"2035": 0.102,
		"2036": 0.087,
		"2037": 0.073,
		"2038": 0.058,
		"2039": 0.044,
		"2040": 0.029,
		"2041": 0.023,
		"2042": 0.018,
		"2043": 0.012,
		"2044": 0.006,
		"2045": 0,
		"2046": 0,
		"2047": 0,
		"2048": 0,
		"2049": 0,
		"2050": 0,
		"2051": 0,
		"2052": 0,
		"2053": 0,
		"2054": 0,
	},
	OH: {
		"2024": 1,
		"2025": 0.977,
		"2026": 0.953,
		"2027": 0.906,
		"2028": 0.858,
		"2029": 0.856,
		"2030": 0.853,
		"2031": 0.858,
		"2032": 0.862,
		"2033": 0.867,
		"2034": 0.871,
		"2035": 0.876,
		"2036": 0.883,
		"2037": 0.89,
		"2038": 0.896,
		"2039": 0.903,
		"2040": 0.91,
		"2041": 0.909,
		"2042": 0.908,
		"2043": 0.906,
		"2044": 0.905,
		"2045": 0.904,
		"2046": 0.902,
		"2047": 0.899,
		"2048": 0.897,
		"2049": 0.895,
		"2050": 0.892,
		"2051": 0.89,
		"2052": 0.888,
		"2053": 0.886,
		"2054": 0.883,
	},
	OK: {
		"2024": 1,
		"2025": 0.852,
		"2026": 0.704,
		"2027": 0.575,
		"2028": 0.446,
		"2029": 0.376,
		"2030": 0.307,
		"2031": 0.321,
		"2032": 0.336,
		"2033": 0.35,
		"2034": 0.365,
		"2035": 0.379,
		"2036": 0.398,
		"2037": 0.417,
		"2038": 0.436,
		"2039": 0.455,
		"2040": 0.474,
		"2041": 0.483,
		"2042": 0.491,
		"2043": 0.5,
		"2044": 0.508,
		"2045": 0.517,
		"2046": 0.517,
		"2047": 0.516,
		"2048": 0.516,
		"2049": 0.516,
		"2050": 0.515,
		"2051": 0.515,
		"2052": 0.515,
		"2053": 0.515,
		"2054": 0.514,
	},
	OR: {
		"2024": 1,
		"2025": 0.864,
		"2026": 0.727,
		"2027": 0.605,
		"2028": 0.482,
		"2029": 0.35,
		"2030": 0.219,
		"2031": 0.202,
		"2032": 0.185,
		"2033": 0.169,
		"2034": 0.152,
		"2035": 0.136,
		"2036": 0.119,
		"2037": 0.101,
		"2038": 0.084,
		"2039": 0.067,
		"2040": 0.049,
		"2041": 0.039,
		"2042": 0.03,
		"2043": 0.02,
		"2044": 0.01,
		"2045": 0,
		"2046": 0,
		"2047": 0,
		"2048": 0,
		"2049": 0,
		"2050": 0,
		"2051": 0,
		"2052": 0,
		"2053": 0,
		"2054": 0,
	},
	PA: {
		"2024": 1,
		"2025": 0.96,
		"2026": 0.919,
		"2027": 0.865,
		"2028": 0.81,
		"2029": 0.83,
		"2030": 0.85,
		"2031": 0.864,
		"2032": 0.878,
		"2033": 0.893,
		"2034": 0.907,
		"2035": 0.921,
		"2036": 0.934,
		"2037": 0.947,
		"2038": 0.961,
		"2039": 0.974,
		"2040": 0.987,
		"2041": 0.987,
		"2042": 0.986,
		"2043": 0.986,
		"2044": 0.985,
		"2045": 0.985,
		"2046": 0.981,
		"2047": 0.978,
		"2048": 0.974,
		"2049": 0.971,
		"2050": 0.967,
		"2051": 0.964,
		"2052": 0.96,
		"2053": 0.957,
		"2054": 0.953,
	},
	RI: {
		"2024": 1,
		"2025": 0.911,
		"2026": 0.823,
		"2027": 0.718,
		"2028": 0.612,
		"2029": 0.48,
		"2030": 0.348,
		"2031": 0.308,
		"2032": 0.268,
		"2033": 0.228,
		"2034": 0.188,
		"2035": 0.148,
		"2036": 0.122,
		"2037": 0.095,
		"2038": 0.069,
		"2039": 0.042,
		"2040": 0.016,
		"2041": 0.016,
		"2042": 0.016,
		"2043": 0.016,
		"2044": 0.016,
		"2045": 0.016,
		"2046": 0.016,
		"2047": 0.016,
		"2048": 0.016,
		"2049": 0.016,
		"2050": 0.017,
		"2051": 0.017,
		"2052": 0.017,
		"2053": 0.017,
		"2054": 0.017,
	},
	SC: {
		"2024": 1,
		"2025": 0.874,
		"2026": 0.749,
		"2027": 0.674,
		"2028": 0.6,
		"2029": 0.623,
		"2030": 0.645,
		"2031": 0.675,
		"2032": 0.705,
		"2033": 0.735,
		"2034": 0.765,
		"2035": 0.795,
		"2036": 0.824,
		"2037": 0.853,
		"2038": 0.882,
		"2039": 0.911,
		"2040": 0.94,
		"2041": 0.951,
		"2042": 0.962,
		"2043": 0.973,
		"2044": 0.984,
		"2045": 0.996,
		"2046": 0.995,
		"2047": 0.995,
		"2048": 0.994,
		"2049": 0.994,
		"2050": 0.993,
		"2051": 0.993,
		"2052": 0.992,
		"2053": 0.992,
		"2054": 0.991,
	},
	SD: {
		"2024": 1,
		"2025": 0.816,
		"2026": 0.633,
		"2027": 0.521,
		"2028": 0.409,
		"2029": 0.428,
		"2030": 0.447,
		"2031": 0.468,
		"2032": 0.49,
		"2033": 0.511,
		"2034": 0.533,
		"2035": 0.555,
		"2036": 0.573,
		"2037": 0.591,
		"2038": 0.609,
		"2039": 0.628,
		"2040": 0.646,
		"2041": 0.649,
		"2042": 0.653,
		"2043": 0.656,
		"2044": 0.66,
		"2045": 0.663,
		"2046": 0.667,
		"2047": 0.672,
		"2048": 0.676,
		"2049": 0.681,
		"2050": 0.685,
		"2051": 0.689,
		"2052": 0.694,
		"2053": 0.699,
		"2054": 0.703,
	},
	TN: {
		"2024": 1,
		"2025": 0.989,
		"2026": 0.977,
		"2027": 0.988,
		"2028": 0.999,
		"2029": 1.09,
		"2030": 1.182,
		"2031": 1.209,
		"2032": 1.237,
		"2033": 1.265,
		"2034": 1.293,
		"2035": 1.32,
		"2036": 1.317,
		"2037": 1.314,
		"2038": 1.311,
		"2039": 1.307,
		"2040": 1.304,
		"2041": 1.286,
		"2042": 1.269,
		"2043": 1.251,
		"2044": 1.234,
		"2045": 1.216,
		"2046": 1.197,
		"2047": 1.177,
		"2048": 1.158,
		"2049": 1.138,
		"2050": 1.119,
		"2051": 1.1,
		"2052": 1.082,
		"2053": 1.064,
		"2054": 1.046,
	},
	TX: {
		"2024": 1,
		"2025": 0.835,
		"2026": 0.67,
		"2027": 0.492,
		"2028": 0.314,
		"2029": 0.26,
		"2030": 0.207,
		"2031": 0.224,
		"2032": 0.241,
		"2033": 0.258,
		"2034": 0.276,
		"2035": 0.293,
		"2036": 0.307,
		"2037": 0.321,
		"2038": 0.336,
		"2039": 0.35,
		"2040": 0.364,
		"2041": 0.358,
		"2042": 0.351,
		"2043": 0.344,
		"2044": 0.337,
		"2045": 0.33,
		"2046": 0.316,
		"2047": 0.301,
		"2048": 0.287,
		"2049": 0.273,
		"2050": 0.258,
		"2051": 0.246,
		"2052": 0.234,
		"2053": 0.222,
		"2054": 0.211,
	},
	UT: {
		"2024": 1,
		"2025": 0.864,
		"2026": 0.727,
		"2027": 0.617,
		"2028": 0.507,
		"2029": 0.466,
		"2030": 0.425,
		"2031": 0.447,
		"2032": 0.469,
		"2033": 0.492,
		"2034": 0.514,
		"2035": 0.536,
		"2036": 0.559,
		"2037": 0.581,
		"2038": 0.604,
		"2039": 0.626,
		"2040": 0.649,
		"2041": 0.646,
		"2042": 0.644,
		"2043": 0.641,
		"2044": 0.638,
		"2045": 0.636,
		"2046": 0.642,
		"2047": 0.647,
		"2048": 0.653,
		"2049": 0.659,
		"2050": 0.665,
		"2051": 0.671,
		"2052": 0.678,
		"2053": 0.684,
		"2054": 0.69,
	},
	VA: {
		"2024": 1,
		"2025": 0.886,
		"2026": 0.772,
		"2027": 0.69,
		"2028": 0.608,
		"2029": 0.611,
		"2030": 0.615,
		"2031": 0.606,
		"2032": 0.598,
		"2033": 0.59,
		"2034": 0.581,
		"2035": 0.573,
		"2036": 0.537,
		"2037": 0.502,
		"2038": 0.466,
		"2039": 0.431,
		"2040": 0.395,
		"2041": 0.35,
		"2042": 0.306,
		"2043": 0.261,
		"2044": 0.216,
		"2045": 0.171,
		"2046": 0.144,
		"2047": 0.116,
		"2048": 0.089,
		"2049": 0.061,
		"2050": 0.034,
		"2051": 0.024,
		"2052": 0.017,
		"2053": 0.012,
		"2054": 0.008,
	},
	VT: {
		"2024": 1,
		"2025": 0.95,
		"2026": 0.899,
		"2027": 0.852,
		"2028": 0.804,
		"2029": 0.779,
		"2030": 0.754,
		"2031": 0.746,
		"2032": 0.737,
		"2033": 0.729,
		"2034": 0.721,
		"2035": 0.713,
		"2036": 0.712,
		"2037": 0.712,
		"2038": 0.711,
		"2039": 0.71,
		"2040": 0.709,
		"2041": 0.714,
		"2042": 0.718,
		"2043": 0.723,
		"2044": 0.727,
		"2045": 0.732,
		"2046": 0.735,
		"2047": 0.738,
		"2048": 0.742,
		"2049": 0.745,
		"2050": 0.748,
		"2051": 0.752,
		"2052": 0.755,
		"2053": 0.758,
		"2054": 0.762,
	},
	WA: {
		"2024": 1,
		"2025": 0.844,
		"2026": 0.688,
		"2027": 0.526,
		"2028": 0.364,
		"2029": 0.237,
		"2030": 0.11,
		"2031": 0.088,
		"2032": 0.066,
		"2033": 0.044,
		"2034": 0.022,
		"2035": 0,
		"2036": 0,
		"2037": 0,
		"2038": 0,
		"2039": 0,
		"2040": 0,
		"2041": 0,
		"2042": 0,
		"2043": 0,
		"2044": 0,
		"2045": 0,
		"2046": 0,
		"2047": 0,
		"2048": 0,
		"2049": 0,
		"2050": 0,
		"2051": 0,
		"2052": 0,
		"2053": 0,
		"2054": 0,
	},
	WI: {
		"2024": 1,
		"2025": 0.918,
		"2026": 0.837,
		"2027": 0.774,
		"2028": 0.711,
		"2029": 0.707,
		"2030": 0.704,
		"2031": 0.712,
		"2032": 0.721,
		"2033": 0.729,
		"2034": 0.737,
		"2035": 0.746,
		"2036": 0.753,
		"2037": 0.76,
		"2038": 0.767,
		"2039": 0.774,
		"2040": 0.781,
		"2041": 0.786,
		"2042": 0.791,
		"2043": 0.796,
		"2044": 0.802,
		"2045": 0.807,
		"2046": 0.807,
		"2047": 0.808,
		"2048": 0.808,
		"2049": 0.809,
		"2050": 0.809,
		"2051": 0.81,
		"2052": 0.81,
		"2053": 0.81,
		"2054": 0.811,
	},
	WV: {
		"2024": 1,
		"2025": 0.976,
		"2026": 0.951,
		"2027": 0.903,
		"2028": 0.854,
		"2029": 0.851,
		"2030": 0.849,
		"2031": 0.853,
		"2032": 0.858,
		"2033": 0.863,
		"2034": 0.868,
		"2035": 0.872,
		"2036": 0.879,
		"2037": 0.886,
		"2038": 0.893,
		"2039": 0.899,
		"2040": 0.906,
		"2041": 0.905,
		"2042": 0.903,
		"2043": 0.902,
		"2044": 0.901,
		"2045": 0.899,
		"2046": 0.897,
		"2047": 0.894,
		"2048": 0.892,
		"2049": 0.889,
		"2050": 0.887,
		"2051": 0.884,
		"2052": 0.882,
		"2053": 0.879,
		"2054": 0.877,
	},
	WY: {
		"2024": 1,
		"2025": 0.882,
		"2026": 0.764,
		"2027": 0.651,
		"2028": 0.537,
		"2029": 0.489,
		"2030": 0.441,
		"2031": 0.454,
		"2032": 0.466,
		"2033": 0.479,
		"2034": 0.491,
		"2035": 0.503,
		"2036": 0.523,
		"2037": 0.543,
		"2038": 0.563,
		"2039": 0.583,
		"2040": 0.603,
		"2041": 0.601,
		"2042": 0.6,
		"2043": 0.599,
		"2044": 0.598,
		"2045": 0.597,
		"2046": 0.605,
		"2047": 0.613,
		"2048": 0.621,
		"2049": 0.629,
		"2050": 0.637,
		"2051": 0.645,
		"2052": 0.653,
		"2053": 0.662,
		"2054": 0.67,
	},
};
