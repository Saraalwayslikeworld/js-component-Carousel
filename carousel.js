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
    },
    bind: function(){

    }
}
new Carousel($('.carousel'))