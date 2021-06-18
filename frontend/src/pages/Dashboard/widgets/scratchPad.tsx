import AppWidget from '../../../components/AppWidget';

export default function ScratchPad() {
  return <AppWidget
    flex={1}
    border={'1px solid #8a813f'}
    background={'#2a2916'}
    titleWidget={<div>
      SCRATCH PAD
    </div>}
  >
    <textarea style={{
      width: '100%',
      minHeight: 240,
      backgroundColor: 'transparent',
      border: 'none',
      resize: 'none',
      outline: 'none',
      color: '#fff',
    }} />
  </AppWidget>;
}
