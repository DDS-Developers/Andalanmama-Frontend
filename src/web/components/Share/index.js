import {
  EmailShareButton,
  FacebookShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailIcon,
  FacebookIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
} from 'react-share';
import React from 'react';

const Share = () => (
  <div style={{ display: 'flex', justifyContent: 'end', alignItems: 'center' }}>
    <div style={{ marginRight: '1rem' }}>Bagikan laman ini:</div>
    <EmailShareButton children={<EmailIcon size="40" />} url={window.location.href} />
    <FacebookShareButton children={<FacebookIcon size="40" />} url={window.location.href} />
    <TwitterShareButton children={<TwitterIcon size="40" />} url={window.location.href} />
    <WhatsappShareButton children={<WhatsappIcon size="40" />} url={window.location.href} />
    <TelegramShareButton children={<TelegramIcon size="40" />} url={window.location.href} />
  </div>
);

export default Share;
