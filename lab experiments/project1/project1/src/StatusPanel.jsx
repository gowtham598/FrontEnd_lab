function StatusPanel({ status, onStatusChange }) {
  const statuses = ['Active', 'Inactive', 'Pending'];

  return (
    <div className="status-panel">
      <h3>Update Status</h3>
      {statuses.map((s) => (
        <button
          key={s}
          className={status === s ? 'active' : ''}
          onClick={() => onStatusChange(s)}
        >
          {s}
        </button>
      ))}
    </div>
  );
}

export default StatusPanel;