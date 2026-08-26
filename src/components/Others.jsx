import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

function Others() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const others = [
    {
      id: "04",
      img: "img/thum-pro-mz2.png",
      imgLarge: "img/thum-pro-mz_L.jpg",
      categories: ["SP", "PC"],
      charge: "CMSカスタマイズ/制作ディレクション（デザイン・コーディング）/品質管理",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon" aria-hidden="true">
          <path d="M15 18h-5"></path><path d="M18 14h-8"></path>
          <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2"></path>
          <rect width="8" height="4" x="10" y="6" rx="1"></rect>
        </svg>
      ),
      title: "専門業種に特化したオウンドメディア",
      bgTxt: ["専門業種向けの求人サービス立ち上げに先立ち、信頼性ある情報提供を目的としたメディアを構築しました。"],
      approach: [
        { th: "一貫したブランド設計", td: "専門性を感じさせるトーン＆マナーを統一。" },
        { th: "CMSカスタマイズ", td: "Movable Typeをベースに、必要な機能を備えたテンプレートを作成。" },
        { th: "視覚的情報訴求", td: "図解・イラストを活用し、専門的内容をわかりやすく表現。" },
      ],
      link: "https://www.baitorupro.com/contents/",
    },
    {
      id: "05",
      img: "img/thum-baitoru2.png",
      imgLarge: "img/thum-baitoru_L.jpg",
      categories: ["App"],
      charge: "UIデザイン/デザインレビュー/UIコンポーネントの策定",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon" aria-hidden="true">
          <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
          <rect width="20" height="14" x="2" y="6" rx="2"></rect>
        </svg>
      ),
      title: "求人募集アプリ",
      bgTxt: ["企業は即日採用、求職者は素早い応募が可能なサービスのニーズに応え、求人アプリを開発しました。"],
      approach: [
        { th: "直感的UI設計", td: "シンプルな画面構成と操作性で、使いやすさを追求。" },
        { th: "条件に応じた検索機能", td: "希望や経歴に応じた絞り込みが可能。" },
        { th: "信頼性評価システム", td: "レビュー機能で企業と求人情報の透明性を向上。" },
        { th: "モバイル特化UI", td: "GPS・通知を活かした利便性の高いUXを実現。" },
      ],
      link: "https://spot.baitoru.com/",
    },
    {
      id: "06",
      img: "img/thum-prc_asp2.png",
      imgLarge: "img/thum-prc_asp_L.jpg",
      categories: ["PC"],
      charge: "情報設計/デザイン/コーディング（HTML・CSS・JavaScript）",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon" aria-hidden="true">
          <path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"></path>
          <circle cx="12" cy="13" r="3"></circle>
        </svg>
      ),
      title: "写真販売サービス",
      bgTxt: ["イベント写真の閲覧・購入を効率的に行うための販売プラットフォームを構築しました。"],
      approach: [
        { th: "ブランディング強化", td: "色・書体・ロゴを統一し、安心感を与えるデザインに。" },
        { th: "写真登録体験の向上", td: "ドラッグ&ドロップやカテゴリ分けで管理性を向上。" },
      ],
      link: "https://www.photoreco.com/",
    },
    {
      id: "07",
      img: "img/thum-hpy2.png",
      imgLarge: "img/thum-hpy_L.jpg",
      categories: ["SP", "PC"],
      charge: "情報設計/デザイン/コーディング（HTML・CSS・JavaScript）",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon" aria-hidden="true">
          <path d="M8 2v4"></path><path d="M16 2v4"></path>
          <rect width="18" height="18" x="3" y="4" rx="2"></rect>
          <path d="M3 10h18"></path><path d="m9 16 2 2 4-4"></path>
        </svg>
      ),
      title: "写真スタジオ予約サイト",
      bgTxt: ["デバイス別に管理されていた旧サイトを統合し、予約のしやすさと運用性を改善しました。"],
      approach: [
        { th: "予約フローの簡素化", td: "最小限の入力で完結するフォーム設計。" },
        { th: "レスポンシブ対応", td: "スマホ・PCでの最適な操作体験を提供。" },
        { th: "CMSの活用", td: "WordPressカスタマイズにより非エンジニアでも運用可能に。" },
      ],
      link: "https://www.happilyphoto.jp/",
    },
    {
      id: "08",
      img: "img/thum-ffs2.png",
      imgLarge: "img/thum-ffs_L.jpg",
      categories: ["SP", "PC"],
      charge: "スケジュール管理/情報設計/アートディレクション/ビジュアル・デザイン/コーディング（HTML・CSS・JavaScript）/Word Pressカスタマイズ",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon" aria-hidden="true">
          <path d="M9 18V5l12-2v13"></path>
          <circle cx="6" cy="18" r="3"></circle>
          <circle cx="18" cy="16" r="3"></circle>
        </svg>
      ),
      title: "音楽イベントチケット販売サイト",
      bgTxt: ["独自性の高い音楽イベントの魅力を伝えるとともに、スムーズなチケット購入体験を提供するためのサイトを制作しました。"],
      approach: [
        { th: "テーマの視覚表現", td: "「水×音楽」の世界観をビジュアルで表現（ブルー系・水滴・波紋など）。" },
        { th: "ビジュアル訴求", td: "大きな写真・動画でイベントの魅力を明確に伝達。" },
        { th: "購入エリアのわかりやすさ", td: "希望エリアを直感的に選択できるチケットUIを設計。" },
      ],
      link: "https://funfunfes.jp/splash/",
    },
    {
      id: "09",
      img: "img/thum-aburaya2.png",
      imgLarge: "img/thum-aburaya_L.jpg",
      categories: ["SP", "PC"],
      charge: "スケジュール管理/情報設計/アートディレクション/UIデザイン/コーディング（HTML・CSS・JavaScript）/社内CMSカスタマイズ",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon" aria-hidden="true">
          <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path>
          <path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path>
          <path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path>
        </svg>
      ),
      title: "温泉施設予約サイト",
      bgTxt: ["予約数の増加を目的に、施設の魅力を効果的に伝えるサイトリニューアルを実施しました。"],
      approach: [
        { th: "幻想的なビジュアル設計", td: "夜の雰囲気、水面や湯気、灯りを使った情緒あるファーストビューで、奥伊根の世界観を表現。" },
        { th: "料理の魅力を訴求", td: "豊富な写真と説明により、季節の料理・地元食材の魅力を強調。" },
        { th: "情報の整理とナビ設計", td: "施設紹介・プラン・メニューなどをユーザー目線で整理し、迷わない情報設計を実現。" },
      ],
      link: "https://www.ine-aburaya.com/index.php",
    },
    {
      id: "10",
      img: "img/thum-furdi2.png",
      imgLarge: "img/thum-furdi_L.jpg",
      categories: ["SP", "PC"],
      charge: "UIデザイン/デザイン素材作成",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon" aria-hidden="true">
          <path d="M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z"></path>
          <path d="m2.5 21.5 1.4-1.4"></path><path d="m20.1 3.9 1.4-1.4"></path>
          <path d="M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z"></path>
          <path d="m9.6 14.4 4.8-4.8"></path>
        </svg>
      ),
      title: "パーソナルジム予約サイト",
      bgTxt: ["店舗展開にあわせて、サービスの魅力を視覚・内容両面から伝えるサイトが求められました。"],
      approach: [
        { th: "視覚的な訴求力", td: "健康的な女性やトレーニング風景のビジュアルを使い、モチベーションを喚起。" },
        { th: "明確なアクション導線", td: "無料体験・問い合わせなど、ユーザー行動を促すボタンを目立たせて配置。" },
        { th: "信頼性の提示", td: "実際の顧客レビューや評価を掲載し、安心感と共感を喚起する構成に。" },
      ],
      link: "https://furdi.jp/",
    },
  ];

  const lightboxSlides = others
    .filter((w) => w.imgLarge)
    .map((w) => ({ src: w.imgLarge }));

  const handleOpen = (work) => {
    const index = lightboxSlides.findIndex((s) => s.src === work.imgLarge);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section className="wrapWorks" id="others">
      <h2 className="ttlMiddle">
        OTHERS<span className="sub">その他の制作事例</span>
      </h2>
      <div className="otherList">
        {others.map((work) => (
          <section className="setSec" key={work.id}>
            <div className="wrapSet">
              <div className="imgArea">
                <div className="imgArea_i">
                  <div className="btnView" onClick={() => handleOpen(work)} style={{ cursor: "pointer" }}>
                    <p className="label_view"><span className="icon">VIEW</span></p>
                    <ul className="lstCategory">
                      {work.categories.map((c) => <li key={c}>{c}</li>)}
                    </ul>
                    <img src={work.img} alt="" />
                  </div>
                </div>
                <div className="wrapCharge"><p>{work.charge}</p></div>
              </div>
              <div className="txtArea">
                <h3 className="workTtl">
                  <span className="workTtlNum">
                    <span className="workTtlNumPre">WORK</span>
                    <span className="workTtlNumNum">{work.id}</span>
                  </span>
                  <span className="workTtlTxt">
                    {work.icon}
                    <span className="txt">{work.title}</span>
                  </span>
                </h3>
                <div>
                  <p className="txtTtl"><span>背景・目的</span></p>
                  <div className="mB_40">
                    {work.bgTxt.map((t, i) => <p key={i}>{t}</p>)}
                  </div>
                  <p className="txtTtl"><span>主なアプローチ</span></p>
                  <table className="cmnDSolution">
                    <tbody>
                      {work.approach.map((row, i) => (
                        <tr key={i}>
                          <th>{row.th}</th>
                          <td>{row.td}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {work.link && (
                    <p className="m-btn">
                      <a href={work.link} target="_blank" rel="noreferrer">オフィシャルサイト</a>
                    </p>
                  )}
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={lightboxSlides}
        index={lightboxIndex}
      />
    </section>
  );
}

export default Others;