"use client"

import { motion } from "framer-motion"
import { Mail, MessageCircle, FileText, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const strengths = [
  "20年以上のUI/UX設計経験",
  "BtoB・業務システムに強い",
  "デザインシステム構築・運用",
  "品質管理・レビュー体制構築",
  "クライアント折衝・提案力",
  "Figmaによる効率的な設計",
]

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 bg-card">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-2">
            Contact
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            お気軽にご連絡ください
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            プロジェクトのご相談、面談のご依頼など、お気軽にお問い合わせください。
            新しい挑戦を楽しみにしています。
          </p>
        </motion.div>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="p-8 md:p-12 rounded-2xl bg-background border border-border"
        >
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left: Message */}
            <div>
              <h3 className="text-xl font-bold mb-4">
                ご連絡をお待ちしています
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                UI/UXデザインに関するプロジェクト、業務改善のご相談、
                チームへの参画など、まずはお話しさせていただければ幸いです。
              </p>

              {/* Strengths */}
              <div className="space-y-3">
                <p className="text-sm font-medium text-primary">提供できる価値</p>
                <ul className="grid grid-cols-1 gap-2">
                  {strengths.map((strength) => (
                    <li key={strength} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                      {strength}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: Actions */}
            <div className="flex flex-col justify-center gap-4">
              <Button
                size="lg"
                className="w-full gap-3 h-14 text-base"
                asChild
              >
                <a href="mailto:contact@example.com">
                  <Mail className="w-5 h-5" />
                  メールで問い合わせる
                </a>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="w-full gap-3 h-14 text-base"
                asChild
              >
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  チャットで相談する
                </a>
              </Button>

              <Button
                variant="secondary"
                size="lg"
                className="w-full gap-3 h-14 text-base"
                asChild
              >
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FileText className="w-5 h-5" />
                  スキルシートをダウンロード
                </a>
              </Button>

              <p className="text-xs text-muted-foreground text-center mt-4">
                ※ 通常24時間以内にご返信いたします
              </p>
            </div>
          </div>
        </motion.div>

        {/* Availability Notice */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 p-4 rounded-lg border border-primary/30 bg-primary/5 text-center"
        >
          <p className="text-sm">
            <span className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-primary font-medium">現在、新規案件のご相談を承っております</span>
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
