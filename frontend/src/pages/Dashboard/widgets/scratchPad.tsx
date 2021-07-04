import AppWidget from '../../../components/AppWidget';
import { saveTextToScratchPad } from '../../../apis/scratch.api';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';

export default function ScratchPad() {
  const [text, setText] = useState('');
  const scratch = useSelector((state: RootState) => state.scratch);

  useEffect(() => {
    setText(scratch.value);
  }, [scratch.value]);

  const saveScratchPadText = async () => {
    await saveTextToScratchPad(text);
  };

  return <AppWidget
    flex={1}
    border={'1px solid #8a813f'}
    background={'#2a2916'}
    titleWidget={<div>
      SCRATCH PAD
    </div>}
  >
    {scratch.error ? <div>{scratch.error}</div> : <textarea
      onBlur={(event) => {
        saveScratchPadText().then(r => {console.log('Scratch Pad saved!');});
      }}
      onChange={(event) => {
        setText(event.target.value);
      }}
      value={text}
      placeholder={'Start typing...'}
      style={{
        width: '100%',
        minHeight: 240,
        backgroundColor: 'transparent',
        border: 'none',
        resize: 'none',
        outline: 'none',
        color: '#fff',
      }}
    />}
  </AppWidget>;
}
