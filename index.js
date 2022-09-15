const axios = require('axios');

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
      console.log(res.data);
    })
    .catch(error => {
      console.log(error);
    });

}
// 间隔时间和t自行修改
setInterval(() => {
  fast()
}, 200)
