import styled from "styled-components";
import { Calendar } from "react-big-calendar";

// Estilizando o Calendar
export const StyledCalendar = styled(Calendar)`
  height: 500px; // Defina a altura desejada

  .rbc-header {
    background-color: #007bff;
    color: white;
    padding: 10px;
  }

  .rbc-today {
    background-color: #eaf6ff;
  }

  .rbc-event {
    background-color: #007bff;
    color: white;
    border-radius: 4px;
    padding: 4px 8px;
    border: none;
    cursor: pointer;
    &:hover {
      background-color: #0056b3;
    }
  }

  // Adicione mais customizações conforme necessário
`;
