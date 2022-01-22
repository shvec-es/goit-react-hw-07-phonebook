import React from 'react';
import PropTypes from 'prop-types';
import { Text, ButtonItems } from 'styles';
import { TailSpin } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contacts-operations';
import { toast } from 'react-toastify';
import { getLoadingForDelete } from 'redux/contacts/contacts-selectors';

const ContactListItem = ({ id, name, phone }) => {
  const loadingForDelete = useSelector(getLoadingForDelete);
  const dispatch = useDispatch();

  const onDeleteItem = id => {
    dispatch(deleteContact(id));
    toast.success('Contact deleted successfully!');
  };

  return (
    <>
      <tr>
        <td>
          <Text>{name}:</Text>
        </td>
        <td>
          <Text>{phone}</Text>
        </td>
        <td>
          <ButtonItems type="button" onClick={() => onDeleteItem(id)}>
            {loadingForDelete && (
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
            Delete
          </ButtonItems>
        </td>
      </tr>
    </>
  );
};

ContactListItem.propTypes = {
  contacs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    }),
  ),
};

export default ContactListItem;
