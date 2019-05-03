<?php

/**
 * Confirms the behaviour of the example summation class.
 */
class SummerTest extends \PHPUnit\Framework\TestCase {
//  public function testSum() {
//    // Assemble.
//    // Act.
//    // Assert.
//  }

  /**
   * Confirms that it sums two numbers together.
   */
  public function testSumSingle() {
    // Assemble.
    $summerUnderTest = new Summer();
    // Act.
    $result = $summerUnderTest->sum(1, 1);
    // Assert.
    $this->assertEquals(2, $result);
  }
}