import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div>
        <p>Original project by</p>
        <p className="twitter meg">
          <a target="_blank" href="https://twitter.com/megfdev">
            @megfdev
          </a>
        </p>
        <p className="twitter ivan">
          <a target="_blank" href="https://twitter.com/Ivan00sto">
            @Ivan00Sto
          </a>
        </p>
      </div>
      <div>
        <p>Refactored by </p>
        <p>
          <a
            href="https://twitter.com/zg_dev"
            style={{ color: "var(--turquoise)" }}
          >
            @zg_dev
          </a>
        </p>
      </div>
    </footer>
  );
}
