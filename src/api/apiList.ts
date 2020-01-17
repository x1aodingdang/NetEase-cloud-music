// 轮播图
export const $APIbanner = "/banner";

// 首页 推荐歌单
export const $APIHomeRecommendPlayList = "/personalized";

// 获取排行榜 摘要 （排行榜用到） // 如果排行榜使用这个接口 顺序其实是不对的  所以还是用 APIRankDetail 这个吧 APIRankDetail 这个借口 数据太多 也担心 加载慢 而且要请假好几次
export const $APIRankList = "/toplist/detail"; // 取前四个

export const $APIRankDetail = "/top/list"; // ?idx=1

/**
 * 歌曲详情
 * @example /song/detail?ids=347230,/song/detail?ids=347230,347231
 */
export const $APISongDetail = "/song/detail";

/**
 * 获取音乐 url
 * @description 说明 : 使用歌单详情接口后 , 能得到的音乐的 id, 但不能得到的音乐 url, 调用此接口 , 传入的音乐 id( 可多个 , 用逗号隔开 ), 可以获取对应的音乐的 url( 不需要登录 )
 * @see https://binaryify.github.io/NeteaseCloudMusicApi/#/?id=%E8%8E%B7%E5%8F%96%E9%9F%B3%E4%B9%90-url
 * @example 调用例子 : /song/url?id=33894312 /song/url?id=405998841,33894312
 */
export const $APIGetMusicUrl = "/song/url";

/**
 *  @description 使用 $APIGetMusicUrl 之前调用  检查是否可以播放（版权）
 *  @example /check/music?id=1407358755
 */
export const $APICheckMusic = "/check/music";

/**
 * @description 热搜列表(详细)  调用此接口,可获取热门搜索列表
 * @example /search/hot/detail
 */
export const $APISearchHotDetail = "/search/hot/detail";
