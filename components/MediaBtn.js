import mediaStyles from '../styles/mediaBtn.module.sass';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsApp from '@material-ui/icons/WhatsApp';

const MediaBtn = ({ social, link }) => {
  return (
    <div
      className={`mediaBtns ${mediaStyles.btnWrapper} ${
        social == 'Whats'
          ? mediaStyles.whats
          : social == 'Insta'
          ? mediaStyles.insta
          : mediaStyles.face
      }`}
    >
      <a href={link} target="_blank" rel="noopener noreferrer">
        {social == 'Whats' ? (
          <WhatsApp />
        ) : social == 'Insta' ? (
          <InstagramIcon />
        ) : (
          <FacebookIcon />
        )}
      </a>
    </div>
  );
};

export default MediaBtn;
