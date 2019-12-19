// 轮播图
export const $APIbanner = "/banner";

// 首页 推荐歌单
export const $APIHomeRecommendPlayList = "/personalized";

// 获取排行榜 摘要 （排行榜用到） // 如果排行榜使用这个接口 顺序其实是不对的  所以还是用 APIRankDetail 这个吧 APIRankDetail 这个借口 数据太多 也担心 加载慢 而且要请假好几次
export const $APIRankList = "/toplist/detail"; // 取前四个

export const $APIRankDetail = "/top/list"; // ?idx=1
