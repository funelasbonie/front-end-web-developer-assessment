import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© 2025 Geiger</p>
      <p>
        Contact:{" "}
        <a href="mailto:cs@geiger.com" className="link">
          cs@geiger.com
        </a>
      </p>
    </footer>
  );
}
