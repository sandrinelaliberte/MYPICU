import React from 'react';
import { Button } from 'react-bootstrap';
import PageHeader from 'components/common/PageHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FalconComponentCard from 'components/common/ComponentCard';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';

const calenderCode = `function fullCalendarExample() {  
  return (
    <FullCalendar
      plugins={[ dayGridPlugin,timeGridPlugin ]}
      initialView="dayGridMonth"
      headerToolbar={ {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      }}
      events= 'https://fullcalendar.io/demo-events.json'
    />
  );
}`;

const Figures = () => (
  <>
    <PageHeader
      title="Calendar"
      description="Falcon uses <strong>FullCalendar</strong> for calendar component. FullCalendar seamlessly integrates with the React JavaScript framework. It provides a component that exactly matches the functionality of FullCalendar’s standard API."
      className="mb-3"
    >
      <Button
        href={`https://fullcalendar.io/docs/react`}
        target="_blank"
        variant="link"
        size="sm"
        className="ps-0"
      >
        Full Calendar documentation
        <FontAwesomeIcon icon="chevron-right" className="ms-1 fs-11" />
      </Button>
    </PageHeader>

    <FalconComponentCard noGuttersBottom>
      <FalconComponentCard.Header title="Example" light={false} />
      <FalconComponentCard.Body
        code={calenderCode}
        scope={{ FullCalendar, dayGridPlugin, timeGridPlugin }}
        language="jsx"
      />
    </FalconComponentCard>
  </>
);

export default Figures;
