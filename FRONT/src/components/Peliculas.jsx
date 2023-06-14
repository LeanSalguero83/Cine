import React, { useEffect, useState } from 'react'
import FiltrosPeliculas from './FiltrosPeliculas'
import TablaPeliculas
  from './TablaPeliculas'
import RegistroPelicula from './RegistroPelicula'
import { addPelicula, getPeliculas } from '../services/peliculas.service'
import {getPeliculasAPI, addPeliculaAPI} from '../services/peliculas.serviceAPI'

export default function Peliculas() {
  //lógica del componente:
  const [rows, setRows] = useState([])
  const [action, setAction] = useState('C')


  useEffect(() => {
    //Se dispara cuando se dibuja el componente
   cargarPeliculas()//acá filtro queda como undefined, recupera todas las películas
  }, [])


  const cargarPeliculas = async function (filtro) {
    const pelis = await getPeliculasAPI(filtro)
    setRows(pelis)
  }

  //Recibimos solo un filtro, no un objeto de filtros
  const onConsultar = (filtro) => {
    cargarPeliculas(filtro)
  }

  const onNuevo = () => {
    setAction('N')
  }
  const onCancelar = () => {
    setAction('C')
  }

  const onConfirmar = async (pelicula) => {
    await addPeliculaAPI(pelicula);
    cargarPeliculas(); // Se añade esta línea para recargar las películas.
    setAction('C');
}


  return (
    //jsx: (vista escrita en HTML+Js)    
    <>
      {action === 'C' && (
        <div>
          <FiltrosPeliculas onConsultar={onConsultar} onNuevo={onNuevo}></FiltrosPeliculas>
          <TablaPeliculas items={rows}></TablaPeliculas>
        </div>
      )}

      {
        action !== 'C' && (
          <div>
            <RegistroPelicula onCancelar={onCancelar} onConfirmar={onConfirmar}/>
          </div>
        )
      }
    </>
  )
}

