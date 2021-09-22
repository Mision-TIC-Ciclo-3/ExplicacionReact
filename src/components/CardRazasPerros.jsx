function CardRazasPerros({ nombreRaza, imagen }) {
  return (
    <li className='breedCard'>
      <div className='contenedorImagen'>
        <img src={imagen} alt={nombreRaza} />
      </div>
      <span className='breedTitle'>{nombreRaza}</span>
    </li>
  );
}

export default CardRazasPerros;
