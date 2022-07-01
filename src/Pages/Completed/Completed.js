import React from 'react';
import CompletedTaskTable from './CompletedTaskTable/CompletedTaskTable';

const Completed = () => {
    return (
        <div>
            <h2 className='my-10 text-2xl font-semibold'>List of completed task table</h2>
            <CompletedTaskTable></CompletedTaskTable>
        </div>
    );
};

export default Completed;