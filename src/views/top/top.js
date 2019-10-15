export default{
    name:"App",
    data:()=>({
        profile:{
            img:"",
            text:"はじめまして、HYです！はじめまして、HYです！はじめまして、HYです！はじめまして、HYです！はじめまして、HYです！はじめまして、HYです！はじめまして、HYです！はじめまして、HYです！はじめまして、HYです！",
        },
        skills:{
            "Front-End":[
                {name:"JavaScript",year:1,level:3},
                {name:"Vue.JS",year:1,level:3},
                {name:"Nuxt",year:1,level:1},
            ],
            "Back-End":[
                {name:"Java",year:3,level:2},
                {name:"C#",year:4,level:2},
                {name:"Nodejs",year:2,level:2},
                {name:"Python",year:2,level:2},
            ],
            "Database":[
                {name:"Oracle",year:7,level:3},
            ],
            "Infrastructure":[
                {name:"Linux",year:7,level:3},
            ],
            "AWS":[
                {name:"EC2",year:2,level:3},
                {name:"DynamoDB",year:2,level:3},
                {name:"Lambda",year:2,level:3},
                {name:"CloudFormation",year:1,level:1},
            ],
            "MachineLearning":[
                {name:"openCV",year:1,level:2},
                {name:"scikit-learn",year:1,level:2},
                {name:"chainer",year:1,level:1},
            ],
            "Tool":[
                {name:"Github",year:3,level:3},
                {name:"Slack",year:3,level:3},
                {name:"JIRA",year:2,level:3},
                {name:"Wrike",year:2,level:3},
            ],
            Certification:[
                {name:"AWS Solution Architect(Associate)",year:1,level:0},
                {name:"JDLA Deep Learning for GENERAL",year:1,level:0},
                {name:"データベーススペシャリスト",year:1,level:0},
                {name:"Oracle Master Gold",year:1,level:0},
                {name:"日商簿記2級",year:1,level:0},
            ],

            // Frontend:[
            //     {name:"JavaScript",history:1,level:2,text:"機械学習の実装"},
            //     {name:"Vue.Js",history:3,level:2,text:"いいいい"},
            // ],
            // Backend:[
            //     {name:"python",history:1,level:2,text:"機械学習の実装"},
            //     {name:"C++",history:3,level:2,text:"いいいい"},
            //     {name:"C#",history:5,level:2,text:"ううううう"},
            //     {name:"nodejs",history:1,level:2,text:"機械学習の実装"},
            // ],
            // Certification:[
            //     {name:"AWS Solution Architect(Associate)",history:1,level:2,text:"機械学習の実装"},
            //     {name:"JDLA Deep Learning for GENERAL",history:1,level:2,text:"機械学習の実装"},
            //     {name:"データベーススペシャリスト",history:1,level:2,text:"機械学習の実装"},
            //     {name:"Oracle Master Gold",history:1,level:2,text:"機械学習の実装"},
            // ],
        },
        works:{
            "Standup-Meeting-Bot":{
                year:"2018",
                img:"",
                text:"Slack上でStandup-Meetingを行うために作ったBotです。サーバレスアーキテクチャを採用し、運用コストを抑えました。",
                techs:["Nodejs","Lambda","DynamoDB","SlackAPI"]
            },
            "JIRAチケット起票-Bot":{
                year:"2019",
                img:"",
                text:"SlackからJIRAチケットを起票できるBotです。",
                techs:["Nodejs","Lambda","DynamoDB","SlackAPI"]
            },
            "AWS-Bot":{
                year:"2019",
                img:"",
                text:"SlackからAWSリソースを操作できるBotです。EC2起動/停止、SG穴空けなど。",
                techs:["Nodejs","Lambda","DynamoDB","SlackAPI"]
            },
        },
        historys:[
            {
                year:2012,
                title:"大学〜大学院",
                text:[
                    " - 研究：画像処理関連の研究に従事。類似画像検索/3次元センサ関連。C#で開発",
                    " - 執筆①：チームで3次元CGアプリ開発に関する本を執筆/出版。サンプルをC++/OpenGLで構築",
                    " - 執筆②：チームでC言語教科書を執筆/出版",
                    " - コンテスト①：ビジネスプランコンテストに2回出場。２回とも入賞",
                    " - コンテスト②：ImagineCup出場。日本大会ファイナリストまで進出。C++で開発",
                ]
            },
            {
                year:2012,
                title:"就職〜現在",
                text:[
                    "ERP導入案件を複数経験。提案/要件定義〜リリース/保守までPMを担当。また、自ら画像処理ツールのプロトを開発/PoC提案。社内チーム向けの業務支援Botも開発し、改善活動も継続実施。"
                ],
            },
        ],
        hobby:[
            {
            },
            {
            },
        ],
    }),
}