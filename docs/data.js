// 해외홍보 체크리스트 데이터. 내용을 고칠 때는 이 파일만 수정한다.
// 공개 저장소이므로 게임 이름, 계정 아이디, 개인 정보는 넣지 않는다.
window.DATA = {
  warmupDays: 14,

  regions: {
    all: { name: '공통', color: '#7a7f8c' },
    cn: { name: '중국', color: '#d9483b', time: '올리기 좋은 시간: 한국 13~14시, 20~24시' },
    jp: { name: '일본', color: '#3b7dd9', time: '올리기 좋은 시간: 12시, 19~22시 (시차 없음)' },
    ru: { name: '러시아', color: '#2f9e6e', time: '올리기 좋은 시간: 한국 18~21시 (모스크바 낮)' }
  },

  // pkg: 안드로이드 패키지 이름. 쉼표로 여러 개를 적으면 앞에서부터 설치된 것을 연다.
  platforms: [
    {
      id: 'xiaoheihe', region: 'cn', name: '샤오헤이허', native: '小黑盒', tier: '메인',
      web: 'https://www.xiaoheihe.cn/', pkg: 'com.max.xiaoheihe', signup: '2026-11-18',
      about: '스팀 유저 앱. 게임별 커뮤니티 구조이고 잡담 게시판은 盒友杂谈. 위시리스트로 바로 이어진다.',
      post: '개발일지 글 + 이미지. 제목에 【开发日志】 머리말, 제목에 질문을 넣으면 댓글이 늘어난다.',
      tone: '부르는 말 各位盒友. 친근하고 들뜬 톤, 啦/呀/哈哈와 이모지 자연스러움.',
      rules: ['외부 링크·위챗 ID·QR 금지', '最好玩/第一 같은 최상급 금지', '도박 연상 단어(赌博, 博彩, 下注) 금지', '정치·사회 주제 금지'],
      search: ['杀戮尖塔', '小丑牌', '肉鸽', '卡牌构筑', '独立游戏', '盒友杂谈']
    },
    {
      id: 'bilibili', region: 'cn', name: '빌리빌리', native: '哔哩哔哩', tier: '메인',
      web: 'https://www.bilibili.com/', pkg: 'com.bilibili.app.in,tv.danmaku.bili',
      about: '영상 중심. 탄막과 댓글 문화. 개발일지(开发日志) 시리즈가 흔하다. +82 번호 가입(앞자리 0 빼고), 여권 실명 인증 약 하루.',
      post: '동태(动态): 1~3문장 + 움짤 + #태그#. 영상: 제목 【独立游戏开发日志#N】…, 최대 80자, 중국어 자막 필수.',
      tone: '부르는 말 大家. 영상 첫마디 "大家好，我们是…".',
      rules: ['외부 링크·위챗 ID·QR 금지', '유튜브 링크로 대신하지 않기(직접 업로드)', '다른 앱 워터마크 영상 금지'],
      search: ['独立游戏', '肉鸽', '卡牌构筑', '开发日志']
    },
    {
      id: 'xiaohongshu', region: 'cn', name: '샤오훙수', native: '小红书', tier: '메인 후보',
      web: 'https://www.xiaohongshu.com/', pkg: 'com.xingin.xhs',
      about: '이미지 카드 노트 중심. 예쁜 커버가 핵심. +82 가입, 글 올리기 전 "외국인 여권" 실명 인증 권장.',
      post: '세로 3:4 커버에 큰 글씨 + 제목 20자 이내 + 줄마다 이모지 + 해시태그 여러 개.',
      tone: '부르는 말 大家, 가끔 宝子们.',
      rules: ['제목 20자 이내', '외부 링크·QR 제재가 특히 강함', '다른 플랫폼 이름 언급 금지'],
      search: ['独立游戏开发', '像素游戏', '像素画', '独立游戏']
    },
    {
      id: 'tieba', region: 'cn', name: '티에바', native: '百度贴吧', tier: '퍼 나르기',
      web: 'https://tieba.baidu.com/', pkg: 'com.baidu.tieba',
      about: '게시판형 포럼. 새 계정 글이 숨겨지기 쉽다. 한국 번호 가입 가능 여부 미확인.',
      post: '샤오헤이허 글을 조금 담백하게 다듬어서. 격주.',
      tone: '부르는 말 各位吧友.',
      rules: ['샤오헤이허와 같은 날 같은 글 금지(제목·도입 바꾸고 하루 이상 간격)']
    },
    {
      id: 'keylol', region: 'cn', name: 'Keylol', native: '其乐', tier: '퍼 나르기',
      web: 'https://keylol.com/', pkg: '',
      about: '스팀 유저 포럼(웹 전용). 가입 조건 미확인.',
      post: '샤오헤이허 글을 다듬어서. 격주.',
      tone: '부르는 말 各位.',
      rules: ['새 계정 글이 숨겨지기 쉬움']
    },
    {
      id: 'weibo', region: 'cn', name: '웨이보', native: '微博', tier: '퍼 나르기',
      web: 'https://weibo.com/', pkg: 'com.sina.weibo',
      about: 'SNS. 여유가 생기면. 가입 조건 미확인.',
      post: '빌리빌리 영상 소식.',
      tone: '짧게.',
      rules: ['외부 링크 주의']
    },
    {
      id: 'x', region: 'jp', name: 'X (일본어)', native: 'X', tier: '메인',
      web: 'https://x.com/', pkg: 'com.twitter.android',
      about: '일본 홍보의 사실상 전부. 인디 개발자끼리 서로 알티하는 문화. 도트 그래픽 반응이 좋다. 일본어 전용 계정 권장.',
      post: '짧은 글 + 움짤/이미지 + 해시태그 3~4개. 일본어는 약 140자 제한.',
      tone: 'です・ます. 주어는 생략하거나 私. 겸손하게 작업 과정을 보여 주는 톤. 이모지는 🙏✨💦 정도.',
      rules: ['해시태그 3~4개까지', '강매 표현(絶対買って, 神ゲー 자칭) 금지', '반말 금지'],
      search: ['#インディーゲーム', '#ゲーム制作', '#ドット絵', '#pixelart', '#indiedev', '#ScreenshotSaturday']
    },
    {
      id: 'note', region: 'jp', name: 'note', native: 'note', tier: '퍼 나르기',
      web: 'https://note.com/', pkg: 'mu.note',
      about: '블로그. 개발일지 연재에 맞다.',
      post: '제목 【開発日記】… + 소제목 + 이미지. 길어도 됨. 끝에 X 계정 안내.',
      tone: 'です・ます, 차분하게.',
      rules: ['자동 번역 티 나는 한자어 직역 금지']
    },
    {
      id: 'niconico', region: 'jp', name: 'niconico', native: 'ニコニコ', tier: '퍼 나르기',
      web: 'https://www.nicovideo.jp/', pkg: 'jp.nicovideo.android',
      about: '영상 + 흐르는 댓글.',
      post: '개발일지 영상(일본어 자막). 제목 【インディーゲーム開発】…. 격주.',
      tone: 'です・ます.',
      rules: ['유튜브 링크로 대신하지 않기']
    },
    {
      id: 'dtf', region: 'ru', name: 'DTF', native: 'DTF', tier: '메인',
      web: 'https://dtf.ru/', pkg: 'ru.cmtt.dtf',
      about: '러시아판 레딧 느낌의 게임 커뮤니티. 개발자가 직접 쓴 긴 개발 비화 글에 추천이 몰린다.',
      post: '주 1회 긴 글. 제목에 질문이나 반전 + 소제목 + 움짤 많이. 링크는 끝에 자연스럽게.',
      tone: '첫인사 "Всем привет!". 솔직하고 자조적인 톤. 팀 목소리 мы 또는 현재형으로 써서 성별을 드러내지 않기.',
      rules: ['과장(лучшая игра, уникальный) 금지', '정치·전쟁·국가 관계 언급 금지'],
      search: ['инди', 'геймдев', 'пиксель-арт', 'рогалик']
    },
    {
      id: 'pikabu', region: 'ru', name: 'Pikabu', native: 'Пикабу', tier: '퍼 나르기',
      web: 'https://pikabu.ru/', pkg: 'ru.pikabu.android',
      about: '대형 잡글 커뮤니티. 광고 금지, 자기 작품은 «Моё» 태그. 새 계정은 평점이 필요할 수 있다.',
      post: 'DTF 글을 이야기체로 다듬어서 + 이미지. 태그 Моё, Gamedev, Инди, Pixel Art.',
      tone: '첫인사 "Привет, Пикабу!". 이야기하듯.',
      rules: ['광고처럼 보이는 링크 금지', '정치 언급 금지']
    },
    {
      id: 'vk', region: 'ru', name: 'VK', native: 'ВКонтакте', tier: '퍼 나르기',
      web: 'https://vk.com/', pkg: 'com.vkontakte.android',
      about: '러시아 최대 SNS. 공식 그룹 운영용. 한국 번호 가입 가능 여부 미확인.',
      post: '짧은 글 1~3문장 + 움짤. 투표(1번 vs 2번)도 자주 쓴다.',
      tone: '가볍게.',
      rules: ['정치 언급 금지']
    }
  ],

  // 나라별 자주 쓰는 문장 (복사용). 확정되지 않은 사실은 쓰지 않는다.
  phrases: {
    cn: [
      { ko: '첫 소개', t: '我们是来自韩国的两人小团队' },
      { ko: '서툰 중국어 양해 (처음 몇 번만)', t: '中文不太好，有错误请见谅～' },
      { ko: '피드백 요청', t: '有什么意见尽管提！' },
      { ko: '어떻게 보이나요', t: '大家觉得怎么样？' },
      { ko: '댓글로 알려 주세요', t: '评论区告诉我👇' },
      { ko: '반영 약속', t: '会参考大家的反馈继续改～' },
      { ko: '감사', t: '谢谢支持！感谢大家的建议🙏' },
      { ko: '위시리스트 (상점 공개 후)', t: '感兴趣的话可以先加个愿望单～' },
      { ko: '출시일 질문 답', t: '发售时间还没定，定了第一时间告诉大家！' },
      { ko: '간체 지원 질문 답 (미정일 때)', t: '简中正在考虑中，会尽量争取！' },
      { ko: '비판에 답', t: '说得对，这里确实还有问题，我们会改的，谢谢指出！' }
    ],
    jp: [
      { ko: '피드백 요청', t: 'いかがでしょうか？ご意見いただけると嬉しいです🙏' },
      { ko: '감사', t: 'ありがとうございます！励みになります✨' },
      { ko: '서툰 일본어 양해 (처음 몇 번만)', t: '日本語が拙くてすみません' },
      { ko: '위시리스트 (상점 공개 후)', t: 'ウィッシュリスト登録していただけると嬉しいです🙏' },
      { ko: '출시일 질문 답', t: '発売日はまだ未定ですが、決まり次第お知らせします！' },
      { ko: '비판에 답', t: 'ご指摘ありがとうございます！確かにその通りなので、改善してみます。' },
      { ko: '해시태그 묶음', t: '#インディーゲーム #ゲーム制作 #ドット絵 #pixelart' }
    ],
    ru: [
      { ko: 'DTF 첫인사', t: 'Всем привет!' },
      { ko: 'Pikabu 첫인사', t: 'Привет, Пикабу!' },
      { ko: '팀 소개', t: 'Мы — инди-команда из двух человек из Южной Кореи.' },
      { ko: '피드백 요청', t: 'Как вам? Любая критика приветствуется.' },
      { ko: '무엇을 바꾸면 좋을까요', t: 'Что бы вы поменяли?' },
      { ko: '감사', t: 'Спасибо за отзыв! Очень мотивирует!' },
      { ko: '위시리스트 (상점 공개 후)', t: 'Если интересно — добавьте в желаемое, нам это очень помогает.' },
      { ko: '출시일 질문 답', t: 'Дату релиза пока не назвали, но как только определимся — сразу напишем.' },
      { ko: '비판에 답', t: 'Справедливо, поправим. Спасибо, что заметили!' }
    ]
  },

  // 매일 할 일. star: 바쁜 날에도 하는 것
  daily: [
    { id: 'd-notif', region: 'all', star: true, title: '알림 확인: 댓글·멘션·쪽지에 24시간 안에 답하기',
      detail: '모든 플랫폼을 한 번씩 열어 본다. 번역기를 써도 되지만 같은 답글을 복사해 달지 않는다(봇처럼 보여 제재).',
      platforms: ['xiaoheihe', 'bilibili', 'xiaohongshu', 'x', 'dtf', 'pikabu'] },
    { id: 'd-log', region: 'all', title: '전날 올린 글의 조회·좋아요·댓글 수 기록',
      detail: '기록 탭의 반응 기록에 숫자를 채운다. 어느 플랫폼에 힘을 줄지 판단하는 근거가 된다.' },
    { id: 'd-clip', region: 'all', title: '재밌는 장면이 나오면 녹화해 움짤 보관함에 모으기',
      detail: '게임 작업 중 나온 장면을 5~15초로. 글자가 거의 없는 움짤이 세 나라에 퍼 나르기 가장 쉽다.' },

    { id: 'd-cn-bili', region: 'cn', star: true, title: '빌리빌리: 관련 영상 2~3개 보고 내용 있는 댓글 달기',
      detail: '独立游戏 · 肉鸽 · 卡牌构筑 태그 영상. "잘 봤어요" 같은 빈 댓글 말고 영상 내용을 짚는 댓글.',
      platforms: ['bilibili'] },
    { id: 'd-cn-heybox', region: 'cn', title: '샤오헤이허: 글 2~3개 좋아요·댓글',
      detail: '杀戮尖塔(Slay the Spire) · 小丑牌(Balatro) 커뮤니티와 盒友杂谈에서.',
      platforms: ['xiaoheihe'] },
    { id: 'd-cn-xhs', region: 'cn', title: '샤오훙수: 노트 5개 정도 보고 좋아요·저장',
      detail: '#独立游戏开发 #像素游戏. 알고리즘이 관심사를 학습하게 하는 용도.',
      platforms: ['xiaohongshu'] },
    { id: 'd-cn-memo', region: 'cn', title: '중국어 댓글 말투 메모',
      detail: '자주 보이는 표현·밈을 표현집에 추가한다. 밈은 번역하면 안 통하므로 현지 글에서 익힌다.' },
    { id: 'd-cn-vpn', region: 'cn', star: true, title: '주의 확인: VPN 꺼짐, 링크·위챗 ID·QR 올리지 않음',
      detail: '중국 앱은 한국 번호 + 집 인터넷 + 본인 폰 한 대로 고정. 폰에 VPN 앱이 있으면 중국 앱을 쓸 때 끈다.' },

    { id: 'd-jp-x', region: 'jp', star: true, title: 'X: 글 5~10개 좋아요, 2~3개에 답글·인용',
      detail: '#インディーゲーム #ゲーム制作 #ドット絵 글. 인디 개발자끼리 서로 알티하는 문화라 먼저 반응하는 것이 중요하다.',
      platforms: ['x'] },
    { id: 'd-jp-wip', region: 'jp', title: '(작업 중인 도트가 있으면) 작업 장면 한 장 올리기',
      detail: '주간 정기 글과 별개. 하루 1개까지. 겸손하게 "〜してみました" 톤.',
      platforms: ['x'], post: ['x'] },
    { id: 'd-jp-thanks', region: 'jp', title: '언급·리트윗해 준 개발자에게 감사 답글, 맞팔로우 검토',
      detail: 'ありがとうございます！励みになります✨',
      platforms: ['x'] },

    { id: 'd-ru-dtf', region: 'ru', star: true, title: 'DTF: 인디·게임 개발 글 1~2개에 댓글',
      detail: '평판이 쌓여야 내 글도 노출이 잘 된다. 한국 저녁 6~9시가 모스크바 낮.',
      platforms: ['dtf'] },
    { id: 'd-ru-reply', region: 'ru', title: 'DTF·Pikabu 내 글 댓글에 답하기 (아침에 확인)',
      detail: '러시아는 한국 새벽에 댓글이 몰린다. 과장 없이 솔직하게, 정치 이야기는 답하지 않는다.',
      platforms: ['dtf', 'pikabu'] },
    { id: 'd-ru-pikabu', region: 'ru', title: 'Pikabu: 게임 개발 글 훑어보고 댓글 1개',
      detail: '새 계정은 평점이 필요할 수 있어 댓글로 먼저 쌓는다.',
      platforms: ['pikabu'] }
  ],

  // 주간 루틴. dow: 0=일 ... 6=토. post: 글을 올리는 플랫폼(워밍업 확인용)
  weekly: [
    { id: 'w-mon-source', dow: 1, region: 'all', title: '소재 만들기: 한국어 개발일지 원본 1개 + 움짤 1~2개 고르기',
      detail: '국내 개발일지와 같은 주제로. 한 번 만들어 주 내내 쓴다.' },
    { id: 'w-tue-trans', dow: 2, region: 'all', title: '번역: 중·일·러 3개 언어, 제목과 첫 문장은 나라별로 다듬기',
      detail: '움짤 설명 문구도 같이. 올리기 전날 끝내면 급하게 번역하지 않아도 된다. 직역하지 않고 그 플랫폼 사용자가 쓴 것처럼 다시 쓴다.' },
    { id: 'w-wed-heybox', dow: 3, region: 'cn', title: '샤오헤이허 개발일지 글 (한국 저녁 8~10시)',
      detail: '제목 【开发日志】… + 질문 넣기. 이미지 여러 장. 링크 없이.',
      platforms: ['xiaoheihe'], post: ['xiaoheihe'] },
    { id: 'w-wed-bili', dow: 3, region: 'cn', title: '빌리빌리 동태에 움짤',
      detail: '1~3문장 + #独立游戏# #像素画# #游戏开发#. 샤오헤이허와 문구를 다르게.',
      platforms: ['bilibili'], post: ['bilibili'] },
    { id: 'w-thu-dtf', dow: 4, region: 'ru', title: 'DTF 긴 개발일지 (한국 저녁 6~9시)',
      detail: '제목에 질문이나 반전. 소제목 + 움짤 많이. 실패담과 구체적인 숫자를 넣으면 반응이 좋다.',
      platforms: ['dtf'], post: ['dtf'] },
    { id: 'w-fri-note', dow: 5, region: 'jp', title: 'note에 개발일지 번역본 (격주도 괜찮음)',
      detail: '제목 【開発日記】…. 끝에 X 계정 안내.',
      platforms: ['note'], post: ['note'] },
    { id: 'w-fri-bilivid', dow: 5, region: 'cn', title: '빌리빌리 개발일지 영상 (영상이 있는 주만)',
      detail: '중국어 자막 필수. 제목 【独立游戏开发日志#N】…. 유튜브 링크로 대신하지 않고 직접 업로드.',
      platforms: ['bilibili'], post: ['bilibili'] },
    { id: 'w-sat-x', dow: 6, region: 'jp', title: 'X에 #ScreenshotSaturday 움짤',
      detail: '#ScreenshotSaturday #インディーゲーム #ドット絵. 토요일은 전 세계 인디 개발자가 움짤을 올리는 날.',
      platforms: ['x'], post: ['x'] },
    { id: 'w-sat-xhs', dow: 6, region: 'cn', title: '샤오훙수 이미지 노트',
      detail: '세로 3:4 커버에 큰 글씨, 제목 20자 이내. 주말 이용이 많다.',
      platforms: ['xiaohongshu'], post: ['xiaohongshu'] },
    { id: 'w-sun-pikabu', dow: 0, region: 'ru', title: 'Pikabu 이야기체 글',
      detail: 'DTF 글을 이야기체로. «Моё» 태그. DTF와 3일 간격. 광고처럼 보이는 링크 금지.',
      platforms: ['pikabu'], post: ['pikabu'] },
    { id: 'w-sun-vk', dow: 0, region: 'ru', title: 'VK에 움짤',
      detail: '1~3문장. 투표(1번 vs 2번)를 붙여도 좋다.',
      platforms: ['vk'], post: ['vk'] },
    { id: 'w-sun-best', dow: 0, region: 'all', title: '주간 점검: 반응이 가장 좋았던 글과 나빴던 글 고르기',
      detail: '반응이 좋았던 소재는 다음 주에 다른 나라에도 올린다.' },
    { id: 'w-sun-follow', dow: 0, region: 'all', title: '주간 점검: 플랫폼별 팔로워 수 기록',
      detail: '기록 탭에 메모로 남긴다.' },
    { id: 'w-sun-next', dow: 0, region: 'all', title: '주간 점검: 다음 주 개발일지 주제 정하기',
      detail: '동료와 국내 개발일지 일정을 맞춘다. 표현집·용어집도 정리.' }
  ],

  // 격주(biweek)·월 1회(month)
  periodic: [
    { id: 'p-tieba', period: 'biweek', region: 'cn', title: '티에바·Keylol에 샤오헤이허 개발일지를 다듬어 올리기',
      detail: '제목과 도입을 바꾸고, 샤오헤이허에 올린 날과 하루 이상 간격.',
      platforms: ['tieba', 'keylol'], post: ['tieba', 'keylol'] },
    { id: 'p-nico', period: 'biweek', region: 'jp', title: 'niconico에 개발일지 영상 (일본어 자막)',
      platforms: ['niconico'], post: ['niconico'], detail: '영상이 있는 경우만.' },
    { id: 'p-share', period: 'month', region: 'all', title: '플랫폼별 성과 요약을 동료에게 공유',
      detail: '힘을 줄 곳을 다시 정한다.' },
    { id: 'p-trend', period: 'month', region: 'all', title: '각 나라에서 요즘 인기 있는 로그라이크·덱빌딩 게임과 홍보 방식 훑어보기',
      detail: '' }
  ],

  // 단계별 한 번만 하는 일
  phases: [
    { id: 0, name: '0단계: 상점 페이지 공개 전', items: [
      { id: 'o-0-heybox', title: '샤오헤이허 가입', platforms: ['xiaoheihe'], done: true },
      { id: 'o-0-bili', title: '빌리빌리 가입 (+82, 앞자리 0 빼고) + 여권 실명 인증', platforms: ['bilibili'] },
      { id: 'o-0-xhs', title: '샤오훙수 가입 (+82) + 외국인 여권 실명 인증', platforms: ['xiaohongshu'] },
      { id: 'o-0-cnopt', title: '(선택) 티에바, Keylol, 웨이보 가입 시도. 한국 번호가 안 되면 보류', platforms: ['tieba', 'keylol', 'weibo'] },
      { id: 'o-0-x', title: '일본어 전용 X 계정 만들기', platforms: ['x'] },
      { id: 'o-0-jp', title: 'note, niconico 가입', platforms: ['note', 'niconico'] },
      { id: 'o-0-ru', title: 'DTF, Pikabu 가입', platforms: ['dtf', 'pikabu'] },
      { id: 'o-0-vk', title: 'VK 가입 시도 + 공식 그룹 (한국 번호 확인)', platforms: ['vk'] },
      { id: 'o-0-id', title: '모든 플랫폼 아이디를 같은 이름으로' },
      { id: 'o-0-profile', title: '프로필 사진과 소개문을 각 언어로' },
      { id: 'o-0-warm', title: '플랫폼마다 1~2주 워밍업 (매일 할 일만 하고 홍보 글은 안 올림)' },
      { id: 'o-0-cnname', title: '중국어 게임 이름 정하기 (동료와 상의)' },
      { id: 'o-0-jpname', title: '일본어 표기 정하기 (영문 + 가타카나 읽기)' },
      { id: 'o-0-glossary', title: '핵심 용어를 3개 언어로 고정 (용어집)' },
      { id: 'o-0-logline', title: '한 줄 소개를 3개 언어로' },
      { id: 'o-0-folder', title: '움짤 보관함 폴더 만들기' }
    ] },
    { id: 1, name: '1단계: 상점 페이지 공개', items: [
      { id: 'o-1-store', title: '상점 페이지 간체·일본어·러시아어 소개문 번역' },
      { id: 'o-1-utm', title: '플랫폼별 UTM 링크 만들기' },
      { id: 'o-1-announce', title: '공개 당일 알림 글: 샤오헤이허, 빌리빌리 동태, 일본어 X, DTF', platforms: ['xiaoheihe', 'bilibili', 'x', 'dtf'] },
      { id: 'o-1-press', title: '일본 웹진(4Gamer, Automaton, Game*Spark)에 보도자료 제보' },
      { id: 'o-1-kit', title: '프레스킷 번역본 (중·일·러)' },
      { id: 'o-1-heyboxpage', title: '샤오헤이허 게임 페이지 등록 가능한지 확인 (开放平台)', platforms: ['xiaoheihe'] },
      { id: 'o-1-links', title: '주간 글에 상점 링크 넣기 시작 (플랫폼별 링크 규칙 지키기)' },
      { id: 'o-1-post', title: '현지 느낌의 잡글 1개 올리고 반응 기록 (보류했던 과제 재개)' }
    ] },
    { id: 2, name: '2단계: 데모·넥스트 페스트', items: [
      { id: 'o-2-copyright', title: '저작권 등록 신청 (데모 공개 2~3주 전)' },
      { id: 'o-2-creators', title: '데모 공개 1주 전: 빌리빌리 UP주, 일본·러시아 유튜버에게 연락 (중소 채널 위주)' },
      { id: 'o-2-day', title: '데모 공개일: 전 플랫폼 알림 글 + 웹진 보도자료' },
      { id: 'o-2-fest', title: '넥스트 페스트 기간: 매일 짧은 글 올리기' },
      { id: 'o-2-clone', title: '페스트 종료 후: 중국 미니게임에 복제작이 있는지 검색 (게임 이름 + 老虎机 自走棋)' }
    ] },
    { id: 3, name: '3단계: 출시', items: [
      { id: 'o-3-date', title: '출시 2주 전: 출시일 공지 (전 플랫폼)' },
      { id: 'o-3-day', title: '출시일: 전 플랫폼 알림 글 + 일본 웹진 보도자료 + 스트리머 키 배포' },
      { id: 'o-3-review', title: '출시 후 1주: 국가별 리뷰를 매일 읽고 답하기 (특히 번역 품질 지적)' },
      { id: 'o-3-thanks', title: '판매 마일스톤을 감사 글로' }
    ] }
  ],

  // 연간 달력. match 종류: dow, nthdow, md(월-일 범위, 해마다), date(특정 날짜 범위), months(그 달에 한 번)
  calendar: [
    { id: 'c-sss', region: 'all', when: '매주 토요일', title: '#ScreenshotSaturday', todo: 'X에 움짤', match: { type: 'dow', dow: 6 }, quiet: true },
    { id: 'c-gesei', region: 'jp', when: '매월 둘째 토요일', title: '#スーパーゲ制デー (진행 여부 확인 필요)', todo: '일본어 X에 참여', match: { type: 'nthdow', n: 2, dow: 6 }, check: true },
    { id: 'c-runy', region: 'ru', when: '1월 1~8일', title: '러시아 신년 연휴', todo: 'DTF·Pikabu 글 올리기 좋은 시기', match: { type: 'md', from: '01-01', to: '01-08' } },
    { id: 'c-cny', region: 'cn', when: '2027-02-06 무렵', title: '춘절 연휴', todo: '새해 인사 글, 스팀 설 세일 여부 확인', match: { type: 'date', from: '2027-02-04', to: '2027-02-12' } },
    { id: 'c-fest', region: 'all', when: '2월·6월·10월', title: '스팀 넥스트 페스트', todo: '정확한 날짜를 Steamworks에서 확인, 데모 참가 검토', match: { type: 'months', months: [2, 6, 10] } },
    { id: 'c-gw', region: 'jp', when: '4월 말~5월 초', title: '골든위크', todo: 'X 활동 늘리기', match: { type: 'md', from: '04-29', to: '05-05' } },
    { id: 'c-bit', region: 'jp', when: '7월', title: 'BitSummit (교토 인디 행사)', todo: '날짜 확인, 해시태그 활용', match: { type: 'months', months: [7] } },
    { id: 'c-obon', region: 'jp', when: '8월 중순', title: '오봉 연휴', todo: 'X 활동 늘리기', match: { type: 'md', from: '08-13', to: '08-16' } },
    { id: 'c-tgs', region: 'jp', when: '9월 말', title: '도쿄 게임쇼', todo: '날짜 확인, 해시태그 활용', match: { type: 'months', months: [9] } },
    { id: 'c-cnnd', region: 'cn', when: '10월 1~7일', title: '국경절 연휴', todo: '빌리빌리·샤오헤이허 활동 늘리기', match: { type: 'md', from: '10-01', to: '10-07' } },
    { id: 'c-winter', region: 'all', when: '12월 말~1월 초', title: '스팀 겨울 세일, 일본 연말연시', todo: '연말 결산 글', match: { type: 'md', from: '12-22', to: '12-31' } }
  ],

  principles: [
    '중국 앱은 한국 번호 + 집 인터넷 + 본인 폰 한 대. VPN을 쓰지 않는다. 실명 인증을 요구하면 받는다.',
    '가입 후 1~2주는 좋아요와 댓글만. 홍보나 외부 링크는 올리지 않는다.',
    '한 플랫폼에 홍보성 글은 주 1~2개까지. 나머지는 댓글과 교류.',
    '한국어 원본 하나 → 번역 → 나라별로 다듬기. 제목과 첫 문장은 그 나라 말투로.',
    '사회·정치 주제는 언급하지 않는다.',
    '모든 글의 반응을 기록한다.',
    '확정되지 않은 사실(현지어 지원, 출시일, 가격)은 쓰지 않는다.'
  ],
  crosspost: [
    '링크 규칙은 플랫폼마다 다르다. 중국 플랫폼은 링크를 막고, DTF는 자연스럽고, Pikabu는 광고 금지.',
    '유튜브 링크로 대신하지 않는다. 영상은 직접 업로드.',
    '같은 글을 같은 날 같은 언어 플랫폼 여러 곳에 복사하지 않는다. 제목·도입을 바꾸고 하루 이상 간격.',
    '댓글과 답글은 복사해 쓰지 않는다.',
    '밈과 유행어는 번역하지 않는다. 현지 글에서 익힌다.'
  ]
};
