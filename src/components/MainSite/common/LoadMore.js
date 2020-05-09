import React, { Component } from 'react'

export default class LoadMore extends Component {
    render() {
        const loadMoreBtnStyle = {
            textTransform: 'capitalize',
        };

        return (
            <button 
                style={loadMoreBtnStyle}
                type="button"
                className="btn btn-info load-more-btn btn-lg">
            load more
            </button>
        )
    }
}
