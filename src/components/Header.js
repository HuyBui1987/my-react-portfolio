import React from 'react';
import NavTabs from './NavTabs';

export default function Header(props) {
  return (
    <header className="hero">
      <h1 className="headings">Xuan Huy Bui</h1>
      <NavTabs currentPage={props.currentPage} handlePageChange={props.handlePageChange} />
    </header>
  );
}
