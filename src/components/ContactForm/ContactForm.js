import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { TailSpin } from 'react-loader-spinner';
import { Form, Label, Input, Button } from 'styles';
import { addContact } from '../../redux/contacts/contacts-operations';
import {
  getFilteredContacts,
  getLoadingForAdd,
} from '../../redux/contacts/contacts-selectors';
import { toast } from 'react-toastify';

function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const items = useSelector(getFilteredContacts);
  const loadingForAdd = useSelector(getLoadingForAdd);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'phone':
        setPhone(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (items.find(contact => contact.name === name)) {
      clearForm();
      return toast.warning(`${name} is already in contacts!`);
    }

    dispatch(addContact({ name, phone }));
    toast.success('Contact added successfully!');
    clearForm();
  };

  const clearForm = () => {
    setName('');
    setPhone('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name
        <br />
        <Input
          type="text"
          name="name"
          value={name}
          placeholder="Name Surname"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={handleChange}
          required
        />
      </Label>
      <Label>
        Number
        <br />
        <Input
          type="tel"
          name="phone"
          value={phone}
          placeholder="000-000-0000"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          onChange={handleChange}
          required
        />
      </Label>
      <Button type="submit">
        {loadingForAdd && (
          <TailSpin
            color="#00BFFF"
            height="14"
            width="14"
            wrapperStyle={{
              display: 'inline',
              marginRight: '10px',
            }}
          />
        )}
        Add contact
      </Button>
    </Form>
  );
}

ContactForm.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.string,
};

export default ContactForm;
