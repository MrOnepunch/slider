var log = function() {
    console.log.apply(console, arguments)
}

//播放实现
var play = function(offset) {
        var activeIndex = $('.chh-slide-images').data('active')
        var numberOfImgs = $('.chh-slide-images').data('imgs')
        var i = (activeIndex + numberOfImgs + offset) % numberOfImgs

        $('.chh-slide-images').data('active', i)
        $('.active').fadeOut()
        $('.active').removeClass('active')

        var active = $($('.chh-slide-img')[i])
        active.addClass('active')
        active.fadeIn()

        $('.chh-slide-i-active').removeClass('chh-slide-i-active')
        var activeIndicator = $($('.chh-slide-i')[i])
        activeIndicator.addClass('chh-slide-i-active')
    }
    //点上一个
var playPrev = function() {
        play(-1)
    }
    //点下一个
var playNext = function() {
        play(1)
    }
    //设置播放

$('.chh-slide-button').on('click', function(event) {
    var button = $(event.target)
    if (button.hasClass('chh-slide-button-up')) {
        playPrev()
    } else {
        playNext()
    }
})

//设置小红圈的事件
$('.chh-slide-i').on('click', function(e) {
    var self = $(e.target)
    $('.chh-slide-i-active').removeClass('chh-slide-i-active')
    self.addClass('chh-slide-i-active')
        //得到小红圈的下标
    var redIndex = self.index()
        //令小红圈的下标和图标下标同步相等
    $('.chh-slide-images').data('active', redIndex)
        //通过红圈id得到图片的选择器
    var selectorID = '#id-img-' + String(redIndex)
        //播放图片
    $('.active').fadeOut()
    $('.chh-slide-img').removeClass('active')
    $(selectorID).addClass('active')
    $('.active').fadeIn()
})
