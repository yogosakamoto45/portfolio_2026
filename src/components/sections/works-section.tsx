"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { MessageSquare, Calendar, Newspaper, Briefcase, Layout, Camera, CalendarCheck, Music, Waves, Dumbbell } from "lucide-react"
import Image from "next/image"

type WorkItem = {
  id: string
  title: string
  category: string
  icon: React.ComponentType<{ className?: string }>
  background: string
  purpose: string
  approaches: {
    label: string
    description: string
  }[]
  roles: string[]
  featured?: boolean
  thumbnail?: string
}

const works: WorkItem[] = [
  {
    id: "01",
    title: "ビジネスチャットツールのリプレイス",
    category: "BtoB・業務改善",
    icon: MessageSquare,
    background: "コンポーネント設計 / デザインカンプ作成 / 品質管理 / デザインレビュー",
    purpose: "営業活動の効率化を目的に、既存のチャットツールをリプレイス。従来のユーザー体験を尊重しつつ、要望を反映しより快適な利用体験を目指しました。",
    approaches: [
      { label: "既存ユーザーへの配慮", description: "移行時の混乱を避けるため、操作フローや主要要素を可能な限り踏襲。変更点はツールチップやガイドを通じて丁寧に案内。" },
      { label: "レガシーUIの刷新", description: "古く使いづらいデザインを見直し、ユーザーの声をもとに改善。直感的で洗練されたUI/UXへと再設計。" },
      { label: "デザインの一貫性", description: "新旧機能の融合に向け、スタイルガイドを策定。全体のトーンを揃え、統一感ある体験を実現。" },
    ],
    roles: ["UI/UX設計", "サイトマップ", "ジャーニーマップ", "ワイヤーフレーム", "デザインカンプ"],
    featured: true,
    thumbnail: "http://sakamoto45.stars.ne.jp/img/chat_pc.webp",
  },
  {
    id: "02",
    title: "タレントスケジュール管理システム",
    category: "BtoB・管理システム",
    icon: Calendar,
    background: "UI/UX設計（サイトマップ/ジャーニーマップ/ワイヤーフレーム/デザインカンプ）",
    purpose: "大手タレント事務所向けに、マネージャーの業務負荷軽減と役割別の使いやすさを考慮したスケジュール管理システムをリニューアル。",
    approaches: [
      { label: "直観的なカレンダー表示", description: "月・週・日単位で稼働状況を一目で把握できるカレンダーを実装。" },
      { label: "確認画面の廃止", description: "煩雑なオペレーションを軽減化し、操作ステップを削減。" },
      { label: "通知によるアクション誘導", description: "スケジュール変更時に即座に通知される仕組みを設計。" },
      { label: "ユーザー中心設計", description: "インタビューを通じたニーズ把握と改善サイクルを実施。" },
    ],
    roles: ["UI/UX設計", "ワイヤーフレーム", "プロトタイプ", "ユーザーインタビュー"],
    featured: true,
    thumbnail: "http://sakamoto45.stars.ne.jp/img/schedule_pc.webp",
  },
  {
    id: "03",
    title: "専門業種に特化したオウンドメディア",
    category: "メディア・CMS",
    icon: Newspaper,
    background: "CMSカスタマイズ / 制作ディレクション / 品質管理",
    purpose: "専門業種向けの求人サービス立ち上げに先立ち、信頼性ある情報提供を目的としたメディアを構築。",
    approaches: [
      { label: "一貫したブランド設計", description: "専門性を感じさせるトーン＆マナーを統一。" },
      { label: "CMSカスタマイズ", description: "Movable Typeをベースに、必要な機能を備えたテンプレートを作成。" },
    ],
    roles: ["制作ディレクション", "デザイン", "コーディング", "CMS構築"],
    thumbnail: "http://sakamoto45.stars.ne.jp/img/media_pc.webp",
  },
  {
    id: "04",
    title: "求人募集アプリ",
    category: "アプリ開発",
    icon: Briefcase,
    background: "UIデザイン / デザインレビュー / UIコンポーネントの策定",
    purpose: "企業は即日採用、求職者は素早い応募が可能なサービスのニーズに応え、求人アプリを開発。",
    approaches: [
      { label: "直感的UI設計", description: "シンプルな画面構成と操作性で、使いやすさを追求。" },
      { label: "条件に応じた検索機能", description: "希望や経歴に応じた絞り込みが可能。" },
      { label: "信頼性評価システム", description: "レビュー機能で企業と求人情報の透明性を向上。" },
      { label: "モバイル特化UI", description: "GPS・通知を活かした利便性の高いUXを実現。" },
    ],
    roles: ["UIデザイン", "コンポーネント設計", "デザインレビュー"],
    thumbnail: "http://sakamoto45.stars.ne.jp/img/job_sp.webp",
  },
  {
    id: "05",
    title: "ランディングページ作成アプリ",
    category: "ノーコードツール",
    icon: Layout,
    background: "JavaScript設計・実装 / UI/UX設計",
    purpose: "非エンジニアでも簡単にLPを作成できるよう、操作性とリアルタイム性を重視したツールを開発。",
    approaches: [
      { label: "シンプルなUI", description: "誰でも扱いやすい構成とナビゲーションを設計。" },
      { label: "即時反映プレビュー", description: "変更が即座に反映されるリアルタイムプレビューを搭載。" },
      { label: "法令対応支援", description: "キーワードの自動検出と修正支援で表現の適正化をサポート。" },
    ],
    roles: ["情報設計", "デザイン", "JavaScript実装"],
    thumbnail: "http://sakamoto45.stars.ne.jp/img/lp_pc.webp",
  },
  {
    id: "06",
    title: "写真販売サービス",
    category: "EC・サービス",
    icon: Camera,
    background: "情報設計 / デザイン / コーディング",
    purpose: "イベント写真の閲覧・購入を効率的に行うための販売プラットフォームを構築。",
    approaches: [
      { label: "ブランディング強化", description: "色・書体・ロゴを統一し、安心感を与えるデザインに。" },
      { label: "写真登録体験の向上", description: "ドラッグ&ドロップやカテゴリ分けで管理性を向上。" },
    ],
    roles: ["情報設計", "デザイン", "HTML/CSS/JavaScript"],
    thumbnail: "http://sakamoto45.stars.ne.jp/img/photo_pc.webp",
  },
  {
    id: "07",
    title: "写真スタジオ予約サイト",
    category: "予約システム",
    icon: CalendarCheck,
    background: "スケジュール管理 / 情報設計 / アートディレクション",
    purpose: "デバイス別に管理されていた旧サイトを統合し、予約のしやすさと運用性を改善。",
    approaches: [
      { label: "予約フローの簡素化", description: "最小限の入力で完結するフォーム設計。" },
      { label: "レスポンシブ対応", description: "スマホ・PCでの最適な操作体験を提供。" },
      { label: "CMSの活用", description: "WordPressカスタマイズにより非エンジニアでも運用可能に。" },
    ],
    roles: ["アートディレクション", "デザイン", "WordPress構築"],
    thumbnail: "http://sakamoto45.stars.ne.jp/img/studio_pc.webp",
  },
  {
    id: "08",
    title: "音楽イベントチケット販売サイト",
    category: "イベント・EC",
    icon: Music,
    background: "スケジュール管理 / 情報設計 / アートディレクション / UIデザイン",
    purpose: "独自性の高い音楽イベントの魅力を伝えるとともに、スムーズなチケット購入体験を提供。",
    approaches: [
      { label: "テーマの視覚表現", description: "「水×音楽」の世界観をビジュアルで表現。" },
      { label: "ビジュアル訴求", description: "大きな写真・動画でイベントの魅力を明確に伝達。" },
      { label: "購入エリアのわかりやすさ", description: "希望エリアを直感的に選択できるチケットUIを設計。" },
    ],
    roles: ["アートディレクション", "UIデザイン", "コーディング"],
    thumbnail: "http://sakamoto45.stars.ne.jp/img/event_pc.webp",
  },
  {
    id: "09",
    title: "温泉施設予約サイト",
    category: "観光・予約",
    icon: Waves,
    background: "UIデザイン / デザイン素材作成",
    purpose: "予約数の増加を目的に、施設の魅力を効果的に伝えるサイトリニューアルを実施。",
    approaches: [
      { label: "幻想的なビジュアル設計", description: "夜の雰囲気、水面や湯気、灯りを使った情緒あるファーストビューで世界観を表現。" },
      { label: "料理の魅力を訴求", description: "豊富な写真と説明により、季節の料理・地元食材の魅力を強調。" },
      { label: "情報の整理とナビ設計", description: "施設紹介・プラン・メニューなどをユーザー目線で整理。" },
    ],
    roles: ["UIデザイン", "ビジュアルデザイン", "素材制作"],
    thumbnail: "http://sakamoto45.stars.ne.jp/img/spa_pc.webp",
  },
  {
    id: "10",
    title: "パーソナルジム予約サイト",
    category: "フィットネス・予約",
    icon: Dumbbell,
    background: "UIデザイン / デザイン素材作成",
    purpose: "店舗展開にあわせて、サービスの魅力を視覚・内容両面から伝えるサイトを制作。",
    approaches: [
      { label: "視覚的な訴求力", description: "健康的な女性やトレーニング風景のビジュアルでモチベーションを喚起。" },
      { label: "明確なアクション導線", description: "無料体験・問い合わせなど、ユーザー行動を促すボタンを目立たせて配置。" },
      { label: "信頼性の提示", description: "実際の顧客レビューや評価を掲載し、安心感と共感を喚起。" },
    ],
    roles: ["UIデザイン", "コンバージョン設計"],
    thumbnail: "http://sakamoto45.stars.ne.jp/img/gym_pc.webp",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export function WorksSection() {
  const featuredWorks = works.filter(w => w.featured)
  const otherWorks = works.filter(w => !w.featured)

  return (
    <section id="works" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-2">
            Works
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">制作事例</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl">
            業務支援系ツール、BtoBシステム、予約サイトなど、多様なプロジェクトでUI/UX改善を担当してきました。
          </p>
        </motion.div>

        {/* Featured Works */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8 mb-16"
        >
          {featuredWorks.map((work) => (
            <motion.article
              key={work.id}
              variants={itemVariants}
              className="group relative rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 overflow-hidden"
            >
              <div className="flex flex-col lg:flex-row">
                {/* Thumbnail */}
                {work.thumbnail && (
                  <div className="lg:w-2/5 shrink-0">
                    <div className="relative aspect-video lg:aspect-auto lg:h-full overflow-hidden bg-muted">
                      <Image
                        src={work.thumbnail}
                        alt={`${work.title}のスクリーンショット`}
                        fill
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 1024px) 100vw, 40vw"
                        unoptimized
                      />
                    </div>
                  </div>
                )}

                {/* Content */}
                <div className="flex-1 p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <work.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <Badge variant="outline" className="mb-2 text-xs">
                          {work.category}
                        </Badge>
                        <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                          {work.title}
                        </h3>
                      </div>
                    </div>
                    <span className="text-4xl font-bold text-muted/20">
                      {work.id}
                    </span>
                  </div>

                  {/* Purpose */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {work.purpose}
                  </p>

                  {/* Approaches */}
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-primary mb-4">主なアプローチ</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {work.approaches.map((approach, idx) => (
                        <div key={idx} className="p-4 rounded-lg bg-background border border-border">
                          <p className="font-medium text-sm mb-1">{approach.label}</p>
                          <p className="text-muted-foreground text-sm">{approach.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Roles */}
                  <div className="flex flex-wrap gap-2">
                    {work.roles.map((role) => (
                      <Badge key={role} variant="secondary" className="text-xs">
                        {role}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Other Works Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h3 className="text-xl font-bold mb-6">その他の制作事例</h3>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {otherWorks.map((work) => (
            <motion.article
              key={work.id}
              variants={itemVariants}
              className="group rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 overflow-hidden"
            >
              {/* Thumbnail */}
              {work.thumbnail && (
                <div className="relative aspect-video overflow-hidden bg-muted">
                  <Image
                    src={work.thumbnail}
                    alt={`${work.title}のスクリーンショット`}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    unoptimized
                  />
                </div>
              )}

              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <work.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <Badge variant="outline" className="mb-1 text-xs">
                        {work.category}
                      </Badge>
                      <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
                        {work.title}
                      </h3>
                    </div>
                  </div>
                  <span className="text-2xl font-bold text-muted/20">
                    {work.id}
                  </span>
                </div>

                {/* Purpose */}
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {work.purpose}
                </p>

                {/* Key Approaches */}
                <div className="space-y-2 mb-4">
                  {work.approaches.slice(0, 2).map((approach, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <p className="text-sm text-muted-foreground">
                        <span className="text-foreground font-medium">{approach.label}:</span> {approach.description}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Roles */}
                <div className="flex flex-wrap gap-1.5">
                  {work.roles.slice(0, 4).map((role) => (
                    <Badge key={role} variant="secondary" className="text-xs">
                      {role}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
