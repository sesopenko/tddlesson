# tddlesson

Lessons on TDD.

## Requirements:
* [Docker for mac](https://docs.docker.com/docker-for-mac/install/)
* Editor of your choice

## Organization

One programming language per folder.  Each programming language has a README.md detailing how to use docker to execute your tests.

## Bowling Exercise

Build a bowling score function which takes a string representing a game of bowling, and provides the total score for the game.

### Basics
* One game of bowling consists of 10 _frames_, with a minimum score of zero and a maximum of 30.
* Each _frame_ consists of two chances to knock down ten _pins_.  Instead of "points" in footbacll or "runs" in baseball, we use "pins" for bowling.

### Strikes and Spares
* Knocking down all ten pins on your first ball of the _frame_ is called a _strike_, denoted by an `X` on the score sheet.
* If it takes two shots to knock down all ten pins, it's called a _spare_, denoted by a `/.`

### Open Frames
* If after two shots at least one pin is still standing, it's called an `open frame`.  Whereas open frames are taken at face value, strikes and spares can be worth more, but not less than face value.

### How to score a strike
* A strike is worth `10` plus the value of your next two rolls.
* At a minimum, your score for a frame in which you throw a strike will be `10` (`10+0+0`)
* At best, your next two shots will be strikes, and the frame will be wrtoh `30` (`10 + 10 + 10`)
* Say you throw a strike in the first frame.  Technically, you don't have a score yet.  You need to throw two more balls to figure out your total score for the frame.  In the second frame, you throw a `6` on your first ball and a `2` on your second ball.  Your score for the first frame will be `18` (`10 + 6 + 2`)

### How to score a spare
* A spare is worth 10, plus the value of your next roll.
* Say you throw a spare in your first frame.  Then, in your first ball of the second frame you trow a `7`.  Your score for the first frame will be `17` (`10+7`).  The maximum score for a frame in which you get a spre is `20` (a spare followed by a strike) and the minimum is `10` (a spare followed by a _gutter ball_).

### How to score an open frame
* If you don't get a strike or a spare in a frame, your score is the total number of pins you knock down. If you knock down `5` pins on your first ball and `2` on your second, your score for that frame is `7`.

### Sample score

Example string: `X7/729/XXX236/7/3`

|*Frame*        |*1*    |*2*    |*3*   |*4*   |*5*   |*6*   |*7*   |*8*   |*9*   |*10*   |
|---------------|-------|-------|------|------|------|------|------|------|------|-------|
|*Result*       |`X`    |`7/`   |`72`  |`9/`  |`X`   |`X`   |`X`   |`23`  |`6/`  |`7/3`  |
|*Frame Score*  |`20`   |`17`   |`9`   |`20`  |`30`  |`22`  |`15`  |`5`   |`17`  |`13`   |
|*Running Total*|`20`   |`37`   |`46`  |`66`  |`96`  |`118` |`133` |`138` |`155` |`168`  |

#### Frame-by-Frame Explanation

1. You threw a strike, which is 10 plus your next two shots. In this case, your next two shots (the second frame) resulted in a spare. 10+10=20.
1. You threw a spare, which is 10 plus your next shot. Your next shot (from the third frame) was a 7. The value of this frame is 17 (10+7). Added to the first frame, you're now at 37.
1. An open frame is worth exactly the number of pins you knocked down. 7+2=9. Added to 37, you're now at 46.
1. Another spare. Adding your next shot (from the fifth frame-a strike), you get 20 (10+10). Added to 46, you're at 66.
1. A strike, followed by two more strikes. 10+10+10=30, putting you at 96.
1. A strike, followed by a strike and a 2. 10+10+2=22. You're now at 118.
1. A strike, followed by a 2 and 3. 10+2+3=15, putting your score at 133.
1. An open frame. 2+3=5. You're now at 138.
1. A spare, followed by a 7 in the tenth frame. 10+7=17, putting you at 155.
1. A spare, followed by a 3. 10+3=13, resulting in a total score of 168.

#### The Tenth Frame

In the sample score, three shots were thrown in the tenth frame. This is because of the bonuses awarded for strikes and spares. If you throw a strike on your first ball in the tenth frame, you need two more shots to determine the total value of the strike.

If you throw a spare on your first two balls in the tenth frame, you need one more shot to determine the total value of the spare. This is called a fill ball.

If you throw an open frame in the tenth frame, you won't get a third shot. The only reason the third shot exists is to determine the full value of a strike or spare.