
export interface Song {
  fakeTitle: string; // 假标题, 防作弊用的
  title: string; // 标题
  src: string; // OSS地址
  name: string[]; // 歌名, 使用数组的方式匹配多个歌名, 防止多名歌曲
  singer: string; // 歌手
  album: string; // 专辑
  totalTime: string; // 时长
  startTime: string; // 副歌开始时间
  endTime: string; // 副歌结束时间
  selected: boolean; // 是否为当前鼠标选中项
  playing: boolean; // 是否处于播放状态
  guessing: boolean; // 是否正在猜题
  right: boolean; // 是否已答题
}

const commonConfig = {
  fakeTitle: '',
  selected: false,
  playing: false,
  guessing: false,
  right: false
};

export const songsList: Song[] = [
  {
    title: `如果我变成回忆`,
    src: 'https://file.qingflow.com/uploads/file/c5e69092-176e-45f0-b839-6e86d8aaceaf.mp3',
    name: ['如果我变成回忆'],
    singer: 'Clever勺子',
    album: '如果我变成回忆',
    totalTime: '04:46',
    startTime: '01:14',
    endTime: '02:13',
    ...commonConfig
  },
  {
    title: `摩诃不思议アドベンチャー!`,
    src: 'https://file.qingflow.com/uploads/file/2e9c338b-934d-4539-b56a-ff3ecbebc8b0.mp3',
    name: ['摩诃不思议アドベンチャー'],
    singer: '高橋洋樹',
    album: 'ドラゴンボール 音楽集',
    totalTime: '03:34',
    startTime: '00:10',
    endTime: '00:34',
    ...commonConfig
  },
  {
    title: `樱花草`,
    src: 'https://file.qingflow.com/uploads/file/cde14cf2-80cb-4684-b28a-42cdb2cee3e8.mp3',
    name: ['樱花草'],
    singer: '泥鳅Niko',
    album: '热门华语',
    totalTime: '02:13',
    startTime: '1:11',
    endTime: '1:39',
    ...commonConfig
  },
  {
    title: `My Love`,
    src: 'https://file.qingflow.com/uploads/file/0d949973-8b12-49ff-b2d8-d2edcffd30fc.mp3',
    name: ['My Love'],
    singer: 'Westlife',
    album: 'Coast to Coast',
    totalTime: '03:53',
    startTime: '01:58',
    endTime: '02:38',
    ...commonConfig
  },
  {
    title: `遇见`,
    src: 'https://file.qingflow.com/uploads/file/b4544447-c107-454c-880b-fdedab38ba17.mp3',
    name: ['遇见'],
    singer: '杨搏',
    album: '热门华语',
    totalTime: '03:39',
    startTime: '01:15',
    endTime: '01:38',
    ...commonConfig
  },
  {
    title: `一生有你`,
    src: 'https://file.qingflow.com/uploads/file/dd9be461-a8f4-428a-b5a8-1b0b5faf1387.mp3',
    name: ['一生有你'],
    singer: '水木年华',
    album: '毕业纪念册',
    totalTime: '04:18',
    startTime: '03:08',
    endTime: '03:54',
    ...commonConfig
  },
  {
    title: `忘记时间`,
    src: 'https://file.qingflow.com/uploads/file/07585e87-1a29-4dcb-873f-523d702f5415.mp3',
    name: ['忘记时间'],
    singer: '胡歌',
    album: '仙剑奇侠传三 电视原声带',
    totalTime: '04:32',
    startTime: '01:32',
    endTime: '02:00',
    ...commonConfig
  },
  {
    title: `盛夏的果实`,
    src: 'https://file.qingflow.com/uploads/file/a24e10a0-58bf-4d91-8273-1d0e9c182738.mp3',
    name: ['盛夏的果实'],
    singer: '莫文蔚',
    album: '含情莫莫(全精选辑)',
    totalTime: '04:10',
    startTime: '02:42',
    endTime: '03:50',
    ...commonConfig
  },
  {
    title: `As Long as You Love Me`,
    src: 'https://file.qingflow.com/uploads/file/1b8aa1f2-13da-48c3-bb97-787706f535cd.mp3',
    name: ['As Long as You Love Me'],
    singer: 'Backstreet Boys',
    album: 'Backstreet Boys (US Version)',
    totalTime: '03:32',
    startTime: '00:57',
    endTime: '01:18',
    ...commonConfig
  },
  {
    title: `布拉格广场`,
    src: 'https://file.qingflow.com/uploads/file/301e7277-f354-4d65-9038-8b20b6de2e3e.mp3',
    name: ['布拉格广场'],
    singer: '蔡依林 周杰伦',
    album: '看我72变',
    totalTime: '04:54',
    startTime: '01:00',
    endTime: '01:41',
    ...commonConfig
  },
  {
    title: `aLIEz`,
    src: 'https://file.qingflow.com/uploads/file/4f8d9991-5359-4474-9be4-1ca2d0fb4663.mp3',
    name: ['aLIEz'],
    singer: 'mizuki,SawanoHiroyuki[nZk]',
    album: 'A/Z | aLIEz',
    totalTime: '04:28',
    startTime: '00:58',
    endTime: '01:18',
    ...commonConfig
  },
  {
    title: `Skin`,
    src: 'https://file.qingflow.com/uploads/file/b69b0fc4-c4f5-4649-be7e-9ccc297191e6.mp3',
    name: ['Skin'],
    singer: `Rag'N'Bone Man`,
    album: 'Skin',
    totalTime: '03:59',
    startTime: '00:57',
    endTime: '01:29',
    ...commonConfig
  },
  {
    title: `DON'T PUSH ME`,
    src: 'https://file.qingflow.com/uploads/file/e389e283-5004-406e-85ce-bf5f28432d36.mp3',
    name: [`DON'T PUSH ME`],
    singer: 'sweetbox',
    album: 'JADE',
    totalTime: '03:14',
    startTime: '00:09',
    endTime: '00:44',
    ...commonConfig
  },
  {
    title: `Disco Inferno`,
    src: 'https://file.qingflow.com/uploads/file/cb8a87d7-314d-474d-a710-ebe7d97a7890.mp3',
    name: ['Disco Inferno'],
    singer: '50 Cent',
    album: 'Disco Inferno',
    totalTime: '03:34',
    startTime: '00:52',
    endTime: '01:11',
    ...commonConfig
  },
  {
    title: `No Roots`,
    src: 'https://file.qingflow.com/uploads/file/3ed91008-93d3-4cd9-97ae-7a247ce5c7b3.mp3',
    name: ['No Roots'],
    singer: 'Alice Merton',
    album: 'No Roots EP',
    totalTime: '03:55',
    startTime: '00:53',
    endTime: '01:24',
    ...commonConfig
  },
  {
    title: `给我一个理由忘记`,
    src: 'https://file.qingflow.com/uploads/file/c3503aef-23a2-4aaf-8e01-57e3b0cc1d32.mp3',
    name: ['给我一个理由忘记'],
    singer: 'A-Lin',
    album: '寂寞不痛',
    totalTime: '04:45',
    startTime: '01:27',
    endTime: '01:58',
    ...commonConfig
  },
  {
    title: `Here With You`,
    src: 'https://file.qingflow.com/uploads/file/5e0de90a-ca50-440e-a1ad-16fa7290e6b4.mp3',
    name: ['Here With You'],
    singer: 'Asher Monroe',
    album: 'Here With You',
    totalTime: '03:45',
    startTime: '01:10',
    endTime: '01:26',
    ...commonConfig
  },
  {
    title: `Waiting For Love`,
    src: 'https://file.qingflow.com/uploads/file/0c950af4-5a9f-4be4-8cc5-9d161f708133.mp3',
    name: ['Waiting For Love'],
    singer: 'Avicii,Martin Garrix,Simon Aldred',
    album: 'Waiting For Love',
    totalTime: '04:34',
    startTime: '00:17',
    endTime: '00:47',
    ...commonConfig
  },
  {
    title: `不再犹豫`,
    src: 'https://file.qingflow.com/uploads/file/c1308ff8-2e96-4af5-bf09-942b039049b3.mp3',
    name: ['不再犹豫'],
    singer: 'Beyond',
    album: '犹豫',
    totalTime: '04:12',
    startTime: '00:32',
    endTime: '01:13',
    ...commonConfig
  },
  {
    title: `真的爱你`,
    src: 'https://file.qingflow.com/uploads/file/c69b3507-fa09-43e6-a3f4-d9eb614a0f55.mp3',
    name: ['真的爱你'],
    singer: 'Beyond',
    album: '25周年精选',
    totalTime: '04:37',
    startTime: '00:50',
    endTime: '01:22',
    ...commonConfig
  },
  {
    title: `I Really Like You`,
    src: 'https://file.qingflow.com/uploads/file/fb775a68-9687-4c93-ab1b-8b6209d9348f.mp3',
    name: ['I Really Like You'],
    singer: 'Carly Rae Jepsen',
    album: 'I Really Like You',
    totalTime: '03:24',
    startTime: '00:39',
    endTime: '01:11',
    ...commonConfig
  },
  {
    title: `Shape of You`,
    src: 'https://file.qingflow.com/uploads/file/2ed6ee23-8ed3-408f-a671-874ed5db76ff.mp3',
    name: ['Shape of You'],
    singer: 'Ed Sheeran',
    album: 'Shape of You',
    totalTime: '03:51',
    startTime: '00:30',
    endTime: '01:29',
    ...commonConfig
  },
  {
    title: `Big Big World`,
    src: 'https://file.qingflow.com/uploads/file/b05f0c38-77af-477e-bac8-ca9500dc1b5f.mp3',
    name: ['Big Big World'],
    singer: 'Emilia',
    album: 'Big Big World',
    totalTime: '03:26',
    startTime: '01:41',
    endTime: '02:22',
    ...commonConfig
  },
  {
    title: `我的秘密`,
    src: 'https://file.qingflow.com/uploads/file/69a04212-9df9-47aa-9595-3d3057edb988.mp3',
    name: ['我的秘密'],
    singer: 'G.E.M.邓紫棋',
    album: 'A.I.N.Y. 爱你',
    totalTime: '04:10',
    startTime: '01:05',
    endTime: '01:43',
    ...commonConfig
  },
  {
    title: `Anyone Of Us (Stupid Mistake)`,
    src: 'https://file.qingflow.com/uploads/file/104eebbd-93e3-40b8-a977-000b3581825f.mp3',
    name: ['Anyone Of Us', 'Stupid Mistake'],
    singer: 'Gareth Gates',
    album: 'What My Heart Wants To Say',
    totalTime: '03:47',
    startTime: '00:35',
    endTime: '01:14',
    ...commonConfig
  },
  {
    title: `Fire`,
    src: 'https://file.qingflow.com/uploads/file/901cc414-bb5e-471a-ae4e-b4556a374f04.mp3',
    name: ['Fire'],
    singer: 'Gavin Degraw',
    album: 'Fire',
    totalTime: '03:48',
    startTime: '00:52',
    endTime: '01:04',
    ...commonConfig
  },
  {
    title: `Believer`,
    src: 'https://file.qingflow.com/uploads/file/768508ec-3a5e-415b-905d-cc5543c14c66.mp3',
    name: ['Believer'],
    singer: 'Imagine Dragons,Kaskade',
    album: 'Believer',
    totalTime: '03:10',
    startTime: '00:02',
    endTime: '00:48',
    ...commonConfig
  },
  {
    title: `Look What You Made Me Do`,
    src: 'https://file.qingflow.com/uploads/file/2ca946ca-574a-4a8b-868b-6bc6093d745b.mp3',
    name: ['Look What You Made Me Do'],
    singer: 'J.Fla',
    album: 'New Rules',
    totalTime: '02:47',
    startTime: '00:45',
    endTime: '01:15',
    ...commonConfig
  },
  {
    title: `Die Young`,
    src: 'https://file.qingflow.com/uploads/file/2a8a0563-b05b-4e3d-8540-1906311fc64e.mp3',
    name: ['Die Young'],
    singer: 'Kesha',
    album: 'Die Young',
    totalTime: '03:33',
    startTime: '00:07',
    endTime: '00:38',
    ...commonConfig
  },
  {
    title: `Counting Stars`,
    src: 'https://file.qingflow.com/uploads/file/e1d95766-fa6f-41e4-99a4-f015dc14a3fd.mp3',
    name: ['Counting Stars'],
    singer: 'OneRepublic',
    album: 'Native',
    totalTime: '04:17',
    startTime: '00:38',
    endTime: '01:18',
    ...commonConfig
  },
  {
    title: `You Belong With Me`,
    src: 'https://file.qingflow.com/uploads/file/d19ccba4-b672-4d25-b726-0c47396e84b9.mp3',
    name: ['You Belong With Me'],
    singer: 'Kidz Bop Kids',
    album: 'Kidz Bop 17',
    totalTime: '03:49',
    startTime: '00:37',
    endTime: '01:07',
    ...commonConfig
  },
  {
    title: `Oops`,
    src: 'https://file.qingflow.com/uploads/file/81e0df46-4461-4915-969c-dec0b960bf88.mp3',
    name: ['Oops'],
    singer: 'Little Mix,Charlie Puth',
    album: 'Glory Days',
    totalTime: '03:24',
    startTime: '01:04',
    endTime: '01:21',
    ...commonConfig
  },
  {
    title: `Bye Bye Bye`,
    src: 'https://file.qingflow.com/uploads/file/923d5232-fbdd-4057-8ff4-89b66803bedd.mp3',
    name: ['Bye Bye Bye'],
    singer: 'Lovestoned',
    album: 'Rising Love',
    totalTime: '03:20',
    startTime: '00:42',
    endTime: '01:03',
    ...commonConfig
  },
  {
    title: `Maps`,
    src: 'https://file.qingflow.com/uploads/file/7c503c99-5d59-4c29-9828-c862702b447c.mp3',
    name: ['Maps'],
    singer: 'Maroon 5',
    album: 'Maps',
    totalTime: '03:09',
    startTime: '00:39',
    endTime: '01:12',
    ...commonConfig
  },
  {
    title: `We Are Never Ever Getting Back Together`,
    src: 'https://file.qingflow.com/uploads/file/25abb0f2-5434-438c-b9bd-3f4bc3b2914c.mp3',
    name: ['We Are Never Ever Getting Back Together'],
    singer: 'Taylor Swift',
    album: 'Be My Anti-Valentine',
    totalTime: '03:13',
    startTime: '00:39',
    endTime: '01:02',
    ...commonConfig
  },
  {
    title: `Lock Me Up`,
    src: 'https://file.qingflow.com/uploads/file/7954c7a5-5764-4553-9eea-5e264c2094a8.mp3',
    name: ['Lock Me Up'],
    singer: 'The Cab',
    album: 'Lock Me Up',
    totalTime: '03:31',
    startTime: '00:44',
    endTime: '01:06',
    ...commonConfig
  },
  {
    title: `君が好きだと叫びたい`,
    src: 'https://file.qingflow.com/uploads/file/dca9602f-82eb-4758-bee9-067a7bd9e355.mp3',
    name: ['君が好きだと叫びたい', '好想大声说爱你'],
    singer: 'BAAD',
    album: '灌篮高手',
    totalTime: '03:50',
    startTime: '01:04',
    endTime: '01:32',
    ...commonConfig
  },
  {
    title: `Revolution`,
    src: 'https://file.qingflow.com/uploads/file/89900448-c04b-4194-9765-4c5aafc3e9bd.mp3',
    name: ['Revolution'],
    singer: 'The Score',
    album: 'Myths & Legends',
    totalTime: '03:51',
    startTime: '00:03',
    endTime: '00:14',
    ...commonConfig
  },
  {
    title: `Every Heart（Cover：BoA）`,
    src: 'https://file.qingflow.com/uploads/file/60e8ec9b-10d8-44dd-a8fc-13a13f9b51db.mp3',
    name: ['Every Heart'],
    singer: 'VeraJae',
    album: '一个翻唱集',
    totalTime: '04:31',
    startTime: '00:45',
    endTime: '01:11',
    ...commonConfig
  },
  {
    title: `New Soul`,
    src: 'https://file.qingflow.com/uploads/file/9bba28df-61c8-4a83-844a-03099f7eb851.mp3',
    name: ['New Soul'],
    singer: 'Vox Angeli',
    album: 'Irlande',
    totalTime: '03:20',
    startTime: '00:10',
    endTime: '00:28',
    ...commonConfig
  },
  {
    title: `侧脸`,
    src: 'https://file.qingflow.com/uploads/file/76f953b7-68d0-4773-9c25-b07ea314cc80.mp3',
    name: ['侧脸'],
    singer: '于果',
    album: '侧脸',
    totalTime: '03:37',
    startTime: '01:15',
    endTime: '01:44',
    ...commonConfig
  },
  {
    title: `知足`,
    src: 'https://file.qingflow.com/uploads/file/6373b781-b1e6-4265-adf5-9e956a217e23.mp3',
    name: ['知足'],
    singer: '五月天',
    album: '知足 最真杰作选',
    totalTime: '04:16',
    startTime: '02:52',
    endTime: '03:43',
    ...commonConfig
  },
  {
    title: `成都（Cover 赵雷）`,
    src: 'https://file.qingflow.com/uploads/file/caf3f4d6-8c8c-4328-98e7-85321db02ef7.mp3',
    name: ['成都'],
    singer: '成都',
    album: '成都',
    totalTime: '04:46',
    startTime: '01:22',
    endTime: '01:53',
    ...commonConfig
  },
  {
    title: `说爱你`,
    src: 'https://file.qingflow.com/uploads/file/2b57c4c9-c345-480a-8468-72df273d52c9.mp3',
    name: ['说爱你'],
    singer: '刘至佳',
    album: '说爱你',
    totalTime: '03:22',
    startTime: '00:22',
    endTime: '00:42',
    ...commonConfig
  },
  {
    title: `后来`,
    src: 'https://file.qingflow.com/uploads/file/83676098-a2ff-4af4-989d-b97ee4051724.mp3',
    name: ['后来'],
    singer: '刘若英',
    album: '我等你',
    totalTime: '05:41',
    startTime: '02:36',
    endTime: '03:02',
    ...commonConfig
  },
  {
    title: `霜雪千年（Cover 洛天依 ／ 乐正绫）`,
    src: 'https://file.qingflow.com/uploads/file/0ef71729-288e-4146-ade2-6fb922c181e9.mp3',
    name: ['霜雪千年'],
    singer: '双笙,封茗囧菌',
    album: '霜雪千年(翻唱)',
    totalTime: '04:06',
    startTime: '00:16',
    endTime: '01:29',
    ...commonConfig
  },
  {
    title: `娃娃脸`,
    src: 'https://file.qingflow.com/uploads/file/fc2ddd91-59c3-4ebc-ada4-876b73b610a4.mp3',
    name: ['娃娃脸'],
    singer: '后弦',
    album: '娃娃脸',
    totalTime: '03:24',
    startTime: '00:16',
    endTime: '01:54',
    ...commonConfig
  },
  {
    title: `起风了`,
    src: 'https://file.qingflow.com/uploads/file/7e7b6b3f-c46c-4166-83f2-0572f6af2b9a.mp3',
    name: ['起风了'],
    singer: '吴青峰',
    album: '起风了',
    totalTime: '05:13',
    startTime: '01:36',
    endTime: '02:07',
    ...commonConfig
  },
  {
    title: `感谢你曾来过`,
    src: 'https://file.qingflow.com/uploads/file/a8cef33b-c04a-448f-bd73-eee1fb7ec3dd.mp3',
    name: ['感谢你曾来过'],
    singer: '周思涵,Ayo97',
    album: '卧龙与酒',
    totalTime: '03:56',
    startTime: '01:01',
    endTime: '01:50',
    ...commonConfig
  },
  {
    title: `小乌龟`,
    src: 'https://file.qingflow.com/uploads/file/d9729725-b99c-4e3a-9c5c-7db24529e32b.mp3',
    name: ['小乌龟'],
    singer: '张栋梁',
    album: '微笑Pasta电视剧',
    totalTime: '03:46',
    startTime: '00:38',
    endTime: '01:13',
    ...commonConfig
  },
  {
    title: `可不可以`,
    src: 'https://file.qingflow.com/uploads/file/ec9b4c23-ce07-45b3-9ed4-dd0bfc38cdd4.mp3',
    name: ['可不可以'],
    singer: '张紫豪',
    album: '可不可以',
    totalTime: '04:00',
    startTime: '01:11',
    endTime: '01:39',
    ...commonConfig
  },
  {
    title: `偏爱`,
    src: 'https://file.qingflow.com/uploads/file/826bf6e4-c092-44fe-93ec-66975ea7ff8c.mp3',
    name: ['偏爱'],
    singer: '张芸京',
    album: '仙剑奇侠传三 电视原声带',
    totalTime: '03:32',
    startTime: '00:56',
    endTime: '01:25',
    ...commonConfig
  },
  {
    title: `云烟成雨`,
    src: 'https://file.qingflow.com/uploads/file/9951cf40-3b21-4dfe-aa99-8d4f77737adf.mp3',
    name: ['云烟成雨'],
    singer: '房东的猫',
    album: '云烟成雨',
    totalTime: '04:00',
    startTime: '01:13',
    endTime: '01:39',
    ...commonConfig
  },
  {
    title: `白羊`,
    src: 'https://file.qingflow.com/uploads/file/647efd81-2319-4dc0-ab99-de15a904fe94.mp3',
    name: ['白羊'],
    singer: '曲肖冰',
    album: '白羊',
    totalTime: '02:48',
    startTime: '00:36',
    endTime: '01:09',
    ...commonConfig
  },
  {
    title: `美人鱼`,
    src: 'https://file.qingflow.com/uploads/file/0b8585ed-7d6d-48ea-8615-29966c5deb3a.mp3',
    name: ['美人鱼'],
    singer: '林俊杰',
    album: '第二天堂',
    totalTime: '04:14',
    startTime: '00:58',
    endTime: '01:37',
    ...commonConfig
  },
  {
    title: `我们都一样（Cover：张杰）`,
    src: 'https://file.qingflow.com/uploads/file/972c8bc7-13c0-42b8-aac4-e75fee04f34f.mp3',
    name: ['我们都一样'],
    singer: '澪恩Seiwen',
    album: '我们都一样（女生版）',
    totalTime: '04:55',
    startTime: '01:20',
    endTime: '01:53',
    ...commonConfig
  },
  {
    title: `彩虹的微笑`,
    src: 'https://file.qingflow.com/uploads/file/7d131b8d-42fb-4ea4-9b5b-28aeeae66002.mp3',
    name: ['彩虹的微笑'],
    singer: '王心凌',
    album: '微笑Pasta电视原声带(微笑庆功版)',
    totalTime: '02:50',
    startTime: '01:16',
    endTime: '01:53',
    ...commonConfig
  },
  {
    title: `風の住む街`,
    src: 'https://file.qingflow.com/uploads/file/a71a018d-8cf9-49a1-9d5c-7088c347bab9.mp3',
    name: ['風の住む街', '风居住的街道'],
    singer: '磯村由紀子',
    album: '風の住む街',
    totalTime: '04:45',
    startTime: '01:20',
    endTime: '01:44',
    ...commonConfig
  },
  {
    title: `盗将行（Cover：花粥）`,
    src: 'https://file.qingflow.com/uploads/file/08e7f89a-f225-4dfc-8d3f-5d53fbf84878.mp3',
    name: ['盗将行'],
    singer: '莅宣',
    album: '盗将行',
    totalTime: '03:21',
    startTime: '00:44',
    endTime: '01:10',
    ...commonConfig
  },
  {
    title: `去年夏天（Cover：王大毛）`,
    src: 'https://file.qingflow.com/uploads/file/7b082108-98dd-4851-aa99-9460e63ab938.mp3',
    name: ['去年夏天'],
    singer: '程嘉敏',
    album: '去年夏天',
    totalTime: '04:05',
    startTime: '00:49',
    endTime: '01:20',
    ...commonConfig
  },
  {
    title: `暖暖`,
    src: 'https://file.qingflow.com/uploads/file/6e07e091-1488-4ce9-a5ef-0905f19c475c.mp3',
    name: ['暖暖'],
    singer: '窜天猴少女599,丸子菇凉,康妮',
    album: '暖暖',
    totalTime: '04:00',
    startTime: '01:09',
    endTime: '01:28',
    ...commonConfig
  },
  {
    title: `Lemon`,
    src: 'https://file.qingflow.com/uploads/file/b9f40029-7b83-4446-a20a-3ee71fbef3d3.mp3',
    name: ['Lemon'],
    singer: '米津玄師',
    album: 'Lemon',
    totalTime: '04:15',
    startTime: '00:58',
    endTime: '01:26',
    ...commonConfig
  },
  {
    title: `ハレハレヤ`,
    src: 'https://file.qingflow.com/uploads/file/928cde74-fa1f-430b-9e7b-f1a4e6c7ed4a.mp3',
    name: ['ハレハレヤ', '朗朗晴天'],
    singer: '羽生まゐご,v flower',
    album: 'MEiSTER',
    totalTime: '03:29',
    startTime: '00:11',
    endTime: '00:54',
    ...commonConfig
  },
  {
    title: `逍遥叹`,
    src: 'https://file.qingflow.com/uploads/file/86d28495-15fc-462d-8447-ae5064707c78.mp3',
    name: ['逍遥叹'],
    singer: '胡歌',
    album: '仙剑奇侠传',
    totalTime: '05:13',
    startTime: '01:21',
    endTime: '01:46',
    ...commonConfig
  },
  {
    title: `出山`,
    src: 'https://file.qingflow.com/uploads/file/fc9ec7f3-dee3-4813-8594-89a2b7e1c9ad.mp3',
    name: ['出山'],
    singer: '花粥,王胜娚',
    album: '粥请客（四）',
    totalTime: '03:20',
    startTime: '00:58',
    endTime: '01:16',
    ...commonConfig
  },
  {
    title: `小情歌`,
    src: 'https://file.qingflow.com/uploads/file/b63b4c38-ef9d-480c-bca7-eb36b7f19e88.mp3',
    name: ['小情歌'],
    singer: '苏打绿',
    album: '小宇宙',
    totalTime: '04:33',
    startTime: '01:42',
    endTime: '02:14',
    ...commonConfig
  },
  {
    title: `失恋阵线联盟`,
    src: 'https://file.qingflow.com/uploads/file/bddc6ce4-c786-4ba6-90e7-a7207664d65b.mp3',
    name: ['失恋阵线联盟'],
    singer: '草蜢',
    album: '失恋阵线联盟',
    totalTime: '02:53',
    startTime: '00:16',
    endTime: '00:59',
    ...commonConfig
  },
  {
    title: `红色高跟鞋`,
    src: 'https://file.qingflow.com/uploads/file/504ae223-8d8d-4957-be0b-bf17ee617c56.mp3',
    name: ['红色高跟鞋'],
    singer: '蔡健雅',
    album: '若你碰到他',
    totalTime: '03:26',
    startTime: '00:42',
    endTime: '01:06',
    ...commonConfig
  },
  {
    title: `如果有来生`,
    src: 'https://file.qingflow.com/uploads/file/ac906b98-9952-4015-907f-a9e5d1e649d9.mp3',
    name: ['如果有来生'],
    singer: '谭维维',
    album: '谭某某',
    totalTime: '04:07',
    startTime: '01:04',
    endTime: '01:33',
    ...commonConfig
  },
  {
    title: `虹之间`,
    src: 'https://file.qingflow.com/uploads/file/c24c3f51-dcc1-4269-a285-674aa26fe31d.mp3',
    name: ['虹之间'],
    singer: '金贵晟',
    album: '爱情公寓4',
    totalTime: '04:06',
    startTime: '01:10',
    endTime: '01:37',
    ...commonConfig
  },
  {
    title: `陷阱（Cover 王北车）`,
    src: 'https://file.qingflow.com/uploads/file/b72ad33b-058b-4c7c-8925-42c48ec74ce4.mp3',
    name: ['陷阱'],
    singer: '锦零',
    album: '陷阱',
    totalTime: '04:40',
    startTime: '01:23',
    endTime: '01:52',
    ...commonConfig
  },
  {
    title: `一直很安静`,
    src: 'https://file.qingflow.com/uploads/file/d5dc7899-c197-42ef-82e7-f24ceec18cd0.mp3',
    name: ['一直很安静'],
    singer: '阿桑',
    album: '寂寞在唱歌',
    totalTime: '04:10',
    startTime: '01:57',
    endTime: '02:31',
    ...commonConfig
  },
  {
    title: `我爱他`,
    src: 'https://file.qingflow.com/uploads/file/3b76cf88-3e9b-46ca-8612-7953e9d1980c.mp3',
    name: ['我爱他'],
    singer: '陈威全',
    album: '热门华语',
    totalTime: '04:40',
    startTime: '01:08',
    endTime: '01:55',
    ...commonConfig
  },
  {
    title: `你瞒我瞒`,
    src: 'https://file.qingflow.com/uploads/file/3f808635-4495-491c-8d21-147380deafea.mp3',
    name: ['你瞒我瞒'],
    singer: '陈柏宇',
    album: 'Can’t Be Half',
    totalTime: '03:59',
    startTime: '01:09',
    endTime: '01:38',
    ...commonConfig
  },
  {
    title: `易燃易爆炸`,
    src: 'https://file.qingflow.com/uploads/file/ab3b8315-7e27-49a2-88e5-a9d987fa47ec.mp3',
    name: ['易燃易爆炸'],
    singer: '陈粒',
    album: '如也',
    totalTime: '03:20',
    startTime: '00:49',
    endTime: '01:23',
    ...commonConfig
  },
  {
    title: `爱你`,
    src: 'https://file.qingflow.com/uploads/file/ce86ea2d-2cb2-46aa-9889-f7a88c87998d.mp3',
    name: ['爱你'],
    singer: '陈芳语',
    album: 'Kimberley首张同名专辑',
    totalTime: '03:28',
    startTime: '00:36',
    endTime: '01:06',
    ...commonConfig
  },
  {
    title: `你的酒馆对我打了烊`,
    src: 'https://file.qingflow.com/uploads/file/948b0b24-22dc-437e-9681-4b2518bbda6b.mp3',
    name: ['你的酒馆对我打了烊'],
    singer: '陈雪凝',
    album: '你的酒馆对我打了烊',
    totalTime: '04:11',
    startTime: '00:24',
    endTime: '01:07',
    ...commonConfig
  },
  {
    title: `假装`,
    src: 'https://file.qingflow.com/uploads/file/81c42f41-642f-4366-bf8a-71a7fe981530.mp3',
    name: ['假装'],
    singer: '陈雪凝',
    album: '拾陆',
    totalTime: '04:24',
    startTime: '01:25',
    endTime: '02:04',
    ...commonConfig
  },
  {
    title: `绿色`,
    src: 'https://file.qingflow.com/uploads/file/55f554cf-20ec-4089-8c46-da7de89f4865.mp3',
    name: ['绿色'],
    singer: '陈雪凝',
    album: '绿色',
    totalTime: '04:29',
    startTime: '00:57',
    endTime: '01:27',
    ...commonConfig
  },
  {
    title: `PLANET（Cover：ラムジ）`,
    src: 'https://file.qingflow.com/uploads/file/18120f95-97ce-44f0-969b-36e81082cd3b.mp3',
    name: ['PLANET'],
    singer: '黑猫',
    album: 'planet（御姐版你懂叭）',
    totalTime: '04:03',
    startTime: '00:47',
    endTime: '01:23',
    ...commonConfig
  }
];
