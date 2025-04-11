import React, { useRef, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import '../style/MyCalendar.css';
import { useNavigate } from 'react-router-dom';

const StudyCalendar = ({ month }) => {
    const calendarRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const calendarApi = calendarRef.current?.getApi();
        if (calendarApi) {
            const newDate = new Date();
            newDate.setMonth(month - 1);
            calendarApi.gotoDate(newDate);
        }
    }, [month]);

    const onDateClick = (info) => {
        navigate(`/study/${info.dateStr}`); // 클릭한 날짜로 이동
    };

    return (
        <div className="calendar-wrap">
            <h2>MakePlanD</h2>
            <FullCalendar
                ref={calendarRef}
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                height="800px"
                dateClick={onDateClick}
            />
        </div>
    );
};

export default StudyCalendar;
