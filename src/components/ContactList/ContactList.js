import { useSelector } from 'react-redux';
import { Table } from 'styles';
import ContactListItem from './ContactListItem';
import { getFilteredContacts } from '../../redux/contacts/contacts-selectors';

const ContactList = () => {
  const items = useSelector(getFilteredContacts);

  return (
    <Table>
      <tbody>
        {items.map(item => (
          <ContactListItem key={item.id} {...item} />
        ))}
      </tbody>
    </Table>
  );
};

export default ContactList;
