var jimmy01Layer = cc.Layer.extend({
    ctor: function(){
        this._super();
        var size = cc.winSize;
        var colorLayer = new cc.LayerColor(
              // 顏色             寬 高
            cc.color(255,255,0), 192,55
        );
          colorLayer.x = size.width/2;
          colorLayer.y = size.height/2;
          colorLayer.ignoreAnchorPointForPosition(false); //預設座標轉換
          this.addChild(colorLayer);
        var myLabel =  new cc.LabelTTF("我的遊戲","Arial",48,
            cc.size(192,55),
            cc.TEXT_ALIGNMENT_CENTER,
            cc.VERTICAL_TEXT_ALIGNMENT_CENTER
        );

          var labelSize =  myLabel.getContentSize();
          cc.log(labelSize);
          myLabel.x = size.width/2;
          myLabel.y = size.height/2 ;
          myLabel.setColor(cc.color(0,0,255));

          this.addChild(myLabel);




        return true;
    },
});

var jimmy01Scene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new jimmy01Layer();
        this.addChild(layer);
    }
});