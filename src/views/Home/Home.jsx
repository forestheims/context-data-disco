import React from 'react';
import EntryList from '../../components/EntryList/EntryList';
import EntryForm from '../../components/EntryForm/EntryForm';

export default function Home() {
  return (
    <>
      <EntryForm />
      <EntryList />
    </>
  );
}
