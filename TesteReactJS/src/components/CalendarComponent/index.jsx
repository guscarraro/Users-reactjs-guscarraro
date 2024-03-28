import React from "react";
import { momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "moment/locale/pt-br"; // Importa o locale pt-br
import "react-big-calendar/lib/css/react-big-calendar.css"; // Importa estilos padrão
import { StyledCalendar } from "./style"; // Importa o StyledCalendar

// Configura o locale do moment para português
moment.locale("pt-br");

const localizer = momentLocalizer(moment);

const MyCalendarComponent = ({ events }) => {
  return (
    <StyledCalendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
      messages={{
        next: "Próximo",
        previous: "Anterior",
        today: "Hoje",
        month: "Mês",
        week: "Semana",
        day: "Dia",
        agenda: "Agenda",
        date: "Data",
        time: "Hora",
        event: "Evento", // Você pode adicionar ou ajustar qualquer texto aqui
        noEventsInRange: "Não há eventos neste período.",
        showMore: (total) => `+ Ver mais (${total})`,
      }}
      // Adicione mais props conforme necessário, como onSelectEvent, onSelectSlot, etc.
    />
  );
};

export default MyCalendarComponent;
