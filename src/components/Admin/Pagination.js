import React, { Component } from 'react';
import { selectPageRequest } from '../../actions/product';
import { connect } from 'react-redux';

const rowPerPage = 2;

class Pagination extends Component {
  constructor(props) {
    super(props);

    this.renderPages = this.renderPages.bind(this);
    this.renderPageButton = this.renderPageButton.bind(this);
    this.selectPage = this.selectPage.bind(this);
  }

  renderPages() {
    const { productList } = this.props.products;
    const totalPage = Math.round((productList.length) / rowPerPage);
    let pageNumbers = [];

    for (let i=1; i<=totalPage; i++) {
      pageNumbers.push(this.renderPageButton(i));
    }
    return pageNumbers;
  }

  renderPageButton(pageNumber) {
    const { page } = this.props.products;
    const active = (pageNumber === page) ? 'active' : '';

    return (
      <li key={pageNumber} className={`page-item ${active}`}>
        <button className="page-link" onClick={() => this.selectPage(pageNumber)}>{pageNumber}</button>
      </li>
    );
  }
  
  selectPage(page) {
    this.props.sendPage(page);
  }

  nextPage() {
    const { page } = this.props.products;

    this.props.sendPage(page+1);
  }

  prevPage() {
    const { page } = this.props.products;

    this.props.sendPage(page-1);
  }

  render() {
    const { productList, page } = this.props.products;
    const totalPage = Math.round((productList.length) / rowPerPage);

    const isNext = (page === totalPage) ? 'disabled' : '';
    const isPrev = (page === 1) ? 'disabled' : '';

    if (productList.length > 0) {
      return (
        <div className="pagination justify-content-center">
          <nav>
            <ul className="pagination">
              <li className={`page-item ${isPrev}`}>
                <button className="page-link" onClick={() => this.prevPage()}>Previous</button>
              </li>

              {this.renderPages()}

              <li className={`page-item ${isNext}`}>
                <button className="page-link" onClick={() => this.nextPage()}>Next</button>
              </li>
            </ul>
          </nav>
        </div>
      );
    }

    return '';
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    products: state.products
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    sendPage: (page) => {
      dispatch(selectPageRequest(page))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pagination)