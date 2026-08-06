/* ==========================================================
   ポートフォリオの全コンテンツ
   このファイルだけ編集すればテキスト・URL・順番を変更できます。
   保存後にブラウザを再読み込み（Ctrl+R）してください。
   ========================================================== */

window.PORTFOLIO_DATA = {

  // ヘッダー（ロゴ）
  logo: "Nakagawa Hikaru",

  // ナビゲーション
  nav: [
    { href: "#career",   text: "経歴" },
    { href: "#works",    text: "実績" },
    { href: "#personal", text: "自主制作" },
    { href: "#student",  text: "学生作品" },
    { href: "#skills",   text: "スキル" },
    { href: "#about",    text: "自己紹介" },
    { href: "#contact",  text: "連絡先" }
  ],

  // スプラッシュ
  splash: {
    text: "HIKARU NAKAGAWA",
    sub:  "PORTFOLIO &nbsp; 2026"
  },

  // ヒーロー
  hero: {
    label: "ゲームデザイナー",
    title: "PORTFOLIO",
    year:  "2026",
    name:  "中川 飛甲瑠 &mdash; Hikaru Nakagawa",
    sub: [
      "企画・バトルAI・スクリプト・KPI分析を軸に、ゲーム制作に携わってきました。",
      "面白さを言語化し、形にして、触って試す。そのサイクルを速く回すことを大事にしています。"
    ],
    actions: [
      { text: "実績を見る",     href: "#works",    primary: true  },
      { text: "自主制作を見る", href: "#personal", primary: false }
    ]
  },

  // 経歴
  career: {
    sectionTitle: "経歴",
    jobs: [
      {
        period: "2022.04 — 2025.04",
        company: "株式会社ディンプス",
        role: "ゲームデザイナー",
        summary: "「ドラゴンボール ゼノバース2」の運営開発に従事。バトルAIを起点に、新要素の提案/開発・スクリプト・バランス調整・KPI分析・マルチプラットフォーム対応などを担当。",
        tags: ["バトルAI", "企画", "バランス調整", "KPI分析"],
        link: { text: "担当した実績を見る", href: "#works" }
      },
      {
        period: "2025.05 — 現在",
        company: "自主制作",
        role: "ゲームデザイナー / ディレクター",
        summary: "友人とチームを組んでのゲーム制作を中心に活動。ディレクターを担当し、App Store へのリリースやプロトタイピングによる検証を継続している。",
        tags: ["企画", "実装", "アプリリリース"],
        link: { text: "自主制作を見る", href: "#personal" }
      }
    ]
  },

  // 仕事の実績
  works: {
    sectionTitle: "仕事の実績",
    feature: {
      tag: "商業",
      title: "ドラゴンボール ゼノバース2",
      sub: "バトルAI / イベント設計 / バランス調整 / KPI分析",
      officialLink: { text: "公式サイト", href: "https://dbx.bn-ent.net/about/about.php" },
      overview: [
        "『ドラゴンボール』の世界を追体験・改変できる対戦アクションゲーム。発売から長期運営が続く人気タイトルで、現在も有料DLCと無料アップデートによって新キャラクター・新イベントの追加が続いている。"
      ],
      desc: [
        "バトルAI担当として、追加キャラクターやレイドボスのAI設計・実装をPJ内で1人で担当。",
        "その後、新規イベントの企画・報酬設計・KPI分析・バランス調整・ツール改善まで担当領域を拡大。"
      ],
      image:    "xv2-key.jpg",
      imageAlt: "ドラゴンボール ゼノバース2",
    },
    challenges: {
      title: "直面した課題と取り組み",
      items: [
        {
          tag: "バトルAI改善",
          problem: "担当当時、PvE が単調で作業感が強いという課題があった。COM 戦の難易度上昇がステータスやアーマー（攻撃で怯まない）に依存しており、キャラクターごとの個性も薄く、“読み合い”が成立していなかった。",
          action: "状況判断やコンボパターンの予測を行うフラグ管理を実装し、バトルAIツール自体も改善。読み合いが生まれ、キャラクターごとの特徴が出る動きを実現すると同時に、バトルAIの開発スピードも効率化した。",
          result: "告知のない大型アップデート内でのバトルAI改善だったが、ユーザーから「今回のアップデートで AI が一番良くなった」という評価を得ることができた。"
        },
        {
          tag: "クエスト開発フローの改善",
          problem: "クエストに不具合が発生した際の対処や、新規システムの実装に時間がかかっていた。",
          action: "クエストの基盤となるベースを作成し、担当者ごとの実装差をできるだけ減らす統一化を実施。素案段階からエンジニアとこまめに話し合い、認識をすり合わせる体制を整えた。",
          result: "クエストの実装から不具合対処までの作業効率が 2〜3 倍に向上し、少人数でも対応できる体制になった。"
        }
      ]
    },
    paidHeading: "有料DLC",
    paidDLC: [
      {
        badge: "01",
        title: "正義のヒーロー編パック 第2弾",
        tags:  [{ kind: "ai", text: "バトルAI" }, { kind: "balance", text: "調整" }],
        items: ["クエスト用バトルAI作成", "追加キャラクターのバランス調整"],
        image: "正義のヒーロー編パック2.jpg",
        imageAlt: "正義のヒーロー編パック 第2弾",
        link: { text: "公式サイト", href: "https://dbx.bn-ent.net/dlc/dlc_hero02.php" }
      },
      {
        badge: "02",
        title: "FUTURE SAGA Chapter 1",
        tags:  [{ kind: "ai", text: "バトルAI" }, { kind: "balance", text: "調整" }, { kind: "fix", text: "不具合対応" }],
        items: ["クエスト用バトルAI作成（継続）", "追加キャラクターのバランス調整（継続）", "クエストの調整・不具合対応"],
        image: "FYTYRESAGAChapter1.jpg",
        imageAlt: "FUTURE SAGA Chapter 1",
        link: { text: "公式サイト", href: "https://dbx.bn-ent.net/dlc/dlc_futuresaga01.php" }
      },
      {
        badge: "03",
        title: "FUTURE SAGA Chapter 2",
        tags:  [{ kind: "ai", text: "バトルAI" }, { kind: "balance", text: "調整" }, { kind: "plan", text: "企画" }, { kind: "fix", text: "不具合対応" }],
        items: ["クエスト用バトルAI作成（継続）", "報酬設計", "追加キャラクターのバランス調整（継続）", "クエストの調整・不具合対応（継続）"],
        image: "FYTYRESAGAChapter2.jpg",
        imageAlt: "FUTURE SAGA Chapter 2",
        link: { text: "公式サイト", href: "https://dbx.bn-ent.net/dlc/dlc_futuresaga02.php" }
      },
      {
        badge: "04",
        title: "FUTURE SAGA Chapter 3",
        tags:  [{ kind: "dev", text: "実装" }, { kind: "plan", text: "企画" }],
        items: ["新規イベントの実装 / 基盤作成", "ロビースクリプト対応", "デモ作成ツールの基盤設計"],
        image: "FYTYRESAGAChapter3.jpg",
        imageAlt: "FUTURE SAGA Chapter 3",
        link: { text: "公式サイト", href: "https://dbx.bn-ent.net/dlc/dlc_futuresaga03.php" }
      }
    ],
    freeHeading: "無料アップデート",
    freeNote: "バトルAI専任から企画・分析・移植まで、担当範囲が段階的に広がっていきました。",
    freeUpdates: [
      {
        badge: "01",
        title: "無料アップデート 第16弾",
        tags:  [{ kind: "ai", text: "バトルAI" }],
        items: ["大型レイド（セルマックス）のバトルAI作成", "挙動パターンの設計"],
        link: { text: "公式サイト", href: "https://dbx.bn-ent.net/dlc/update.php#updateVol16" }
      },
      {
        badge: "02",
        title: "無料アップデート 第17弾",
        tags:  [{ kind: "ai", text: "バトルAI" }, { kind: "dev", text: "実装" }, { kind: "fix", text: "不具合対応" }],
        items: [
          "オンラインイベント（宇宙一武道祭）キャラクター専用バトルAI作成",
          "レイド（孫悟飯ビースト、ピッコロ）のバトルAI作成",
          "クロスバーサスの基盤作成 / スクリプト対応 / バトルAI作成",
          "クエストスクリプトの不具合対応"
        ],
        link: { text: "公式サイト", href: "https://dbx.bn-ent.net/dlc/update.php#updateVol17" }
      },
      {
        badge: "03",
        title: "無料アップデート 第18弾",
        tags:  [{ kind: "ai", text: "バトルAI" }, { kind: "dev", text: "実装" }, { kind: "balance", text: "調整" }, { kind: "fix", text: "不具合対応" }],
        items: [
          "オンラインイベント（宇宙一武道祭）キャラクター専用バトルAI作成（継続）",
          "サーバー関連のロビースクリプト対応",
          "追加技のバランス調整",
          "チュートリアル作成",
          "クエストスクリプトの不具合対応（継続）"
        ],
        link: { text: "公式サイト", href: "https://dbx.bn-ent.net/dlc/update.php#updateVol18" }
      },
      {
        badge: "04",
        title: "無料アップデート 第19弾",
        tags:  [{ kind: "ai", text: "バトルAI" }, { kind: "plan", text: "企画" }, { kind: "data", text: "KPI" }, { kind: "balance", text: "調整" }, { kind: "port", text: "移植" }],
        items: [
          "オンラインイベント（宇宙一武道祭）キャラクター専用バトルAI作成（継続）",
          "報酬設計",
          "KPI関連の資料作成",
          "オンラインイベント（天下一武道会）のルール設定",
          "追加キャラ / 技のバランス調整",
          "チュートリアル作成（継続）",
          "Xbox Game Passの移植対応",
          "クエストスクリプトの不具合対応（継続）"
        ],
        link: { text: "公式サイト", href: "https://dbx.bn-ent.net/dlc/update.php#updateVol19" }
      },
      {
        badge: "05",
        title: "無料アップデート 第20弾",
        tags:  [{ kind: "ai", text: "バトルAI" }, { kind: "plan", text: "企画" }, { kind: "ui", text: "UI設計" }, { kind: "data", text: "KPI" }, { kind: "fix", text: "不具合対応" }],
        items: [
          "タイトル画面改修の企画・UI設計",
          "オンラインイベント（宇宙一武道祭）キャラクター専用バトルAI作成（継続）",
          "報酬設計（継続）",
          "KPI関連の資料作成（継続）",
          "オンラインイベント（天下一武道会）のルール設定（継続）",
          "チュートリアル作成（継続）",
          "Xbox Game Passの不具合対応"
        ],
        link: { text: "公式サイト", href: "https://dbx.bn-ent.net/dlc/update.php#updateVol20" }
      }
    ],
    growth: {
      title: "担当領域の広がり",
      steps: [
        { label: "初期", width: 20,  items: ["バトルAI"] },
        { label: "中期", width: 55,  items: ["バトルAI", "実装", "調整"] },
        { label: "後期", width: 100, items: ["バトルAI", "企画", "KPI", "調整", "移植", "基盤設計"] }
      ]
    }
  },

  // 自主制作
  personal: {
    sectionTitle: "自主制作",
    items: [
      {
        title: "ドロップダンジョン",
        icon: "icon_dropsia.png",
        tags: [
          { class: "tag tag--green", text: "アプリ" },
          { class: "tag tag--role",  text: "個人" },
          { class: "tag tag--warm",  text: "開発中" },
          { class: "tag tag--time",           text: "4ヶ月" }
        ],
        catch: "隣り合う同色ドロップを消して戦う、パズル × ローグライク",
        link:  { text: "ブラウザで遊ぶ", href: "https://hikaru0306.github.io/dropbattle-rogue/" },
        meta: [
          { heading: "担当", items: [
            "全部",
            "以下使用AI",
            "Claude",
            "ComfyUI",
            "Codex"
          ]},
          { heading: "見どころ", items: [
            "キャラクターによって異なる能力",
            "ビルド構築に応じて変わるパズル",
            "ランダム性とPSのバランス"
          ]}
        ],
        right: {
          type: "lead",
          videoLocal: "ドロップダンジョン.mp4",
          intent: {
            title: "制作意図と狙い",
            items: [
              "「ただ消すだけ」のパズルに、ローグライクの選択とビルドを重ねて毎回違う攻略が生まれるかを検証"
            ]
          }
        }
      },
      {
        title: "もじなん",
        icon: "icon_moji.png",
        tags: [
          { class: "tag tag--green",          text: "アプリ" },
          { class: "tag tag--role tag--team", text: "チーム" },
          { class: "tag tag--warm",           text: "開発中" },
          { class: "tag tag--time",           text: "11ヶ月" }
        ],
        catch: "映像で出題されるクイズに早押しで答える、直感勝負の対戦クイズゲーム！",
        link:  { text: "App Store", href: "https://apps.apple.com/jp/app/%E3%82%82%E3%81%98%E3%81%AA%E3%82%93-%E3%81%93%E3%81%AE%E3%82%82%E3%81%98%E3%81%AA%E3%82%93%E3%81%A7%E3%81%97%E3%82%87%E3%81%86/id6755531894" },
        meta: [
          { heading: "担当", items: [
            "ディレクター",
            "運営設計",
            "サブプログラマー",
            "アーティスト"
          ]},
          { heading: "見どころ", items: [
            "15種類以上のミニゲーム",
            "運用を見越した拡張性の高い設計",
            "リアルタイムの対戦"
          ]}
        ],
        right: {
          type: "lead-kvs",
          videoLocal: "もじなん.mp4",
          kvs: [],
          intent: {
            title: "制作意図と狙い",
            items: [
              "クイズを説明文ではなく映像で出題することで、知識差を埋めて早押し解答ができる体験を意識",
              "同じ問題が繰り返し出題されても楽しめる、反射・予測・タイミングの駆け引きが核になるよう設計",
              "短い動画フォーマットで「自分も遊んでみたい」と思わせ、ユーザー数の拡大につなげる導線を意識"
            ]
          }
        }
      },
      {
        title: "スペーストト",
        icon: "icon_toto.png",
        tags: [
          { class: "tag tag--green",          text: "アプリ" },
          { class: "tag tag--role tag--team", text: "チーム" },
          { class: "tag tag--time",           text: "3ヶ月" }
        ],
        catch: "1タップでステージを駆け抜けるスピードアクション",
        link:  { text: "App Store", href: "https://apps.apple.com/jp/app/%E3%82%B9%E3%83%9A%E3%83%BC%E3%82%B9%E3%83%88%E3%83%88/id6743999242" },
        meta: [
          { heading: "担当", items: [
            "ディレクター",
            "サブプログラマー"
          ]},
          { heading: "見どころ", items: [
            "同じルートでもタップ＆ホールドのタイミングによって速度などが変化",
            "ワールドに応じて変化するギミック"
          ]}
        ],
        right: {
          type: "lead",
          videoLocal: "スペーストト.mp4",
          videoOrientation: "landscape",
          intent: {
            title: "制作意図と狙い",
            items: [
              "1タップだけの操作で、速度やルートを考えられるアクション体験を実現",
              "どんなゲームでどんなルールなのかを、初見で直感的に理解できる導線設計",
              "同じステージを繰り返し遊びたくなる、リトライ性の高い手触り"
            ]
          }
        }
      },
      {
        title: "ツノシカとるな",
        icon: "icon_sika.png",
        tags: [
          { class: "tag tag--green",          text: "アプリ" },
          { class: "tag tag--role tag--team", text: "チーム" },
          { class: "tag tag--time",           text: "2ヶ月" }
        ],
        catch: "タップでツノだけを取り続ける、スコアアタック型ハイパーカジュアル",
        link:  { text: "App Store", href: "https://apps.apple.com/jp/app/%E3%83%84%E3%83%8E%E3%82%B7%E3%82%AB%E3%81%A8%E3%82%8B%E3%81%AA/id6572316223" },
        meta: [
          { heading: "担当",     items: ["ディレクター"] },
          { heading: "見どころ", items: [
            "タップのみで遊べる手軽な操作感",
            "累計報酬を出すことで、少ないスコアの時にも価値がある",
            "短時間で気軽に挑戦できるテンポ"
          ]}
        ],
        right: {
          type: "lead",
          videoLocal: "ツノシカとるな.mp4",
          intent: {
            title: "制作意図と狙い",
            items: [
              "初のアプリ開発だったため、確実にリリースまで持っていくことを最優先に開発",
              "「ツムツム」のピグレット（時間追加）を参考に、時間を伸ばし続けるコアループを設計",
              "プレイスキルに応じてスコアが青天井に伸びる、上達が直接結果に表れる手触り"
            ]
          }
        }
      },
      {
        title: "ICanShot（企画書）",
        tags: [
          { class: "tag tag--warm",  text: "企画書" },
          { class: "tag tag--role",  text: "個人" }
        ],
        catch: "エイム操作だけで移動も完結する、シューティング初心者でも遊びやすいTPS",
        meta: [
          { heading: "ポイント", items: [
            "TPS / FPS の難易度が上がり続けている要素を分析",
            "スプラトゥーンが「移動の楽しさ」で初心者を取り込んでいる点に着目",
            "「撃って倒す」気持ちよさを初心者でも体験しやすいゲーム性に再構築"
          ]}
        ],
        right: {
          type: "iframe",
          src: "https://drive.google.com/file/d/1OzaT0A0N9vxo6NCtvOxafpa-0udCCOAD/preview",
          title: "ICanShot 企画書",
          style: "border:none;",
          allow: "autoplay",
          caption: "スライド上のコントロールでページめくりが可能です。"
        }
      },
      {
        title: "プロトタイプ制作",
        tags: [
          { class: "tag tag--warm",  text: "プロトタイプ" },
          { class: "tag tag--role",  text: "個人" },
        ],
        catch: "企画の「面白さの核」を検証するプロトタイプ制作",
        meta: [
          { heading: "制作スタンス", items: [
            "アイデアが面白いかどうかを、仕様書ではなく実際に触れる形で素早く確かめる",
            "AIなども活用して、より早くプレイアブルな状態まで作り上げ、検証サイクルを短縮する"
          ]}
        ],
        protoDetails: [
          {
            title: "ナンバーマージ",
            overview: "数字を移動させると、加算や減算が発生する新しいナンプレ",
            aim: "ナンプレにデジタルならではの「移動」と「合体」要素を追加し、新しい面白さが出ているかを検証"
          },
          {
            title: "I Can Shot",
            overview: "エイムのみで射撃と移動が連動する、マウス操作だけで完結できる簡単操作のTPS",
            aim: "「エイム」のみの移動でゲームとして成立するのか、読み合いが発生するのかを検証"
          },
          {
            title: "ドロップダンジョン",
            overview: "隣り合っている同色ドロップを消して対戦するローグライクゲーム。",
            aim: "ローグライクに「パズル」要素を追加することで運と戦略要素の幅が広がっているかの検証（→ 手応えがあったため「ドロップダンジョン」として本制作へ）"
          }
        ],
        right: {
          type: "proto-tabs",
          tabs: [
            { label: "ナンバーマージ",  src: "number_merge_puzzle.html?v=2" },
            { label: "I Can Shot",     src: "i_can_shot_11.html?v=2" },
            { label: "ドロップダンジョン", src: "dropbattle.html?v=3" }
          ]
        }
      }
    ]
  },

  // 学生時代の作品
  student: {
    sectionTitle: "学生時代の作品",
    items: [
      {
        title: "ウォーターキャリー",
        tags: [
          { class: "tag",                     text: "ゲーム" },
          { class: "tag tag--role tag--team", text: "チーム" },
          { class: "tag tag--time",           text: "3ヶ月" }
        ],
        catch: "流体を操りゴールを目指すパズルアクション",
        awards: [
          {
            title: "ゲームクリエイター甲子園2020 ユークス賞",
            short: "ゲームクリエイター甲子園2020 ユークス賞"
          },
          {
            image: "awardmark_amateur.png",
            title: "日本ゲーム大賞2020 アマチュア部門 佳作",
            short: "日本ゲーム大賞2020 アマチュア部門 佳作"
          }
        ],
        meta: [
          { heading: "担当",     items: ["ディレクター", "サブプログラマー"] },
          { heading: "こだわり", items: ["レベルデザインでは様々なルートでクリアができるように設計", "上手く出来たときの爽快感と惜しいときに運でもクリアができるギリギリ感が生まれるゲーム性"] }
        ],
        right: {
          type: "video",
          src:  "https://www.youtube-nocookie.com/embed/a_v-RUyp1k0?si=H617zxuGSsnoj5jN&start=1",
          title: "ウォーターキャリー"
        }
      },
      {
        title: "POPO",
        tags: [
          { class: "tag",                     text: "ゲーム" },
          { class: "tag tag--role tag--team", text: "チーム" },
          { class: "tag tag--time",           text: "3ヶ月" }
        ],
        catch: "敵の能力を奪う2Dシューティングゲーム！",
        awards: [
          {
            title: "ECC EXPO ディンプス賞",
            short: "ECC EXPO ディンプス賞"
          }
        ],
        meta: [
          { heading: "担当",     items: ["ディレクター","サブプログラマー","サブアーティスト"] },
          { heading: "こだわり", items: ["奪った能力が強力なほど、次に能力を奪いたい敵まで倒してしまうジレンマ", "上下左右にどんな移動をしても見やすいカメラワークを意識", "通常のステージに加え、パズルステージやスペシャルステージなど、同じアクションで違った体験をできる味変要素とボリューム感"] }
        ],
        right: {
          type: "video",
          src:  "https://www.youtube-nocookie.com/embed/4CsltIYWubU?si=tCwKzfU-8SJWvkI3",
          title: "POPO"
        }
      },
      {
        title: "作品ダイジェスト",
        tags: [
          { class: "tag tag--warm",           text: "ダイジェスト" },
          { class: "tag tag--role tag--team", text: "チーム" }
        ],
        catch: "学生時代に制作した複数作品のまとめ映像",
        meta: [
          { heading: "収録", items: ["各作品の代表シーン", "担当領域のハイライト"] }
        ],
        right: {
          type: "video",
          src:  "https://www.youtube-nocookie.com/embed/Ak--PvIu6Cw?si=sqfZSDST2ZzQkMi8",
          title: "作品集"
        }
      }
    ]
  },

  // スキル
  skills: {
    sectionTitle: "スキル",
    cards: [
      {
        title: "企画・設計",
        bars: [
          { label: "企画立案・コア体験設計",         level: 4.5 },
          { label: "仕様書・フロー・ドキュメント",   level: 4 },
          { label: "難易度調整 / 導線設計 / チュートリアル", level: 4 }
        ]
      },
      {
        title: "UI・UX・データ",
        bars: [
          { label: "UX改善", level: 4.5 },
          { label: "KPI分析",     level: 4 },
          { label: "UI設計",                   level: 3.5 }
        ]
      },
      {
        title: "ツール",
        bars: [
          { label: "資料作成(Office/Google Workspace)",            level: 4 },
          { label: "ゲームエンジン(Unity / UE)",   level: 4 },
          { label: "AI(Claude Code / Cursor / Codex / NotebookLM)",         level: 3.5 }
        ]
      }
    ]
  },

  // 自己紹介
  about: {
    sectionTitle: "自己紹介",
    intro: [
      "ゲームの「面白さの核」を言語化し、仕様・実装・調整まで落とし込むのが強みです。",
      "AI / UI / データ分析も含めて、体験の完成度を上げるために横断して動けます。"
    ],
    dl: [
      { dt: "得意",   dd: "レベルデザイン(難易度調整)、ゲームAIの設計、ツールの改善提案" },
      { dt: "姿勢",   dd: "アイデアを自分で触り、人にも触ってもらい、面白さを検証する" },
    ],
    plays: {
      heading: "プレイ傾向",
      text: "アクション要素や駆け引きのあるゲームが好き。",
      tags: ["アクション", "パズル", "カード", "ローグライク", "対戦","音楽",],
      favorites: {
        heading: "好きなゲーム10選",
        items: [
          "スーパーマリオギャラクシー",
          "マリオカート ワールド",
          "大乱闘スマッシュブラザーズX",
          "ポケットモンスター プラチナ",
          "リズム天国ゴールド",
          "ハコボーイ！",
          "桃太郎電鉄 〜昭和 平成 令和も定番！〜",
          "ジャンプアルティメットスターズ",
          "モンスターハンターポータブル 2nd G",
          "BABA IS YOU"
        ]
      }
    }
  },

  // 連絡先
  contact: {
    sectionTitle: "連絡先",
    items: [
      { label: "メール", value: "2000hikaru0306@gmail.com" },
      { label: "電話",   value: "090-8166-3556" }
    ],
  },

  // フッター
  footer: {
    name: "中川飛甲瑠"
  }
};
