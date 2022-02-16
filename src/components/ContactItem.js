import Card from './Card'
const ContactItem = (props) => {
    return (
        //Make Card
        <Card>
            <h3>Name: {props.user.name}</h3>
            <h3>Email: {props.user.email}</h3>   
            <h5>Phone: {props.user.phone}</h5>   
            <h5>Address: {props.user.address.street}, {props.user.address.city}</h5>   
        </Card>
    )
}
//  const container ={
//      backgroundColor: '#ced6e0',
    //  display: 'flex',
    // justifyContent: 'space-between',
//  }

export default ContactItem