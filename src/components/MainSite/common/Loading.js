import React from 'react';

function Loading() {
    return (
        <div className="d-flex justify-content-center" style={{ width: '100%' }}>
            <div className="spinner-grow" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
}

export default Loading;
