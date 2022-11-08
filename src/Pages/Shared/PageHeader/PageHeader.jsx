import React from 'react';

const PageHeader = () => {
    return (
        <div className="p-6 py-12 text-white bg-rose-600">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                    <h2 className="text-center text-6xl tracking-tighter font-bold">Services
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default PageHeader;