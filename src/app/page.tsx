import HeroButton from "./Button";
import Footer from "./header/Footer";

export default function Home() {
  return (
    <>
      <main>
        <section className="homeHeroPageSection">
          <h2>課題のための</h2>
          <h2 className="secondHeader">ウェブサイト</h2>
          <p>
            このフロントエンドプロジェクトは、<span>NextJS</span>と
            <span>NextAuth</span>を使い、<span>MongoDB</span>
            でデータを管理しました。
          </p>
          <HeroButton />
        </section>
      </main>
      <Footer />
    </>
  );
}
