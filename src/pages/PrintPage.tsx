import { sessions } from '@/data/sessions'
import { scenarios } from '@/data/scenarios'
import { educationalEffects, competencyMilestones } from '@/data/educational-effects'

/* ════════════════════════════════════════════
   DESIGN TOKENS (Light / Professional)
   ════════════════════════════════════════════ */
const T = {
  // Backgrounds
  white: '#FFFFFF',
  bg: '#F8FAFC',
  bgSubtle: '#F1F5F9',
  bgCard: '#FFFFFF',

  // Text
  ink: '#0F172A',
  inkSecondary: '#334155',
  inkMuted: '#64748B',
  inkLight: '#94A3B8',

  // Brand
  brand: '#0EA5E9',
  brandDark: '#0284C7',
  brandBg: '#F0F9FF',

  // Accents
  purple: '#7C3AED',
  purpleBg: '#F5F3FF',
  amber: '#D97706',
  amberBg: '#FFFBEB',
  green: '#059669',
  greenBg: '#ECFDF5',
  red: '#DC2626',
  redBg: '#FEF2F2',

  // Borders / Shadows
  border: '#E2E8F0',
  borderLight: '#F1F5F9',
  shadow: '0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)',
  shadowMd: '0 4px 12px rgba(0,0,0,0.06), 0 2px 4px rgba(0,0,0,0.04)',
  shadowLg: '0 8px 24px rgba(0,0,0,0.08), 0 4px 8px rgba(0,0,0,0.04)',

  // Radii
  r: 8,
  rMd: 12,
  rLg: 16,
  rXl: 20,
  rFull: 9999,
}

/* ════════════════════════════════════════════
   ATOMS — Smallest reusable UI primitives
   ════════════════════════════════════════════ */

function SectionLabel({ children, color = T.brand }: { children: React.ReactNode; color?: string }) {
  return (
    <span style={{
      fontSize: 11, fontWeight: 700, letterSpacing: 2.5, textTransform: 'uppercase' as const,
      color, display: 'block', marginBottom: 8,
    }}>{children}</span>
  )
}

function Badge({ children, bg, color }: { children: React.ReactNode; bg: string; color: string }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', padding: '4px 12px',
      borderRadius: T.rFull, fontSize: 11, fontWeight: 700,
      backgroundColor: bg, color,
    }}>{children}</span>
  )
}

function NumberCircle({ n, color, size = 28 }: { n: number | string; color: string; size?: number }) {
  return (
    <div style={{
      width: size, height: size, borderRadius: T.rFull, flexShrink: 0,
      backgroundColor: color, display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: size * 0.42, fontWeight: 800, color: T.white,
    }}>{n}</div>
  )
}

function Tag({ children, color = T.brand }: { children: React.ReactNode; color?: string }) {
  return (
    <span style={{
      display: 'inline-block', padding: '3px 10px', borderRadius: 6,
      fontSize: 11, fontWeight: 600, color,
      backgroundColor: `${color}10`, border: `1px solid ${color}20`,
    }}>{children}</span>
  )
}

/* ════════════════════════════════════════════
   MOLECULES — Composed from atoms
   ════════════════════════════════════════════ */

function OutcomeItem({ n, text, color }: { n: number; text: string; color: string }) {
  return (
    <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
      <NumberCircle n={n} color={color} size={24} />
      <span style={{ fontSize: 13.5, color: T.inkSecondary, lineHeight: 1.55, flex: 1 }}>{text}</span>
    </div>
  )
}

function SegmentBar({ segments, color }: { segments: typeof sessions[0]['segments']; color: string }) {
  return (
    <div>
      <div style={{ display: 'flex', gap: 3, height: 40, borderRadius: T.r }}>
        {segments.map((seg, i) => {
          const opacity = 0.55 + i * 0.1
          return (
            <div key={i} style={{
              flex: seg.hours, borderRadius: 6, overflow: 'hidden',
              backgroundColor: color, opacity,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: seg.hours >= 0.8 ? 11 : 9, fontWeight: 700, color: T.white,
              whiteSpace: 'nowrap' as const,
            }}>
              {seg.hours >= 0.8 ? seg.title : ''}
            </div>
          )
        })}
      </div>
      <div style={{ display: 'flex', gap: 3, marginTop: 3 }}>
        {segments.map((seg, i) => (
          <div key={i} style={{ flex: seg.hours, textAlign: 'center' as const, fontSize: 10, color: T.inkLight, fontWeight: 600 }}>
            {seg.hours}h
          </div>
        ))}
      </div>
    </div>
  )
}

function SegmentRow({ seg, color }: { seg: typeof sessions[0]['segments'][0]; color: string }) {
  return (
    <div style={{
      display: 'flex', gap: 14, padding: '12px 16px',
      borderRadius: T.rMd, border: `1px solid ${T.border}`, backgroundColor: T.white,
      alignItems: 'center', flex: 1,
    }}>
      <NumberCircle n={seg.order} color={color} size={30} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2 }}>
          <span style={{ fontSize: 14, fontWeight: 700, color: T.ink }}>{seg.title}</span>
          <Badge bg={`${color}10`} color={color}>{seg.hours}h</Badge>
        </div>
        <div style={{ fontSize: 12.5, color: T.inkMuted, lineHeight: 1.45 }}>{seg.content}</div>
      </div>
    </div>
  )
}

function FlowTableRow({ step, color, isLast }: {
  step: { time: string; activity: string; growfitAction: string }; color: string; isLast: boolean
}) {
  return (
    <div style={{
      display: 'grid', gridTemplateColumns: '90px 1fr 1fr',
      borderBottom: isLast ? 'none' : `1px solid ${T.borderLight}`,
    }}>
      <div style={{ padding: '11px 14px', fontSize: 13, fontWeight: 700, color }}>{step.time}</div>
      <div style={{ padding: '11px 14px', fontSize: 13, color: T.ink, lineHeight: 1.4 }}>{step.activity}</div>
      <div style={{ padding: '11px 14px', fontSize: 12, color: T.inkMuted, lineHeight: 1.4 }}>{step.growfitAction}</div>
    </div>
  )
}

/* ════════════════════════════════════════════
   ORGANISMS — Full slide components
   ════════════════════════════════════════════ */

/* ─── 1. COVER ─── */
function CoverSlide() {
  return (
    <div className="slide" style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      background: `linear-gradient(160deg, #0B1120 0%, #162033 50%, #0F172A 100%)`,
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Decorative rings */}
      <div style={{
        position: 'absolute', width: 600, height: 600, borderRadius: '50%',
        border: '1px solid rgba(14,165,233,0.08)', top: -200, right: -150,
      }} />
      <div style={{
        position: 'absolute', width: 400, height: 400, borderRadius: '50%',
        border: '1px solid rgba(139,92,246,0.06)', bottom: -150, left: -100,
      }} />

      {/* Company badge */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 10, marginBottom: 40,
        padding: '8px 24px', borderRadius: T.rFull,
        border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.04)',
      }}>
        <div style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: T.brand }} />
        <span style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.6)', letterSpacing: 3 }}>
          BCT ONE · GrowFit
        </span>
      </div>

      <h1 style={{ fontSize: 76, fontWeight: 900, color: '#fff', margin: 0, letterSpacing: -2, lineHeight: 1.05 }}>
        에이전트 클래스
      </h1>
      <h2 style={{ fontSize: 28, fontWeight: 300, color: 'rgba(255,255,255,0.5)', margin: '12px 0 0', letterSpacing: 4 }}>
        AI 교육 커리큘럼
      </h2>

      {/* Stats */}
      <div style={{
        display: 'flex', gap: 0, marginTop: 60, borderRadius: T.rLg,
        background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
      }}>
        {[
          { v: '8', l: '차시' }, { v: '40', l: '시간' }, { v: '3', l: '단계' }, { v: '10', l: '시나리오' },
        ].map((s, i) => (
          <div key={i} style={{
            padding: '22px 36px', textAlign: 'center' as const,
            borderRight: i < 3 ? '1px solid rgba(255,255,255,0.06)' : 'none',
          }}>
            <div style={{ fontSize: 36, fontWeight: 800, color: '#fff' }}>{s.v}</div>
            <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', marginTop: 4 }}>{s.l}</div>
          </div>
        ))}
      </div>

      {/* Milestone flow */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 36 }}>
        {competencyMilestones.map((m, i) => (
          <div key={m.layer} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            {i > 0 && <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: 18 }}>→</span>}
            <span style={{
              padding: '7px 20px', borderRadius: T.rFull, fontSize: 13, fontWeight: 700,
              color: '#fff', backgroundColor: m.color,
            }}>{m.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ─── 2. EFFECTS ─── */
function EffectsSlide() {
  const icons = ['⚖️', '🎛️', '📝', '🗃️', '🤖', '📊']
  return (
    <div className="slide" style={{
      padding: '52px 60px', background: T.white,
      display: 'flex', flexDirection: 'column',
    }}>
      <SectionLabel>Educational Effects</SectionLabel>
      <h2 style={{ fontSize: 36, fontWeight: 800, color: T.ink, margin: '0 0 6px', lineHeight: 1.2 }}>
        GrowFit 수업이 만드는 <span style={{ color: T.brand }}>6가지 변화</span>
      </h2>
      <p style={{ fontSize: 15, color: T.inkMuted, margin: '0 0 28px' }}>
        단순한 도구 소개가 아닌, 측정 가능한 교육 효과를 만들어냅니다
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16, flex: 1 }}>
        {educationalEffects.map((e, i) => (
          <div key={e.id} style={{
            borderRadius: T.rLg, padding: '22px 22px 18px',
            border: `1px solid ${T.border}`, backgroundColor: T.bg,
            display: 'flex', flexDirection: 'column', boxShadow: T.shadow,
          }}>
            <div style={{
              width: 44, height: 44, borderRadius: T.rMd,
              backgroundColor: T.white, border: `1px solid ${T.border}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 22, marginBottom: 14, boxShadow: T.shadow,
            }}>{icons[i]}</div>
            <h3 style={{ fontSize: 16, fontWeight: 700, color: T.ink, margin: '0 0 8px' }}>{e.title}</h3>
            <p style={{ fontSize: 13, fontWeight: 600, color: T.brand, margin: '0 0 10px', lineHeight: 1.45, flex: 1 }}>
              {e.metric}
            </p>
            <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
              {e.sessions.slice(0, 4).map((s) => (
                <Tag key={s} color={T.brand}>차시 {s}</Tag>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ─── 3. CURRICULUM MAP ─── */
function CurriculumMapSlide() {
  return (
    <div className="slide" style={{
      padding: '48px 56px', background: T.white,
      display: 'flex', flexDirection: 'column',
    }}>
      <SectionLabel color={T.purple}>Curriculum Overview</SectionLabel>
      <h2 style={{ fontSize: 34, fontWeight: 800, color: T.ink, margin: '0 0 24px' }}>
        3단계 역량 성장 여정
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, flex: 1 }}>
        {competencyMilestones.map((m, mi) => {
          const layerSessions = sessions.filter((s) => m.sessions.includes(s.id))
          return (
            <div key={m.layer} style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              {mi > 0 && (
                <div style={{ display: 'flex', justifyContent: 'center', margin: '-3px 0', zIndex: 2, position: 'relative' }}>
                  <div style={{
                    width: 28, height: 28, borderRadius: T.rFull,
                    backgroundColor: T.white, border: `2px solid ${m.color}40`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 12, color: m.color, boxShadow: T.shadow,
                  }}>▼</div>
                </div>
              )}
              <div style={{
                flex: 1, display: 'flex', gap: 20, alignItems: 'stretch',
                borderRadius: T.rLg, padding: '16px 20px',
                backgroundColor: `${m.color}06`, border: `1px solid ${m.color}18`,
              }}>
                {/* Label */}
                <div style={{ width: 160, flexShrink: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <Badge bg={m.color} color={T.white}>
                    {m.layer.charAt(0).toUpperCase() + m.layer.slice(1)}
                  </Badge>
                  <div style={{ fontSize: 15, fontWeight: 700, color: T.ink, marginTop: 8 }}>{m.label}</div>
                  <div style={{ fontSize: 11.5, color: T.inkMuted, marginTop: 4, lineHeight: 1.45 }}>{m.outcome}</div>
                </div>

                {/* Cards */}
                <div style={{ display: 'flex', gap: 12, flex: 1 }}>
                  {layerSessions.map((s) => (
                    <div key={s.id} style={{
                      flex: 1, borderRadius: T.rMd, padding: '14px 16px',
                      backgroundColor: T.white, border: `1px solid ${T.border}`,
                      boxShadow: T.shadow,
                    }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                        <NumberCircle n={s.id} color={s.color} size={36} />
                        <span style={{ fontSize: 12, fontWeight: 700, color: T.inkLight }}>{s.hours}h</span>
                      </div>
                      <div style={{ fontSize: 14, fontWeight: 700, color: T.ink, lineHeight: 1.3, marginBottom: 6 }}>{s.title}</div>
                      <div style={{ fontSize: 10.5, color: T.inkLight, lineHeight: 1.4 }}>
                        {s.segments.map(seg => seg.title).join(' · ')}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

/* ─── 4. SESSION SLIDES ─── */
function SessionSlide({ session }: { session: typeof sessions[0] }) {
  const c = session.color

  return (
    <div className="slide" style={{ display: 'flex', background: T.white }}>
      {/* LEFT — Info panel */}
      <div style={{
        width: 440, flexShrink: 0, padding: '44px 36px',
        background: `linear-gradient(170deg, ${c}08 0%, ${c}04 100%)`,
        borderRight: `1px solid ${T.border}`,
        display: 'flex', flexDirection: 'column',
      }}>
        {/* Number & title */}
        <div style={{
          width: 72, height: 72, borderRadius: T.rXl,
          backgroundColor: c, display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 38, fontWeight: 900, color: T.white,
          marginBottom: 18, boxShadow: `0 6px 20px ${c}30`,
        }}>{session.id}</div>

        <div style={{ fontSize: 12, fontWeight: 600, color: T.inkLight, marginBottom: 4, letterSpacing: 0.5 }}>
          차시 {session.id} · {session.sourceChapters}
        </div>
        <h2 style={{ fontSize: 26, fontWeight: 800, color: T.ink, margin: '0 0 4px', lineHeight: 1.2 }}>
          {session.title}
        </h2>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 20 }}>
          <span style={{ fontSize: 24, fontWeight: 800, color: c }}>{session.hours}h</span>
          <span style={{ fontSize: 12, color: T.inkMuted }}>· {session.segments.length}개 세션</span>
        </div>

        {/* Learning outcomes card */}
        <div style={{
          borderRadius: T.rMd, padding: '16px 18px', flex: 1,
          backgroundColor: T.white, border: `1px solid ${c}20`,
          boxShadow: T.shadow,
        }}>
          <div style={{
            fontSize: 12, fontWeight: 700, color: c, marginBottom: 14,
            display: 'flex', alignItems: 'center', gap: 6,
          }}>
            <span style={{ width: 16, height: 2, backgroundColor: c, borderRadius: 1 }} />
            이 차시를 마치면
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {session.learningOutcomes?.map((o, i) => (
              <OutcomeItem key={i} n={i + 1} text={o} color={c} />
            ))}
          </div>
        </div>

        {/* Key concepts */}
        {session.keyConceptsIntroduced?.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginTop: 14 }}>
            {session.keyConceptsIntroduced.map((k) => (
              <Tag key={k} color={T.purple}>{k}</Tag>
            ))}
          </div>
        )}
      </div>

      {/* RIGHT — Schedule */}
      <div style={{ flex: 1, padding: '44px 36px', display: 'flex', flexDirection: 'column' }}>
        <div style={{
          fontSize: 13, fontWeight: 700, color: T.ink, marginBottom: 14,
          display: 'flex', alignItems: 'center', gap: 8,
        }}>
          <span style={{ width: 16, height: 2, backgroundColor: c, borderRadius: 1 }} />
          {session.hours}시간 수업 구성
        </div>

        <SegmentBar segments={session.segments} color={c} />

        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 7, marginTop: 14 }}>
          {session.segments.map((seg, i) => (
            <SegmentRow key={i} seg={seg} color={c} />
          ))}
        </div>

        {/* GrowFit features */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 14 }}>
          {session.growfitFeatures.map((f) => (
            <Tag key={f} color={T.brand}>{f}</Tag>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ─── 5. SCENARIOS TITLE ─── */
function ScenariosTitle() {
  return (
    <div className="slide" style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      background: `linear-gradient(160deg, #0B1120 0%, #1a1040 40%, #0F172A 100%)`,
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', width: 500, height: 500, borderRadius: '50%',
        border: '1px solid rgba(124,58,237,0.08)', top: -180, right: -120,
      }} />

      <div style={{
        padding: '8px 24px', borderRadius: T.rFull, marginBottom: 36,
        border: '1px solid rgba(124,58,237,0.2)', background: 'rgba(124,58,237,0.06)',
        fontSize: 12, fontWeight: 700, color: '#A78BFA', letterSpacing: 3,
      }}>PART 2</div>

      <h1 style={{ fontSize: 64, fontWeight: 900, color: '#fff', margin: 0 }}>확장 시나리오</h1>
      <p style={{ fontSize: 20, color: 'rgba(255,255,255,0.5)', marginTop: 14 }}>
        10개의 실전 교육 시나리오
      </p>

      <div style={{ display: 'flex', gap: 20, marginTop: 52 }}>
        {[
          { l: '초급', c: scenarios.filter(s => s.level === 'beginner').length, clr: T.green },
          { l: '중급', c: scenarios.filter(s => s.level === 'intermediate').length, clr: T.amber },
          { l: '고급', c: scenarios.filter(s => s.level === 'advanced').length, clr: T.red },
        ].map((x) => (
          <div key={x.l} style={{
            padding: '16px 36px', borderRadius: T.rLg, textAlign: 'center' as const,
            background: 'rgba(255,255,255,0.04)', border: `1px solid rgba(255,255,255,0.06)`,
          }}>
            <div style={{ fontSize: 32, fontWeight: 800, color: x.clr }}>{x.c}</div>
            <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', marginTop: 4 }}>{x.l}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ─── 6. SCENARIO SLIDES ─── */
function ScenarioSlide({ scenario, index }: { scenario: typeof scenarios[0]; index: number }) {
  const lc = scenario.level === 'beginner' ? T.green : scenario.level === 'intermediate' ? T.amber : T.red
  const lcBg = scenario.level === 'beginner' ? T.greenBg : scenario.level === 'intermediate' ? T.amberBg : T.redBg
  const ll = scenario.level === 'beginner' ? '초급' : scenario.level === 'intermediate' ? '중급' : '고급'

  return (
    <div className="slide" style={{
      display: 'flex', flexDirection: 'column', padding: '44px 56px', background: T.white,
    }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 18 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <NumberCircle n={index + 1} color={lc} size={48} />
          <div>
            <h2 style={{ fontSize: 26, fontWeight: 800, color: T.ink, margin: 0 }}>{scenario.title}</h2>
            <div style={{ display: 'flex', gap: 8, marginTop: 6, alignItems: 'center' }}>
              <Badge bg={lcBg} color={lc}>{ll}</Badge>
              <span style={{ fontSize: 13, color: T.inkMuted }}>{scenario.hours}시간 · {scenario.participants}</span>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 5 }}>
          {scenario.relatedSessions.map((s) => (
            <Tag key={s} color={T.brand}>차시 {s}</Tag>
          ))}
        </div>
      </div>

      {/* Objective */}
      <div style={{
        padding: '12px 18px', borderRadius: T.rMd, marginBottom: 16,
        backgroundColor: T.bg, borderLeft: `3px solid ${lc}`,
      }}>
        <p style={{ fontSize: 14, color: T.inkSecondary, margin: 0, lineHeight: 1.55 }}>{scenario.objective}</p>
      </div>

      {/* Flow table */}
      <div style={{
        flex: 1, borderRadius: T.rMd, overflow: 'hidden',
        border: `1px solid ${T.border}`, boxShadow: T.shadow,
      }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '90px 1fr 1fr',
          backgroundColor: T.bg, borderBottom: `2px solid ${T.border}`,
        }}>
          <div style={{ padding: '10px 14px', fontSize: 11, fontWeight: 700, color: T.inkLight, letterSpacing: 0.5 }}>시간</div>
          <div style={{ padding: '10px 14px', fontSize: 11, fontWeight: 700, color: T.inkLight, letterSpacing: 0.5 }}>활동</div>
          <div style={{ padding: '10px 14px', fontSize: 11, fontWeight: 700, color: T.inkLight, letterSpacing: 0.5 }}>GrowFit 액션</div>
        </div>
        {scenario.flow.map((step, i) => (
          <FlowTableRow key={i} step={step} color={lc} isLast={i === scenario.flow.length - 1} />
        ))}
      </div>

      {/* Bottom assessment + tip */}
      <div style={{ display: 'flex', gap: 14, marginTop: 14 }}>
        <div style={{
          flex: 1, padding: '14px 18px', borderRadius: T.rMd,
          backgroundColor: T.brandBg, border: `1px solid ${T.brand}15`,
        }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: T.brand, marginBottom: 5, letterSpacing: 1 }}>평가</div>
          <p style={{ fontSize: 13, color: T.inkSecondary, margin: 0, lineHeight: 1.5 }}>{scenario.assessment}</p>
        </div>
        <div style={{
          flex: 1, padding: '14px 18px', borderRadius: T.rMd,
          backgroundColor: T.amberBg, border: `1px solid ${T.amber}15`,
        }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: T.amber, marginBottom: 5, letterSpacing: 1 }}>강사 TIP</div>
          <p style={{ fontSize: 13, color: T.inkSecondary, margin: 0, lineHeight: 1.5 }}>{scenario.instructorTip}</p>
        </div>
      </div>
    </div>
  )
}

/* ─── 7. END SLIDE ─── */
function EndSlide() {
  return (
    <div className="slide" style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      background: `linear-gradient(160deg, #0B1120 0%, #0F1B33 50%, #0B1120 100%)`,
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', width: 700, height: 700, borderRadius: '50%',
        border: '1px solid rgba(14,165,233,0.06)', top: -300, left: '30%',
      }} />

      <h1 style={{ fontSize: 52, fontWeight: 900, color: '#fff', margin: 0, textAlign: 'center' as const, lineHeight: 1.3 }}>
        40시간이면,<br />
        <span style={{ color: T.brand }}>AI를 업무에 쓸 수 있습니다</span>
      </h1>
      <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.45)', marginTop: 18, textAlign: 'center' as const, lineHeight: 1.6 }}>
        비교하고, 프롬프트하고, RAG 구축하고, 에이전트를 만들기까지<br />
        하나의 플랫폼에서 완결
      </p>
      <div style={{
        marginTop: 48, padding: '14px 44px', borderRadius: T.rMd,
        background: `linear-gradient(135deg, ${T.brand}, ${T.brandDark})`,
        fontSize: 17, fontWeight: 700, color: '#fff', boxShadow: `0 6px 24px ${T.brand}40`,
      }}>growfit.onecloud.kr</div>
      <div style={{ marginTop: 36, fontSize: 13, color: 'rgba(255,255,255,0.3)' }}>
        BCT ONE · GrowFit · 에이전트 클래스
      </div>
    </div>
  )
}

/* ════════════════════════════════════════════
   PAGE — Compose all slides
   ════════════════════════════════════════════ */
export default function PrintPage() {
  return (
    <div id="print-root">
      <style>{`
        @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css');
        @page { size: 1280px 720px; margin: 0; }
        html, body { margin: 0; padding: 0; background: #fff; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .slide {
          width: 1280px;
          height: 720px;
          page-break-after: always;
          overflow: hidden;
          font-family: 'Pretendard Variable', -apple-system, BlinkMacSystemFont, system-ui, 'Segoe UI', sans-serif;
          position: relative;
          -webkit-font-smoothing: antialiased;
        }
        .slide:last-child { page-break-after: auto; }
        @media print {
          .slide { break-after: page; }
          .slide:last-child { break-after: auto; }
        }
      `}</style>

      {/* Part 1: Curriculum */}
      <CoverSlide />
      <EffectsSlide />
      <CurriculumMapSlide />

      {sessions.map((s) => (
        <SessionSlide key={s.id} session={s} />
      ))}

      {/* Part 2: Scenarios */}
      <ScenariosTitle />
      {scenarios.map((s, i) => (
        <ScenarioSlide key={s.id} scenario={s} index={i} />
      ))}

      <EndSlide />
    </div>
  )
}
