import sectionStyle from '../styles/section.module.sass';
import WhatshotTwoToneIcon from '@material-ui/icons/WhatshotTwoTone';

const Sauce = ({ hotLevel, type, border }) => {

  return (
    <span
      className={`${
        border === 'no' ? '' : sectionStyle.sauce
      } d-flex flex-column  ${sectionStyle.flexSauce}`}
    >
      <span
        className={`text-center ${
          type === 'Habanero'
            ? 'text-warning'
            : type === 'Verde'
            ? 'text-success'
            : type === 'Chipotle'
            ? 'text-danger'
            : type === 'Suiza'
            ? 'text-success'
            : 'text-danger'
        }`}
      >
        {type}
      </span>
      <span>
        {[1, 2, 3, 4, 5].map((flame, i) => (
          <WhatshotTwoToneIcon
            className={`${flame > hotLevel ? null : sectionStyle.flameOn} flame`}
            key={i}
          />
        ))}
      </span>
    </span>
  );
};

export default Sauce;
