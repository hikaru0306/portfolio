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
      "企画・バトルAI・UI/UX・KPI分析を軸に、ゲーム制作に携わってきました。",
      "面白さを言語化し、形にして、触って試す。そのサイクルを速く回すことを大事にしています。"
    ],
    actions: [
      { text: "実績を見る",     href: "#works",    primary: true  },
      { text: "自主制作を見る", href: "#personal", primary: false }
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
      desc: [
        "バトルAIを軸に、仕様提案・実装・調整・ツール設計・デバッグ管理を担当。",
        "有料DLCと無料アップデートを通じて、AI設計から報酬設計・KPI分析・マルチプラットフォーム対応まで担当領域を拡大。"
      ],
      image:    "xv2-key.jpg",
      imageAlt: "ドラゴンボール ゼノバース2",
      focus: {
        title: "意識したこと / こだわったこと",
        groups: [
          {
            heading: "AI担当として",
            items: [
              "キャラクターの動きに違和感が生まれないこと",
              "プレイヤーがAIとの対戦から気づきを得られること",
              "実際のPvPのような読み合いを成立させること"
            ]
          },
          {
            heading: "制作環境の改善",
            items: [
              "AIツールの作成やクエストツールの拡張など、開発フロー自体の改善に積極的に取り組んだ",
              "実装速度を2〜3倍まで引き上げ、チーム全体の作業効率向上に貢献した"
            ]
          }
        ]
      },
    },
    paidHeading: "有料DLC",
    paidDLC: [
      {
        badge: "01",
        title: "正義のヒーロー編パック 第2弾",
        tags:  [{ kind: "ai", text: "AI" }, { kind: "balance", text: "調整" }],
        items: ["追加キャラクターのバランス調整", "クエスト用AI作成"],
        image: "正義のヒーロー編パック2.jpg",
        imageAlt: "正義のヒーロー編パック 第2弾",
        link: { text: "公式サイト", href: "https://dbx.bn-ent.net/dlc/dlc_hero02.php" }
      },
      {
        badge: "02",
        title: "FUTURE SAGA Chapter 1",
        tags:  [{ kind: "ai", text: "AI" }, { kind: "balance", text: "調整" }, { kind: "fix", text: "不具合対応" }],
        items: ["クエスト用AI作成", "追加キャラクターのバランス調整", "クエストの調整・不具合対応"],
        image: "FYTYRESAGAChapter1.jpg",
        imageAlt: "FUTURE SAGA Chapter 1",
        link: { text: "公式サイト", href: "https://dbx.bn-ent.net/dlc/dlc_futuresaga01.php" }
      },
      {
        badge: "03",
        title: "FUTURE SAGA Chapter 2",
        tags:  [{ kind: "ai", text: "AI" }, { kind: "balance", text: "調整" }, { kind: "plan", text: "企画" }, { kind: "fix", text: "不具合対応" }],
        items: ["追加キャラクター・クエスト用AI作成", "追加キャラクターのバランス調整", "報酬設計", "クエストの調整・不具合対応"],
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
    freeNote: "AI専任から企画・分析・移植まで、担当範囲が段階的に広がっていきました。",
    freeUpdates: [
      {
        badge: "01",
        title: "無料アップデート 第16弾",
        tags:  [{ kind: "ai", text: "AI" }],
        items: ["大型レイド（セルマックス）のAI作成", "挙動パターンの設計"],
        link: { text: "公式サイト", href: "https://dbx.bn-ent.net/dlc/update.php#updateVol16" }
      },
      {
        badge: "02",
        title: "無料アップデート 第17弾",
        tags:  [{ kind: "ai", text: "AI" }, { kind: "dev", text: "実装" }, { kind: "fix", text: "不具合対応" }],
        items: [
          "オンラインイベント（宇宙一武道祭）キャラクター専用AI作成",
          "レイド（孫悟飯ビースト、ピッコロ）のAI作成",
          "クロスバーサスの基盤作成 / スクリプト対応 / AI作成",
          "クエストスクリプトの不具合対応"
        ],
        link: { text: "公式サイト", href: "https://dbx.bn-ent.net/dlc/update.php#updateVol17" }
      },
      {
        badge: "03",
        title: "無料アップデート 第18弾",
        tags:  [{ kind: "ai", text: "AI" }, { kind: "dev", text: "実装" }, { kind: "balance", text: "調整" }, { kind: "fix", text: "不具合対応" }],
        items: [
          "オンラインイベント（宇宙一武道祭）キャラクター専用AI作成",
          "サーバー関連のロビースクリプト対応",
          "追加技のバランス調整",
          "チュートリアル作成",
          "クエストスクリプトの不具合対応"
        ],
        link: { text: "公式サイト", href: "https://dbx.bn-ent.net/dlc/update.php#updateVol18" }
      },
      {
        badge: "04",
        title: "無料アップデート 第19弾",
        tags:  [{ kind: "ai", text: "AI" }, { kind: "plan", text: "企画" }, { kind: "data", text: "KPI" }, { kind: "balance", text: "調整" }, { kind: "port", text: "移植" }],
        items: [
          "報酬設計",
          "KPI関連の資料作成",
          "オンラインイベント（宇宙一武道祭）キャラクター専用AI作成",
          "オンラインイベント（天下一武道会）のルール設定",
          "追加キャラ / 技のバランス調整",
          "Xbox Game Passの移植対応",
          "チュートリアル作成",
          "クエストスクリプトの不具合対応"
        ],
        link: { text: "公式サイト", href: "https://dbx.bn-ent.net/dlc/update.php#updateVol19" }
      },
      {
        badge: "05",
        title: "無料アップデート 第20弾",
        tags:  [{ kind: "ai", text: "AI" }, { kind: "plan", text: "企画" }, { kind: "data", text: "KPI" }, { kind: "fix", text: "不具合対応" }],
        items: [
          "報酬設計",
          "KPI関連の資料作成",
          "オンラインイベント（宇宙一武道祭）キャラクター専用AI作成",
          "オンラインイベント（天下一武道会）のルール設定",
          "チュートリアル作成",
          "Xbox Game Passの不具合対応"
        ],
        link: { text: "公式サイト", href: "https://dbx.bn-ent.net/dlc/update.php#updateVol20" }
      }
    ],
    growth: {
      title: "担当領域の広がり",
      steps: [
        { label: "初期", width: 20,  items: ["AI"] },
        { label: "中期", width: 55,  items: ["AI", "実装", "調整"] },
        { label: "後期", width: 100, items: ["AI", "企画", "KPI", "調整", "移植", "基盤設計"] }
      ]
    }
  },

  // 自主制作
  personal: {
    sectionTitle: "自主制作",
    items: [
      {
        title: "もじなん",
        icon: "icon_moji.png",
        tags: [
          { class: "tag tag--green",          text: "アプリ" },
          { class: "tag tag--role tag--team", text: "チーム" },
          { class: "tag tag--time",           text: "10ヶ月" }
        ],
        catch: "東大生vs小学生でも競える早押しクイズゲーム！",
        link:  { text: "App Store", href: "https://apps.apple.com/jp/app/%E3%82%82%E3%81%98%E3%81%AA%E3%82%93-%E3%81%93%E3%81%AE%E3%82%82%E3%81%98%E3%81%AA%E3%82%93%E3%81%A7%E3%81%97%E3%82%87%E3%81%86/id6755531894" },
        meta: [
          { heading: "担当", items: [
            "ディレクター",
            "運営設計（PlayFab）",
            "サブプログラマー",
            "アート"
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
              "クイズを説明文ではなく映像で出題することで、知識差を埋めて早押し解答ができる体験を成立させる。",
              "同じ問題が繰り返し出題されても楽しめる、反射・予測・タイミングの駆け引きを核に設計。",
              "短い動画フォーマットで「自分も遊んでみたい」と思わせ、ユーザー数の拡大につなげる導線を意識。"
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
        catch: "1タップでタイムとルートを駆け抜けるスピードアクション",
        link:  { text: "App Store", href: "https://apps.apple.com/jp/app/%E3%82%B9%E3%83%9A%E3%83%BC%E3%82%B9%E3%83%88%E3%83%88/id6743999242" },
        meta: [
          { heading: "担当", items: [
            "ディレクター",
            "サブプログラマー"
          ]},
          { heading: "見どころ", items: [
            "ステージごとのランキング",
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
              "1タップだけの操作で、タイムとルートを同時に考えられるアクション体験を実現。",
              "どんなゲームでどんなルールなのかを、初見で直感的に理解できる導線設計。",
              "同じステージを繰り返し遊びたくなる、リトライ性の高い手触り。"
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
            "1タップで遊べる手軽な操作感",
            "タイミング次第で時間が伸び続けるスコアアタック設計",
            "短時間で気軽に挑戦できるテンポ"
          ]}
        ],
        right: {
          type: "lead",
          videoLocal: "ツノシカとるな.mp4",
          intent: {
            title: "制作意図と狙い",
            items: [
              "初のアプリ開発だったため、確実にリリースまで持っていくことを最優先に置いたスコープ設計。",
              "「ツムツム」のピグレット（時間追加）を参考に、タップで時間を伸ばし続けるコアループを設計。",
              "プレイスキルに応じてスコアが青天井に伸びる、上達が直接結果に表れる手触り。"
            ]
          }
        }
      },
      {
        title: "ICanShot（企画書）",
        tags: [
          { class: "tag tag--warm",           text: "企画書" },
          { class: "tag tag--role tag--team", text: "個人" }
        ],
        catch: "エイム操作だけで移動も完結する、初心者にやさしいTPS",
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
          { class: "tag tag--time",  text: "各1日" }
        ],
        catch: "企画の「面白さの核」をAIと1日で検証するプロトタイピング",
        meta: [
          { heading: "制作スタンス", items: [
            "アイデアが面白いかどうかを、仕様書ではなく実際に触れる形で素早く確かめる",
            "AIを活用して1日でプレイアブルな状態まで作り上げ、検証サイクルを短縮する"
          ]}
        ],
        protoDetails: [
          {
            title: "ナンバーマージ",
            overview: "同じ数字のタイルをマージして高スコアを目指すパズルゲーム。加算・減算など複数のモードを搭載。",
            aim: "「マージする」というシンプルな操作の中に、どこまで読みと戦略が生まれるかコアループの中毒性を検証。"
          },
          {
            title: "I Can Shot",
            overview: "エイムした方向に移動と射撃が連動するTPS。マウス操作だけで完結するプロトタイプ。",
            aim: "「エイム＝移動」という新しい操作感が初見で直感的に理解できるか、気持ちよさが成立するかを検証。企画書と合わせて設計の根拠も整理済み。"
          },
          {
            title: "ドロップバトル",
            overview: "6×6マスのドロップを消してダメージを与え、10階のボスを順に倒していくバトルパズル。",
            aim: "「消す→攻撃→次のターンを読む」というコアループが飽きずに続けられるか、パズルとバトルの融合の手触りを検証。"
          }
        ],
        right: {
          type: "proto-tabs",
          tabs: [
            { label: "ナンバーマージ",  src: "number_merge_puzzle.html?v=2" },
            { label: "I Can Shot",     src: "i_can_shot_10.html?v=2" },
            { label: "ドロップバトル", src: "dropbattle.html?v=2" }
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
        meta: [
          { heading: "担当",     items: ["企画 / ルール設計", "レベルデザイン", "実装（Unity）"] },
          { heading: "見どころ", items: ["ひらめき → 成功 → 爽快の短ループ", "初見で理解できる導線", "リトライが気持ちいいテンポ"] }
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
        catch: "テンポの良い駆け引きが魅力のカジュアルゲーム",
        meta: [
          { heading: "担当",     items: ["企画 / ルール設計", "レベルデザイン", "実装（Unity）"] },
          { heading: "見どころ", items: ["操作感 / 駆け引き / 発見", "難易度曲線", "気持ちよさのフィードバック"] }
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
          { label: "企画立案・コア体験設計",         level: 5 },
          { label: "仕様書・フロー・ドキュメント",   level: 4.5 },
          { label: "難易度 / 導線 / チュートリアル", level: 4.5 }
        ]
      },
      {
        title: "UI・UX・データ",
        bars: [
          { label: "UX改善", level: 5 },
          { label: "KPI分析",     level: 4.5 },
          { label: "UI設計",                   level: 4 }
        ]
      },
      {
        title: "ツール",
        bars: [
          { label: "資料作成(Office/Google Workspace)",            level: 4.5 },
          { label: "ゲームエンジン(Unity / UE)",   level: 4.5 },
          { label: "AI(Claude Code / GoogleAI / ChatGPT / StableDiffusion)",         level: 4 }
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
      { dt: "得意",   dd: "コア体験設計、導線、AI、改善" },
      { dt: "姿勢",   dd: "自分で触り、人にも触ってもらい、検証サイクルを速く回す" },
      { dt: "掛け算", dd: "企画 × 実装理解 × 検証スピード" }
    ],
    plays: {
      heading: "プレイ傾向",
      text: "システム・操作・駆け引きのあるゲームが好き。",
      tags: ["アクション", "パズル", "カード", "ローグライク", "対戦"]
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
