import './StatusBadge.css';
import {statusTranslations } from '../../../utils/translations';

const StatusBadge = ({ status }) => {
  const statusClass = status.toLowerCase();

  return (
    <p className={`status-badge ${statusClass}`}>
      {statusTranslations[status]}
    </p>
  );
};

export default StatusBadge;
