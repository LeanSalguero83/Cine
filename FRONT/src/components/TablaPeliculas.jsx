import React from 'react'

export default function TablaPeliculas({ items = [] }) {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Resultados:</h5>
                <div className='row'>
                    <div className='col-auto'>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Título</th>
                                    <th scope="col">Director</th>
                                    <th scope="col">Género</th>
                                    <th scope="col">Duración</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map((item, index)=>{
                                    return(
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{item.titulo}</td>
                                            <td>{item.director}</td>
                                            <td>{item.genero}</td>
                                            <td>{item.duracion}</td>
                                        </tr>
                                    )

                                })
                                
                                }   
                                
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
