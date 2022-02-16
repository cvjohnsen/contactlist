import ContactItem from "./ContactItem"


const ContactList = ({users}) => {
    return (
        <div>
             {users.map((contact) => <ContactItem user={contact} key={contact.id}/> )}
        </div>

    )
}

export default ContactList