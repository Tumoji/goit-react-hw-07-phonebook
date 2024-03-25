import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

function ContactList({ listToSearch, deleteFunction }) {
  return (
    <ul>
      {listToSearch.map(contact => (
        <li key={contact.id}>
          <div className={styles.contactInfo}>
            <span className={styles.contactName}>
              {contact.firstName} {contact.lastName}{' '}
            </span>
            <div className={styles.contactNumber}>
              <span className={styles.phoneNumber}>{contact.phone}</span>
            </div>
          </div>
          <button
            onClick={deleteFunction}
            id={contact.id}
            className={styles.button}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  listToSearch: PropTypes.array.isRequired,
  deleteFunction: PropTypes.func.isRequired,
};

export default ContactList;
