import React, { useRef, useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import Modal from 'react-modal';
import '../style/MyCalendar.css';

Modal.setAppElement('#root');

const MyCalendar = ({ month }) => {

    const calendarRef = useRef(null);

    const [list, setList] = useState([
        { id: '1', title: '병민이형', start: '2025-04-10', end: '2025-04-10' },
        { id: '2', title: '안녕하세요', start: '2025-04-12', end: '2025-04-12' }
    ]);

    const [modalOpen, setModalOpen] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);

    const [input, setInput] = useState({
        title: '',
        start: '',
        end: ''
    });

    useEffect(() => {
        const calendarApi = calendarRef.current?.getApi();
        if (calendarApi) {
            const newDate = new Date();
            newDate.setMonth(month - 1);
            calendarApi.gotoDate(newDate);
        }
    }, [month]);


    console.log(input)


    const onDateClick = (info) => {
        setSelectedEvent(null);
        setInput({
            title: '',
            start: info.dateStr,
            end: info.dateStr
        });
        setModalOpen(true);
    };

    const onEventClick = (info) => {
        const item = info.event;
        setSelectedEvent(item);
        setInput({
            title: item.title,
            start: item.startStr.slice(0, 10),
            end: item.endStr?.slice(0, 10) || item.startStr.slice(0, 10)
        });
        setModalOpen(true);
    };

    const handleSave = () => {
        if (!input.title.trim()) return;

        const addOneDay = (dateStr) => {
            const date = new Date(dateStr);
            if (isNaN(date.getTime())) return null;
            date.setDate(date.getDate() + 1);
            return date.toISOString().slice(0, 10);
        };

        const adjustedEnd = input.end && input.start !== input.end
            ? addOneDay(input.end)
            : input.start;

        if (selectedEvent) {
            setList((prev) =>
                prev.map((event) =>
                    event.id === selectedEvent.id
                        ? { ...event, title: input.title, start: input.start, end: adjustedEnd }
                        : event
                )
            );
        } else {
            const newId = new Date().getTime().toString();
            setList([
                ...list,
                {
                    id: newId,
                    title: input.title,
                    start: input.start,
                    end: adjustedEnd
                }
            ]);
        }

        setModalOpen(false);
        setSelectedEvent(null);
    };

    const handleDelete = () => {
        if (!selectedEvent) return;
        setList((prev) => prev.filter((event) => event.id !== selectedEvent.id));
        setModalOpen(false);
        setSelectedEvent(null);
    };

    const onSelect = (info) => {
        const start = new Date(info.startStr);
        const end = new Date(info.endStr);
        const gap = (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24);
        if (gap <= 1) return;

        const title = prompt('일정 제목을 입력하세요:');
        if (!title || title.trim() === '') return;

        const newId = new Date().getTime().toString();
        setList([
            ...list,
            {
                id: newId,
                title,
                start: info.startStr,
                end: info.endStr,
                allDay: info.allDay
            }
        ]);
    };

    return (
        <div className='calendar-wrap'>
            <h2>MakePlanD</h2>
            <FullCalendar
                ref={calendarRef}
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                height="800px"
                dateClick={onDateClick}
                eventClick={onEventClick}
                selectable={true}
                select={onSelect}
                events={list}
                eventDataTransform={(data) => ({
                    ...data,
                    id: data.id?.toString()
                })}
                eventContent={(arg) => {
                    const date = arg.event.startStr.slice(0, 10);
                    const count = list.filter(item => item.start.slice(0, 10) === date).length;
                    if (count === 1) {
                        const wrapper = document.createElement('div');
                        wrapper.style.backgroundColor = '#3788d8';
                        wrapper.style.color = '#fff';
                        wrapper.style.padding = '4px 6px';
                        wrapper.style.borderRadius = '6px';
                        wrapper.style.fontSize = '14px';
                        wrapper.style.fontWeight = 'normal';
                        wrapper.style.textAlign = 'left';
                        wrapper.style.display = 'block';
                        wrapper.style.width = '100%';
                        wrapper.textContent = arg.event.title;
                        return { domNodes: [wrapper] };
                    }
                    return { html: <div>${arg.event.title}</div> };
                }}
            />

            <Modal
                isOpen={modalOpen}
                onRequestClose={() => {
                    setModalOpen(false);
                    setSelectedEvent(null);
                }}
                style={{
                    overlay: {
                        backgroundColor: 'rgba(0, 0, 0, 0.4)',
                        zIndex: 999
                    },
                    content: {
                        width: '320px',
                        height: '320px',
                        padding: '20px',
                        borderRadius: '12px',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                        zIndex: 1000,
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)'
                    }
                }}
            >
                <h2>{selectedEvent ? '일정 수정' : '일정 추가'}</h2>

                <label>제목</label>
                <input
                    type="text"
                    value={input.title}
                    onChange={(e) => setInput({ ...input, title: e.target.value })}
                    className="modal-input"
                />

                <label>시작 날짜</label>
                <input
                    type="date"
                    value={input.start}
                    onChange={(e) => setInput({ ...input, start: e.target.value })}
                    className="modal-input"
                />

                <label>종료 날짜</label>
                <input
                    type="date"
                    value={input.end}
                    onChange={(e) => setInput({ ...input, end: e.target.value })}
                    className="modal-input"
                />

                <div className="modal-btn-wrap">
                    <button onClick={handleSave} className="modal-btn save">
                        {selectedEvent ? '수정' : '추가'}
                    </button>
                    {selectedEvent && (
                        <button onClick={handleDelete} className="modal-btn delete">
                            삭제
                        </button>
                    )}
                </div>
            </Modal>
        </div>
    );
};

export default MyCalendar;