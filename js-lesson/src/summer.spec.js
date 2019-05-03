const Summer = require('./summer');

describe('example', () => {
  const scenarios = [
    {
      name: 'Should add 1 + 1',
      a: 1,
      b: 1,
      expectedResult: 2,
    },
    {
      name: 'Should add -1 + 1',
      a: -1,
      b: 1,
      expectedResult: 0,
    },
  ];

  scenarios.forEach((scenario) => {
    it(scenario.name, () => {
      // Arrange.
      const summerUnderTest = new Summer();
      // Act.
      const result = summerUnderTest.sum(scenario.a, scenario.b);
      // Assert.
      expect(result).toEqual(scenario.expectedResult);
    });
  });

  // This is a simple scenario, not driven by a data provider.
  it('Should add two numbers together', () => {
    // Arrange.
    const summerUnderTest = new Summer();
    // Act.
    const result = summerUnderTest.sum(1, 1);
    // Assert.
    expect(result).toEqual(2);
  });
});