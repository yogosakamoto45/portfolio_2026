"use client"

import { motion } from "framer-motion"
import { Palette, Users, Code, Sparkles } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const skills = [
  {
    id: "01",
    title: "Design",
    icon: Palette,
    description: "UIデザイン・プロトタイピング・デザインシステム構築",
    items: [
      "Figma",
      "Photoshop", 
      "Illustrator",
      "UI/UX設計",
      "コンポーネント設計",
      "デザインガイドライン",
    ],
  },
  {
    id: "02",
    title: "Direction",
    icon: Users,
    description: "プロジェクト推進・クライアント折衝・品質管理",
    items: [
      "工数管理",
      "クライアント折衝",
      "提案資料作成",
      "アナリティクス検証",
      "ジャーニーマップ作成",
      "デザインレビュー",
    ],
  },
  {
    id: "03",
    title: "Coding",
    icon: Code,
    description: "フロントエンド実装・CMS構築",
    items: [
      "HTML5",
      "CSS3/Sass",
      "JavaScript",
      "jQuery",
      "WordPress",
      "Movable Type",
    ],
  },
  {
    id: "04",
    title: "AI Tools",
    icon: Sparkles,
    description: "AI活用によるデザイン・開発の効率化",
    items: [
      "v0.dev",
      "プロンプト設計",
      "AIプロダクトUI設計",
    ],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6 bg-card">
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
            Skills & Experience
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">スキル & 経験</h2>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              variants={itemVariants}
              className="group relative p-8 rounded-xl bg-background border border-border hover:border-primary/50 transition-colors duration-300"
            >
              {/* Number */}
              <span className="absolute top-6 right-6 text-5xl font-bold text-muted/30 group-hover:text-primary/20 transition-colors">
                {skill.id}
              </span>

              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <skill.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
              
              {/* Description */}
              <p className="text-muted-foreground text-sm mb-6">
                {skill.description}
              </p>

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <Badge 
                    key={item} 
                    variant="secondary"
                    className="text-xs"
                  >
                    {item}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 p-8 rounded-xl border border-primary/30 bg-primary/5"
        >
          <h3 className="text-lg font-bold mb-4 text-primary">最近の取り組み</h3>
          <p className="text-muted-foreground leading-relaxed">
            デザインガイドラインの積極的な浸透を行い、複数チーム間の品質担保意識の底上げを図っています。
            デザインシステムの構築・運用を通じて、プロダクト全体のUI品質向上と開発効率化に貢献しています。
          </p>
        </motion.div>
      </div>
    </section>
  )
}
