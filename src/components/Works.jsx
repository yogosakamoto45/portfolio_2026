import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

function Works() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const works = [
    {
      id: "01",
      img: "img/thum-discus2.png",
      imgLarge: "img/thum-discus_L.jpg",
      categories: ["App", "SP", "PC"],
      charge: "コンポーネント設計/デザインカンプ作成/品質管理/デザインレビュー・ファシリテーション",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="icon">
          <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
        </svg>
      ),
      title: "ビジネスチャットツールのリプレイス",
      bg: "背景・目的",
      bgTxt: [
        "営業活動の効率化を目的に、既存のチャットツールをリプレイス。",
        "従来のユーザー体験を尊重しつつ、要望を反映しより快適な利用体験を目指しました。",
      ],
      approach: [
        { th: "既存ユーザーへの配慮", td: "移行時の混乱を避けるため、操作フローや主要要素を可能な限り踏襲。変更点はツールチップやガイドを通じて丁寧に案内しました。" },
        { th: "レガシーUIの刷新", td: "古く使いづらいデザインを見直し、ユーザーの声をもとに改善。直感的で洗練されたUI/UXへと再設計しました。" },
        { th: "デザインの一貫性", td: "新旧機能の融合に向け、スタイルガイドを策定。全体のトーンを揃え、統一感ある体験を実現しました。" },
      ],
      link: "https://www.bluetec.co.jp/ksplus/",
      rev: false,
    },
    {
      id: "02",
      img: "img/thum-ydx2.png",
      imgLarge: "img/thum-ydx_L.jpg",
      categories: ["SP", "PC"],
      charge: "UI/UX設計（サイトマップ/ジャーニーマップ/ワイヤーフレーム/デザインカンプ）",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon" aria-hidden="true">
          <path d="M8 2v4"></path><path d="M16 2v4"></path>
          <rect width="18" height="18" x="3" y="4" rx="2"></rect>
          <path d="M3 10h18"></path>
        </svg>
      ),
      title: "タレントスケジュール管理システム",
      bg: "背景・目的",
      bgTxt: ["大手タレント事務所向けに、マネージャーの業務負荷軽減と役割別の使いやすさを考慮したスケジュール管理システムをリニューアルしました。"],
      approach: [
        { th: "直観的なカレンダー表示", td: "月・週・日単位で稼働状況を一目で把握できるカレンダーを実装。" },
        { th: "確認画面の廃止", td: "確認画面を廃止することで煩雑なオペレーションを軽減化。" },
        { th: "通知によるアクション誘導", td: "スケジュール変更時に即座に通知される仕組みを設計。" },
        { th: "ユーザー中心設計", td: "インタビューを通じたニーズ把握と改善サイクルを実施。" },
      ],
      link: null,
      rev: true,
    },
    {
      id: "03",
      img: "img/thum-jolt-blur.jpg",
      imgLarge: null,
      categories: ["PC"],
      charge: "JavaScript設計・実装、UI/UX設計",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon" aria-hidden="true">
          <rect width="18" height="18" x="3" y="3" rx="2"></rect>
          <path d="M3 9h18"></path><path d="M9 21V9"></path>
        </svg>
      ),
      title: "ランディングページ作成アプリ",
      bg: "背景・目的",
      bgTxt: ["生成AIが普及する以前、ノンコードでLPを量産したいというBtoB向けプロダクトの要望に応えるため、ゼロから設計・実装したLP生成ツール。"],
      approach: [
        { th: "HTML/CSS/JavaScriptによるフロントエンド実装", td: "画像選択・テキスト入力・拡大縮小・移動・色変更といった編集操作をjQueryとCanvasで実装し、最終的に編集内容を一枚の画像として書き出せる仕組みを設計・構築。" },
        { th: "シンプルなUI", td: "誰でも扱いやすい構成とナビゲーションを設計。" },
        { th: "即時反映プレビュー", td: "変更が即座に反映されるリアルタイムプレビューを搭載。" },
        { th: "法令対応支援", td: "キーワードの自動検出と修正支援で表現の適正化をサポート。" },
      ],
      note: "BtoB向けサービスとして開発中、プロジェクト途中で離脱したため公開には至っていない。",
      link: null,
      rev: false,
    },
  ];

  const lightboxSlides = works
    .filter((w) => w.imgLarge)
    .map((w) => ({ src: w.imgLarge }));

  const handleOpen = (work) => {
    if (!work.imgLarge) return;
    const index = lightboxSlides.findIndex((s) => s.src === work.imgLarge);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section className="wrapWorks" id="works">
      <h2 className="ttlMiddle">
        WORKS<span className="sub">近年の制作事例</span>
      </h2>
      <div className="workLst">
        {works.map((work) => (
          <section className="setSec" key={work.id}>
            <div className={`wrapSet sa show${work.rev ? " rev" : ""}`}>
              <div className="imgArea">
                <div className="imgArea_i">
                  {work.imgLarge ? (
                    <div className="btnView" onClick={() => handleOpen(work)} style={{ cursor: "pointer" }}>
                      <p className="label_view"><span className="icon">VIEW</span></p>
                      <ul className="lstCategory">
                        {work.categories.map((c) => <li key={c}>{c}</li>)}
                      </ul>
                      <img src={work.img} alt="" />
                    </div>
                  ) : (
                    <>
                      <ul className="lstCategory">
                        {work.categories.map((c) => <li key={c}>{c}</li>)}
                      </ul>
                      <img src={work.img} alt="" />
                    </>
                  )}
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
                  {work.note && <p>{work.note}</p>}
                  {work.link && (
                    <div className="m-btn">
                      <a href={work.link} target="_blank" rel="noreferrer">オフィシャルサイト</a>
                    </div>
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

export default Works;