import footer from "./footer.module.scss";

export default function Footer() {
  return (
    <div className={footer.footer}>
      <p className={footer.text}>© 2023 Sausage Enterprises</p>
      <p className={footer.text}>All Rights Reserved.</p>
    </div>
  );
}
