import React from "react";

const Hero = () => {
  return (
    <section className="homeHeroPageSection">
      <h2>課題のための</h2>
      <h2 className="secondHeader">ウェブサイト</h2>
      <p>
        このフロントエンドプロジェクトは、<span>NextJS</span>と
        <span>NextAuth</span>を使い、<span>MongoDB</span>
        でデータを管理しました。
      </p>
      <button>ログイン</button>
      <button>登録</button>
    </section>
  );
};

export default Hero;
