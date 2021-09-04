const Container = (props) => {
  return (
      <>
      <div>
      <div className='container'>
        <h1>{props.content}</h1>
        <img src={props.imagesrc}></img>
        </div>
      </div>
      </>
  );
};

export default Container;
