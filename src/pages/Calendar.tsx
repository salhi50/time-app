import * as React from "react";
import Button from "../components/Button";
import InputField from "../components/InputField";
import MonthlyCalendar from "../components/MonthlyCalendar";

const YEAR_MIN = 1000;
const YEAR_MAX = 3999;

function generateYearlyCalendar(year = new Date().getFullYear()) {
  let cal = [];
  let i;

  for(i = 0; i < 12; i++) {
    cal.push(
      <MonthlyCalendar key={i} year={year} monthIndex={i} />
    )
  }

  return cal;
}

const Calendar: React.FC = () => {

  const [yearlyCal, setYearlyCal] = React.useState(generateYearlyCalendar);
  const yearInputRef = React.useRef<HTMLInputElement | null>(null);

  const currYear = new Date().getFullYear();

  function handleGenerate() {
    let year;
    if(yearInputRef.current) {
      year = parseInt(yearInputRef.current.value, 10);
      if(isNaN(year)) return;
      if(year < YEAR_MIN || year > YEAR_MAX) {
        alert(`Out of range Min(${YEAR_MIN}), Max(${YEAR_MAX})`);
        return;
      }
      setYearlyCal(generateYearlyCalendar(year));
    }
  }

  function handleToday() {
    if(yearInputRef.current) {
      yearInputRef.current.value = currYear.toString();
      setYearlyCal(generateYearlyCalendar(currYear));
    }
  }

  return (
    <div className="container">
      <div className="flex mb-24 flex-wrap justify-between">
        <div className="space-x-8 flex my-8">
          <InputField
            placeholder="YYYY"
            type="number"
            defaultValue={currYear}
            ref={yearInputRef}
          />
          <Button
            label="Generate"
            variant="primary"
            onClick={handleGenerate}
          />
        </div>
        <Button
          label="Today"
          variant="secondary"
          className="my-8"
          onClick={handleToday}
        />
      </div>
      <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-3">
        {yearlyCal}
      </div>
    </div>
  )
}

export default Calendar;