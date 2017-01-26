class Board {
  constructor() {
    // this.difficulty = "easy"
    this.balls = []
  }

  init() {
    $('#main-menu').css("z-index", "-1")
    this.populateBoard()
  }

  pushBalls() {
    const quantity = 63
    let colors = ["red", "blue", "green", "orange", "mauve", "taupe", "sunset", "midnight navy"]
    for (let i = 0; i < quantity; i++) {
      let color = "red"
      //
      let newBall = new Ball(color)
      this.balls.push(newBall)
    }
  }

  populateBoard() {
    for (i = 0; i < this.balls.length; i++) {
      // append a ball div
    }
  }
  
}
