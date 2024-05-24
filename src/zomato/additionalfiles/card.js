
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardExample() {
  return (
    <Card style={{ width: '18rem' ,position:"absolute", top:500, left:300,height:300,width:600}}>
        <h3 style={{  position:"absolute",top:25,left:85}}> Get started with online ordering</h3>
        <p style={{position:"absolute",top:65,left:100}}>Please keep the documents ready for a smooth signup</p>
       {/* <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7qKvTtFJZfdu27Z81B0fOCgDAWLXPUVskbg&usqp=CAU'> </img> */}
       <p style={{position:'absolute',top:120,left:40}}>FSSAI license copy (apply now)</p>
       <p style={{position:'absolute',top:170,left:40}}>Regular GSTIN (apply now)</p>
       <p style={{position:'absolute', top:220,left:40}}>Your restaurant menu</p>
       <p style={{position:'absolute',top:120,left:350}}>PAN card copy</p>
       <p style={{position:'absolute' ,top:170,left:350}}>Bank account details</p>
       <p style={{position:'absolute', top:220,left:350}}>Dish images for top 5 items</p>


     
    </Card>
  );
}

export default CardExample;