// web/pages/api/erc721/[id].js

const metadata = {
    1: {
      attributes: [
        {
          trait_type: "Color",
          value: "Baby Blue",
        },
        {
          trait_type: "Mouth",
          value: "Cigarette",
        },
      ],
      description: "Dog with cigarette, baby-blue background",
      image: "https://gateway.pinata.cloud/ipfs/Qmdt3o37YriphaFBzL5hMYL783AkfmRFwwntfq2mWyEpVt?filename=doggy_cig_babyblue%2520-%2520Copy.png",
      name: "Frenly Dog #1",
    },
    2: {
      attributes: [
        {
          trait_type: "Color",
          value: "Baby Blue",
        },
        {
          trait_type: "Mouth",
          value: "Cigarette",
        },
      ],
      description: "Dog with cigarette, baby-blue background",
      image: "https://gateway.pinata.cloud/ipfs/Qmdt3o37YriphaFBzL5hMYL783AkfmRFwwntfq2mWyEpVt?filename=doggy_cig_babyblue.png",
      name: "Frenly Dog #2",
    },
    3: {
      attributes: [
        {
          trait_type: "Color",
          value: "Brown",
        },
        {
          trait_type: "Mouth",
          value: "Cigarette",
        },
      ],
      description: "Dog with cigarette, brown background",
      image: "https://gateway.pinata.cloud/ipfs/QmaXURm3cWg7sfRqAEkHhJK22DHXbq6FophMamUChrRiCq?filename=doggy_cig_brown.png",
      name: "Frenly Dog #3",
    },

    4: {
      attributes: [
        {
          trait_type: "Color",
          value: "Dark Green",
        },
        {
          trait_type: "Mouth",
          value: "Cigarette",
        },
        {
          trait_type: "Collar",
          value: "Mocha",
        },
      ],
      description: "Dog with cigarette, mocha collar, dark green background",
      image: "https://gateway.pinata.cloud/ipfs/QmehrfkgMFjpiAu422bpWjrbcLMQYdrLfJ7CLW1afQeKDA?filename=doggy_cig_darkgreen_collarmocha.png",
      name: "Frenly Dog #4",
    },

    5: {
      attributes: [
        {
          trait_type: "Color",
          value: "Grey",
        },
        {
          trait_type: "Mouth",
          value: "Cigarette",
        },
      ],
      description: "Dog with cigarette, grey background",
      image: "https://gateway.pinata.cloud/ipfs/QmbvVqKSZW2xEouGCriC7p7mVNrsYMqVeieWvDyrEaD5z1?filename=doggy_cig_grey.png",
      name: "Frenly Dog #5",
    },

    6: {
      attributes: [
        {
          trait_type: "Color",
          value: "Light Grey",
        },
        {
          trait_type: "Mouth",
          value: "Cigarette",
        },
      ],
      description: "Dog with cigarette, light grey background",
      image: "https://gateway.pinata.cloud/ipfs/QmaDJNJW8MjpLmT4hYXhee3hVtVn8794YpfE5mQrW3HTmt?filename=doggy_cig_lightgrey.png",
      name: "Frenly Dog #6",
    },

    7: {
      attributes: [
        {
          trait_type: "Color",
          value: "Teal",
        },
        {
          trait_type: "Mouth",
          value: "Cigarette",
        },
      ],
      description: "Dog with cigarette, teal background",
      image: "https://gateway.pinata.cloud/ipfs/QmezppcLteBaQsNbPiKrX3xVVzjdSx79HzdNempQ2DLVzz?filename=doggy_cig_teal.png",
      name: "Frenly Dog #7",
    },

    8: {
      attributes: [
        {
          trait_type: "Color",
          value: "Deep Purple",
        },
        {
          trait_type: "Mouth",
          value: "Cigarette",
        },
        {
          trait_type: "Shades",
          value: "Black",
        },
        {
          trait_type: "Collar",
          value: "Purple",
        },
      ],
      description: "Dog with cigarette, shades, purple collar, deep purple background",
      image: "https://gateway.pinata.cloud/ipfs/QmP5CFmaFbEGX9ReQigCMzbBYezFkfA738p4ZSaFgZRsDp?filename=doggy_cigshades_deeppurple_collarpurple.png",
      name: "Frenly Dog #8",
    },

    9: {
      attributes: [
        {
          trait_type: "Color",
          value: "Deep Red",
        },
        {
          trait_type: "Mouth",
          value: "Cigarette",
        },
        {
          trait_type: "Shades",
          value: "Black",
        },
      ],
      description: "Dog with cigarette, shades, deep red background",
      image: "https://gateway.pinata.cloud/ipfs/QmeMMnv3ubSbhNqoVtHr4d15eQiuu7tfw1UbjmsPj6bbeG?filename=doggy_cigshades_deepred%2520-%2520Copy%2520%25282%2529.png",
      name: "Frenly Dog #9",
    },

    10: {
      attributes: [
        {
          trait_type: "Color",
          value: "Deep Red",
        },
        {
          trait_type: "Mouth",
          value: "Cigarette",
        },
        {
          trait_type: "Shades",
          value: "Black",
        },
      ],
      description: "Dog with cigarette, shades, deep red background",
      image: "https://gateway.pinata.cloud/ipfs/QmeMMnv3ubSbhNqoVtHr4d15eQiuu7tfw1UbjmsPj6bbeG?filename=doggy_cigshades_deepred%2520-%2520Copy%2520%25282%2529.png",
      name: "Frenly Dog #10",
    },

    11: {
      attributes: [
        {
          trait_type: "Color",
          value: "Deep Red",
        },
        {
          trait_type: "Mouth",
          value: "Cigarette",
        },
        {
          trait_type: "Shades",
          value: "Black",
        },
      ],
      description: "Dog with cigarette, shades, deep red background",
      image: "https://gateway.pinata.cloud/ipfs/QmeMMnv3ubSbhNqoVtHr4d15eQiuu7tfw1UbjmsPj6bbeG?filename=doggy_cigshades_deepred%2520-%2520Copy%2520%25282%2529.png",
      name: "Frenly Dog #11",
    },

    12: {
      attributes: [
        {
          trait_type: "Color",
          value: "Deep Red",
        },
        {
          trait_type: "Mouth",
          value: "Cigarette",
        },
        {
          trait_type: "Shades",
          value: "Black",
        },
      ],
      description: "Dog with cigarette, shades, deep red background",
      image: "https://gateway.pinata.cloud/ipfs/QmeMMnv3ubSbhNqoVtHr4d15eQiuu7tfw1UbjmsPj6bbeG?filename=doggy_cigshades_deepred%2520-%2520Copy%2520%25282%2529.png",
      name: "Frenly Dog #12",
    },

    13: {
      attributes: [
        {
          trait_type: "Color",
          value: "Light Grey",
        },
        {
          trait_type: "Mouth",
          value: "Cigarette",
        },
        {
          trait_type: "Shades",
          value: "Black",
        },
      ],
      description: "Dog with cigarette, shades, light grey background",
      image: "https://gateway.pinata.cloud/ipfs/QmWSa3YKZTEqnWaK1b1QreQzrBXSUPakaXGy5QgB8xiFg6?filename=doggy_cigshades_lightgrey.png",
      name: "Frenly Dog #13",
    },

    14: {
      attributes: [
        {
          trait_type: "Color",
          value: "Purple",
        },
        {
          trait_type: "Mouth",
          value: "Cigarette",
        },
        {
          trait_type: "Shades",
          value: "Black",
        },
      ],
      description: "Dog with cigarette, shades, purple background",
      image: "https://gateway.pinata.cloud/ipfs/QmYzsqgxSK8aTmsvVMBARbwWWHPV6VutYvT5Fh47ooYf4U?filename=doggy_cigshades_purple%2520-%2520Copy.png",
      name: "Frenly Dog #14",
    },

    15: {
      attributes: [
        {
          trait_type: "Color",
          value: "Purple",
        },
        {
          trait_type: "Mouth",
          value: "Cigarette",
        },
        {
          trait_type: "Shades",
          value: "Black",
        },
      ],
      description: "Dog with cigarette, shades, purple background",
      image: "https://gateway.pinata.cloud/ipfs/QmYzsqgxSK8aTmsvVMBARbwWWHPV6VutYvT5Fh47ooYf4U?filename=doggy_cigshades_purple%2520-%2520Copy.png",
      name: "Frenly Dog #15",
    },

    16: {
      attributes: [
        {
          trait_type: "Color",
          value: "Deep Space",
        },
        {
          trait_type: "Collar",
          value: "Red",
        },
      ],
      description: "Dog with cigarette, brown background",
      image: "https://gateway.pinata.cloud/ipfs/QmTJirKnc2UjRwPEzEkrTANs2Vi6cP3znkUvG8mXxKSnvy?filename=doggy_collarred_deepspace.png",
      name: "Frenly Dog #16",
    },

    17: {
      attributes: [
        {
          trait_type: "Color",
          value: "Baby Blue",
        },
      ],
      description: "Dog with baby blue background",
      image: "https://gateway.pinata.cloud/ipfs/QmbKi7uB4xpk5ttkpMSbpWMrmUCcEb7Krz4WYMwKJDMiUa?filename=doggy_none_babyblue%2520-%2520Copy.png",
      name: "Frenly Dog #17",
    },

    18: {
      attributes: [
        {
          trait_type: "Color",
          value: "Baby Blue",
        },
      ],
      description: "Dog with baby blue background",
      image: "https://gateway.pinata.cloud/ipfs/QmbKi7uB4xpk5ttkpMSbpWMrmUCcEb7Krz4WYMwKJDMiUa?filename=doggy_none_babyblue%2520-%2520Copy.png",
      name: "Frenly Dog #18",
    },

    19: {
      attributes: [
        {
          trait_type: "Color",
          value: "Blood Red",
        },
      ],
      description: "Dog with blood red background",
      image: "https://gateway.pinata.cloud/ipfs/QmUCvS6SEXde9uaHz2i5dGMKp6Xb2Y7WfaGdRbcbs3hv1Y?filename=doggy_none_bloodred.png",
      name: "Frenly Dog #19",
    },

    20: {
      attributes: [
        {
          trait_type: "Color",
          value: "Blood Red",
        },
        {
          trait_type: "Mouth",
          value: "Pipe",
        },
      ],
      description: "Dog with pipe, blood red background",
      image: "https://gateway.pinata.cloud/ipfs/QmNypEd9ohQUN3L7VwCVazrJ1HkaPRyDQKJHeQq3t17oVK?filename=doggy_none_bloodred_pipe1.png",
      name: "Frenly Dog #20",
    },

    21: {
      attributes: [
        {
          trait_type: "Color",
          value: "Blue",
        },
      ],
      description: "Dog with blue background",
      image: "https://gateway.pinata.cloud/ipfs/QmdkiYA1TVEQDEbVFWKkhNuyMGiAUibnTvgKC7upjeocJu?filename=doggy_none_blue%2520-%2520Copy%2520%25282%2529.png",
      name: "Frenly Dog #21",
    },

    22: {
      attributes: [
        {
          trait_type: "Color",
          value: "Blue",
        },
      ],
      description: "Dog with blue background",
      image: "https://gateway.pinata.cloud/ipfs/QmdkiYA1TVEQDEbVFWKkhNuyMGiAUibnTvgKC7upjeocJu?filename=doggy_none_blue%2520-%2520Copy%2520%25282%2529.png",
      name: "Frenly Dog #22",
    },

    23: {
      attributes: [
        {
          trait_type: "Color",
          value: "Blue",
        },
      ],
      description: "Dog with blue background",
      image: "https://gateway.pinata.cloud/ipfs/QmdkiYA1TVEQDEbVFWKkhNuyMGiAUibnTvgKC7upjeocJu?filename=doggy_none_blue%2520-%2520Copy%2520%25282%2529.png",
      name: "Frenly Dog #23",
    },

    24: {
      attributes: [
        {
          trait_type: "Color",
          value: "Blue",
        },
      ],
      description: "Dog with blue background",
      image: "https://gateway.pinata.cloud/ipfs/QmdkiYA1TVEQDEbVFWKkhNuyMGiAUibnTvgKC7upjeocJu?filename=doggy_none_blue%2520-%2520Copy%2520%25282%2529.png",
      name: "Frenly Dog #24",
    },

    25: {
      attributes: [
        {
          trait_type: "Color",
          value: "Blue",
        },
      ],
      description: "Dog with blue background",
      image: "https://gateway.pinata.cloud/ipfs/QmdkiYA1TVEQDEbVFWKkhNuyMGiAUibnTvgKC7upjeocJu?filename=doggy_none_blue%2520-%2520Copy%2520%25282%2529.png",
      name: "Frenly Dog #25",
    },

    26: {
      attributes: [
        {
          trait_type: "Color",
          value: "Blue",
        },
      ],
      description: "Dog with blue background",
      image: "https://gateway.pinata.cloud/ipfs/QmdkiYA1TVEQDEbVFWKkhNuyMGiAUibnTvgKC7upjeocJu?filename=doggy_none_blue%2520-%2520Copy%2520%25282%2529.png",
      name: "Frenly Dog #26",
    },

    27: {
      attributes: [
        {
          trait_type: "Color",
          value: "Blue",
        },
      ],
      description: "Dog with blue background",
      image: "https://gateway.pinata.cloud/ipfs/QmdkiYA1TVEQDEbVFWKkhNuyMGiAUibnTvgKC7upjeocJu?filename=doggy_none_blue%2520-%2520Copy%2520%25282%2529.png",
      name: "Frenly Dog #27",
    },

    28: {
      attributes: [
        {
          trait_type: "Color",
          value: "Blue",
        },
      ],
      description: "Dog with blue background",
      image: "https://gateway.pinata.cloud/ipfs/QmdkiYA1TVEQDEbVFWKkhNuyMGiAUibnTvgKC7upjeocJu?filename=doggy_none_blue%2520-%2520Copy%2520%25282%2529.png",
      name: "Frenly Dog #28",
    },

    29: {
      attributes: [
        {
          trait_type: "Color",
          value: "Blue",
        },
        {
          trait_type: "Head",
          value: "Halo",
        },
      ],
      description: "Dog with halo, blue background",
      image: "https://gateway.pinata.cloud/ipfs/QmeMiqvMcJRuzPY8PkqiK7ctRdsqDEPGa2MDmYbZrwuXXF?filename=doggy_none_blue_halo.png",
      name: "Frenly Dog #29",
    },

    30: {
      attributes: [
        {
          trait_type: "Color",
          value: "Matrix",
        },
      ],
      description: "Dog with matrix background",
      image: "https://gateway.pinata.cloud/ipfs/QmXepmewGRNjLQtHezaAjdSfVY3pRuZ1hzQfLmAzXjK54f?filename=doggy_none_blueblack.png",
      name: "Frenly Dog #30",
    },

    31: {
      attributes: [
        {
          trait_type: "Color",
          value: "Brown",
        },
      ],
      description: "Dog with brown background",
      image: "https://gateway.pinata.cloud/ipfs/QmciSBVghYaWpZcYfFFjqKg2c6H39mGbRifKACzoErC2ye?filename=doggy_none_brown.png",
      name: "Frenly Dog #31",
    },
    32: {
      attributes: [
        {
          trait_type: "Color",
          value: "Blocky",
        },
      ],
      description: "Dog with blocky background",
      image: "https://gateway.pinata.cloud/ipfs/QmeHTEjbx3zAwPrAvgdKdQjbfYXdaLdWnekniqdjXZzimB?filename=doggy_none_crazy.png",
      name: "Frenly Dog #32",
    },
    33: {
      attributes: [
        {
          trait_type: "Color",
          value: "Cyan",
        },
      ],
      description: "Dog with cyan background",
      image: "https://gateway.pinata.cloud/ipfs/QmbFzkqtuVNUk4e3WampYhYWBiKo1V8zsYUr2WREFLxdkA?filename=doggy_none_cyan.png",
      name: "Frenly Dog #33",
    },

    34: {
      attributes: [
        {
          trait_type: "Color",
          value: "Deep Purple",
        },
      ],
      description: "Dog with deep purple background",
      image: "https://gateway.pinata.cloud/ipfs/QmbpCLCpbRFDQT6WHSDgnUpNhTr4PpfgScbPn7twfcPq6f?filename=doggy_none_deeppurple.png",
      name: "Frenly Dog #34",
    },

    35: {
      attributes: [
        {
          trait_type: "Color",
          value: "Gold",
        },
      ],
      description: "Dog with gold background",
      image: "https://gateway.pinata.cloud/ipfs/QmV4yVjgjvmGSTRQvKGvvdMAngmVdBBTY1mv2jHpYnjTi9?filename=doggy_none_gold.png",
      name: "Frenly Dog #35",
    },

    36: {
      attributes: [
        {
          trait_type: "Color",
          value: "Green",
        },
        {
          trait_type: "Collar",
          value: "White",
        },
      ],
      description: "Dog with white collar, green background",
      image: "https://gateway.pinata.cloud/ipfs/QmP9HcFcUkAkD9mqRRZbzEufkrLP9f59XUDcXT5n23Mcrh?filename=doggy_none_green_collarwhite.png",
      name: "Frenly Dog #36",
    },

    37: {
      attributes: [
        {
          trait_type: "Color",
          value: "Grey",
        },
      ],
      description: "Dog with grey background",
      image: "https://gateway.pinata.cloud/ipfs/QmaQsyTfhegr6diZn1y5PyHnApuHJnGhRzZKt4foiRzyMr?filename=doggy_none_grey.png",
      name: "Frenly Dog #37",
    },

    38: {
      attributes: [
        {
          trait_type: "Color",
          value: "Grey",
        },
      ],
      description: "Dog with grey background",
      image: "https://gateway.pinata.cloud/ipfs/QmaQsyTfhegr6diZn1y5PyHnApuHJnGhRzZKt4foiRzyMr?filename=doggy_none_grey.png",
      name: "Frenly Dog #38",
    },

    39: {
      attributes: [
        {
          trait_type: "Color",
          value: "Grey",
        },
      ],
      description: "Dog with grey background",
      image: "https://gateway.pinata.cloud/ipfs/QmaQsyTfhegr6diZn1y5PyHnApuHJnGhRzZKt4foiRzyMr?filename=doggy_none_grey.png",
      name: "Frenly Dog #39",
    },

    40: {
      attributes: [
        {
          trait_type: "Color",
          value: "Grey",
        },
      ],
      description: "Dog with grey background",
      image: "https://gateway.pinata.cloud/ipfs/QmaQsyTfhegr6diZn1y5PyHnApuHJnGhRzZKt4foiRzyMr?filename=doggy_none_grey.png",
      name: "Frenly Dog #40",
    },

    41: {
      attributes: [
        {
          trait_type: "Color",
          value: "Grey",
        },
      ],
      description: "Dog with grey background",
      image: "https://gateway.pinata.cloud/ipfs/QmaQsyTfhegr6diZn1y5PyHnApuHJnGhRzZKt4foiRzyMr?filename=doggy_none_grey.png",
      name: "Frenly Dog #41",
    },

    42: {
      attributes: [
        {
          trait_type: "Color",
          value: "Grey",
        },
      ],
      description: "Dog with grey background",
      image: "https://gateway.pinata.cloud/ipfs/QmaQsyTfhegr6diZn1y5PyHnApuHJnGhRzZKt4foiRzyMr?filename=doggy_none_grey.png",
      name: "Frenly Dog #42",
    },

    43: {
      attributes: [
        {
          trait_type: "Color",
          value: "Grey",
        },
      ],
      description: "Dog with grey background",
      image: "https://gateway.pinata.cloud/ipfs/QmaQsyTfhegr6diZn1y5PyHnApuHJnGhRzZKt4foiRzyMr?filename=doggy_none_grey.png",
      name: "Frenly Dog #43",
    },

    44: {
      attributes: [
        {
          trait_type: "Color",
          value: "Light Blue",
        },
      ],
      description: "Dog with light blue background",
      image: "https://gateway.pinata.cloud/ipfs/Qmd69w5kxm2PRQh5fVMFAXB341eHdQc7ZW9JTsjhQ4Naa8?filename=doggy_none_lightblue.png",
      name: "Frenly Dog #44",
    },

    45: {
      attributes: [
        {
          trait_type: "Color",
          value: "Light Grey",
        },
        {
          trait_type: "Collar",
          value: "Pink",
        },
      ],
      description: "Dog with pink collar, light grey background",
      image: "https://gateway.pinata.cloud/ipfs/Qmcp2os2Z9ATXbYQk2DLo5Fqhvr9b4YyLAeBkseyY5bGVq?filename=doggy_none_lightgrey_collarpink.png",
      name: "Frenly Dog #45",
    },

    46: {
      attributes: [
        {
          trait_type: "Color",
          value: "Light Orange",
        },
      ],
      description: "Dog with light orange background",
      image: "https://gateway.pinata.cloud/ipfs/QmX3Me87XsuAwoNwrL7ThaS96bCoVFgzUhWUiUHKihzZWv?filename=doggy_none_lightorange%2520-%2520Copy.png",
      name: "Frenly Dog #46",
    },

    47: {
      attributes: [
        {
          trait_type: "Color",
          value: "Light Orange",
        },
      ],
      description: "Dog with light orange background",
      image: "https://gateway.pinata.cloud/ipfs/QmX3Me87XsuAwoNwrL7ThaS96bCoVFgzUhWUiUHKihzZWv?filename=doggy_none_lightorange%2520-%2520Copy.png",
      name: "Frenly Dog #47",
    },

    48: {
      attributes: [
        {
          trait_type: "Color",
          value: "Light Orange",
        },
      ],
      description: "Dog with light orange background",
      image: "https://gateway.pinata.cloud/ipfs/QmX3Me87XsuAwoNwrL7ThaS96bCoVFgzUhWUiUHKihzZWv?filename=doggy_none_lightorange%2520-%2520Copy.png",
      name: "Frenly Dog #48",
    },

    49: {
      attributes: [
        {
          trait_type: "Color",
          value: "Light Orange",
        },
      ],
      description: "Dog with light orange background",
      image: "https://gateway.pinata.cloud/ipfs/QmX3Me87XsuAwoNwrL7ThaS96bCoVFgzUhWUiUHKihzZWv?filename=doggy_none_lightorange%2520-%2520Copy.png",
      name: "Frenly Dog #49",
    },

    50: {
      attributes: [
        {
          trait_type: "Color",
          value: "Light Orange",
        },
        {
          trait_type: "Collar",
          value: "Tangelo",
        },
      ],
      description: "Dog with tangelo collar, light orange background",
      image: "https://gateway.pinata.cloud/ipfs/QmdDB4GxUCc6vYDq9bf1avzjLZNAXrQFe7EbeEcQ7RSZd9?filename=doggy_none_lightorange_collartangelo.png",
      name: "Frenly Dog #50",
    },

    51: {
      attributes: [
        {
          trait_type: "Color",
          value: "Mint Green",
        },
      ],
      description: "Dog with mint green background",
      image: "https://gateway.pinata.cloud/ipfs/QmRXaNgJQ5dJ86NfbsigaMGJHbBXHgwzMbWoqARMUW6Qp2?filename=doggy_none_mintgreen%2520-%2520Copy%2520%25282%2529.png",
      name: "Frenly Dog #51",
    },

    52: {
      attributes: [
        {
          trait_type: "Color",
          value: "Mint Green",
        },
      ],
      description: "Dog with mint green background",
      image: "https://gateway.pinata.cloud/ipfs/QmRXaNgJQ5dJ86NfbsigaMGJHbBXHgwzMbWoqARMUW6Qp2?filename=doggy_none_mintgreen%2520-%2520Copy%2520%25282%2529.png",
      name: "Frenly Dog #52",
    },

    53: {
      attributes: [
        {
          trait_type: "Color",
          value: "Mint Green",
        },
        {
          trait_type: "Collar",
          value: "Beige",
        }
      ],
      description: "Dog with beige collar, mint green background",
      image: "https://gateway.pinata.cloud/ipfs/Qmcg83TUhWvnbART4n6mdMHncYGajwgHmb9cUhtUa1SNHS?filename=doggy_none_mintgreen_collarbeige.png",
      name: "Frenly Dog #53",
    },

    54: {
      attributes: [
        {
          trait_type: "Color",
          value: "Mint Green",
        },
        {
          trait_type: "Collar",
          value: "Navy Blue",
        }
      ],
      description: "Dog with navy blue collar, mint green background",
      image: "https://gateway.pinata.cloud/ipfs/QmacMhWZ8ykUe6DqTKEG4dvUd7Tb9us4WTVMFiGJbLqUdV?filename=doggy_none_mintgreen_collarnavy.png",
      name: "Frenly Dog #54",
    },

    55: {
      attributes: [
        {
          trait_type: "Color",
          value: "Mint Green",
        },
        {
          trait_type: "Collar",
          value: "Purple",
        }
      ],
      description: "Dog with purple collar, mint green background",
      image: "https://gateway.pinata.cloud/ipfs/QmeVeC8aGiVHKyvH5AqvhMKVH9rKPmDwaavX2HNtL35i1o?filename=doggy_none_mintgreen_collarpurple.png",
      name: "Frenly Dog 55",
    },

    56: {
      attributes: [
        {
          trait_type: "Color",
          value: "Mint Green",
        },
        {
          trait_type: "Collar",
          value: "Teal",
        }
      ],
      description: "Dog with teal collar, mint green background",
      image: "https://gateway.pinata.cloud/ipfs/QmXcK9vrspW8b8opd85iraLHTMGJmTwxxnNedJpknWHQWE?filename=doggy_none_mintgreen_collarteal.png",
      name: "Frenly Dog #56",
    },

    57: {
      attributes: [
        {
          trait_type: "Color",
          value: "Mustard Yellow",
        },
      ],
      description: "Dog with mustard yellow background",
      image: "https://gateway.pinata.cloud/ipfs/QmZZie6t1cqCJp7v3uYjyttaW6koRgo1cCirgAF3tHpp5W?filename=doggy_none_mustardyellow.png",
      name: "Frenly Dog #57",
    },

    58: {
      attributes: [
        {
          trait_type: "Color",
          value: "Mustard Yellow",
        },
      ],
      description: "Dog with mustard yellow background",
      image: "https://gateway.pinata.cloud/ipfs/QmZZie6t1cqCJp7v3uYjyttaW6koRgo1cCirgAF3tHpp5W?filename=doggy_none_mustardyellow.png",
      name: "Frenly Dog #58",
    },

    59: {
      attributes: [
        {
          trait_type: "Color",
          value: "Mustard Yellow",
        },
      ],
      description: "Dog with mustard yellow background",
      image: "https://gateway.pinata.cloud/ipfs/QmZZie6t1cqCJp7v3uYjyttaW6koRgo1cCirgAF3tHpp5W?filename=doggy_none_mustardyellow.png",
      name: "Frenly Dog #59",
    },

    60: {
      attributes: [
        {
          trait_type: "Color",
          value: "Mustard Yellow",
        },
      ],
      description: "Dog with mustard yellow background",
      image: "https://gateway.pinata.cloud/ipfs/QmZZie6t1cqCJp7v3uYjyttaW6koRgo1cCirgAF3tHpp5W?filename=doggy_none_mustardyellow.png",
      name: "Frenly Dog #60",
    },
    
    61: {
      attributes: [
        {
          trait_type: "Color",
          value: "Orange",
        },
      ],
      description: "Dog with orange background",
      image: "https://gateway.pinata.cloud/ipfs/QmXgEsy8mpAwg76MY1wxZ7jWrejjRdA1CPmsEFbwRA4oaz?filename=doggy_none_orange.png",
      name: "Frenly Dog #61",
    },
    62: {
      attributes: [
        {
          trait_type: "Color",
          value: "Orange",
        },
      ],
      description: "Dog with orange background",
      image: "https://gateway.pinata.cloud/ipfs/QmXgEsy8mpAwg76MY1wxZ7jWrejjRdA1CPmsEFbwRA4oaz?filename=doggy_none_orange.png",
      name: "Frenly Dog #62",
    },
    63: {
      attributes: [
        {
          trait_type: "Color",
          value: "Orange",
        },
      ],
      description: "Dog with orange background",
      image: "https://gateway.pinata.cloud/ipfs/QmXgEsy8mpAwg76MY1wxZ7jWrejjRdA1CPmsEFbwRA4oaz?filename=doggy_none_orange.png",
      name: "Frenly Dog #63",
    },

    64: {
      attributes: [
        {
          trait_type: "Color",
          value: "Orange",
        },
      ],
      description: "Dog with orange background",
      image: "https://gateway.pinata.cloud/ipfs/QmXgEsy8mpAwg76MY1wxZ7jWrejjRdA1CPmsEFbwRA4oaz?filename=doggy_none_orange.png",
      name: "Frenly Dog #64",
    },

    65: {
      attributes: [
        {
          trait_type: "Color",
          value: "Pink",
        },
      ],
      description: "Dog with pink background",
      image: "https://gateway.pinata.cloud/ipfs/QmUwVoKgSTLcdmMgywNe8DeZM9JErpo9s1ar3k6bkYHE6z?filename=doggy_none_pink.png",
      name: "Frenly Dog #65",
    },

    66: {
      attributes: [
        {
          trait_type: "Color",
          value: "Pink",
        },
        {
          trait_type: "Mouth",
          value: "E-Cig",
        },
      ],
      description: "Dog with e-cig and pink background",
      image: "https://gateway.pinata.cloud/ipfs/QmeF1ogkzrMCxnZWqFGDbN33oNtQpSFe9GzS1mWjAF577j?filename=doggy_none_pink_ecigblue.png",
      name: "Frenly Dog #66",
    },

    67: {
      attributes: [
        {
          trait_type: "Color",
          value: "Purple",
        },
      ],
      description: "Dog with purple background",
      image: "https://gateway.pinata.cloud/ipfs/QmWHLMocSA2CA7ePnFCzDf5fFwEJPexsqBvwFmGtSi7qLG?filename=doggy_none_purple.png",
      name: "Frenly Dog #67",
    },

    68: {
      attributes: [
        {
          trait_type: "Color",
          value: "Purple",
        },
      ],
      description: "Dog with purple background",
      image: "https://gateway.pinata.cloud/ipfs/QmWHLMocSA2CA7ePnFCzDf5fFwEJPexsqBvwFmGtSi7qLG?filename=doggy_none_purple.png",
      name: "Frenly Dog #68",
    },

    69: {
      attributes: [
        {
          trait_type: "Color",
          value: "Purple",
        },
      ],
      description: "Dog with purple background",
      image: "https://gateway.pinata.cloud/ipfs/QmWHLMocSA2CA7ePnFCzDf5fFwEJPexsqBvwFmGtSi7qLG?filename=doggy_none_purple.png",
      name: "Frenly Dog #69",
    },

    70: {
      attributes: [
        {
          trait_type: "Color",
          value: "Purple",
        },
      ],
      description: "Dog with purple background",
      image: "https://gateway.pinata.cloud/ipfs/QmWHLMocSA2CA7ePnFCzDf5fFwEJPexsqBvwFmGtSi7qLG?filename=doggy_none_purple.png",
      name: "Frenly Dog #70",
    },

    71: {
      attributes: [
        {
          trait_type: "Color",
          value: "Purple",
        },
      ],
      description: "Dog with purple background",
      image: "https://gateway.pinata.cloud/ipfs/QmWHLMocSA2CA7ePnFCzDf5fFwEJPexsqBvwFmGtSi7qLG?filename=doggy_none_purple.png",
      name: "Frenly Dog #71",
    },

    72: {
      attributes: [
        {
          trait_type: "Color",
          value: "Grey",
        },
      ],
      description: "Dog with grey background",
      image: "https://gateway.pinata.cloud/ipfs/QmaQsyTfhegr6diZn1y5PyHnApuHJnGhRzZKt4foiRzyMr?filename=doggy_none_grey.png",
      name: "Frenly Dog #72",
    },

    73: {
      attributes: [
        {
          trait_type: "Color",
          value: "Red",
        },
      ],
      description: "Dog with red background",
      image: "https://gateway.pinata.cloud/ipfs/QmdjHCTWVzyBueiudyPJJBzZ4nzeDKbjRgEwC6SBXi9RAJ?filename=doggy_none_red.png",
      name: "Frenly Dog #73",
    },

    74: {
      attributes: [
        {
          trait_type: "Color",
          value: "Sky Blue",
        },
      ],
      description: "Dog with sky blue background",
      image: "https://gateway.pinata.cloud/ipfs/QmbxV6bMFvb2KCg4Dv3KqUQyXCxMKWDWMLFzt7LdhWrw2m?filename=doggy_none_skyblue.png",
      name: "Frenly Dog #74",
    },

    75: {
      attributes: [
        {
          trait_type: "Color",
          value: "Sky Blue",
        },
      ],
      description: "Dog with sky blue background",
      image: "https://gateway.pinata.cloud/ipfs/QmbxV6bMFvb2KCg4Dv3KqUQyXCxMKWDWMLFzt7LdhWrw2m?filename=doggy_none_skyblue.png",
      name: "Frenly Dog #75",
    },

    76: {
      attributes: [
        {
          trait_type: "Color",
          value: "Sky Blue",
        },
      ],
      description: "Dog with sky blue background",
      image: "https://gateway.pinata.cloud/ipfs/QmbxV6bMFvb2KCg4Dv3KqUQyXCxMKWDWMLFzt7LdhWrw2m?filename=doggy_none_skyblue.png",
      name: "Frenly Dog #76",
    },

    77: {
      attributes: [
        {
          trait_type: "Color",
          value: "Sky Blue",
        },
      ],
      description: "Dog with sky blue background",
      image: "https://gateway.pinata.cloud/ipfs/QmbxV6bMFvb2KCg4Dv3KqUQyXCxMKWDWMLFzt7LdhWrw2m?filename=doggy_none_skyblue.png",
      name: "Frenly Dog #77",
    },

    78: {
      attributes: [
        {
          trait_type: "Color",
          value: "Vapor",
        },
      ],
      description: "Dog with vaporwave background",
      image: "https://gateway.pinata.cloud/ipfs/QmUdTYmQof3KwNayEBayy4qZ8VoGuzjf5KErNkRS2az5hW?filename=doggy_none_vapor.png",
      name: "Frenly Dog #78",
    },

    79: {
      attributes: [
        {
          trait_type: "Color",
          value: "White",
        },
      ],
      description: "Dog with white background",
      image: "https://gateway.pinata.cloud/ipfs/QmUzk7pQkhJr3M4PRjKvkVs4fMC8cR3S4t7JTphxcmrAim?filename=doggy_none_white.png",
      name: "Frenly Dog #79",
    },

    80: {
      attributes: [
        {
          trait_type: "Color",
          value: "Yellow",
        },
      ],
      description: "Dog with yellow background",
      image: "https://gateway.pinata.cloud/ipfs/QmSU2EMvWJZT2YCYw7fbovznc8jMX8ZVvuvjSXNDtT3Zka?filename=doggy_none_yellow.png",
      name: "Frenly Dog #80",
    },

    81: {
      attributes: [
        {
          trait_type: "Color",
          value: "Yellow",
        },
      ],
      description: "Dog with yellow background",
      image: "https://gateway.pinata.cloud/ipfs/QmSU2EMvWJZT2YCYw7fbovznc8jMX8ZVvuvjSXNDtT3Zka?filename=doggy_none_yellow.png",
      name: "Frenly Dog #81",
    },

    82: {
      attributes: [
        {
          trait_type: "Color",
          value: "Yellow",
        },
      ],
      description: "Dog with yellow background",
      image: "https://gateway.pinata.cloud/ipfs/QmSU2EMvWJZT2YCYw7fbovznc8jMX8ZVvuvjSXNDtT3Zka?filename=doggy_none_yellow.png",
      name: "Frenly Dog #82",
    },

    83: {
      attributes: [
        {
          trait_type: "Color",
          value: "Yellow",
        },
      ],
      description: "Dog with yellow background",
      image: "https://gateway.pinata.cloud/ipfs/QmSU2EMvWJZT2YCYw7fbovznc8jMX8ZVvuvjSXNDtT3Zka?filename=doggy_none_yellow.png",
      name: "Frenly Dog #83",
    },

    84: {
      attributes: [
        {
          trait_type: "Color",
          value: "Yellow",
        },
      ],
      description: "Dog with yellow background",
      image: "https://gateway.pinata.cloud/ipfs/QmSU2EMvWJZT2YCYw7fbovznc8jMX8ZVvuvjSXNDtT3Zka?filename=doggy_none_yellow.png",
      name: "Frenly Dog #84",
    },

    85: {
      attributes: [
        {
          trait_type: "Color",
          value: "Yellow",
        },
      ],
      description: "Dog with yellow background",
      image: "https://gateway.pinata.cloud/ipfs/QmSU2EMvWJZT2YCYw7fbovznc8jMX8ZVvuvjSXNDtT3Zka?filename=doggy_none_yellow.png",
      name: "Frenly Dog 85",
    },

    86: {
      attributes: [
        {
          trait_type: "Color",
          value: "Azure Blue",
        },
        {
          trait_type: "Shades",
          value: "Black",
        }
      ],
      description: "Dog with shades, azure blue background",
      image: "https://gateway.pinata.cloud/ipfs/QmTHS9JRWnFNSiE35NH6xRFhGc24e51sUqBNdbBtNac2yJ?filename=doggy_shades_azureblue.png",
      name: "Frenly Dog #86",
    },

    87: {
      attributes: [
        {
          trait_type: "Color",
          value: "Dark Purple",
        },
      ],
      description: "Dog with dark purple background",
      image: "https://gateway.pinata.cloud/ipfs/QmXzN4ebJihmVFf5ZAF68xgZBrAStrmfrsfiDRoc7uqteQ?filename=doggy_shades_darkpurple.png",
      name: "Frenly Dog #87",
    },

    88: {
      attributes: [
        {
          trait_type: "Color",
          value: "Light Grey",
        },
        {
          trait_type: "Shades",
          value: "Black",
        }
      ],
      description: "Dog with shades, light grey background",
      image: "https://gateway.pinata.cloud/ipfs/QmWDJMzWADfQ1Ag5ZcD9hRYkq9ywzcLL3U7TeipPWKtuLs?filename=doggy_shades_lightgrey.png",
      name: "Frenly Dog #88",
    },

    89: {
      attributes: [
        {
          trait_type: "Color",
          value: "Light Grey",
        },
        {
          trait_type: "Shades",
          value: "Black",
        }
      ],
      description: "Dog with shades, light grey background",
      image: "https://gateway.pinata.cloud/ipfs/QmWDJMzWADfQ1Ag5ZcD9hRYkq9ywzcLL3U7TeipPWKtuLs?filename=doggy_shades_lightgrey.png",
      name: "Frenly Dog #89",
    },

    90: {
      attributes: [
        {
          trait_type: "Color",
          value: "Light Grey",
        },
        {
          trait_type: "Shades",
          value: "Black",
        }
      ],
      description: "Dog with shades, light grey background",
      image: "https://gateway.pinata.cloud/ipfs/QmWDJMzWADfQ1Ag5ZcD9hRYkq9ywzcLL3U7TeipPWKtuLs?filename=doggy_shades_lightgrey.png",
      name: "Frenly Dog #90",
    },
    
    91: {
      attributes: [
        {
          trait_type: "Color",
          value: "Light Grey",
        },
        {
          trait_type: "Shades",
          value: "Black",
        }
      ],
      description: "Dog with shades, light grey background",
      image: "https://gateway.pinata.cloud/ipfs/QmWDJMzWADfQ1Ag5ZcD9hRYkq9ywzcLL3U7TeipPWKtuLs?filename=doggy_shades_lightgrey.png",
      name: "Frenly Dog #91",
    },
    
    92: {
      attributes: [
        {
          trait_type: "Color",
          value: "Light Grey",
        },
        {
          trait_type: "Shades",
          value: "Black",
        }
      ],
      description: "Dog with shades, light grey background",
      image: "https://gateway.pinata.cloud/ipfs/QmWDJMzWADfQ1Ag5ZcD9hRYkq9ywzcLL3U7TeipPWKtuLs?filename=doggy_shades_lightgrey.png",
      name: "Frenly Dog #92",
    },
    
    93: {
      attributes: [
        {
          trait_type: "Color",
          value: "Light Orange",
        },
        {
          trait_type: "Shades",
          value: "Black",
        }
      ],
      description: "Dog with shades, light orange background",
      image: "https://gateway.pinata.cloud/ipfs/QmcsWyQegjGCJkP3xtM39wwnvLMND6x7F5Z3pzZZKMXy1f?filename=doggy_shades_lightorange.png",
      name: "Frenly Dog #93",
    },
    
    94: {
      attributes: [
        {
          trait_type: "Color",
          value: "Light Orange",
        },
        {
          trait_type: "Shades",
          value: "Black",
        }
      ],
      description: "Dog with shades, light orange background",
      image: "https://gateway.pinata.cloud/ipfs/QmcsWyQegjGCJkP3xtM39wwnvLMND6x7F5Z3pzZZKMXy1f?filename=doggy_shades_lightorange.png",
      name: "Frenly Dog #94",
    },
    
    95: {
      attributes: [
        {
          trait_type: "Color",
          value: "Pink",
        },
        {
          trait_type: "Shades",
          value: "Black",
        }
      ],
      description: "Dog with shades, pink background",
      image: "https://gateway.pinata.cloud/ipfs/Qmeny7WP3rd4hhSgtGVhcipE17bomA1jBy4RQqRdZM7D9p?filename=doggy_shades_pink.png",
      name: "Frenly Dog #95",
    },
    
    96: {
      attributes: [
        {
          trait_type: "Color",
          value: "Sky Blue",
        },
        {
          trait_type: "Shades",
          value: "Black",
        }
      ],
      description: "Dog with shades, sky blue background",
      image: "https://gateway.pinata.cloud/ipfs/QmVB7zEvFrjxE83aDVh9S39UCkiVwv6kvYtTyJvha58rgM?filename=doggy_shades_skyblue.png",
      name: "Frenly Dog #96",
    },
    
    97: {
      attributes: [
        {
          trait_type: "Color",
          value: "Yellow",
        },
        {
          trait_type: "Shades",
          value: "Black",
        }
      ],
      description: "Dog with shades, yellow background",
      image: "https://gateway.pinata.cloud/ipfs/QmPoT7dGu8c4RhLgfwnQoxqLt8LmHyE8brLwoNxSxxFpNw?filename=doggy_shades_yellow.png",
      name: "Frenly Dog #97",
    },
    
    98: {
      attributes: [
        {
          trait_type: "Color",
          value: "Yellow",
        },
        {
          trait_type: "Shades",
          value: "Black",
        }
      ],
      description: "Dog with shades, yellow background",
      image: "https://gateway.pinata.cloud/ipfs/QmPoT7dGu8c4RhLgfwnQoxqLt8LmHyE8brLwoNxSxxFpNw?filename=doggy_shades_yellow.png",
      name: "Frenly Dog #98",
    },
    
    99: {
      attributes: [
        {
          trait_type: "Color",
          value: "Yellow",
        },
        {
          trait_type: "Shades",
          value: "Black",
        }
      ],
      description: "Dog with shades, yellow background",
      image: "https://gateway.pinata.cloud/ipfs/QmPoT7dGu8c4RhLgfwnQoxqLt8LmHyE8brLwoNxSxxFpNw?filename=doggy_shades_yellow.png",
      name: "Frenly Dog #99",
    },
    
    100: {
      attributes: [
        {
          trait_type: "Color",
          value: "Yellow",
        },
        {
          trait_type: "Shades",
          value: "Black",
        }
      ],
      description: "Dog with shades, yellow background",
      image: "https://gateway.pinata.cloud/ipfs/QmPoT7dGu8c4RhLgfwnQoxqLt8LmHyE8brLwoNxSxxFpNw?filename=doggy_shades_yellow.png",
      name: "Frenly Dog 100",
    },
    
  };
  export default function handler(req, res) {
    res.status(200).json(metadata[req.query.id] || {});
  }