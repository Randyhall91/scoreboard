let WPoint = 40
let NPoint = 40

function wDraw() {
  // @ts-ignore
  document.getElementById('wScore').innerHTML = `
      <h1><b class="text-danger">${WPoint}</b></h1>
      `
}
function nDraw() {
  // @ts-ignore
  document.getElementById('nScore').innerHTML = `
      <h1><b class="text-danger">${NPoint}</b></h1>
      `
}

function Wpoints() {
  WPoint--
  wDraw()
}
function W5points() {
  WPoint -= 5
  wDraw()
}
function Npoints() {
  NPoint--
  nDraw()
}

function N5points() {
  NPoint -= 5
  nDraw()
}
wDraw()
nDraw()