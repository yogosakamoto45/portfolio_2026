function Skills() {
  const skills = [
    {
      num: "01",
      title: "Design",
      cap: "UIデザイン・プロトタイピング・デザインシステム構築",
      tags: ["Figma", "Photoshop", "Illustrator", "UI/UX設計", "コンポーネント設計"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path>
          <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"></circle>
          <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"></circle>
          <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"></circle>
          <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle>
        </svg>
      ),
    },
    {
      num: "02",
      title: "Direction",
      cap: "プロジェクト推進・クライアント折衝・品質管理",
      tags: ["工数管理", "クライアント折衝", "提案資料作成", "アナリティクス検証", "ジャーニーマップ作成"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
          <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
          <circle cx="9" cy="7" r="4"></circle>
        </svg>
      ),
    },
    {
      num: "03",
      title: "Coding",
      cap: "フロントエンド実装・CMS構築",
      tags: ["HTML5", "CSS3(Sass)", "JavaScript(jQuery)", "WordPress", "Movable Type"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="m16 18 6-6-6-6"></path>
          <path d="m8 6-6 6 6 6"></path>
        </svg>
      ),
    },
    {
      num: "04",
      title: "AI Tools",
      cap: "AI活用によるデザイン・開発の効率化",
      tags: ["v0.dev", "プロンプト設計", "AIプロダクトUI設計"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
          <path d="M20 2v4"></path>
          <path d="M22 4h-4"></path>
          <circle cx="4" cy="20" r="2"></circle>
        </svg>
      ),
    },
  ];

  return (
    <section className="wrapSkills mB_120sp40" id="skills">
      <h2 className="ttlMiddle">
        SKILLS<span className="sub">スキル &amp; 経験</span>
      </h2>
      <div className="wrapOuter">
        {skills.map((skill) => (
          <div className="card" key={skill.num}>
            <div className="cardIcon">
              <p className="icon">{skill.icon}</p>
              <div className="wrapTitle">
                <p className="num">{skill.num}</p>
                <p className="title">{skill.title}</p>
              </div>
            </div>
            <div className="divider"></div>
            <p className="cap">{skill.cap}</p>
            <p className="skills">
              {skill.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;