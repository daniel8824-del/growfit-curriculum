import type { Session } from '@/types'

export const sessions: Session[] = [
  // ─────────────────────────────────────────────
  // Session 1: AI와 LLM의 이해
  // ─────────────────────────────────────────────
  {
    id: 1,
    slug: 'ai-llm-understanding',
    title: 'AI와 LLM의 이해',
    hours: 5,
    icon: 'Brain',
    color: '#0EA5E9',
    gradient: 'from-sky-500 to-blue-600',
    sourceChapters: '에이전트 클래스 Ch1~2',
    growfitFeatures: ['단일 모드', '비교 모드', '스타일 프리셋'],
    description:
      'AI와 LLM의 기본 개념을 이해하고, GrowFit 비교 모드로 GPT/Claude/Gemini 3모델을 직접 비교 체험합니다.',
    learningOutcomes: ['LLM 3대 모델(GPT/Claude/Gemini)의 특성을 비교하고 상황에 맞는 모델을 선택할 수 있다', 'AI 실습 환경(GrowFit)의 단일 모드와 비교 모드를 자유롭게 활용할 수 있다', '스타일 프리셋의 개념을 이해하고 목적에 맞는 응답 톤을 설정할 수 있다'],
    prerequisites: [],
    competencyLayer: 'foundation',
    keyConceptsIntroduced: ['LLM', '토큰화', 'GPT', 'Claude', 'Gemini', '비교 모드', '스타일 프리셋'],
    segments: [
      {
        order: 1,
        title: 'AI 시대의 이해',
        hours: 1,
        growfitAction: '이론',
        content: 'LLM이란? GPT/Claude/Gemini 모델 계보와 특성',
        growfitFeatures: ['단일 모드'],
        steps: [
          {
            order: 1,
            instruction:
              'GrowFit에 로그인한 뒤 "AI 실습" 메뉴로 이동합니다. 메인 화면에서 현재 선택된 모델을 확인하세요.',
            growfitPath: 'AI 실습 > 메인 화면',
          },
          {
            order: 2,
            instruction:
              '모델 선택 드롭다운을 열어 GPT-4o-mini, Claude-3-haiku, Gemini-2.5-flash 세 모델이 있는지 확인합니다.',
            growfitPath: 'AI 실습 > 모델 선택',
            note: '각 모델 옆의 아이콘과 버전 정보를 메모해 두세요.',
          },
          {
            order: 3,
            instruction:
              '강사가 제시하는 "AI란 무엇인가?" 슬라이드를 보며 LLM의 작동 원리(토큰화, 확률 예측, 디코딩)를 학습합니다.',
            growfitPath: '이론 강의 (오프라인)',
          },
        ],
        tips: [
          'GPT는 OpenAI, Claude는 Anthropic, Gemini는 Google이 만든 모델임을 기억하세요.',
          '각 모델의 강점을 한 줄로 요약해 메모하면 이후 비교 실습에서 유용합니다.',
        ],
      },
      {
        order: 2,
        title: '단일 모드 실습',
        hours: 1,
        growfitAction: 'AI 실습 > 단일 모드',
        content:
          'GPT-4o-mini/Claude-3-haiku/Gemini-2.5-flash 각각 체험',
        growfitFeatures: ['단일 모드'],
        steps: [
          {
            order: 1,
            instruction:
              '"단일 모드"를 선택하고 GPT-4o-mini로 "서울 3일 여행 일정을 추천해줘"라고 입력합니다.',
            growfitPath: 'AI 실습 > 단일 모드 > GPT-4o-mini',
          },
          {
            order: 2,
            instruction:
              '모델을 Claude-3-haiku로 바꾼 뒤 동일한 질문을 입력합니다. 답변 형식과 길이 차이를 관찰하세요.',
            growfitPath: 'AI 실습 > 단일 모드 > Claude-3-haiku',
          },
          {
            order: 3,
            instruction:
              'Gemini-2.5-flash로 전환하여 같은 질문을 입력합니다. 응답 속도와 내용 구성을 비교하세요.',
            growfitPath: 'AI 실습 > 단일 모드 > Gemini-2.5-flash',
          },
        ],
        tips: [
          '응답 시간을 측정해 보세요. Flash 모델은 이름처럼 빠른 응답이 특징입니다.',
          '같은 질문이라도 모델마다 답변 구조(번호 목록 vs 문단 vs 표)가 다를 수 있습니다.',
          '메모장에 각 모델의 응답 핵심을 3줄로 요약해 비교표를 만들어 보세요.',
        ],
      },
      {
        order: 3,
        title: '비교 모드 실습',
        hours: 1.5,
        growfitAction: 'AI 실습 > 비교 모드 (3모델)',
        content: '같은 질문 3모델 동시 입력, 답변 품질/스타일/정확도 비교',
        growfitFeatures: ['비교 모드'],
        steps: [
          {
            order: 1,
            instruction:
              '"비교 모드" 탭을 클릭하면 3개의 패널이 나타납니다. 각 패널에 GPT-4o-mini, Claude-3-haiku, Gemini-2.5-flash를 배정합니다.',
            growfitPath: 'AI 실습 > 비교 모드 > 모델 배정',
          },
          {
            order: 2,
            instruction:
              '"한국의 AI 산업 현황을 500자로 요약해줘"를 입력하고 전송합니다. 3개 패널에 동시에 응답이 나타나는 것을 확인하세요.',
            growfitPath: 'AI 실습 > 비교 모드 > 동시 전송',
            note: '전송 버튼 한 번으로 3모델에 동시 전달됩니다.',
          },
          {
            order: 3,
            instruction:
              '각 응답의 정확성, 문장 스타일, 구조를 비교하며 "어떤 모델이 가장 읽기 쉬운가?"를 팀원과 토론합니다.',
            growfitPath: 'AI 실습 > 비교 모드 > 결과 비교',
          },
        ],
        tips: [
          '팩트체크가 중요한 질문을 던지면 모델별 환각(hallucination) 차이를 관찰할 수 있습니다.',
          '비교 모드에서는 같은 프롬프트가 3모델에 동시에 전달되므로 공정한 비교가 가능합니다.',
        ],
      },
      {
        order: 4,
        title: '스타일 프리셋',
        hours: 1,
        growfitAction: 'Basic: 정확(0.3)/균형(0.7)/창의(1.0)',
        content: '프리셋별 출력 차이 관찰',
        growfitFeatures: ['스타일 프리셋'],
        steps: [
          {
            order: 1,
            instruction:
              '단일 모드에서 "스타일 프리셋" 영역을 찾습니다. "정확" 프리셋(Temperature 0.3)을 선택하고 "AI 스타트업 아이디어를 3개 제안해줘"를 입력합니다.',
            growfitPath: 'AI 실습 > 스타일 프리셋 > 정확 (0.3)',
          },
          {
            order: 2,
            instruction:
              '"균형" 프리셋(0.7)으로 전환하여 동일한 질문을 입력합니다. 정확 모드 대비 아이디어의 다양성 변화를 관찰하세요.',
            growfitPath: 'AI 실습 > 스타일 프리셋 > 균형 (0.7)',
          },
          {
            order: 3,
            instruction:
              '"창의" 프리셋(1.0)으로 전환하여 같은 질문을 입력합니다. 예상치 못한 창의적 답변이 나오는지 확인합니다.',
            growfitPath: 'AI 실습 > 스타일 프리셋 > 창의 (1.0)',
          },
        ],
        tips: [
          '정확 모드는 반복적이고 일관된 답변, 창의 모드는 다양하지만 때로 엉뚱한 답변이 나올 수 있습니다.',
          'Temperature가 높을수록 "확률 분포에서 덜 유력한 토큰"을 선택할 가능성이 높아집니다.',
          '업무에서는 보고서/데이터 분석에 정확, 브레인스토밍에 창의를 사용하세요.',
        ],
      },
      {
        order: 5,
        title: 'GrowFit 점검',
        hours: 0.5,
        growfitAction: '비교 모드 리뷰',
        content: '비교 모드에서 관찰한 결과를 정리하고 토론합니다.',
        growfitFeatures: ['비교 모드'],
        steps: [
          {
            order: 1,
            instruction:
              '비교 모드에서 저장한 대화 기록을 열어 3모델의 답변을 나란히 검토합니다.',
            growfitPath: 'AI 실습 > 비교 모드 > 히스토리',
          },
          {
            order: 2,
            instruction:
              '각 모델의 강점/약점을 정리한 비교표를 작성하여 팀원과 공유합니다.',
            growfitPath: 'AI 실습 > 비교 모드 > 결과 공유',
          },
        ],
        tips: [
          '점검 시간에 질문을 남기면 다음 차시에서 심화 학습이 가능합니다.',
          '비교표는 향후 모델 선택의 기준이 되므로 꼼꼼히 작성하세요.',
        ],
      },
    ],
    checkpoint: {
      differentiatorId: 1,
      duration: '30분',
      activity: '3모델 비교 결과 정리 & 토론',
      reviewPrompt:
        '비교 모드에서 3개 모델의 답변을 비교한 결과, 가장 큰 차이점은 무엇이었나요?',
    },
  },

  // ─────────────────────────────────────────────
  // Session 2: 파라미터 튜닝 & 모델 선택 전략
  // ─────────────────────────────────────────────
  {
    id: 2,
    slug: 'parameter-tuning',
    title: '파라미터 튜닝 & 모델 선택 전략',
    hours: 5,
    icon: 'SlidersHorizontal',
    color: '#8B5CF6',
    gradient: 'from-violet-500 to-purple-600',
    sourceChapters: '에이전트 클래스 Ch2',
    growfitFeatures: ['Advanced 파라미터', '비교 모드', 'Temperature 슬라이더'],
    description:
      'Temperature, Top P 등 파라미터를 슬라이더로 직접 조절하며 모델 출력의 변화를 관찰합니다.',
    learningOutcomes: ['Temperature, Top-P, Max Tokens 등 핵심 파라미터의 역할을 이해하고 직접 조절할 수 있다', '파라미터 변화가 AI 응답에 미치는 영향을 실험으로 체감할 수 있다', '기본 프롬프트 구조(역할/맥락/지시/형식)를 작성할 수 있다'],
    prerequisites: [1],
    competencyLayer: 'foundation',
    keyConceptsIntroduced: ['Temperature', 'Top-P', 'Max Tokens', 'Frequency Penalty', '프롬프트 구조', '역할 지정'],
    segments: [
      {
        order: 1,
        title: 'Temperature 이해',
        hours: 1,
        growfitAction: 'Advanced: Temperature 슬라이더',
        content: 'Temp 0.1 -> 0.5 -> 1.0 변화 실습',
        growfitFeatures: ['Temperature 슬라이더'],
        steps: [
          {
            order: 1,
            instruction:
              '"AI 실습" > "Advanced" 탭을 열면 Temperature 슬라이더가 나타납니다. 슬라이더를 0.1로 설정하세요.',
            growfitPath: 'AI 실습 > Advanced > Temperature 슬라이더',
          },
          {
            order: 2,
            instruction:
              '"오늘의 점심 메뉴를 추천해줘"를 3회 연속 입력합니다. 0.1에서는 거의 동일한 결과가 나오는지 확인하세요.',
            growfitPath: 'AI 실습 > Advanced > Temperature 0.1',
            note: '낮은 Temperature는 결정론적(deterministic) 출력에 가깝습니다.',
          },
          {
            order: 3,
            instruction:
              '슬라이더를 0.5, 1.0으로 각각 변경하며 같은 질문을 반복합니다. 응답의 다양성 변화를 기록하세요.',
            growfitPath: 'AI 실습 > Advanced > Temperature 0.5 / 1.0',
          },
        ],
        tips: [
          'Temperature 0.1에서 3회 질문하면 거의 같은 답변이, 1.0에서는 매번 다른 답변이 나옵니다.',
          'Temperature는 "창의성 다이얼"로 이해하면 쉽습니다. 낮으면 안전, 높으면 모험적입니다.',
        ],
      },
      {
        order: 2,
        title: 'Top P & Max Length',
        hours: 1,
        growfitAction: 'Advanced: Top P/Max Length',
        content: '핵 샘플링 이해, 출력 길이 제어',
        growfitFeatures: ['Advanced 파라미터'],
        steps: [
          {
            order: 1,
            instruction:
              'Advanced 패널에서 Top P 슬라이더를 찾습니다. Top P를 0.1로 설정하고 "인공지능의 미래를 설명해줘"를 입력합니다.',
            growfitPath: 'AI 실습 > Advanced > Top P 슬라이더',
          },
          {
            order: 2,
            instruction:
              'Top P를 0.9로 올린 뒤 동일한 질문을 합니다. 어휘의 다양성과 표현력 변화를 비교하세요.',
            growfitPath: 'AI 실습 > Advanced > Top P 0.9',
          },
          {
            order: 3,
            instruction:
              'Max Length(최대 토큰)를 100, 500, 2000으로 각각 설정하며 같은 질문을 입력합니다. 출력 길이 제한 효과를 관찰하세요.',
            growfitPath: 'AI 실습 > Advanced > Max Length',
            note: '토큰 수는 대략 한글 1글자 = 2~3토큰으로 계산합니다.',
          },
        ],
        tips: [
          'Top P(핵 샘플링)는 "상위 몇 %의 토큰 후보에서 선택할 것인가"를 결정합니다.',
          'Temperature와 Top P를 동시에 극단적으로 설정하면 예측 불가능한 출력이 될 수 있습니다.',
          'Max Length를 짧게 설정하면 요약형 답변을, 길게 설정하면 상세 답변을 얻을 수 있습니다.',
        ],
      },
      {
        order: 3,
        title: '파라미터 조합 실험',
        hours: 1.5,
        growfitAction: '비교 모드 + Advanced',
        content: '3모델 x 다른 파라미터 조합',
        growfitFeatures: ['비교 모드', 'Advanced 파라미터'],
        steps: [
          {
            order: 1,
            instruction:
              '비교 모드를 열고 3개 패널에 각각 GPT-4o-mini(Temp 0.3), Claude-3-haiku(Temp 0.7), Gemini-2.5-flash(Temp 1.0)를 설정합니다.',
            growfitPath: 'AI 실습 > 비교 모드 > Advanced 개별 설정',
          },
          {
            order: 2,
            instruction:
              '"신규 앱 서비스 기획안을 작성해줘"를 입력하고 3모델의 결과를 비교합니다. Temperature 차이로 인한 창의성 차이를 관찰하세요.',
            growfitPath: 'AI 실습 > 비교 모드 > 동시 전송',
          },
          {
            order: 3,
            instruction:
              '이번에는 3개 모델을 모두 Temp 0.5로 통일하고, Top P만 0.1/0.5/0.9로 다르게 설정하여 동일 질문을 입력합니다.',
            growfitPath: 'AI 실습 > 비교 모드 > Top P 비교',
          },
        ],
        tips: [
          '한 번에 하나의 파라미터만 변경해야 그 파라미터의 영향을 정확히 측정할 수 있습니다.',
          '비교 모드에서 각 패널의 Advanced 설정을 독립적으로 조절할 수 있다는 점이 GrowFit의 핵심 기능입니다.',
        ],
      },
      {
        order: 4,
        title: '업무별 모델 선택 가이드',
        hours: 1,
        growfitAction: '비교 모드 분석',
        content: '코딩 -> Claude, 창작 -> GPT, 속도 -> Flash',
        growfitFeatures: ['비교 모드'],
        steps: [
          {
            order: 1,
            instruction:
              '비교 모드에서 코딩 과제("Python으로 퀵소트 구현")를 입력합니다. 코드 품질과 설명 완성도를 비교하세요.',
            growfitPath: 'AI 실습 > 비교 모드 > 코딩 과제',
          },
          {
            order: 2,
            instruction:
              '창작 과제("짧은 SF 소설 도입부를 써줘")를 입력하여 문학적 표현력을 비교합니다.',
            growfitPath: 'AI 실습 > 비교 모드 > 창작 과제',
          },
          {
            order: 3,
            instruction:
              '결과를 바탕으로 "업무 유형별 추천 모델 & 파라미터" 가이드를 작성합니다.',
            growfitPath: '개인 메모 / 팀 공유',
          },
        ],
        tips: [
          'Claude는 코드 정확성과 안전성 측면에서 강점이 있고, GPT는 자연스러운 문체에 강합니다.',
          'Flash 모델은 속도가 빠르므로 실시간 챗봇이나 대량 처리에 적합합니다.',
        ],
      },
      {
        order: 5,
        title: 'GrowFit 점검',
        hours: 0.5,
        growfitAction: '파라미터 설정 리뷰',
        content: '오늘 실험한 파라미터 조합 중 가장 효과적이었던 설정을 공유합니다.',
        growfitFeatures: ['Advanced 파라미터'],
        steps: [
          {
            order: 1,
            instruction:
              '오늘 실험한 파라미터 조합 중 "가장 좋았던 설정"을 스크린샷으로 캡처합니다.',
            growfitPath: 'AI 실습 > Advanced > 스크린샷',
          },
          {
            order: 2,
            instruction:
              '팀원과 최적 파라미터 조합을 공유하고, 왜 그 조합이 효과적이었는지 토론합니다.',
            growfitPath: '팀 토론',
          },
        ],
        tips: [
          '업무 유형별로 "나만의 파라미터 프리셋"을 정리해 두면 이후 실무에서 바로 활용할 수 있습니다.',
          '다음 차시에서 프롬프트를 배우면, 파라미터 + 프롬프트 조합으로 시너지를 낼 수 있습니다.',
        ],
      },
    ],
    checkpoint: {
      differentiatorId: 2,
      duration: '30분',
      activity: '최적 파라미터 조합 발견 과정 공유',
      reviewPrompt:
        '슬라이더로 조절한 파라미터 중, 결과에 가장 큰 영향을 준 것은 무엇이었나요?',
    },
  },

  // ─────────────────────────────────────────────
  // Session 3: 프롬프트 엔지니어링 기초
  // ─────────────────────────────────────────────
  {
    id: 3,
    slug: 'prompt-engineering-basics',
    title: '프롬프트 엔지니어링 기초',
    hours: 5,
    icon: 'MessageSquareText',
    color: '#10B981',
    gradient: 'from-emerald-500 to-teal-600',
    sourceChapters: '에이전트 클래스 Ch2',
    growfitFeatures: ['시스템 프롬프트', '프롬프트 템플릿', '비교 모드'],
    description:
      'FREF 프레임워크를 배우고, 시스템 프롬프트와 프롬프트 템플릿을 만들어 저장합니다.',
    learningOutcomes: ['Zero-shot, Few-shot, Chain-of-Thought 등 핵심 프롬프트 기법을 상황에 맞게 적용할 수 있다', '컨텍스트 엔지니어링의 개념을 이해하고 시스템 프롬프트를 체계적으로 설계할 수 있다', '프롬프트를 템플릿으로 저장하여 재사용 자산으로 만들 수 있다'],
    prerequisites: [1, 2],
    competencyLayer: 'foundation',
    keyConceptsIntroduced: ['Zero-shot', 'Few-shot', 'Chain-of-Thought', '컨텍스트 엔지니어링', '시스템 프롬프트', '프롬프트 템플릿'],
    segments: [
      {
        order: 1,
        title: '좋은 프롬프트의 구조',
        hours: 1,
        growfitAction: '일반 프롬프트 입력',
        content: '명확한 지시/맥락 제공/형식 지정 3원칙',
        growfitFeatures: ['단일 모드'],
        steps: [
          {
            order: 1,
            instruction:
              '단일 모드에서 모호한 프롬프트("마케팅 전략 알려줘")를 입력하고 결과를 확인합니다.',
            growfitPath: 'AI 실습 > 단일 모드',
          },
          {
            order: 2,
            instruction:
              '3원칙을 적용한 프롬프트("20대 여성 타겟 화장품 브랜드의 인스타그램 마케팅 전략을 3가지 제안해줘. 각각 예산과 기대 효과를 포함해줘.")를 입력합니다.',
            growfitPath: 'AI 실습 > 단일 모드',
          },
          {
            order: 3,
            instruction:
              '두 결과를 나란히 비교하며 "명확한 지시, 맥락 제공, 형식 지정"이 결과에 미치는 영향을 정리합니다.',
            growfitPath: '비교 분석 (수동)',
          },
        ],
        tips: [
          '모호한 프롬프트는 모호한 답변을, 구체적 프롬프트는 구체적 답변을 생성합니다.',
          '"~해줘"보다 "~를 3가지로, 표 형식으로 작성해줘"가 훨씬 좋은 결과를 냅니다.',
          '형식 지정(표, 번호 목록, JSON 등)은 LLM이 가장 잘 따르는 지시 중 하나입니다.',
        ],
      },
      {
        order: 2,
        title: 'FREF 프레임워크',
        hours: 1.5,
        growfitAction: '프롬프트 입력 + 비교 모드',
        content: 'Framing-Request-Reference-Format 4단계',
        growfitFeatures: ['비교 모드'],
        steps: [
          {
            order: 1,
            instruction:
              'FREF 프레임워크를 학습합니다: Framing(배경 설정) > Request(요청) > Reference(참고 자료/예시) > Format(출력 형식).',
            growfitPath: '이론 강의',
          },
          {
            order: 2,
            instruction:
              '비교 모드에서 FREF 미적용 프롬프트와 FREF 적용 프롬프트를 각각 입력하여 결과 차이를 관찰합니다.',
            growfitPath: 'AI 실습 > 비교 모드 > FREF 비교',
            note: '같은 모델에 프롬프트만 다르게 입력하는 A/B 테스트입니다.',
          },
          {
            order: 3,
            instruction:
              '팀별로 자신의 업무 주제에 FREF를 적용한 프롬프트를 작성하고 결과를 발표합니다.',
            growfitPath: 'AI 실습 > 단일 모드',
          },
        ],
        tips: [
          'FREF는 프롬프트 작성의 "체크리스트"입니다. 4가지를 모두 채우지 않아도 되지만 빠진 것이 무엇인지 인식하세요.',
          '특히 Reference(예시) 제공은 Few-shot 학습의 기초가 됩니다.',
        ],
      },
      {
        order: 3,
        title: '시스템 프롬프트 설정',
        hours: 1,
        growfitAction: '시스템 프롬프트',
        content: 'AI 역할/전문분야/톤/제약조건 4축 설정',
        growfitFeatures: ['시스템 프롬프트'],
        steps: [
          {
            order: 1,
            instruction:
              '"시스템 프롬프트" 입력 영역을 찾습니다. "너는 10년 경력의 마케팅 전문가야. 항상 데이터 기반으로 답변하고, 전문 용어는 괄호 안에 한글 설명을 넣어줘."를 입력합니다.',
            growfitPath: 'AI 실습 > 시스템 프롬프트',
          },
          {
            order: 2,
            instruction:
              '시스템 프롬프트가 설정된 상태에서 "신제품 런칭 전략을 알려줘"를 입력합니다. 전문가 톤의 답변이 나오는지 확인하세요.',
            growfitPath: 'AI 실습 > 시스템 프롬프트 적용 대화',
          },
          {
            order: 3,
            instruction:
              '시스템 프롬프트를 지운 상태에서 동일 질문을 입력하여 차이를 비교합니다.',
            growfitPath: 'AI 실습 > 시스템 프롬프트 미적용',
          },
        ],
        tips: [
          '시스템 프롬프트는 대화 전체에 걸쳐 유효하므로, 한 번 잘 설정하면 매번 반복 입력할 필요가 없습니다.',
          '역할(Role), 전문분야(Domain), 톤(Tone), 제약조건(Constraint) 4축을 체계적으로 설정하세요.',
        ],
      },
      {
        order: 4,
        title: '프롬프트 템플릿 저장',
        hours: 1,
        growfitAction: '템플릿 생성/저장/불러오기',
        content: '자주 쓰는 프롬프트를 템플릿으로 저장하여 재사용합니다.',
        growfitFeatures: ['프롬프트 템플릿'],
        steps: [
          {
            order: 1,
            instruction:
              'FREF로 작성한 프롬프트를 "템플릿 저장" 버튼으로 저장합니다. 이름과 카테고리를 지정하세요.',
            growfitPath: 'AI 실습 > 프롬프트 템플릿 > 저장',
          },
          {
            order: 2,
            instruction:
              '"템플릿 목록"에서 방금 저장한 템플릿을 불러와 바로 사용해봅니다.',
            growfitPath: 'AI 실습 > 프롬프트 템플릿 > 불러오기',
          },
          {
            order: 3,
            instruction:
              '시스템 프롬프트 + 프롬프트 템플릿 조합을 만들어 "마케팅 전문가 세트"로 저장합니다.',
            growfitPath: 'AI 실습 > 프롬프트 템플릿 > 세트 저장',
          },
        ],
        tips: [
          '템플릿에는 {{변수}} 플레이스홀더를 넣으면 매번 다른 값을 쉽게 대입할 수 있습니다.',
          '좋은 템플릿은 팀원과 공유하세요. 다음 기수에도 재사용할 수 있습니다.',
          '카테고리별(마케팅, 개발, 기획 등)로 정리하면 나중에 찾기 편합니다.',
        ],
      },
      {
        order: 5,
        title: 'GrowFit 점검',
        hours: 0.5,
        growfitAction: '템플릿 공유',
        content: '만든 템플릿을 코스에 공유하고 피드백을 교환합니다.',
        growfitFeatures: ['프롬프트 템플릿'],
        steps: [
          {
            order: 1,
            instruction:
              '저장한 템플릿 중 가장 잘 만든 것을 선택하여 코스 내 공유합니다.',
            growfitPath: 'AI 실습 > 프롬프트 템플릿 > 공유',
          },
          {
            order: 2,
            instruction:
              '다른 수강생의 템플릿을 불러와 사용해보고, 개선점을 댓글로 남깁니다.',
            growfitPath: 'AI 실습 > 프롬프트 템플릿 > 피어 리뷰',
          },
        ],
        tips: [
          '다른 사람의 템플릿에서 좋은 패턴을 발견하면 내 템플릿에 적용해 보세요.',
          '템플릿 공유는 "교육 자산 재사용"의 첫 걸음입니다.',
        ],
      },
    ],
    checkpoint: {
      differentiatorId: 4,
      duration: '30분',
      activity: '만든 템플릿을 코스에 공유',
      reviewPrompt:
        '저장한 템플릿이 다음 기수에도 재사용될 수 있는 이유는 무엇인가요?',
    },
  },

  // ─────────────────────────────────────────────
  // Session 4: 고급 프롬프트 전략
  // ─────────────────────────────────────────────
  {
    id: 4,
    slug: 'advanced-prompt-strategies',
    title: '고급 프롬프트 전략',
    hours: 5,
    icon: 'Sparkles',
    color: '#F59E0B',
    gradient: 'from-amber-500 to-orange-600',
    sourceChapters: '에이전트 클래스 Ch2 심화',
    growfitFeatures: ['Few-shot', '비교 모드', '시스템 프롬프트'],
    description:
      'Few-shot, CoT, ToT 등 고급 프롬프트 기법과 멀티 페르소나 전략을 실습합니다.',
    learningOutcomes: ['복잡한 업무를 단계별로 분해하여 프롬프트 체인을 설계할 수 있다', 'Self-Ask, ReAct 등 고급 추론 기법을 업무에 적용할 수 있다', '컨텍스트 윈도우를 효율적으로 관리하는 전략을 수립할 수 있다'],
    prerequisites: [3],
    competencyLayer: 'application',
    keyConceptsIntroduced: ['프롬프트 체이닝', 'Self-Ask', 'ReAct 패턴', '컨텍스트 윈도우', '토큰 최적화'],
    segments: [
      {
        order: 1,
        title: 'Few-shot 학습',
        hours: 1,
        growfitAction: 'Few-shot 예제 세트 생성',
        content: '입력-출력 예시 3~5개로 패턴 제어',
        growfitFeatures: ['Few-shot'],
        steps: [
          {
            order: 1,
            instruction:
              '단일 모드에서 Zero-shot 프롬프트("다음 리뷰의 감정을 분류해줘: 이 제품 정말 좋아요!")를 입력합니다.',
            growfitPath: 'AI 실습 > 단일 모드 > Zero-shot',
          },
          {
            order: 2,
            instruction:
              'Few-shot 프롬프트를 작성합니다. 3개의 입력-출력 예시를 제공한 뒤, 새로운 리뷰의 감정 분류를 요청합니다.',
            growfitPath: 'AI 실습 > 단일 모드 > Few-shot',
            note: '예시: "정말 좋아요 -> 긍정 / 별로예요 -> 부정 / 괜찮아요 -> 중립"',
          },
          {
            order: 3,
            instruction:
              'Few-shot 예제 세트를 템플릿으로 저장합니다. "감정 분류 Few-shot v1"으로 이름을 지정하세요.',
            growfitPath: 'AI 실습 > 프롬프트 템플릿 > 저장',
          },
        ],
        tips: [
          'Few-shot은 3~5개 예시가 적정합니다. 너무 많으면 토큰을 낭비하고, 너무 적으면 패턴 인식이 약합니다.',
          '예시의 다양성이 중요합니다. 긍정/부정/중립 등 모든 카테고리를 포함하세요.',
          'Few-shot 예제를 템플릿으로 저장하면 반복 작업에서 시간을 크게 절약할 수 있습니다.',
        ],
      },
      {
        order: 2,
        title: 'CoT: 단계적 추론 유도',
        hours: 1,
        growfitAction: '시스템 프롬프트 + 단일 모드',
        content: 'Chain-of-Thought',
        growfitFeatures: ['시스템 프롬프트'],
        steps: [
          {
            order: 1,
            instruction:
              '시스템 프롬프트에 "문제를 풀 때 반드시 단계별로 사고 과정을 보여줘."를 입력합니다.',
            growfitPath: 'AI 실습 > 시스템 프롬프트 > CoT 설정',
          },
          {
            order: 2,
            instruction:
              '수학 문제("한 상자에 사과가 12개, 3상자에서 각각 4개씩 꺼내면 남는 사과는?")를 입력하고 단계별 추론 과정을 관찰합니다.',
            growfitPath: 'AI 실습 > 단일 모드 > CoT 실습',
          },
          {
            order: 3,
            instruction:
              'CoT 없이 같은 문제를 입력하여 답변의 정확도와 설명력 차이를 비교합니다.',
            growfitPath: 'AI 실습 > 단일 모드 > 비교',
          },
        ],
        tips: [
          '"단계별로 생각해봐(Let\'s think step by step)"는 가장 간단하면서도 효과적인 CoT 트리거입니다.',
          'CoT는 수학, 논리, 코딩 등 추론이 필요한 작업에서 정확도를 크게 높입니다.',
        ],
      },
      {
        order: 3,
        title: 'ToT: 트리 탐색 사고',
        hours: 1,
        growfitAction: '시스템 프롬프트 + 비교 모드',
        content: 'Tree-of-Thought',
        growfitFeatures: ['비교 모드', '시스템 프롬프트'],
        steps: [
          {
            order: 1,
            instruction:
              '시스템 프롬프트에 "3가지 다른 접근 방식을 탐색하고, 각각의 장단점을 평가한 뒤, 최선의 방법을 선택해줘."를 입력합니다.',
            growfitPath: 'AI 실습 > 시스템 프롬프트 > ToT 설정',
          },
          {
            order: 2,
            instruction:
              '비교 모드에서 3모델에 동일한 ToT 프롬프트로 복잡한 기획 과제("신규 SaaS 제품의 가격 전략")를 입력합니다.',
            growfitPath: 'AI 실습 > 비교 모드 > ToT 3모델',
          },
          {
            order: 3,
            instruction:
              '각 모델이 탐색한 "사고의 가지(branch)"를 비교하고, 어떤 모델의 탐색이 가장 포괄적이었는지 평가합니다.',
            growfitPath: 'AI 실습 > 비교 모드 > 결과 분석',
          },
        ],
        tips: [
          'ToT는 CoT의 확장판입니다. CoT가 일직선 사고라면, ToT는 여러 갈래를 동시에 탐색합니다.',
          '복잡한 의사결정(전략 수립, 아키텍처 설계 등)에서 ToT의 효과가 극대화됩니다.',
          '3모델 비교 모드와 ToT를 결합하면 "9가지 관점"을 한 번에 얻을 수 있습니다.',
        ],
      },
      {
        order: 4,
        title: '멀티 페르소나 전략',
        hours: 1.5,
        growfitAction: '비교 모드 + 시스템 프롬프트 3개',
        content: '3모델에 각각 다른 전문가 역할',
        growfitFeatures: ['비교 모드', '시스템 프롬프트'],
        steps: [
          {
            order: 1,
            instruction:
              '비교 모드 3개 패널에 각각 다른 시스템 프롬프트를 설정합니다. 패널1: "마케팅 전문가", 패널2: "재무 분석가", 패널3: "UX 디자이너".',
            growfitPath: 'AI 실습 > 비교 모드 > 시스템 프롬프트 개별 설정',
          },
          {
            order: 2,
            instruction:
              '"새로운 구독 서비스를 어떻게 설계해야 할까?"를 동시에 입력하고, 각 전문가 관점의 답변을 비교합니다.',
            growfitPath: 'AI 실습 > 비교 모드 > 멀티 페르소나',
          },
          {
            order: 3,
            instruction:
              '3개 관점의 답변을 종합하여 하나의 기획서 초안으로 정리합니다. 단일 모드에서 "위 3가지 관점을 종합해줘"라고 요청해도 좋습니다.',
            growfitPath: 'AI 실습 > 단일 모드 > 종합',
          },
        ],
        tips: [
          '멀티 페르소나는 1인 기획자가 "가상의 자문위원회"를 운영하는 것과 같습니다.',
          '서로 상충하는 관점(마케팅 vs 재무)이 나올 때가 가장 유용합니다.',
        ],
      },
      {
        order: 5,
        title: 'GrowFit 점검',
        hours: 0.5,
        growfitAction: 'Few-shot + 템플릿 리뷰',
        content: 'Few-shot 예제와 고급 프롬프트 템플릿을 점검합니다.',
        growfitFeatures: ['Few-shot', '프롬프트 템플릿'],
        steps: [
          {
            order: 1,
            instruction:
              '오늘 만든 Few-shot 예제 세트와 CoT/ToT 시스템 프롬프트를 템플릿으로 모두 저장했는지 확인합니다.',
            growfitPath: 'AI 실습 > 프롬프트 템플릿 > 목록 확인',
          },
          {
            order: 2,
            instruction:
              '가장 효과적이었던 페르소나 조합을 팀원과 공유하고 피드백을 교환합니다.',
            growfitPath: '팀 토론',
          },
        ],
        tips: [
          'CoT, ToT, 멀티 페르소나 시스템 프롬프트를 모두 템플릿화해 두면 언제든 재사용할 수 있습니다.',
          '고급 기법은 기초(FREF)와 결합할 때 시너지가 극대화됩니다.',
        ],
      },
    ],
    checkpoint: {
      differentiatorId: 1,
      duration: '30분',
      activity: '페르소나별 답변 품질 분석',
      reviewPrompt:
        '3개 모델에 다른 전문가 역할을 부여했을 때, 답변의 질적 차이는 어떠했나요?',
    },
  },

  // ─────────────────────────────────────────────
  // Session 5: 프롬프트 실전 활용
  // ─────────────────────────────────────────────
  {
    id: 5,
    slug: 'prompt-real-world',
    title: '프롬프트 실전 활용',
    hours: 5,
    icon: 'Briefcase',
    color: '#EF4444',
    gradient: 'from-red-500 to-rose-600',
    sourceChapters: '에이전트 클래스 Ch2 실전',
    growfitFeatures: ['템플릿', 'Few-shot', '비교 모드'],
    description:
      '사업계획서, 마케팅 카피, 코딩 등 실무 과제에 프롬프트를 적용합니다.',
    learningOutcomes: ['PDF, 한글, Excel 등 문서를 AI에게 제공하여 요약·분석·QA를 수행할 수 있다', '문서 기반 프롬프트에서 컨텍스트 엔지니어링을 적용하여 정확도를 높일 수 있다', 'GrowFit 지식베이스에 문서를 업로드하고 RAG 기초를 체험할 수 있다'],
    prerequisites: [3, 4],
    competencyLayer: 'application',
    keyConceptsIntroduced: ['문서 파싱', '컨텍스트 주입', '지식베이스', 'RAG 기초', '청킹 개념'],
    segments: [
      {
        order: 1,
        title: '사업계획서 작성',
        hours: 1.5,
        growfitAction: '템플릿 + Few-shot 조합',
        content: '예비창업패키지/수출바우처 사업계획서',
        growfitFeatures: ['템플릿', 'Few-shot'],
        steps: [
          {
            order: 1,
            instruction:
              '사업계획서 템플릿을 불러옵니다. 시스템 프롬프트에 "정부 지원사업 심사위원 경력 10년의 컨설턴트"를 설정합니다.',
            growfitPath: 'AI 실습 > 프롬프트 템플릿 > 사업계획서',
          },
          {
            order: 2,
            instruction:
              'Few-shot으로 "좋은 사업계획서 예시 2개 + 나쁜 예시 1개"를 제공하고, "우리 회사 사업계획서를 작성해줘"를 입력합니다.',
            growfitPath: 'AI 실습 > 단일 모드 > Few-shot + 템플릿',
            note: '예비창업패키지 양식에 맞춰 항목별(아이템 개요, 시장 분석, 사업화 전략)로 요청하세요.',
          },
          {
            order: 3,
            instruction:
              '생성된 사업계획서 초안을 검토하고, 부족한 부분을 후속 프롬프트로 보완합니다.',
            growfitPath: 'AI 실습 > 단일 모드 > 후속 프롬프트',
          },
        ],
        tips: [
          '정부 지원사업 사업계획서는 심사 기준이 공개되어 있으므로 이를 프롬프트에 포함하면 적합도가 높아집니다.',
          '수출바우처의 경우 "해외 시장 진출 전략"을 강조하는 프롬프트가 효과적입니다.',
          'Few-shot의 "나쁜 예시"는 AI가 피해야 할 패턴을 학습하는 데 도움이 됩니다.',
        ],
      },
      {
        order: 2,
        title: '마케팅 카피 생성',
        hours: 1,
        growfitAction: 'Few-shot + 시스템 프롬프트',
        content: '브랜드 톤에 맞는 카피 A/B 비교',
        growfitFeatures: ['Few-shot', '시스템 프롬프트'],
        steps: [
          {
            order: 1,
            instruction:
              '시스템 프롬프트에 "대한민국 TOP 10 카피라이터, 간결하고 임팩트 있는 문체"를 설정합니다.',
            growfitPath: 'AI 실습 > 시스템 프롬프트 > 카피라이터',
          },
          {
            order: 2,
            instruction:
              'Few-shot으로 기존 브랜드 카피 3개를 예시로 제공하고, 신제품 카피를 요청합니다. A안과 B안을 각각 생성하세요.',
            growfitPath: 'AI 실습 > 단일 모드 > A/B 카피',
          },
          {
            order: 3,
            instruction:
              '비교 모드에서 GPT와 Claude에 동일 프롬프트를 입력하여 카피 스타일 차이를 비교합니다.',
            growfitPath: 'AI 실습 > 비교 모드 > 카피 비교',
          },
        ],
        tips: [
          '브랜드의 기존 카피를 Few-shot으로 넣으면 톤 & 매너를 자연스럽게 유지할 수 있습니다.',
          'A/B 테스트 카피는 "감성형 vs 데이터형"으로 분리하면 테스트 효과가 좋습니다.',
        ],
      },
      {
        order: 3,
        title: '코딩 프롬프트 전략',
        hours: 1,
        growfitAction: '비교 모드 (GPT vs Claude)',
        content: '코드 생성/리뷰/디버깅 비교',
        growfitFeatures: ['비교 모드'],
        steps: [
          {
            order: 1,
            instruction:
              '비교 모드에서 GPT-4o-mini와 Claude-3-haiku를 설정합니다. "Python Flask로 REST API 서버를 만들어줘"를 입력합니다.',
            growfitPath: 'AI 실습 > 비교 모드 > 코드 생성',
          },
          {
            order: 2,
            instruction:
              '생성된 코드에 의도적으로 버그를 삽입한 뒤, 두 모델에 "이 코드의 버그를 찾아줘"를 요청합니다.',
            growfitPath: 'AI 실습 > 비교 모드 > 디버깅',
          },
          {
            order: 3,
            instruction:
              '코드 리뷰를 요청하여 각 모델의 리뷰 깊이와 개선 제안 품질을 비교합니다.',
            growfitPath: 'AI 실습 > 비교 모드 > 코드 리뷰',
          },
        ],
        tips: [
          '코딩 프롬프트에서는 "언어, 프레임워크, 버전, 코딩 스타일"을 명시하면 결과가 훨씬 좋아집니다.',
          'Claude는 보안 취약점을 잘 잡고, GPT는 다양한 라이브러리 활용 제안에 강합니다.',
        ],
      },
      {
        order: 4,
        title: '프롬프트 배틀',
        hours: 1,
        growfitAction: '비교 모드 + 평가',
        content: '같은 과제, 다른 프롬프트 결과물 경쟁',
        growfitFeatures: ['비교 모드'],
        steps: [
          {
            order: 1,
            instruction:
              '강사가 공통 과제를 제시합니다. 각 팀은 5분 안에 최적의 프롬프트를 설계합니다.',
            growfitPath: '오프라인 팀 활동',
          },
          {
            order: 2,
            instruction:
              '각 팀의 프롬프트를 비교 모드에 입력하여 결과물을 나란히 비교합니다.',
            growfitPath: 'AI 실습 > 비교 모드 > 배틀 실행',
          },
          {
            order: 3,
            instruction:
              '전체 투표로 "최우수 프롬프트"를 선정하고, 해당 프롬프트의 전략을 분석합니다.',
            growfitPath: '팀 투표 & 분석',
          },
        ],
        tips: [
          '프롬프트 배틀은 게이미피케이션 요소로 학습 몰입도를 높입니다.',
          '패배한 프롬프트에서 배우는 것이 더 많을 수 있습니다. "왜 효과가 없었는지"를 분석하세요.',
          '우승 프롬프트는 반드시 템플릿으로 저장하세요.',
        ],
      },
      {
        order: 5,
        title: 'GrowFit 점검',
        hours: 0.5,
        growfitAction: '전체 템플릿 라이브러리',
        content: '지금까지 만든 모든 템플릿을 정리하고 라이브러리화합니다.',
        growfitFeatures: ['템플릿'],
        steps: [
          {
            order: 1,
            instruction:
              '프롬프트 템플릿 목록을 열어 지금까지 저장한 모든 템플릿을 카테고리별로 정리합니다.',
            growfitPath: 'AI 실습 > 프롬프트 템플릿 > 전체 목록',
          },
          {
            order: 2,
            instruction:
              'LLM 선택 -> 파라미터 설정 -> 프롬프트 작성까지의 전체 학습 흐름을 회고합니다.',
            growfitPath: '팀 회고',
          },
        ],
        tips: [
          '이 시점에서 여러분은 모델 선택, 파라미터 튜닝, 프롬프트 작성 세 가지 스킬을 갖추었습니다.',
          '다음 차시(RAG)부터는 LLM의 지식을 확장하는 단계로 넘어갑니다.',
        ],
      },
    ],
    checkpoint: {
      differentiatorId: 3,
      duration: '30분',
      activity: '전체 학습 흐름 회고',
      reviewPrompt:
        'LLM 선택부터 파라미터 설정, 프롬프트 작성까지 한 플랫폼에서 진행한 경험을 정리해보세요.',
    },
  },

  // ─────────────────────────────────────────────
  // Session 6: 지식베이스 RAG
  // ─────────────────────────────────────────────
  {
    id: 6,
    slug: 'knowledge-base-rag',
    title: '지식베이스 RAG',
    hours: 5,
    icon: 'Database',
    color: '#06B6D4',
    gradient: 'from-cyan-500 to-sky-600',
    sourceChapters: '에이전트 클래스 Ch1(RAG개념) + Ch5(실전)',
    growfitFeatures: ['지식베이스', 'RAG 비교 모드', '고급 설정'],
    description:
      '문서 기반 AI를 구축하고, 청킹/임베딩/Top-K 파라미터를 실험합니다.',
    learningOutcomes: ['임베딩과 벡터 유사도 검색의 원리를 이해하고 설명할 수 있다', '청킹 전략(고정 크기 vs 의미 기반)의 차이를 이해하고 상황에 맞게 선택할 수 있다', 'GrowFit 지식베이스의 파라미터(청크 사이즈, 오버랩, Top-K)를 조절하여 최적의 RAG를 설계할 수 있다'],
    prerequisites: [5],
    competencyLayer: 'application',
    keyConceptsIntroduced: ['임베딩', '벡터 유사도', '코사인 유사도', '청킹 전략', 'Top-K 검색', 'RAG 파이프라인', '할루시네이션 방지'],
    segments: [
      {
        order: 1,
        title: 'RAG란? LLM의 한계',
        hours: 0.5,
        growfitAction: '지식베이스 소개',
        content: 'LLM 환각 -> 문서 참조. 임베딩(Embedding)이란 텍스트를 고차원 벡터로 변환하는 과정입니다. 벡터 유사도(코사인 유사도)를 통해 의미적으로 가까운 문서를 검색합니다.',
        growfitFeatures: ['지식베이스'],
        steps: [
          {
            order: 1,
            instruction:
              '단일 모드에서 "우리 회사 2024년 매출은 얼마야?"처럼 LLM이 모를 수밖에 없는 질문을 합니다. 환각(hallucination) 현상을 관찰하세요.',
            growfitPath: 'AI 실습 > 단일 모드 > 환각 관찰',
          },
          {
            order: 2,
            instruction:
              '강사가 RAG(Retrieval-Augmented Generation)의 원리를 설명합니다: "검색 -> 참조 -> 생성" 3단계.',
            growfitPath: '이론 강의',
          },
        ],
        tips: [
          '환각은 LLM의 근본적 한계입니다. RAG는 이를 해결하는 가장 실용적인 방법입니다.',
          'RAG는 "오픈북 시험"과 같습니다. LLM이 답변 전에 관련 문서를 참조합니다.',
        ],
      },
      {
        order: 2,
        title: '문서 업로드 & 간편 설정',
        hours: 1,
        growfitAction: '간편 업로드 (드래그앤드롭)',
        content: 'PDF/Word/CSV',
        growfitFeatures: ['지식베이스'],
        steps: [
          {
            order: 1,
            instruction:
              '"지식베이스" 메뉴로 이동합니다. "새 지식베이스 만들기"를 클릭하고 이름을 지정합니다.',
            growfitPath: '지식베이스 > 새로 만들기',
          },
          {
            order: 2,
            instruction:
              '실습용 PDF 파일(강사 제공)을 드래그 앤 드롭으로 업로드합니다. 업로드 진행률과 문서 처리 상태를 확인하세요.',
            growfitPath: '지식베이스 > 문서 업로드 > 드래그앤드롭',
          },
          {
            order: 3,
            instruction:
              '업로드된 문서를 기반으로 질문합니다. "이 문서에서 핵심 내용 3가지를 요약해줘"를 입력하세요.',
            growfitPath: '지식베이스 > AI 실습 > 문서 기반 질문',
            note: '답변에 문서 출처가 표시되는지 확인하세요.',
          },
        ],
        tips: [
          'PDF, Word, CSV, TXT 등 다양한 형식을 지원합니다. 용량 제한은 지식베이스 설정에서 확인하세요.',
          '문서가 잘 처리되었는지는 "문서 미리보기"로 확인할 수 있습니다.',
          '한글(HWP) 파일은 PDF로 변환 후 업로드하는 것을 권장합니다.',
        ],
      },
      {
        order: 3,
        title: '청킹 & 임베딩 실험',
        hours: 1.5,
        growfitAction: '고급 설정: chunk_size/overlap/임베딩',
        content: '비교 실험. 청킹 전략 비교: 고정 크기(Fixed-size) 청킹은 구현이 간단하나 문맥이 끊길 수 있고, 의미 기반(Semantic) 청킹은 자연스러운 단위로 분할하여 검색 품질을 높입니다.',
        growfitFeatures: ['고급 설정'],
        steps: [
          {
            order: 1,
            instruction:
              '"고급 설정"을 열고 chunk_size를 200으로 설정합니다. 같은 질문을 입력하고 답변 품질을 확인합니다.',
            growfitPath: '지식베이스 > 고급 설정 > chunk_size 200',
          },
          {
            order: 2,
            instruction:
              'chunk_size를 800, 1500으로 각각 변경하며 동일 질문을 반복합니다. 답변의 정확도와 맥락 이해도 변화를 기록하세요.',
            growfitPath: '지식베이스 > 고급 설정 > chunk_size 비교',
          },
          {
            order: 3,
            instruction:
              'overlap을 0, 50, 200으로 변경하며 실험합니다. 청크 경계에서 문맥이 끊기는 현상이 줄어드는지 관찰하세요.',
            growfitPath: '지식베이스 > 고급 설정 > overlap 비교',
            note: 'overlap이 클수록 인접 청크 간 정보 손실이 줄어듭니다.',
          },
        ],
        tips: [
          'chunk_size가 너무 작으면 문맥이 잘리고, 너무 크면 관련 없는 내용이 포함됩니다.',
          '일반적으로 chunk_size 500~1000, overlap 50~200이 좋은 출발점입니다.',
          '문서의 구조(짧은 FAQ vs 긴 보고서)에 따라 최적값이 달라지므로 실험이 중요합니다.',
        ],
      },
      {
        order: 4,
        title: 'RAG 비교 모드',
        hours: 1.5,
        growfitAction: '비교 모드 (A/B 패널)',
        content: '순수 LLM vs 문서참조',
        growfitFeatures: ['RAG 비교 모드'],
        steps: [
          {
            order: 1,
            instruction:
              'RAG 비교 모드를 활성화합니다. A 패널에는 "순수 LLM"(지식베이스 OFF), B 패널에는 "문서 참조"(지식베이스 ON)를 설정합니다.',
            growfitPath: '지식베이스 > RAG 비교 모드 > A/B 설정',
          },
          {
            order: 2,
            instruction:
              '업로드한 문서에 대한 구체적 질문("2024년 3분기 영업이익은?")을 입력합니다. A/B 답변의 정확도 차이를 관찰하세요.',
            growfitPath: '지식베이스 > RAG 비교 모드 > 질문 입력',
          },
          {
            order: 3,
            instruction:
              'Top-K 값을 3, 5, 10으로 변경하며 실험합니다. 참조 문서 수에 따른 답변 품질 변화를 기록하세요.',
            growfitPath: '지식베이스 > 고급 설정 > Top-K 비교',
          },
        ],
        tips: [
          'RAG 비교 모드는 "지식베이스의 효과"를 가장 직관적으로 보여줍니다.',
          'Top-K가 높을수록 더 많은 문서를 참조하지만, 관련 없는 정보도 포함될 수 있습니다.',
        ],
      },
      {
        order: 5,
        title: 'GrowFit 점검',
        hours: 0.5,
        growfitAction: 'RAG 파라미터 리뷰',
        content: '최적 RAG 파라미터를 공유합니다.',
        growfitFeatures: ['고급 설정'],
        steps: [
          {
            order: 1,
            instruction:
              '실험 결과를 바탕으로 "최적 청킹/Top-K 조합"을 팀별로 발표합니다.',
            growfitPath: '팀 발표',
          },
          {
            order: 2,
            instruction:
              '자신의 실무 문서로 지식베이스를 만들 계획을 세웁니다. 어떤 문서를 넣을지 목록을 작성하세요.',
            growfitPath: '개인 계획',
          },
        ],
        tips: [
          'RAG는 "내 문서에 대해 AI와 대화하는 것"입니다. 회사 매뉴얼, 제품 카탈로그 등에 활용하세요.',
          '다음 차시에서 에이전트에 지식베이스를 연결하면 전문 분야 AI 어시스턴트를 만들 수 있습니다.',
        ],
      },
    ],
    checkpoint: {
      differentiatorId: 2,
      duration: '30분',
      activity: '청킹/Top-K 최적값 공유',
      reviewPrompt:
        'chunk_size와 Top-K 값을 변경하며 실험한 결과, 최적의 조합은 무엇이었나요?',
    },
  },

  // ─────────────────────────────────────────────
  // Session 7: AI 에이전트 빌드
  // ─────────────────────────────────────────────
  {
    id: 7,
    slug: 'agent-build',
    title: 'AI 에이전트 빌드',
    hours: 5,
    icon: 'Bot',
    color: '#8B5CF6',
    gradient: 'from-purple-500 to-indigo-600',
    sourceChapters: '에이전트 클래스 Ch4',
    growfitFeatures: ['에이전트 빌더', '템플릿 에이전트', 'Published/Private'],
    description:
      'AI 에이전트를 기획하고, GrowFit 에이전트 빌더로 직접 만들어 배포합니다.',
    learningOutcomes: ['AI 에이전트의 구성 요소(LLM + 도구 + 메모리)를 이해하고 설계할 수 있다', '컨텍스트 엔지니어링으로 에이전트의 시스템 프롬프트와 도구 설명을 체계적으로 작성할 수 있다', 'GrowFit 에이전트 빌더로 실제 동작하는 에이전트를 만들고 테스트할 수 있다'],
    prerequisites: [6],
    competencyLayer: 'mastery',
    keyConceptsIntroduced: ['AI 에이전트', '도구 호출', '에이전트 루프', 'ReAct 패턴', '도구 설명 작성법', '에이전트 컨텍스트 엔지니어링'],
    segments: [
      {
        order: 1,
        title: 'AI 에이전트란?',
        hours: 0.5,
        growfitAction: '에이전트 소개',
        content: '역할+전문분야+톤+제약조건+출력형식. 컨텍스트 엔지니어링: 에이전트의 시스템 프롬프트에는 역할 정의, 행동 규칙, 도구 사용 가이드를 명확히 구조화합니다. 도구 설명(Tool Description)은 에이전트가 도구를 올바르게 선택하는 핵심 요소입니다.',
        growfitFeatures: ['에이전트 빌더'],
        steps: [
          {
            order: 1,
            instruction:
              '"에이전트 빌더" 메뉴로 이동합니다. 에이전트의 구성 요소(역할, 전문분야, 톤, 제약조건, 출력형식)를 확인합니다.',
            growfitPath: '에이전트 빌더 > 메인 화면',
          },
          {
            order: 2,
            instruction:
              '강사가 에이전트와 챗봇의 차이를 설명합니다. 에이전트는 "목표 지향적 자율 행동"이 핵심입니다.',
            growfitPath: '이론 강의',
          },
        ],
        tips: [
          '에이전트 = 시스템 프롬프트 + 지식베이스 + 도구(Tool) + 배포 설정의 조합입니다.',
          '차시 3에서 배운 시스템 프롬프트가 에이전트의 "두뇌"가 됩니다.',
        ],
      },
      {
        order: 2,
        title: '템플릿 에이전트 체험',
        hours: 1,
        growfitAction: '기본 템플릿 (코딩 튜터, 영어 회화, 마케팅)',
        content: '사전 구축된 템플릿 에이전트를 체험합니다.',
        growfitFeatures: ['템플릿 에이전트'],
        steps: [
          {
            order: 1,
            instruction:
              '"템플릿 에이전트" 목록에서 "코딩 튜터"를 선택하고 대화를 시작합니다. "Python 리스트 컴프리헨션을 설명해줘"를 입력하세요.',
            growfitPath: '에이전트 빌더 > 템플릿 > 코딩 튜터',
          },
          {
            order: 2,
            instruction:
              '"영어 회화 파트너"를 선택하여 영어 대화를 시도합니다. 에이전트가 문법 교정을 해주는지 확인하세요.',
            growfitPath: '에이전트 빌더 > 템플릿 > 영어 회화',
          },
          {
            order: 3,
            instruction:
              '"마케팅 어시스턴트"를 선택하여 카피 생성을 요청합니다. 각 템플릿 에이전트의 시스템 프롬프트를 "설정 보기"로 확인하세요.',
            growfitPath: '에이전트 빌더 > 템플릿 > 마케팅',
            note: '템플릿의 시스템 프롬프트 구조를 분석하면 나만의 에이전트 설계에 참고가 됩니다.',
          },
        ],
        tips: [
          '템플릿 에이전트의 "설정 보기"를 통해 전문가가 어떻게 프롬프트를 구성했는지 배울 수 있습니다.',
          '마음에 드는 템플릿을 "복제"하여 커스터마이즈하는 것도 좋은 시작 방법입니다.',
          '각 에이전트의 톤과 제약조건이 어떻게 다른지 비교해 보세요.',
        ],
      },
      {
        order: 3,
        title: '커스텀 에이전트 설계 & 빌드',
        hours: 1.5,
        growfitAction: '처음부터 만들기',
        content: '에이전트 기획서 -> 설정. ReAct(Reasoning + Acting) 패턴으로 에이전트가 \'생각 → 행동 → 관찰\' 루프를 반복하며 복잡한 문제를 해결합니다.',
        growfitFeatures: ['에이전트 빌더'],
        steps: [
          {
            order: 1,
            instruction:
              '"처음부터 만들기"를 클릭합니다. 에이전트 이름, 설명, 아바타를 설정합니다.',
            growfitPath: '에이전트 빌더 > 새로 만들기 > 기본 정보',
          },
          {
            order: 2,
            instruction:
              '시스템 프롬프트를 작성합니다. 차시 3에서 배운 4축(역할, 전문분야, 톤, 제약조건)에 "출력형식"을 추가하여 5축 프롬프트를 완성합니다.',
            growfitPath: '에이전트 빌더 > 시스템 프롬프트 설정',
            note: '예: "너는 스타트업 재무 컨설턴트야. 항상 숫자를 표로 정리하고, 리스크를 반드시 언급해."',
          },
          {
            order: 3,
            instruction:
              '차시 6에서 만든 지식베이스를 에이전트에 연결합니다. "지식베이스 연결" 옵션에서 선택하세요.',
            growfitPath: '에이전트 빌더 > 지식베이스 연결',
          },
        ],
        tips: [
          '에이전트 기획서를 먼저 종이에 작성하면 설정 시 빠르게 진행할 수 있습니다.',
          '시스템 프롬프트는 길어도 괜찮습니다. 구체적일수록 에이전트의 품질이 높아집니다.',
          '지식베이스 연결은 "전문 분야의 정확성"을 보장하는 핵심 요소입니다.',
        ],
      },
      {
        order: 4,
        title: '테스트 & 반복 개선',
        hours: 1,
        growfitAction: 'Draft(OFF) 모드',
        content: '대화 테스트 -> 프롬프트 수정',
        growfitFeatures: ['에이전트 빌더'],
        steps: [
          {
            order: 1,
            instruction:
              '에이전트를 Draft 상태로 유지한 채 "테스트 대화"를 시작합니다. 다양한 질문을 던져보세요.',
            growfitPath: '에이전트 빌더 > Draft 모드 > 테스트 대화',
          },
          {
            order: 2,
            instruction:
              '기대와 다른 응답이 나오면 시스템 프롬프트를 수정합니다. "제약조건"과 "출력형식"을 조절하면 효과적입니다.',
            growfitPath: '에이전트 빌더 > 시스템 프롬프트 수정',
          },
          {
            order: 3,
            instruction:
              '엣지 케이스(답변 범위 밖의 질문, 악의적 질문 등)를 테스트합니다. 에이전트가 적절히 거절하는지 확인하세요.',
            growfitPath: '에이전트 빌더 > Draft 모드 > 엣지 케이스',
            note: '제약조건에 "모르는 내용은 추측하지 말고 솔직히 모른다고 해"를 추가하세요.',
          },
        ],
        tips: [
          'Draft 모드에서 충분히 테스트한 뒤 배포하세요. 나중에 수정하면 사용자 경험이 나빠집니다.',
          '"테스트 -> 수정 -> 테스트" 사이클을 최소 3회 반복하는 것을 권장합니다.',
        ],
      },
      {
        order: 5,
        title: '배포 & 공유',
        hours: 1,
        growfitAction: 'Published(ON)',
        content: 'Private/Class/Workspace',
        growfitFeatures: ['Published/Private'],
        steps: [
          {
            order: 1,
            instruction:
              '테스트가 완료되면 "Published" 토글을 ON으로 전환합니다. 공개 범위를 Private/Class/Workspace 중 선택합니다.',
            growfitPath: '에이전트 빌더 > Published > 공개 범위',
          },
          {
            order: 2,
            instruction:
              '"Class" 범위로 설정하면 같은 교육 과정 수강생들이 사용할 수 있습니다. 팀원에게 에이전트 링크를 공유합니다.',
            growfitPath: '에이전트 빌더 > 공유 > Class',
          },
          {
            order: 3,
            instruction:
              '다른 수강생이 만든 에이전트를 사용해보고, 피드백을 남깁니다.',
            growfitPath: '에이전트 빌더 > 탐색 > 피어 리뷰',
          },
        ],
        tips: [
          'Private: 나만 사용, Class: 같은 교육과정 수강생, Workspace: 조직 전체 공유입니다.',
          '처음에는 Class로 배포하여 동료의 피드백을 받는 것을 추천합니다.',
          '배포 후에도 시스템 프롬프트를 수정할 수 있지만, 사용 중인 사용자에게 영향을 줄 수 있습니다.',
        ],
      },
    ],
    checkpoint: {
      differentiatorId: 4,
      duration: '(차시 8에 통합)',
      activity: '에이전트 빌드 & 배포 완료',
      reviewPrompt:
        '만든 에이전트가 실무에서 어떻게 활용될 수 있을까요?',
    },
  },

  // ─────────────────────────────────────────────
  // Session 8: 종합 프로젝트 & 발표
  // ─────────────────────────────────────────────
  {
    id: 8,
    slug: 'final-project',
    title: '종합 프로젝트 & 발표',
    hours: 5,
    icon: 'Trophy',
    color: '#F59E0B',
    gradient: 'from-yellow-500 to-amber-600',
    sourceChapters: '전체 과정 통합',
    growfitFeatures: [
      '에이전트 빌더',
      '지식베이스',
      '템플릿',
      '비교 모드',
      '대시보드',
    ],
    description:
      '40시간의 학습을 종합하여 나만의 AI 에이전트를 완성하고 발표합니다.',
    learningOutcomes: ['1~7차시 내용을 종합하여 실무 AI 활용 프로젝트를 기획·실행할 수 있다', '에이전트 + RAG + 프롬프트 전략을 결합한 복합 솔루션을 설계할 수 있다', 'AI 활용 결과를 평가하고 개선 방안을 도출할 수 있다'],
    prerequisites: [7],
    competencyLayer: 'mastery',
    keyConceptsIntroduced: ['프로젝트 설계', 'AI 워크플로우', '멀티 에이전트 개념', '평가 지표'],
    segments: [
      {
        order: 1,
        title: '프로젝트 브리핑',
        hours: 0.5,
        growfitAction: '이론',
        content: '최종 과제: "나의 업무/분야에 최적화된 AI 에이전트"',
        growfitFeatures: ['에이전트 빌더'],
        steps: [
          {
            order: 1,
            instruction:
              '강사가 최종 프로젝트 요구사항을 발표합니다: "나의 업무/분야에 최적화된 AI 에이전트를 만들고 시연하라."',
            growfitPath: '이론 강의 > 프로젝트 브리핑',
          },
          {
            order: 2,
            instruction:
              '평가 기준(에이전트 완성도, 지식베이스 활용도, 프롬프트 품질, 발표력)을 확인하고 개인 계획을 수립합니다.',
            growfitPath: '개인 기획',
          },
        ],
        tips: [
          '본인의 실제 업무에 적용할 수 있는 에이전트를 만들면 과정 후에도 계속 사용할 수 있습니다.',
          '40시간 동안 배운 모든 기능(모델 선택, 파라미터, 프롬프트, RAG, 에이전트)을 종합적으로 활용하세요.',
        ],
      },
      {
        order: 2,
        title: '에이전트 빌드 스프린트',
        hours: 2,
        growfitAction: '에이전트 빌더+지식베이스+템플릿',
        content:
          '최종 에이전트를 빌드합니다. 이전 차시에서 만든 자산을 모두 활용합니다.',
        growfitFeatures: ['에이전트 빌더', '지식베이스', '템플릿'],
        steps: [
          {
            order: 1,
            instruction:
              '에이전트 빌더에서 새 에이전트를 생성하거나, 차시 7에서 만든 에이전트를 기반으로 개선합니다.',
            growfitPath: '에이전트 빌더 > 새로 만들기 / 기존 수정',
          },
          {
            order: 2,
            instruction:
              '실무 문서를 업로드하여 지식베이스를 구축합니다. 차시 6에서 찾은 최적 청킹 설정을 적용하세요.',
            growfitPath: '지식베이스 > 문서 업로드 > 고급 설정',
            note: '실제 업무 문서를 사용하면 발표 시 설득력이 높아집니다.',
          },
          {
            order: 3,
            instruction:
              '저장해 둔 프롬프트 템플릿, Few-shot 세트를 에이전트 시스템 프롬프트에 통합합니다. 충분히 테스트한 뒤 Published로 전환합니다.',
            growfitPath: '에이전트 빌더 > 시스템 프롬프트 > 테스트 > 배포',
          },
        ],
        tips: [
          '2시간이라는 제한 시간 안에 완성해야 하므로, 핵심 기능에 집중하세요.',
          '지식베이스 + 시스템 프롬프트 조합이 에이전트 품질의 80%를 결정합니다.',
          '시간이 부족하면 템플릿 에이전트를 복제하여 수정하는 것도 전략입니다.',
        ],
      },
      {
        order: 3,
        title: '발표 & 피어 리뷰',
        hours: 1,
        growfitAction: 'Published 에이전트 시연',
        content: 'Q&A, 동료 평가',
        growfitFeatures: ['에이전트 빌더'],
        steps: [
          {
            order: 1,
            instruction:
              '배포된 에이전트를 화면에 띄우고 3분 이내로 시연합니다. "왜 이 에이전트를 만들었는가"부터 시작하세요.',
            growfitPath: '에이전트 빌더 > Published > 시연',
          },
          {
            order: 2,
            instruction:
              '동료 수강생들이 질문하고 에이전트를 직접 사용해봅니다. 예상치 못한 질문에 에이전트가 어떻게 반응하는지 관찰하세요.',
            growfitPath: '에이전트 빌더 > Published > 실시간 Q&A',
          },
          {
            order: 3,
            instruction:
              '피어 리뷰 양식에 따라 각 에이전트에 대한 평가(완성도, 실용성, 창의성)를 작성합니다.',
            growfitPath: '피어 리뷰 양식 작성',
          },
        ],
        tips: [
          '발표에서 "이 에이전트가 해결하는 문제"를 명확히 전달하면 설득력이 높아집니다.',
          '다른 수강생의 에이전트에서 좋은 아이디어를 발견하면 자신의 에이전트에 적용해 보세요.',
        ],
      },
      {
        order: 4,
        title: '과정 회고 & 응용 전략',
        hours: 1,
        growfitAction: '비교 모드 + 대시보드',
        content: '40시간 학습 여정 회고',
        growfitFeatures: ['비교 모드', '대시보드'],
        steps: [
          {
            order: 1,
            instruction:
              '대시보드에서 본인의 40시간 활동 데이터를 확인합니다. 모델별 사용량, 프롬프트 수, 에이전트 대화 수 등을 검토하세요.',
            growfitPath: '대시보드 > 개인 활동 리포트',
          },
          {
            order: 2,
            instruction:
              '차시 1의 첫 프롬프트와 차시 8의 에이전트 프롬프트를 나란히 비교하며 성장 과정을 되돌아봅니다.',
            growfitPath: 'AI 실습 > 히스토리 > 차시 1 vs 차시 8',
          },
          {
            order: 3,
            instruction:
              '"AI를 실무에 어떻게 적용할 것인가?" 액션 플랜을 작성합니다. 구체적인 업무 3가지와 활용 방법을 정리하세요.',
            growfitPath: '개인 액션 플랜',
          },
        ],
        tips: [
          '대시보드 데이터는 "어떤 모델을 가장 많이 사용했는지", "어떤 기능을 가장 자주 썼는지"를 보여줍니다.',
          '실무 적용 액션 플랜은 과정 후 1주일 안에 실행해야 학습 효과가 유지됩니다.',
          '팀원들과 액션 플랜을 공유하면 서로 자극이 되어 실행력이 높아집니다.',
        ],
      },
      {
        order: 5,
        title: 'GrowFit 종합 점검',
        hours: 0.5,
        growfitAction: '대시보드 + 사용량 리포트',
        content: '전체 과정의 GrowFit 활용을 총정리합니다.',
        growfitFeatures: ['대시보드'],
        steps: [
          {
            order: 1,
            instruction:
              '대시보드에서 "사용량 리포트"를 다운로드합니다. 총 프롬프트 수, 모델별 사용 비율, 에이전트 생성 수 등을 확인하세요.',
            growfitPath: '대시보드 > 사용량 리포트 > 다운로드',
          },
          {
            order: 2,
            instruction:
              '수료 후 계속 사용할 수 있는 GrowFit 기능(에이전트, 지식베이스, 템플릿)을 정리합니다.',
            growfitPath: '대시보드 > 나의 자산 정리',
          },
        ],
        tips: [
          '사용량 리포트는 교육 성과를 객관적으로 증명하는 자료가 됩니다.',
          '만든 에이전트와 템플릿은 과정 이후에도 계속 활용할 수 있으니 잘 정리해 두세요.',
        ],
      },
    ],
    checkpoint: {
      differentiatorId: 5,
      duration: '30분',
      activity: '학습 행동 데이터로 성장 확인',
      reviewPrompt:
        '대시보드에서 확인한 나의 AI 활용 패턴은 어떠했나요?',
    },
  },
]
