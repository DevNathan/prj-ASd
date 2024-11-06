import React, { useState } from "react";

const VoiceRecognition = () => {
  const [transcript, setTranscript] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(
    null,
  );

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const recorder = new MediaRecorder(stream);
    setMediaRecorder(recorder);

    const audioChunks: BlobPart[] = [];
    recorder.ondataavailable = (event) => {
      audioChunks.push(event.data);
    };

    recorder.onstop = async () => {
      const audioBlob = new Blob(audioChunks, { type: "audio/wav" });
      const formData = new FormData();
      formData.append("audio", audioBlob, "audio.wav");

      try {
        const response = await fetch("http://localhost:10100/api/sst", {
          method: "POST",
          body: formData,
        });
        const data = await response.json();
        setTranscript(data.transcript);
      } catch (error) {
        console.error("Error in speech-to-text conversion:", error);
      }
    };

    recorder.start();
    setIsRecording(true);
  };

  const stopRecording = () => {
    mediaRecorder?.stop();
    setIsRecording(false);
  };

  return (
    <div>
      <button onClick={isRecording ? stopRecording : startRecording}>
        {isRecording ? "중지" : "녹음 시작"}
      </button>
      <p>인식된 텍스트: {transcript}</p>
    </div>
  );
};

export default VoiceRecognition;
