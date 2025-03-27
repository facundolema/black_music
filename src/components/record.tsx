import '../styles/styles.css';

export default function Record(
  { id, children }: { id: Number, children: React.ReactNode }
) {
  return (
    <>
      <div className="vinyl">
        <img src="/record.svg" alt="" />
      </div>
      <div className="cover">
        <div className="card">
          {children}
        </div>
      </div>
    </>
  );
}