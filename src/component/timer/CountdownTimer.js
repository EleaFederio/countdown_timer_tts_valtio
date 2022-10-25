import { useEffect } from "react";
import { Alert } from "react-bootstrap";
import { proxy, useSnapshot,  } from "valtio";
import { getRemainingTime } from "../../lib/getRemainingTime";
import announcementTimer from "../../lib/store";



const CountdownTimer = ({ CountdownTimeStamp }) => {

    const snap = useSnapshot(announcementTimer);

    useEffect(() => {
        const interval = setInterval(() => {
            updateRemainingTime(CountdownTimeStamp);
        }, 1000);

        return () => clearInterval(interval);
    }, [CountdownTimeStamp]);


    function updateRemainingTime(CountdownTime){
        announcementTimer.time = getRemainingTime(CountdownTime);
    }

    return (
        <Alert>
            <Alert.Heading style={{marginBottom: 0}} >Opening of Bids - 22FL0098</Alert.Heading>
            <p style={{marginBottom: 0}}><b>Remaining Time</b></p>
            <p style={{ marginBottom: '0' }}>day : <b>{snap.time.days}</b> | hours : <b>{snap.time.hours}</b> | minutes : <b>{snap.time.minutes}</b> | seconds : <b>{snap.time.seconds}</b></p>
        </Alert>
    );
}

export default CountdownTimer;