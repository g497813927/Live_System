var player = new Aliplayer({
          "id": "player-con",
          "source": '{"http://livepull.techzjc.com/hgqjdst/talentshow.flv?auth_key=1576447900-0-0-e1a22519398ae722119c069963dc0f8d"}',		//此处加入阿里云的flv链接
          "width": "100%",
          "height": "500px",
          "autoplay": true,
          "isLive": true,
          "rePlay": false,
          //"waterMark": "http://zhibo.hgqjdst.org/hgqjdst-watermark.png|TR|0.2|1",
          "cover": "/cover.jpg",
          "showBuffer": true,
          "language": "zh-cn",
          "snapshot": true,
          "showBarTime": 5000,
          "useFlashPrism": true,
          "skinLayout": [
            {
              "name": "bigPlayButton",
              "align": "blabs",
              "x": 30,
              "y": 80
            },
            {
              "name": "errorDisplay",
              "align": "tlabs",
              "x": 0,
              "y": 0
            },
            {
              "name": "infoDisplay"
            },
            {
              "name": "controlBar",
              "align": "blabs",
              "x": 0,
              "y": 0,
              "children": [
                {
                  "name": "liveDisplay",
                  "align": "tlabs",
                  "x": 15,
                  "y": 25
                },
                {
                  "name": "fullScreenButton",
                  "align": "tr",
                  "x": 10,
                  "y": 25
                },
                {
                  "name": "volume",
                  "align": "tr",
                  "x": 10,
                  "y": 25
                }
              ]
            }
          ]
        }, function (player) {
          console.log("播放器创建了。");
        }
                                  );