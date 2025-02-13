import React, { PropsWithChildren } from 'react';

const Container: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className="container">
            {children}
        </div>
    );
};

export default Container;
