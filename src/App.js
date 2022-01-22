import React, { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/contacts-operations';
import { useSelector, useDispatch } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TailSpin } from 'react-loader-spinner';
import { Wrapper, Title } from 'styles';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import {
  getError,
  getFilteredContacts,
  getLoadingForFetch,
} from 'redux/contacts/contacts-selectors';

function App() {
  const filteredContacts = useSelector(getFilteredContacts);
  const loadingForFetch = useSelector(getLoadingForFetch);
  const error = useSelector(getError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {error && toast.error(error)}
      {loadingForFetch ? (
        <TailSpin
          color="#00BFFF"
          height="50"
          width="50"
          wrapperStyle={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '50px',
          }}
        />
      ) : (
        <Wrapper>
          <ToastContainer autoClose={2000} theme="colored" />
          <div>
            <Title>Phonebook</Title>
            <ContactForm />
          </div>
          {filteredContacts.length > 0 ? (
            <div>
              <Title>Contacts</Title>
              <Filter />
              <ContactList />
            </div>
          ) : (
            <Title>You don't have contacts</Title>
          )}
        </Wrapper>
      )}
    </>
  );
}

export default App;
