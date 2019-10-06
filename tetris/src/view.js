export default class View {

  static colors = {
    '1': 'cyan',
    '2': 'blue',
    '3': 'orange',
    '4': 'yellow',
    '5': 'green',
    '6': 'purple',
    '7': 'red'
  }

  constructor(element, width, height, rows, columns) {
    this.element = element
    this.width = width
    this.height = height
    
    this.canvas = document.createElement('canvas')
    this.canvas.width = this.width
    this.canvas.height = this.height
    this.ctx = this.canvas.getContext('2d')

    this.playfieldBorderWidth = 4
    this.playfieldX = this.playfieldBorderWidth
    this.playfieldY = this.playfieldBorderWidth
    this.playfieldWidth = this.width * 2 / 3
    this.playfieldHeight = this.height
    this.playfieldInnerWidth = this.playfieldWidth - this.playfieldBorderWidth * 2
    this.playfieldInnerHeight = this.playfieldHeight - this.playfieldBorderWidth * 2

    this.blockWidth = this.playfieldInnerWidth / columns
    this.blockHeight = this.playfieldInnerHeight / rows

    this.panelX = this.playfieldWidth + 10
    this.panelY = 0
    this.panelWidth = this.width / 3
    this.panelHeight = this.height

    this.element.appendChild(this.canvas)
  }

  renderMainScreen(state) {
    this.clearScreen()
    this.renderPlayfield(state)
    this.renderPanel(state)
  }

  renderStartScreen() {
    this.ctx.fillStyle = 'white'
    this.ctx.font = '18px "Segoe UI"'
    this.ctx.textAlign = 'center'
    this.ctx.textBaseline = 'middle'
    this.ctx.fillText("Press ENTER to start", this.width / 2, this.height / 2)
  }

  renderPauseScreen() {
    this.ctx.fillStyle = 'rgba(0,0,0,0.75)'
    this.ctx.fillRect(0, 0, this.width, this.height)

    this.ctx.fillStyle = 'white'
    this.ctx.font = '18px "Segoe UI"'
    this.ctx.textAlign = 'center'
    this.ctx.textBaseline = 'middle'
    this.ctx.fillText("Press ENTER to resume", this.width / 2, this.height / 2)
  }

  renderEndScreen({score}) {
    this.clearScreen()


    this.ctx.fillStyle = 'white'
    this.ctx.font = '18px "Segoe UI"'
    this.ctx.textAlign = 'center'
    this.ctx.textBaseline = 'middle'
    this.ctx.fillText("GAME OVER", this.width / 2, this.height / 2 - 48)
    this.ctx.fillText(`Score: ${score}`, this.width / 2, this.height / 2)
    this.ctx.fillText(`Press ENTER to restart`, this.width / 2, this.height / 2 + 48)
  }

  clearScreen() {
    this.ctx.clearRect(0, 0, this.width, this.height)
  }

  renderPlayfield({playfield}) {
    for (let y = 0; y < playfield.length; y++) {
      const line = playfield[y];
      for (let x = 0; x < line.length; x++) {
        const block = line[x];
        
        if (block) {
          this.renderBlock(
            this.playfieldX + (x * this.blockWidth), 
            this.playfieldY + (y * this.blockHeight), 
            this.blockWidth, 
            this.blockHeight, 
            View.colors[block]
          )
        }
      }
    }
    this.ctx.strokeStyle = 'white'
    this.ctx.lineWidth = this.playfieldBorderWidth
    this.ctx.strokeRect(0, 0, this.playfieldWidth, this.playfieldHeight)
  }

  renderPanel({ level, score, lines, nextPiece }) {
    this.ctx.textAlign = 'start'
    this.ctx.textBaseline = 'top'
    this.ctx.fillStyle = 'white'
    this.ctx.font = '14px "Segoe UI"'

    this.ctx.fillText(`Score: ${score}`, this.panelX,  this.panelY + 0)
    this.ctx.fillText(`Lines: ${lines}`, this.panelX  ,  this.panelY + 24)
    this.ctx.fillText(`Level: ${level}`, this.panelX  ,  this.panelY + 48)
    this.ctx.fillText('Next:', this.panelX ,  this.panelY + 96)

    for (let y = 0; y < nextPiece.blocks.length; y++) {
      for (let x = 0; x <nextPiece.blocks[y].length; x++) {
        const block = nextPiece.blocks[y][x]
        
        if (block) {
          this.renderBlock(
            this.panelX + (x * this.blockWidth * 0.5),
            this.panelY + 100 + (y * this.blockHeight * 0.5),
            this.blockWidth * 0.5,
            this.blockHeight * 0.5,
            View.colors[block]
          )
        }
      }
      
    }
  }

  renderBlock(x, y, width, height, color) {
    this.ctx.fillStyle = color
    this.ctx.strokeStyle = 'black'
    this.ctx.lineWidth = 2

    this.ctx.fillRect(x, y, width, height)
    this.ctx.strokeRect(x, y, width, height)
  }
}