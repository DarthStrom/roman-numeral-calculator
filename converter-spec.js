require('./converter');

describe('converter', function () {

  describe('toNumber', function () {

    it('can convert the base glyphs', function () {
      expect("I".toNumber()).toBe(1);
      expect("V".toNumber()).toBe(5);
      expect("X".toNumber()).toBe(10);
      expect("L".toNumber()).toBe(50);
      expect("C".toNumber()).toBe(100);
      expect("D".toNumber()).toBe(500);
      expect("M".toNumber()).toBe(1000);
    });

    it('can convert II', function () {
      expect("II".toNumber()).toBe(2);
    });

    it('can convert combined numbers', function () {
      expect("XVI".toNumber()).toBe(16);
      expect("LX".toNumber()).toBe(60);
    });

    it('can handle subtractive notation', function () {
      expect("IV".toNumber()).toBe(4);
      expect("IX".toNumber()).toBe(9);
      expect("XL".toNumber()).toBe(40);
      expect("XC".toNumber()).toBe(90);
      expect("CD".toNumber()).toBe(400);
      expect("CM".toNumber()).toBe(900);
    })

    it('can convert combined numbers with subtractive notation', function () {
      expect("XIV".toNumber()).toBe(14);
      expect("LXXIV".toNumber()).toBe(74);
      expect("MCMLIV".toNumber()).toBe(1954);
      expect("MCMXC".toNumber()).toBe(1990);
      expect("MMXIV".toNumber()).toBe(2014);
    });

    it('can handle weird numbers', function () {
      expect("IIII".toNumber()).toBe(4);
      expect("CCCCXXXX".toNumber()).toBe(440);
      expect("IIIIII".toNumber()).toBe(6);
      expect("XXXXXX".toNumber()).toBe(60);
      expect("MDCCCCX".toNumber()).toBe(1910);
      expect("DD".toNumber()).toBe(1000);
    });
  });

  describe('numberToRoman', function () {

    it('can produce the base glyphs', function () {
      var one = 1, five = 5, ten = 10, fifty = 50, oneHundred = 100,
        fiveHundred = 500, oneThousand = 1000;

      expect(one.toRoman()).toBe("I");
      expect(five.toRoman()).toBe("V");
      expect(ten.toRoman()).toBe("X");
      expect(fifty.toRoman()).toBe("L");
      expect(oneHundred.toRoman()).toBe("C");
      expect(fiveHundred.toRoman()).toBe("D");
      expect(oneThousand.toRoman()).toBe("M");
    });

    it('can convert to multiple glyphs', function () {
      var two = 2;
      expect(two.toRoman()).toBe("II");
    });

    it('can convert to mixed glyphs', function () {
      var sixteen = 16;
      expect(sixteen.toRoman()).toBe("XVI");
    });

    it('can convert to subtractive notation', function () {
      var four = 4, nine = 9, forty = 40, ninety = 90,
        fourHundred = 400, nineHundred = 900;

      expect(four.toRoman()).toBe("IV");
      expect(nine.toRoman()).toBe("IX");
      expect(forty.toRoman()).toBe("XL");
      expect(ninety.toRoman()).toBe("XC");
      expect(fourHundred.toRoman()).toBe("CD");
      expect(nineHundred.toRoman()).toBe("CM");
    });

    it('can convert more complex numbers', function () {
      var fourteen = 14, seventyFour = 74, nineteenFiftyFour = 1954,
        nineteenNinety = 1990, twentyFourteen = 2014

      expect(fourteen.toRoman()).toBe("XIV");
      expect(seventyFour.toRoman()).toBe("LXXIV");
      expect(nineteenFiftyFour.toRoman()).toBe("MCMLIV");
      expect(nineteenNinety.toRoman()).toBe("MCMXC");
      expect(twentyFourteen.toRoman()).toBe("MMXIV");
    });

    it('can represent negatives', function () {
      var negativeThirteen = -13;
      expect(negativeThirteen.toRoman()).toBe("-XIII");
    });
  });
});
