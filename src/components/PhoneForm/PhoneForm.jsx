import { useState } from 'react';

import css from './PhoneForm.module.css';

export const PhoneForm = props => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = event => {
    const { name, value } = event.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    props.onSubmit({ name, number });

    setName('');
    setNumber('');
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <form onSubmit={handleSubmit} className={css.form}>
        <label>
          <span className={css.title}>Name</span>
          <input
            className={css.input}
            onChange={handleInputChange}
            value={name}
            name="name"
            type="text"
            required
            placeholder="Enter name"
          />
          <span className={css.title}>Number</span>
          <input
            className={css.input}
            onChange={handleInputChange}
            value={number}
            type="tel"
            name="number"
            required
            placeholder="Number"
            minLength="7"
            maxLength="12"
          />
        </label>
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
};
