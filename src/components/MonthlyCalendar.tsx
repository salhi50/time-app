import classNames from "classnames";
import * as React from "react";

const months = [
  'January', 'February', 'March', 'April',
  'May', 'June', 'July', 'August',
  'September', 'October', 'November', 'December'
]

const weekDaysShort = [
  "Su", "Mo", "Tu", "We",
  "Th", "Fr", "Sa"
]

const weekDaysIndices = [0,1,2,3,4,5,6];

interface Props {
  year: number;
  monthIndex: number;
}

const MonthlyCalendar: React.FC<Props> = ({year, monthIndex}) => {
  const today = new Date();
  const firstWeekDayIndex = weekDaysIndices[new Date(year, monthIndex).getDay()];
  let cal = [];
  let start = -1 * firstWeekDayIndex + 1;
  let end = start + 42;
  let i, d;

  for(i = start; i < end; i++) {
    d = new Date(year, monthIndex, i);
    cal.push(
      <span className={classNames({
        "opacity-50": d.getMonth() !== monthIndex,
        "bg-primary text-dark-900": d.getMonth() === monthIndex && d.toDateString() === today.toDateString()
      })}>{d.getDate()}</span>
    )
  }

  return (
    <section className="text-center">
      <h3>{months[monthIndex]}</h3>
      <div className="grid grid-cols-7 gap-8">
        {weekDaysShort.map(wd => <span key={wd}>{wd}</span>)}
        {cal}
      </div>
    </section>
  )
}

export default MonthlyCalendar;