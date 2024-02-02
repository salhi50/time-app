import * as React from "react";
import clock from "../../public/clock.svg"
import InputField from "../components/InputField";

const localTimeZone = new Intl.DateTimeFormat().resolvedOptions().timeZone;

const Clock: React.FC<{d: Date}> = ({d}) => {
  return (
    <div 
      style={{background: `url(${clock}) center / contain no-repeat`,}}
      className="h-[300px] relative"
    >
      <div 
        className="h-[15%] absolute w-4 left-[calc(50%-2px)] top-[35%] bg-white rounded-t-full origin-[50%_bottom]"
        style={{transform: `rotate(${d.getHours()%12*30}deg)`}}
      />
      <div
        className="h-[30%] absolute w-4 left-[calc(50%-2px)] top-[20%] bg-white rounded-t-full origin-[50%_bottom]"
        style={{transform: `rotate(${6*d.getMinutes()}deg)`}}
      />
      <div
        className="h-[33%] absolute w-2 left-[calc(50%-1px)] top-[17%] bg-danger rounded-t-full origin-[50%_bottom]"
        style={{transform: `rotate(${6*d.getSeconds()}deg)`}}
      />
      <div className="absolute w-[.75em] h-[.75em] rounded-circle bg-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"/>
    </div>
  )
}

const TZRow: React.FC<{tz: string,reload: boolean, hidden: boolean}> = ({tz, reload = true, hidden = false}) => {
  const intl: Intl.DateTimeFormat | null = React.useMemo(() => {
    try {
      return new Intl.DateTimeFormat("en-us", {
        hour: "2-digit",
        minute: "2-digit",
        hourCycle: "h23",
        timeZone: tz,
        timeZoneName: "shortOffset"
      })
    }catch(e) {
      console.error(e);
      return null;
    }
  }, [reload]);
  
  let options: Intl.ResolvedDateTimeFormatOptions | null = null;
  let time = "--:--", offset = "";

  if(intl === null) return null;
  else {
    options = intl.resolvedOptions();
    [time, offset] = intl.format().split(' ');
    if(options.timeZone !== tz) return null;
  }

  return (
    <li
      hidden={hidden}
      className="flex items-center justify-between flex-wrap border-b border-white border-opacity-50 p-8"
    >
      <div className="pr-8">
        {tz === localTimeZone ? (
          <h4 className="text-primary">{localTimeZone}(Local)</h4>
        ): (
          <h4>{tz}</h4>
        )}
        <span className="block text-muted">{offset}</span>
      </div>
      <span className="block text-xl">{time}</span>
    </li>
  )
}

const WorldClock: React.FC = () => {

  const [now, setNow] = React.useState(new Date());
  const [query, setQuery] = React.useState("");
  const [timezones, setTimezones] = React.useState(function () {
    if(typeof Intl.supportedValuesOf !== "function") {
      return [];
    }
    return Intl.supportedValuesOf("timeZone");
  });
  const timerIdRef = React.useRef<number | undefined>();

  React.useEffect(() => {
    if(typeof Intl.supportedValuesOf !== "function") {
      import("../data/tz")
      .then(m => setTimezones(m.default))
      .catch(() => setTimezones([]));
    }
  }, []);

  React.useEffect(() => {
    timerIdRef.current = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(timerIdRef.current);
  }, []);

  const localTime = (
    now.getHours().toString().padStart(2, '0') + ":" +
    now.getMinutes().toString().padStart(2, '0') + ":" +
    now.getSeconds().toString().padStart(2, '0')
  )

  return (
    <div className="container">
      <section className="mb-32">
        <h3>Local time({localTimeZone})</h3>
        <div className="mx-auto text-center max-w-[300px] space-y-24 mt-16">
          <Clock d={now} />
          <div className="text-xl" id="local-time">{localTime}</div>
        </div>
      </section>
      <section className="space-y-16">
        <h3>All timezones</h3>
        <InputField
          id="filter"
          placeholder="Filter"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <ul>
          {timezones.map((tz, indx) => (
            <TZRow
              hidden={query.trim().length > 0 && tz.toLowerCase().indexOf(query.trim().toLowerCase()) === -1}
              reload={now.getSeconds() === 0}
              tz={tz}
              key={indx} />
          ))}
        </ul>
      </section>
    </div>
  )
}

export default WorldClock;