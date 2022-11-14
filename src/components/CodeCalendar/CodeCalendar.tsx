import styles from "./CodeCalendar.module.css";
import dayjs from 'dayjs'
import { useMemo } from "react";
export function CodeCalendar() {
    const aocStartDate = useMemo(() => dayjs("2022-12-01"), []);
    const daysInMonth = aocStartDate.daysInMonth();

    return <div className={styles.wrapper}>


        <ul className="weekdays">
            <li>Mo</li>
            <li>Tu</li>
            <li>We</li>
            <li>Th</li>
            <li>Fr</li>
            <li>Sa</li>
            <li>Su</li>
        </ul>

        <ul className="days">
            {Array(daysInMonth).map((_, index) => {
                return <li key={index}>{index + 1}</li>
            })}
        </ul>
    </div>
}