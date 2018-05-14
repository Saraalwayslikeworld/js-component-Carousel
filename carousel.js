function Carousel($ct){
    this.init($ct)
    this.bind()
}
Carousel.prototype={
    init: function($ct){
        this.$ct = $ct
        this.$imgCt = this.$ct.find('.imgCt')
        this.$imgs = this.$ct.find('.imgCt>li')
        this.$preBtn = this.$ct.find('.pre')
        this.$nextBtn = this.$ct.find('.next')
        this.$bullets = this.$ct.find('.bullet>li')

        this.imgCount = this.$imgs.length
        this.imgWidth = this.$imgs.width()
        this.index = 0
        this.isAnimate = false

        this.$imgCt.append(this.$imgs.first().clone())
        this.$imgCt.prepend(this.$imgs.last().clone())
        this.$imgCt.css("width",this.imgWidth*(this.imgCount+2))
        this.$imgCt.css("left",-this.imgWidth)        
    },
    bind: function(){
        var _this = this
        this.$preBtn.on('click',function(){  
            _this.showPre(1)      
        })
        this.$nextBtn.on('click',function(){
            _this.showNext(1)
        })
        this.$bullets.on('click',function(){
            var index=$(this).index()
            if(index<_this.index){
                _this.showPre(_this.index-index)
            }else{
                _this.showNext(index-_this.index)
            }
        })
    },
    showPre: function(len){
        console.log('show pre...')
        var _this = this
        if(this.isAnimate)return
        this.isAnimate = true
        this.$imgCt.animate({
            left: '+='+this.imgWidth*len
        },function(){
            _this.index -=len
            if(_this.index===-1){
                _this.$imgCt.css("left",-_this.imgWidth*_this.imgCount) 
                _this.index = _this.imgCount-1
            }
            _this.bulletSet()
            _this.isAnimate=false
        })     
    },
    showNext: function(len){
        console.log('show next...')
        var _this = this
        if(this.isAnimate)return
        this.isAnimate = true
        this.$imgCt.animate({
            left: '-='+this.imgWidth*len
        },function(){
            _this.index +=len
            if(_this.index ===_this.imgCount){
                _this.$imgCt.css("left",-_this.imgWidth) 
                _this.index = 0
            }  
            _this.bulletSet()  
            _this.isAnimate=false
        })
    },
    bulletSet: function(){
        this.$bullets.eq(this.index).addClass('active')
                      .siblings().removeClass('active')
    },
    autoPlay: function(){
        var _this=this
        this.timer=setInterval(function(){
            _this.showNext(1)
        },1000)
    },
    stopAuto: function(){
        clearInterval(this.timer)
    }
}
new Carousel($('.carousel'))