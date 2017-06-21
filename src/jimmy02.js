var jimmy02Layer = cc.Layer.extend({
    n0:null,
    ctor: function(){
        this._super();
        var size = cc.winSize;


        return true;
    },
    //元件初始化
    initSprite: function(){

    },
    myMouseListener:function(layer){
        if("mouse" in cc.sys.capabilities){
            console.log("mouse ok");
            var mouseListener = {
                event: cc.EventListener.MOUSE,
                onMouseDown:function(event){
                    var x = event.getLocationX();
                    var y = event.getLocationY();
                    var point = new cc.Point(x,y);

                    var n0X = layer.n0.x;
                    var n0Y = layer.n0.y;
                    var n0W = layer.n0.width;
                    var n0H = layer.n0.height;
                    var rect = new cc.Rect(n0X,n0Y,n0W,n0H);
                    if(cc.rectContainsPoint(rect,point)){
                        console.log("got it2")
                    }

                }


            };
            cc.eventManager.addListener(mouseListener,this);
        }
    },
});

var jimmy02Scene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new jimmy02Layer();
        this.addChild(layer);
    }
});

function sayYa(who){
    return "Ya,"+who;
};