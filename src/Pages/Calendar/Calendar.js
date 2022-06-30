import { format } from 'date-fns';
import React, { useState } from 'react';
import {DayPicker} from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const Calendar = () => {
    const [date, setDate] = useState(new Date ());
    return (
        <div>
            <DayPicker
            mode = "single"
            selected={date}
            onSelect = {setDate}
            />
            <p>You Have Selected: {format(date, 'PP')}</p>
        </div>
    );
};

export default Calendar;