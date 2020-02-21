import React, { Component } from 'react'
import Categories from './common/Categories'
import mainRoutes from '../../mainRoutes';
import { showPageContent } from '../../common/utils';

export default class MainContent extends Component {
    render() {
        return (
            /* Main content */
            <div className="container">
                <div className="content mb-4">
                    <div className="row">         
                        <Categories />

                        {showPageContent(mainRoutes)}
                    </div>
                </div>
            </div>
            /* End main content */
        )
    }
}
