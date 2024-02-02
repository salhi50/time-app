import * as React from "react";
import Button from "../components/Button";
import {TbArrowsDiagonalMinimize2, TbArrowsDiagonal2} from "react-icons/tb";
import { FaPause, FaPlay } from "react-icons/fa";
import { RxReset } from "react-icons/rx";
import { RiFlag2Fill } from "react-icons/ri";
import classNames from "classnames";
import useFullscreen from "../hooks/useFullscreen";

// Time in centiseconds
function formatCS(timeCS: number) {
  let minutes, seconds, centiseconds;
  let remainder = timeCS;

  minutes = Math.floor(remainder / 6000).toString().padStart(2, '0');
  remainder %= 6000;
  seconds = Math.floor(remainder / 100).toString().padStart(2, '0');
  remainder %= 100;
  centiseconds = remainder.toString().padStart(2, '0');
  
  return `${minutes}:${seconds}.${centiseconds}`;
}

const Stopwatch: React.FC = () => {

  const [timeCS, setTimeCS] = React.useState(0);
  const [isRunning, setIsRunning] = React.useState(false);
  const [laps, setLaps] = React.useState<number[]>([]);
  const timerIdRef = React.useRef<number | undefined>();
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const {fscreenStatus, requestFscreen, existFscreen} = useFullscreen(containerRef);

  React.useEffect(() => {
    if(isRunning) {
      timerIdRef.current = window.setInterval(() => {
        setTimeCS(p => p + 1);
      }, 10);
    }
    return () => window.clearInterval(timerIdRef.current);
  }, [isRunning]);

  const tbody = React.useMemo(() => {
    let rows: React.ReactNode[] = [];
    let i;
    for(i = laps.length - 1; i >= 0; i--) {
      rows.push(
        <tr>
          <td>{i+1}</td>
          <td>{formatCS(laps[i] - (laps[i - 1] || 0))}</td>
          <td>{formatCS(laps[i])}</td>
        </tr>
      )
    }
    return rows;
  }, [laps]);
  
  const [min, sec, cs] = formatCS(timeCS).split(/[.:]/);

  const reset = () => {
    setTimeCS(0);
    setIsRunning(false);
    setLaps([]);
  }

  return (
    <div
      className={classNames({
        "container": true,
        "h-screen bg-dark-900": fscreenStatus === "enabled"
      })} 
      ref={containerRef}
    >
      <div className="flex justify-end">
        <Button
          variant="tertiary"
          shape="square"
          Icon={fscreenStatus === "enabled" ? TbArrowsDiagonalMinimize2 : TbArrowsDiagonal2}
          hidden={fscreenStatus === "unavailable"}
          onClick={fscreenStatus === "enabled" ? existFscreen : requestFscreen}
        />
      </div>
      <div className={classNames({
        "text-center text-display select-none leading-none duration-300 transition-opacity": true,
        "opacity-80": !isRunning,
      })}>
        <span>{min}:</span>
        <span>{sec}.</span>
        <span className="text-[.75em]">{cs}</span>
      </div>
      <div className="flex items-center justify-center space-x-16 my-32">
        <Button
          shape="square" 
          variant="primary" 
          Icon={isRunning ? FaPause : FaPlay}
          onClick={() => setIsRunning(p => !p)}
        />
        <Button 
          shape="square" 
          Icon={RiFlag2Fill}
          disabled={!isRunning}
          onClick={() => setLaps(p => [...p, timeCS])}
        />
        <Button 
          shape="square" 
          Icon={RxReset}
          disabled={timeCS === 0}
          onClick={reset}
        />
      </div>
      <section className={classNames({
        "max-h-[50vh] overflow-auto": true,
        "invisible": laps.length === 0
      })}>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Time</th>
              <th>Total time</th>
            </tr>
          </thead>
          <tbody>{tbody}</tbody>
        </table>
      </section>
    </div>
  )
}

export default Stopwatch;