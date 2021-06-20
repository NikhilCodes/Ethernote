import './styles.scss';

interface AppWidgetPropType {
  flex: number;
  titleWidget: any;
  children: any;
  background?: string;
  border?: string;
}

const appWidgetDefaultProps = {
  background: '#1d1d1d',
  border: 'none',
};

export default function AppWidget(props: AppWidgetPropType) {
  props = { ...appWidgetDefaultProps, ...props };

  return (
    <div
      style={{
        backgroundColor: props.background,
        flex: props.flex,
        display: 'flex',
        borderRadius: 10,
        flexDirection: 'column',
        margin: '10px',
        border: props.border,
      }}
    >
      <div className={'widget-title'}>{props.titleWidget}</div>
      <div
        className={'widget-body'}
      >
        {props.children}
      </div>
    </div>
  );
}
