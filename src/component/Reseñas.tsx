import React, {useState} from 'react';

import './Reseñas.css';

interface Reseña {
    id: number;
   usuario: string;
   calificación: number;
   comentario: string;
}

const Reseñas: React.FC = () =>{
    const [reseñas, setReseñas] = useState<Reseña[]>([]);

    const [nuevoComentario, setNuevoComentario] = useState({
        usuario: '',
        calificación: 0,
        comentario: '',
    });

    const agregarReseña = () => {
        const nuevaReseña = {...nuevoComentario, id: reseñas.length +
            1};
            setReseñas([...reseñas, nuevaReseña]);
            setNuevoComentario({
                usuario: '',
                calificación: 0,
                comentario: '',
                });
    };

    return(
        <div>
            <h1>Reseñas del Producto</h1>
            <form onSubmit={(e) => {
                e.preventDefault();
                agregarReseña();
            }}
            >
                <input type="text" placeholder='Tu usuario'
                value={nuevoComentario.usuario} onChange={(e) => {
                    setNuevoComentario({...nuevoComentario, usuario: e.target.value});
                    }} required
                 />

                 <select 
                 value={nuevoComentario.calificación} onChange={(e) => {
                    setNuevoComentario({...nuevoComentario, calificación: parseInt(e.target.value)});
                    }} required
                 >
                    <option value={0}>Selecciona una calificación </option>
                    {[1, 2, 3, 4, 5].map((num) => (
                        <option key={num} value={num}>{num} Estrella {num >1 && "s"}
                        </option>
                    ))}
                 </select>
                 <textarea placeholder='Escribe tu comentario'
                 value={nuevoComentario.comentario} onChange={(e) => {
                    setNuevoComentario({...nuevoComentario, comentario: e.target.value});
                    }} required
                    />

                    <button type='submit'>
                        Agregar Reseña
                    </button>
            </form>

            <ul>
                {reseñas.map((res) => (
                    <li key={res.id}>
                        <p>Usuario: {res.usuario}</p>
                        <p>Calificación: {res.calificación} Estrellas</p>
                        <p>Comentario: {res.comentario}</p>
                     </li>
                ))}
            </ul>
                
        </div>
    )
}

export default Reseñas;