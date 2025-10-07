
// aos event
const boxes = $('.scroll');

const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const $el = $(entry.target)
    if (entry.isIntersecting) {
      $el.addClass('on');
    } else {
      $el.removeClass('on');
    }
  });
}, {
  threshold: 0.4
});

boxes.each(function () {
  io.observe(this)
})

// wel_items 이미지 자동 채우기
$('.wel_items li').each(function (index) {
  const imgNumber = (index + 1).toString().padStart(2, '0');
  const $img = $(this).find('img');

  $img.attr('src', `/img/ico/ico_welfare${imgNumber}.svg`)
})

//탭메뉴
const panels = [$('.high'), $('.edu'), $('.welfare')]
$('.talent_tap li').on('click',function(e){
  e.preventDefault()
  //탭메뉴 변환
  $('.talent_tap li').removeClass('on')
  $(this).addClass('on')

  //컨텐츠(섹션) 변환
  const n = $(this).index()
  $('.high').removeClass('on')
  $('.edu').removeClass('on')
  $('.welfare').removeClass('on')
  panels[n].addClass('on')
})