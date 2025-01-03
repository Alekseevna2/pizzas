import React from 'react'
import Pagination from 'react-paginate'
import styles from'./Pagination.module.scss'

const Pagination = ({onChangePage}) => {
  return (
    <Paginate
      className = {styles.root}
      breaklabel = "..."
      nextLabel = ">"
      previousLabel = "<"
      onPageChange={event => onChangePage(event.selected + 1)}
      pageRangeDisplayed = {4}
      pageCount = {3}
      renderOnZeroPageCount = {null}
    />
  )
}
export default Pagination; 