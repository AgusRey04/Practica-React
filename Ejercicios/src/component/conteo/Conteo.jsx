import React from 'react'

const Conteo = ({ beers }) => {
    const flitrado = beers.filter((arre)=> {
        if (arre.beerStyle=="Red"|| arre.beerStyle=="IPA"){
            return {arre}
        }
    });
    
  
    return (
      <div>
        <h5>Cantidad de cervezas de estilo Red e IPA:</h5>
        <p>{flitrado.length}</p>
      </div>
    );
  };
  
export default Conteo
