const estadosValidos = {
    start: ['waiting'],
    waiting: ['playing'],
    playing: ['gameOver'],
    gameOver: ['waiting', 'start'],
  };
  
  let estadoActual = 'start';
  
  export function cambiarEstado(nuevoEstado) {
    if (estadosValidos[estadoActual].includes(nuevoEstado)) {
      console.log(`Transición válida: ${estadoActual} -> ${nuevoEstado}`);
      estadoActual = nuevoEstado;
      return true;
    } else {
      console.error(`Transición inválida: ${estadoActual} -> ${nuevoEstado}`);
      return false;
    }
  }
  
  export function obtenerEstadoActual() {
    return estadoActual;
  }
  