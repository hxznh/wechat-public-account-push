export const config = {
  /**
   * 公众号配置
   */

  // 公众号APP_ID
  // 建议不要填这里，请使用文档中github secret的方法进行保密配置，保护您的隐私安全。
  // 如果你非要填这里也行。脚本也能运行
  APP_ID: "",

  // 公众号APP_SECRET
  // 建议不要填这里，请使用文档中github secret的方法进行保密配置，保护您的隐私安全。
  // 如果你非要填这里也行。脚本也能运行
  APP_SECRET: "",

  /**
   * 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如
   * [
   *  {
   *    // 想要发送的人的名字
   *    name: "姐姐",
   *    // 扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
   *    id: "oUDls5hq_Ks4pQRKu2hc4Cp-LIkM",
   *    // 你想对他发送的模板消息的模板ID
   *    useTemplateId: "zjVglIuCXo4CsraXWEio1iP7sZJ7IQEES9lDsgc4yOU",
   *    // 他点击详情后跳转的页面,你可以设置成微博的热榜，也可以设置成其他，网址一定要填对；不填对也没关系，随便你，会打不开而已。
   *    openUrl: "https://zhengjunzeng.gitee.io/"
   *   },
   * ]
   */
  USERS: [
    {
      // 想要发送的人的名字
      name: "老婆",
      // 扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: "oUDls5hq_Ks4pQRKu2hc4Cp-LIkM",
      // 你想对他发送的模板消息的模板ID
      useTemplateId: "CkDlx3xw-rTLuZBEnpibq3wM3ZMisEvV8XhspeyZQH0",
      // 所在省份
      province: "重庆",
      // 所在城市
      city: "重庆",
      // 新历生日, 仅用作获取星座运势, 格式必须
      horoscopeDate: '06-26',
      // 获取什么时候的星座运势，可选：['今日', '明日', '本周', '本月', '今年'], 留空则随机
      horoscopeDateType: '今日',
      // 他点击详情后跳转的页面,你可以设置成微博的热榜，也可以设置成其他，网址一定要填对；不填对也没关系，随便你，会打不开而已。
      openUrl: "https://zhengjunzeng.gitee.io/",
      // 专属节日提醒，如果你在这里填写了节日提醒，就不会执行FESTIVALS的提醒了, 和FESTIVALS的配置方法相同，可以往下查看，我这里就不重复写了
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {"type": "*生日", "name": "老婆", "year": "2002", "date": "06-26"},
        {"type": "节日", "name": "恋爱纪念日", "year": "2021", "date": "11-01"},
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
//         {"type": "生日", "name": "李四", "year": "1996", "date": "09-31"},
//         {"type": "节日", "name": "被搭讪纪念日", "year": "2021", "date": "09-01"},
      ],
      // 专属纪念日/倒数日，如果你在这里填写了纪念日/倒数日，就不会计算CUSTOMIZED_DATE_LIST的日子了, 和CUSTOMIZED_DATE_LIST的配置方法相同，可以往下查看，我这里就不重复写了
      customizedDateList: [
        // 在一起的日子
        {"keyword": "love_day", date: "2021-11-01"},
      ]
    },
    // 回执单
    {
      // 想要发送的人的名字
      name: "老婆",
      // 扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: "oUDls5hYJLlQA2AGQVZ954DdMjmg",
      // 你想对他发送的模板消息的模板ID
      useTemplateId: "CkDlx3xw-rTLuZBEnpibq3wM3ZMisEvV8XhspeyZQH0",
      // 所在省份
      province: "重庆",
      // 所在城市
      city: "重庆",
      openUrl: "https://zhengjunzeng.gitee.io/",
      // 专属节日提醒，如果你在这里填写了节日提醒，就不会执行FESTIVALS的提醒了, 和FESTIVALS的配置方法相同，可以往下查看，我这里就不重复写了
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {"type": "*生日", "name": "老婆", "year": "2002", "date": "06-26"},
        {"type": "节日", "name": "恋爱纪念日", "year": "2021", "date": "11-01"},
      ],
      // 专属纪念日/倒数日，如果你在这里填写了纪念日/倒数日，就不会计算CUSTOMIZED_DATE_LIST的日子了, 和CUSTOMIZED_DATE_LIST的配置方法相同，可以往下查看，我这里就不重复写了
      customizedDateList: [
        // 在一起的日子
        {"keyword": "love_day", date: "2021-11-01"},
      ]
    }
  ],

  /**
   * 【推送完成提醒】 相关，主要用来展示发送是否成功/失败的数据
   */

  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
//   CALLBACK_TEMPLATE_ID: "W_NnREeg8ITziuzeSO4hr0CLO0YrecFlpo-FcCIHTwo",

//   // 接收成功回调消息的微信号，（一般来说只填自己的微信号, name填不填无所谓）
//   CALLBACK_USERS: [
//     {
//       // 一般都填自己
//       name: "zjz",
//       // 自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
//       id: "oUDls5hYJLlQA2AGQVZ954DdMjmg",
//     },
//   ],

//   /**
//    * 限制重要节日的展示条目, 需要填写数字;
//    * 如果为3, 则仅展示“将要到达” 的3个重要节日提醒，剩下的将被忽略
//    * 如果为0, 则默认展示全部
//    */
//   FESTIVALS_LIMIT: 4,

//   /** 日期相关 */

//   /** 你现在可以随心增加你认为的所有的需要纪念的日子啦！
//     * keyword是指暴露给测试号的模板字段，填什么就暴露什么, 请注意不要和README的出参表中的字段重复。
//     * 比如：keyword: "love_date" ，在测试号中就是 {{ love_date.DATA }}
//     * */
//   CUSTOMIZED_DATE_LIST: [
//     // 在一起的日子
//     {"keyword": "love_day", date: "2022-09-08"},
//     // 结婚纪念日
//     {"keyword": "marry_day", date: "2022-09-09"},
//     // 退伍日
//     {"keyword": "ex_day", date: "2022-09-10"},
//     sakana日
//     {"keyword": "sakana_day", date: "2022-01-06"},
//     ...
//   ],

  /** 插槽 */

  /** 你可以在这里写超多的你想显示的内容了！
    * keyword是指暴露给测试号的模板字段，填什么就暴露什么, 请注意不要和README的出参表中的字段重复。
    * 比如：keyword: "lover_prattle" ，在测试号中就是 {{ lover_prattle.DATA }}
    * */
  SLOT_LIST: [
    // 这样配置的话，就会每次发送这句话
    {"keyword": "daily", contents: "学会开车了才发现，开车确实太方便了，以前都觉公共交通那么发达，但现在觉得还是得有车，这样才支撑的起一个小家。"},
    // 这样配置的话，就会每次随机选一句话发送
//     {"keyword": "lover_prattle", contents: [
//       "因为太喜欢你，所以看谁都像是情敌。",
//       "申请成为你爱里的永久居民。",
//       "你很傻，你很笨，可我还是很羡慕你，因为你有我",
//       "遇见你，就好像捡到了100斤的运气",
//     ]},
  ]

//   /** 每日一言 */

//   // 好文节选的内容类型
//   // 可以填写【动画，漫画，游戏，小说，原创，网络，其他】； 随机则填写 ""
//   LITERARY_PREFERENCE: ""


}
