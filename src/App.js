import CountdownTimer from './component/timer/CountdownTimer';
import dayjs from 'dayjs';
import { Container } from 'react-bootstrap';
import announcementTimer from './lib/store';
import introSound from './assets/Intro.wav';
import outroSound from './assets/Outro.wav';
import { useSnapshot } from 'valtio';
import { useEffect, useState } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';

function App() {

  const snap = useSnapshot(announcementTimer);

  const[value, setValue] = useState('Hello Testing Web Speech API');
  const {speak, voices,speaking} = useSpeechSynthesis();

  useEffect(() => {
    if(snap.time.seconds === 0 && snap.time.minutes === 0 && snap.time.hours === 0 && snap.time.days === 0){
        speak({text:value, voice: voices[97]});
    }
  }, [snap.time.seconds]);


  return (
    <Container>
      <CountdownTimer className="mt-5" CountdownTimeStamp={dayjs('2022-10-25 24:35', ["YYYY", "YYYY-MM-DD", "HH"])} />
    </Container>
  );
}

export default App;
