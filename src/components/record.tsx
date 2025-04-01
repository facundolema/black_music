import '../styles/styles.css';

export default function Record(
  { bg, children }: { bg: string, children: React.ReactNode }
) {
  return (
    <>
      <div className="vinyl">
        <img src="/record.svg" alt="" />
      </div>
      <div className="cover" style={{ backgroundImage: `url(/${bg}.png)` }}>
        <div className="card">
          {children}
        </div>
      </div>
    </>
  );
}