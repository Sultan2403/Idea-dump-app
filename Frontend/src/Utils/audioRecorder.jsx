import { useRef, useState } from "react";
import { WavRecorder } from "wavtools";

export default function VoiceTest() {
  const recorder = useRef(new WavRecorder({ sampleRate: 16000, channels: 1 }));
  const [audioUrl, setAudioUrl] = useState(null);

  const start = async () => {
    await recorder.current.begin();
    await recorder.current.record();
  };

  const stop = async () => {
    await recorder.current.pause();
    const wavBlob = await recorder.current.save();
    console.log(wavBlob);
    await recorder.current.end();

    setAudioUrl(wavBlob.url);
  };

  return (
    <div>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      {audioUrl && <audio src={audioUrl} controls />}
    </div>
  );
}
