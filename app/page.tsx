import SayingBody from "./components/sayingBody/SayingBody";
import "@radix-ui/themes/styles.css";
import fetchEntries from "./utils/api/bookInfo";
import page from "./page.module.scss";

export default async function Home() {
  const data = await fetchEntries();

  if (!data) {
    return;
  }
  let fields: any = []; // any is used here since the contentful type returned is overly complicated.

  console.log(data);

  data.items.forEach((item: { fields: SayingType }) => {
    fields.push(item.fields);
  });

  console.log(fields);

  return (
    <div className={page.fullPage}>
      {/* 
      TODO
      top 10 sayings
      generator random saying */}
      <div className={page.page}>
        <SayingBody data={fields} />
      </div>
    </div>
  );
}
