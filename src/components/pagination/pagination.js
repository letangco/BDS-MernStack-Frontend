import React, { Fragment, useState } from 'react';

const FIRST_PAGE = 'FIRST';
const LAST_PAGE = 'LAST';
const PREV_PAGE = 'PREV';
const NEXT_PAGE = 'NEXT';

const range = (from, to, step = 1) => {
  let i = from;
  const range = [];

  while (i <= to) {
    range.push(i);
    i += step;
  }

  return range;
};

function PaginationBasic(props) {
  return (
    <Fragment>
      <nav aria-label="Countries Pagination">
        <ul className="pagination">
          <li className="page-item">
            <a href="http:;;" className="page-link" >
              1
            </a>
          </li>
          <li className="page-item">
            <a href="http:;;" className="page-link" >
              2
            </a>
          </li>
          <li className="page-item">
            <a href="http:;;" className="page-link" >
              3
            </a>
          </li>
          <li className="page-item">
            <a href="http:;;" className="page-link" >
              4
            </a>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
}

export default PaginationBasic;