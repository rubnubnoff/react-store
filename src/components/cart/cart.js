import React from 'react';
import { withBookstoreService } from '../../hoc';
import { connect } from 'react-redux';
import { compose } from 'redux';

import {
    bookAddedToCart,
    bookRemovedFromCart,
    allBooksRemovedFromCart } from '../../actions';

import './cart.css';

const Cart = ({ cartBooks, onIncrease, onDecrease, onDelete }) => {
    const books = cartBooks.map(({ id, total, count, title, author, price, coverImage }) => {
        return (
            <div className='cart-item' key={id}>
                <div className="book-cover">
                    <img src={coverImage} alt="cover" />
                </div>
                <div className="book-details">
                    <span className="book-title">{title}</span>
                    <div className="book-author">{author}</div>
                    <div className="book-price">Цена за единицу: ${price}</div>
                    <div className='book-count'>Количество книг: {count}</div>
                    <div className='book-total'>Общая цена: ${total}</div>
                    <button
                        onClick={() => onIncrease(id)}
                        className="btn btn-outline-success btn-sm">
                        <i className="fa fa-plus-circle" />
                    </button>
                    <button
                        onClick={() => onDecrease(id)}
                        className="btn btn-outline-warning btn-sm">
                        <i className="fa fa-minus-circle" />
                    </button>
                    <button
                        onClick={() => onDelete(id)}
                        className="btn btn-outline-danger btn-sm">
                        <i className="fa fa-trash-o" />
                    </button>
                </div>
            </div>
        );
    });
    return (
        <div className='cart'>
            {books}
        </div>
    );
}

const mapStateToProps = ({ shoppingCart: { cartItems } }) => ({
    cartBooks: cartItems,
});

const mapDispatchToProps = {
    onIncrease: bookAddedToCart,
    onDecrease: bookRemovedFromCart,
    onDelete: allBooksRemovedFromCart
  };

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(Cart);