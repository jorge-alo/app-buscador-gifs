

export const Imagen = ({ imagen, titulo}) => {
  return (
    <div className="container__img" >
        <img className="img" src={imagen} alt="titulo" />
        <h2 className="titulo-imagen">{titulo}</h2>
    </div>
  )
}
