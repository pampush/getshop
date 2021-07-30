import React from 'react';

type NotificationType = 'error' | 'success';

interface NotificationProps {
  onClose: () => void;
  duration: number;
  content: string;
  type: NotificationType;
}

/**
 * Autohide notification
 * @param param0 
 * @returns 
 */
function Notification({ onClose, duration, content, type }: NotificationProps) {
  React.useEffect(() => {
    const id = setTimeout(onClose, duration);
    return () => clearTimeout(id);
  }, []);

  return (
    <div className="notification">
      <span className={`${type === 'error' ? 'notification__error' : 'notification__success'}`}>
        {content}
      </span>
    </div>
  );
}

export default Notification;
