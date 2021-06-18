import './styles.scss';
import TopBannerImage from '../../assets/images/763062.jpg';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import moment from 'moment';
import AppWidget from '../../components/AppWidget';
import NotesWidget from './widgets/notes';
import ScratchPad from './widgets/scratchPad';
import RecentlyCaptured from './widgets/recentlyCaptured';

export default function DashboardPage() {
  const hours = new Date().getHours();
  const auth = useSelector((state: RootState) => state.auth);

  const now = moment(new Date());

  return (
    <div
      style={{
        backgroundColor: '#000000',
        width: '100%',
        minHeight: '100vh',
      }}
    >
      <div className={'top-banner'}>
        <img src={TopBannerImage} style={{
          objectFit: 'cover',
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          userSelect: 'none',
          msUserSelect: 'none',
          MozWindowDragging: 'no-drag',
          zIndex: 0,
        }} draggable={false} alt={'banner'} />
        <div style={{ zIndex: 2, position: 'absolute', margin: 30, fontSize: 20 }}>
          <div>
            Good {hours < 12 && hours > 4 ? 'morning' : hours < 18 && hours > 4 ? 'afternoon' : 'evening'}, {auth.user.fullName?.split(' ')[0]}!
          </div>
          <div style={{ fontSize: 13, marginTop: 10 }}>
            {now.format('dddd, MMMM DD, YYYY').toUpperCase()}
          </div>
        </div>
      </div>
      <div className={'app-body'}>
        <div className={'app-row'}>
          <NotesWidget />
        </div>
        <div className={'app-row'}>
          <ScratchPad />
          <RecentlyCaptured />
        </div>
      </div>
    </div>
  );
}
