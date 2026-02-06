import type { EducationalEffect, CompetencyMilestone } from '@/types'

export const educationalEffects: EducationalEffect[] = [
  {
    id: 'model-sense',
    title: '비교를 통한 모델 감각 체득',
    metric: '3모델 동시 비교 → 상황별 모델 선택 자신감 형성',
    mechanism: 'GrowFit 비교 모드에서 GPT/Claude/Gemini 동일 프롬프트 실행, 응답 차이를 눈으로 확인',
    icon: 'GitCompare',
    sessions: [1, 2],
  },
  {
    id: 'parameter-intuition',
    title: '파라미터 직관 형성',
    metric: 'Temperature·Top-P 슬라이더 조작 → 결과 변화 즉시 체감',
    mechanism: 'Advanced 파라미터 패널에서 값을 바꿀 때마다 응답이 달라지는 것을 실시간 확인',
    icon: 'SlidersHorizontal',
    sessions: [2, 3],
  },
  {
    id: 'prompt-asset',
    title: '프롬프트 자산화 능력',
    metric: '작성한 프롬프트가 템플릿으로 저장 → 팀 전체 재사용 가능',
    mechanism: '프롬프트 템플릿 저장/공유 기능으로 개인 실습 결과물이 조직 자산으로 전환',
    icon: 'FileText',
    sessions: [3, 4, 5],
  },
  {
    id: 'rag-design',
    title: 'RAG 설계 능력',
    metric: '청크 크기·Top-K 조합 실험 → 최적 RAG 파이프라인 스스로 설계',
    mechanism: '지식베이스 파라미터(청크 사이즈, 오버랩, Top-K)를 직접 조절하며 검색 품질 변화 확인',
    icon: 'Database',
    sessions: [5, 6],
  },
  {
    id: 'agent-build',
    title: '에이전트 빌드 자립',
    metric: '기획 → 프롬프트 설계 → 도구 연결 → 배포까지 독립 수행',
    mechanism: '에이전트 빌더에서 시스템프롬프트·도구·컨텍스트를 직접 구성하고 즉시 테스트',
    icon: 'Bot',
    sessions: [7, 8],
  },
  {
    id: 'data-driven-education',
    title: '데이터 기반 교육 개선',
    metric: '학습자 AI 활용 행동 데이터 축적 → 교육 품질 지속 개선',
    mechanism: '관리자 대시보드·리포트로 학습자별 실습 현황, 프롬프트 패턴, 활용 수준을 추적',
    icon: 'BarChart3',
    sessions: [1, 2, 3, 4, 5, 6, 7, 8],
  },
]

export const competencyMilestones: CompetencyMilestone[] = [
  {
    layer: 'foundation',
    label: 'AI 도구 이해',
    sessions: [1, 2, 3],
    outcome: 'LLM 모델 선택, 파라미터 조절, 기본 프롬프트 작성 능력 확보',
    color: '#0EA5E9',
  },
  {
    layer: 'application',
    label: '실전 활용',
    sessions: [4, 5, 6],
    outcome: '고급 프롬프트 전략, 문서 기반 AI 활용, RAG 파이프라인 설계',
    color: '#8B5CF6',
  },
  {
    layer: 'mastery',
    label: '자립적 빌드',
    sessions: [7, 8],
    outcome: '에이전트 설계·배포, 종합 프로젝트 수행으로 AI 업무 자립',
    color: '#F59E0B',
  },
]
