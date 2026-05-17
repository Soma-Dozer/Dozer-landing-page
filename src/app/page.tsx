"use client";

import Image from "next/image";
import styles from "./page.module.css";
import React, { ReactNode, useState } from "react";

export interface AwardByYear {
  year: string;
  items: string[];
}

export interface Social {
  label: string;
  href: string;
}

export interface Career {
  period: string;
  title: string;
  desc: string;
}

export interface Experience {
  date: string;
  title: string;
  desc: string;
  url?: string;
}

export interface Club {
  name: string;
  role: string;
  period: string;
  details: string;
}

export interface Project {
  title: string;
  subtitle?: string;
  description: string;
  link?: string;
}

export interface CveItem {
  id: string;
  badge: string;
}

export interface Cve {
  source: string;
  items: CveItem[];
}

export interface Ip {
  filed: number;
  granted: number;
  etc?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  handle: string;
  role: string;
  oneLiner: string;
  affiliation: string;
  image?: string;
  logo?: string;
  summaryBullets?: string[];
  education?: string[];
  activities?: string[];
  awardsByYear?: AwardByYear[];
  awards?: string[];
  certificates?: string[];
  ip?: Ip;
  socials?: Social[];
  career?: Career[];
  experience?: Experience[];
  clubs?: Club[];
  projects?: Project[];
  cves?: Cve[];
}

export interface How {
  n: string;
  person: string;
  role: string;
  text: string;
}
import siteData from "./data.json";

const team: TeamMember[] = siteData.team;

export default function Home() {
  return (
    <main className={styles.main}>
      <Nav />
      <Hero />
      <Manifesto />
      <TeamSection />
      <WhatWeWant />
      <Footer />
    </main>
  );
}

function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.navInner}>
        <a href="#top" className={styles.navBrand}>
          <span className={styles.navDot} />
          Dozer
        </a>
        <ul className={styles.navLinks}>
          <li>
            <a href="#how">How</a>
          </li>
          <li>
            <a href="#what">What</a>
          </li>
          <li>
            <a href="#team">Team</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <header id="top" className={styles.hero}>
      <div className={styles.heroInner}>

        <h1 className={styles.heroTitle}>
          <span className={styles.heroWord}>Dozer</span>
        </h1>

        <p className={styles.heroSub}>
          제 17기 AI·SW 마에스트로
          <span className={styles.heroSubAccent}>최연소</span>{" "}
          팀
        </p>

        <div className={styles.heroCtas}>
          <a href="#team" className={styles.btnPrimary}>
            팀 보러가기 →
          </a>
          <a href="#what" className={styles.btnGhost}>
            우리가 만드는 것
          </a>
        </div>
      </div>

      <div className={styles.heroGrid} aria-hidden />
    </header>
  );
}

function Manifesto() {
  return (
    <section className={styles.manifesto}>
      <div className={styles.container}>
        <p className={styles.manifestoEyebrow}>OUR BELIEF</p>
        <blockquote className={styles.manifestoQuote}>
          <span className={styles.quoteMark}>"</span>
          무언가 <em className={styles.markText}>깊게 파본 적</em>이 있는
          사람이라면,
          <br />
          무엇을 하든 성공할 것이다.
          <span className={styles.quoteMark}>"</span>
        </blockquote>
        <p className={styles.manifestoSub}>
          Dozer는 이 믿음을 공유하는 세 명이 모여 만든 팀입니다.
        </p>
      </div>
    </section>
  );
}

function TeamSection() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const selectedMember = selectedIndex !== null ? team[selectedIndex] : null;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + team.length) % team.length);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % team.length);
    }
  };

  const renderAwards = () => {
    if (!selectedMember) return null;
    return (
      <>
        {selectedMember.awardsByYear && selectedMember.awardsByYear.length > 0 && (
          <Block title="Selected Awards">
            <div className={styles.awardYears}>
              {selectedMember.awardsByYear.map((g) => (
                <div key={g.year} className={styles.awardYear}>
                  <div className={styles.awardYearLabel}>{g.year}</div>
                  <ul className={styles.bulletStack}>
                    {g.items.map((a) => (
                      <li key={a}>{a}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Block>
        )}

        {selectedMember.awards && selectedMember.awards.length > 0 && (
          <Block title="Selected Awards">
            <ul className={styles.bullet}>
              {selectedMember.awards.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </Block>
        )}
      </>
    );
  };

  return (
    <section id="team" className={styles.section}>
      <div className={styles.container}>
        <SectionHead
          eyebrow="OUR TEAM"
          title={
            <>
              R&R은 명확하게,
              <br />
              <span className={styles.titleAccent}>협업은 유기적으로</span>
            </>
          }
          desc="Dozer는 각자의 작업물을 단순히 넘겨주는 팀이 아니라, 하나의 문제를 정의하고 해결하기 위해 처음부터 끝까지 함께 달리는 팀입니다."
        />

        <div className={styles.teamGrid}>
          {team.map((m: TeamMember, idx: number) => (
            <article
              key={m.id}
              className={styles.profileCard}
              onClick={() => setSelectedIndex(idx)}
            >
              <div className={styles.profileContent}>
                <header className={styles.profileHead}>
                  <h3 className={styles.profileName}>{m.name}</h3>
                </header>
                <div className={styles.profileAffiliation}>{m.affiliation}</div>
                <div className={styles.profileRole}>{m.role}</div>

                {m.summaryBullets && m.summaryBullets.length > 0 && (
                  <ul className={styles.profileBullets}>
                    {m.summaryBullets.map((bullet, bIdx) => (
                      <li key={bIdx}>{bullet}</li>
                    ))}
                  </ul>
                )}

                <div className={styles.profileClickCue}>
                  자세히 보기 &rarr;
                </div>
              </div>
            </article>
          ))}
        </div>

        {selectedMember && selectedIndex !== null && (
          <div className={styles.modalOverlay} onClick={() => setSelectedIndex(null)}>
            <button className={styles.modalPrev} onClick={handlePrev} aria-label="Previous member">
              &#8249;
            </button>
            <button className={styles.modalNext} onClick={handleNext} aria-label="Next member">
              &#8250;
            </button>

            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <button className={styles.modalClose} onClick={() => setSelectedIndex(null)}>
                &times;
              </button>

              <article className={styles.teamCard}>
                <header className={styles.teamHead}>
                  <div className={styles.teamRole}>{selectedMember.role}</div>
                </header>

                <div className={styles.teamTopCard}>
                  <div className={styles.teamTopMain}>
                    <h3 className={styles.teamName}>
                      {selectedMember.name}
                      <span className={styles.teamHandle}>@{selectedMember.handle}</span>
                    </h3>
                    <p className={styles.teamAff}>{selectedMember.affiliation}</p>
                    <p className={styles.teamOne}>{selectedMember.oneLiner}</p>
                  </div>

                  {selectedMember.socials && selectedMember.socials.length > 0 && (
                    <div className={styles.teamSocials}>
                      {selectedMember.socials.map((s) => (
                        <a
                          key={s.label}
                          href={s.href}
                          target="_blank"
                          rel="noreferrer"
                          className={styles.socialChip}
                        >
                          {s.label} ↗
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                <div className={styles.teamBodyFull}>
                  {selectedMember.career && selectedMember.career.length > 0 && (
                    <Block title="Career & Education">
                      <Timeline items={selectedMember.career} kind="period" />
                    </Block>
                  )}

                  {selectedMember.education && selectedMember.education.length > 0 && (
                    <Block title="Education">
                      <ul className={styles.bulletStack}>
                        {selectedMember.education.map((e) => (
                          <li key={e}>{e}</li>
                        ))}
                      </ul>
                    </Block>
                  )}

                  {selectedMember.id === "jaewon" ? (
                    <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
                      {selectedMember.experience && selectedMember.experience.length > 0 && (
                        <Block title="Experience">
                          <ul className={styles.bulletStack}>
                            {selectedMember.experience.map((e) => (
                              <li key={e.title + (e.date || "")}>
                                {e.url ? (
                                  <a href={e.url} target="_blank" rel="noreferrer" style={{ fontWeight: 700, color: "var(--ink)", textDecoration: "underline" }}>
                                    {e.title}
                                  </a>
                                ) : (
                                  <strong>{e.title}</strong>
                                )}
                                {e.date && ` (${e.date})`}
                                {e.desc && ` - ${e.desc}`}
                              </li>
                            ))}
                          </ul>
                        </Block>
                      )}
                      {renderAwards()}
                    </div>
                  ) : (
                    <>
                      {selectedMember.experience && selectedMember.experience.length > 0 && (
                        <Block title="Experience">
                          <ul className={styles.bulletStack}>
                            {selectedMember.experience.map((e) => (
                              <li key={e.title + (e.date || "")}>
                                {e.url ? (
                                  <a href={e.url} target="_blank" rel="noreferrer" style={{ fontWeight: 700, color: "var(--ink)", textDecoration: "underline" }}>
                                    {e.title}
                                  </a>
                                ) : (
                                  <strong>{e.title}</strong>
                                )}
                                {e.date && ` (${e.date})`}
                                {e.desc && ` - ${e.desc}`}
                              </li>
                            ))}
                          </ul>
                        </Block>
                      )}
                    </>
                  )}

                  {selectedMember.activities && selectedMember.activities.length > 0 && (
                    <Block title="Activities">
                      <ul className={styles.bulletStack}>
                        {selectedMember.activities.map((a) => (
                          <li key={a}>{a}</li>
                        ))}
                      </ul>
                    </Block>
                  )}

                  {selectedMember.clubs && selectedMember.clubs.length > 0 && (
                    <Block title="Clubs">
                      <ul className={styles.clubList}>
                        {selectedMember.clubs.map((c) => (
                          <li key={c.name}>
                            <div className={styles.clubHead}>
                              <strong>{c.name}</strong>
                              <span>{c.role}</span>
                            </div>
                            <div className={styles.clubMeta}>{c.period}</div>
                            <div className={styles.clubDetails}>
                              {c.details}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </Block>
                  )}

                  {selectedMember.projects && selectedMember.projects.length > 0 && (
                    <Block title="Projects">
                      <ul className={styles.projList}>
                        {selectedMember.projects.map((p) => (
                          <li key={p.title}>
                            <div className={styles.projHead}>
                              <strong>{p.title}</strong>
                              {p.subtitle && (
                                <span className={styles.projSub}>
                                  {p.subtitle}
                                </span>
                              )}
                            </div>
                            <p className={styles.projDesc}>{p.description}</p>
                            {p.link && (
                              <a
                                href={p.link}
                                target="_blank"
                                rel="noreferrer"
                                className={styles.projLink}
                              >
                                Repository ↗
                              </a>
                            )}
                          </li>
                        ))}
                      </ul>
                    </Block>
                  )}

                  {selectedMember.cves && selectedMember.cves.length > 0 && (
                    <Block title="Vulnerability Reports">
                      <ul className={styles.cveList}>
                        {selectedMember.cves.map((c) => (
                          <li key={c.source}>
                            <div className={styles.cveSource}>{c.source}</div>
                            <div className={styles.cveChips}>
                              {c.items.map((it) => (
                                <span key={it.id} className={styles.cveChip}>
                                  <span className={styles.cveId}>{it.id}</span>
                                  <span className={styles.cveBadge}>
                                    {it.badge}
                                  </span>
                                </span>
                              ))}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </Block>
                  )}

                  {selectedMember.id !== "jaewon" && renderAwards()}

                  {selectedMember.certificates && selectedMember.certificates.length > 0 && (
                    <Block title="Certificates">
                      <ul className={styles.bullet}>
                        {selectedMember.certificates.map((c) => (
                          <li key={c}>{c}</li>
                        ))}
                      </ul>
                    </Block>
                  )}

                </div>
              </article>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function WhatWeWant() {
  return (
    <section id="what" className={styles.whatSection}>
      <div className={styles.container}>
        <SectionHead
          eyebrow="WHAT WE WANT TO BUILD"
          title={
            <>
              중요한 것은 <span className={styles.titleAccent}>Solving</span>이
              아니라
              <br />
              <span className={styles.markBig}>Problem</span>이라고 믿습니다.
            </>
          }
        />

        <div className={styles.whatBody}>
          <p>
            AI의 발전으로 기술 구현 비용은 극적으로 낮아졌습니다. 좋은 Problem을
            발굴하고, 그 도메인을 깊이 이해한 뒤 확장하는 방식으로
            아이디어를 기획합니다.
          </p>

          <div className={styles.compare}>
            <div className={styles.compareCard}>
              <p className={styles.compareLabel}>다른 개발자들이 고민할 때</p>
              <p className={styles.compareQuote}>
                “어떤 스택이 취업에 도움이 될까?”
              </p>
            </div>

            <div className={styles.compareDivider} aria-hidden>
              vs
            </div>

            <div className={`${styles.compareCard} ${styles.compareYellow}`}>
              <p className={styles.compareLabel}>저희는 고민합니다</p>
              <p className={styles.compareQuote}>
                “어떻게 사용자를 더 끌어모으고,
                <br />
                어떻게 운영 비용을 줄일까?”
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



interface TimelineItem {
  period?: string;
  date?: string;
  title: string;
  url?: string;
  desc?: string;
}

interface TimelineProps {
  items: TimelineItem[];
  kind: "period" | "date";
}

function Timeline({ items, kind }: TimelineProps) {
  return (
    <ul className={styles.timeline}>
      {items.map((it) => (
        <li key={(it.period || it.date) + it.title} className={styles.tlItem}>
          <span className={styles.tlPeriod}>
            {kind === "period" ? it.period : it.date}
          </span>
          <span className={styles.tlBody}>
            <strong className={styles.tlTitle}>
              {it.url ? (
                <a
                  href={it.url}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.tlLink}
                >
                  {it.title} ↗
                </a>
              ) : (
                it.title
              )}
            </strong>
            {it.desc && <span className={styles.tlDesc}>{it.desc}</span>}
          </span>
        </li>
      ))}
    </ul>
  );
}

interface BlockProps {
  title: string;
  children: ReactNode;
}

function Block({ title, children }: BlockProps) {
  return (
    <div className={styles.block}>
      <h4 className={styles.blockTitle}>{title}</h4>
      <div>{children}</div>
    </div>
  );
}

interface SectionHeadProps {
  eyebrow: string;
  title: ReactNode;
  desc?: string;
}

function SectionHead({ eyebrow, title, desc }: SectionHeadProps) {
  return (
    <div className={styles.head}>
      <p className={styles.eyebrow}>
        <span className={styles.eyebrowBar} />
        {eyebrow}
      </p>
      <h2 className={styles.headTitle}>{title}</h2>
      {desc && <p className={styles.headDesc}>{desc}</p>}
    </div>
  );
}

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerInner}>
          <div className={styles.footerBrand}>
            <div>
              <div className={styles.footerName}>Dozer</div>
              <div className={styles.footerNote}>
                AI·SW Maestro 17th
              </div>
              <div className={styles.footerCopy} style={{ marginTop: '12px' }}>
                © {new Date().getFullYear()} Team Dozer
              </div>
            </div>
          </div>

          <div className={styles.footerLogos}>
            <Image src="/과기부.png" alt="과학기술정보통신부" width={180} height={40} className={styles.orgLogo} />
            <Image src="/iitp.png" alt="IITP" width={120} height={40} className={styles.orgLogo} />
            <Image src="/ASM.png" alt="Software Maestro" width={160} height={40} className={styles.orgLogo} />
          </div>
        </div>
      </div>
    </footer>
  );
}
