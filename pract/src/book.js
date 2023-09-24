const Book = (props) => {
    const {img, title, author, } = props;
    
    
        return (
            <article className='book'>
            <img src={img} alt={title}/>
          <h2>{title}</h2>
          <p>{author}</p>
            </article>
        )
    }
    
    export default Book