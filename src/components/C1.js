function C1(props){
    
    // console.log(props.aksiyon);
    if(props.aksiyon !== undefined) props.aksiyon();
    

    return (
        <>
        <p>Ben Component 1</p>
        <p>Benim mesaj özelliğimin degeri : </p>
        </>
    )
  
  
  }


  export default C1;