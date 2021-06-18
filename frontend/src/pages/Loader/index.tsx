import './styles.scss';

export default function Loader() {
  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div className={'lds-ellipsis'}>
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
}
