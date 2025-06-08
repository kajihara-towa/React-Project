import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { HeaderComponent } from "./components/HeaderComponent";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export const App = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div>
      <HeaderComponent />
      <Calendar
      onChange={onChange}
      value={value}
      calendarType="gregory" // Sunday start, Saturday end
      locale="ja-JP" // Japanese locale
      tileClassName={({ date }) => {
        const day = date.getDay();
        if (day === 0) return "sunday"; // Sunday
        if (day === 6) return "saturday"; // Saturday
        return null;
      }}
      />
      <style>
      {`
        .react-calendar__tile.sunday {
        color: red;
        }
        .react-calendar__tile.saturday {
        color: blue;
        }
      `}
      </style>
    </div>
  );
};
