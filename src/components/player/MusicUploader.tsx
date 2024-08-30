import React from 'react';

type MusicUploaderProps = {
  onChangeAudio: (audioSrc: File) => void;
};

export const MusicUploader = ({ onChangeAudio }: MusicUploaderProps) => {
  const handleChangeAudio: React.ChangeEventHandler<HTMLInputElement> = ({
    target: { files },
  }) => {
    if (files && files[0]) {
      onChangeAudio(files[0]);
    }
  };

  return (
    <div>
      <input type={'file'} onChange={handleChangeAudio} />
    </div>
  );
};
