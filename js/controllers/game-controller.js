class GameController {
  constructor() {
    this.$mainMenu = $('#main-menu')
    this.$start = $('#start-button')
  }
  init() {
    let board = new Board
    this.$start.click(board.init)
  }
}

document.addEventListener('DOMContentLoaded', function() {
  let newGameController = new GameController
  newGameController.init()
})
// add event listener to the start button to init the board
// let board = new BoardController
// board.init()
