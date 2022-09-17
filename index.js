const axios = require('axios');
let ok = 0;
let err = 0;
// 间隔时间和t自行修改
// t必填！！！
function fast() {
  axios.get('https://cat-match.easygame2021.com/sheep/v1/game/game_over?rank_score=1&rank_state=1&rank_time=0&rank_role=1&skin=1', {
    headers: {
      'Accept': '*/*',
      'Accept-Encoding': 'gzip,deflate,br',
      'Connection': 'keep-alive',
      'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1',
      't': 'xxx'
    }
  })
    .then(res => {
      ok++;
      console.log(res.data);
    })
    .catch(error => {
      err++;
    })
    .finally(() => {
      console.log(`====================羊了个羊勇敢通关${ok}次====================`);
      console.log(`====================羊了个羊闯关失败${err}次====================`);
    })
    ;
}

setInterval(() => {
  fast()
  const axios = require('axios');
let ok = 0;
let err = 0;
// 间隔时间和t自行修改
// t必填！！！
function fast() {
  axios.get('https://cat-match.easygame2021.com/sheep/v1/game/game_over?rank_score=1&rank_state=1&rank_time=0&rank_role=1&skin=1', {
    headers: {
      'Accept': '*/*',
      'Accept-Encoding': 'gzip,deflate,br',
      'Connection': 'keep-alive',
      'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1',
      't': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTQzMjgyMjMsIm5iZiI6MTY2MzIyNjAyMywiaWF0IjoxNjYzMjI0MjIzLCJqdGkiOiJDTTpjYXRfbWF0Y2g6bHQxMjM0NTYiLCJvcGVuX2lkIjoiIiwidWlkIjo4MzczNzkwNSwiZGVidWciOiIiLCJsYW5nIjoiIn0.MtMiSnlyfoI_7EngTiKMjnQjv2tBJijxertfZOM6PtY'
    }
  })
    .then(res => {
      ok++;
      console.log(res.data);
    })
    .catch(error => {
      err++;
    })
    .finally(() => {
      console.log(`====================羊了个羊勇敢通关${ok}次====================`);
      console.log(`====================羊了个羊闯关失败${err}次====================`);
    })
    ;
}

setInterval(() => {
  fast()
  // 间隔时间600毫秒
}, 600)
