import { useState, useMemo } from 'react';
import { MusicUploader } from './MusicUploader';

export const MusicPlayer = () => {
  const [file, setFile] = useState<File>();

  const audioSrc = useMemo(() => {
    return file && window.URL.createObjectURL(file);
  }, [file]);

  const handleChangeAudio = (audioFile: File) => {
    setFile(audioFile);
  };

  return (
    <div>
      <MusicUploader onChangeAudio={handleChangeAudio} />
      <audio src={audioSrc} controls={true} />
    </div>
  );
};
