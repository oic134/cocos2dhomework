var jimmy01Layer = cc.Layer.extend({
    ctor: function(){
        this._super();
        var size = cc.winSize;
          //做出一個線框出來
        var colorLayer = new cc.LayerColor(
              // 顏色             寬 高
            cc.color(255,255,0), 192,55
        );
          colorLayer.x = size.width/2;
          colorLayer.y = size.height/2;
          colorLayer.ignoreAnchorPointForPosition(false); //預設座標轉換
          this.addChild(colorLayer,0);
          //輸入文字
          var myLabel =  new cc.LabelTTF("我的遊戲","Arial",48
            // ,cc.size(192,55),
            // cc.TEXT_ALIGNMENT_CENTER, 文字置中
            // cc.VERTICAL_TEXT_ALIGNMENT_CENTER 垂直置中
        );

          var labelSize =  myLabel.getContentSize(); //知道內容空間大小(寬高)
          cc.log(labelSize);
          myLabel.x = size.width/2;
          myLabel.y = size.height/2 ;
          myLabel.setColor(cc.color(0,0,255)); //變更顏色

          this.addChild(myLabel,0);


        // this.addChild(colorLayer,0); if都是0,0則按順序疊上去
        // this.addChild(myLabel,0); 如果都不是則按數字大小 數字越大則疊越上面
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