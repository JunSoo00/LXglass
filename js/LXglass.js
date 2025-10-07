$(function () {
    const $navItems = $('.nav li');
    const $gnbArea = $('.gnbArea');
    const $gnbs = $('.gnbArea .gnb');
    let hoverTimeout;

    // gnb 초기화
    $gnbs.hide();

    // nav에 마우스 올리면 gnb 표시
    $navItems.on('mouseenter', function () {
        clearTimeout(hoverTimeout); // 사라지는 타이머 제거

        const index = $(this).index();

        $gnbs.hide().eq(index).show();     // 해당 gnb만 표시
        $gnbArea.addClass('active');       // gnbArea 내려오기
    });

    // nav와 gnbArea에서 벗어났을 때 → 일정 시간 후 숨기기
    $('.nav, .gnbArea').on('mouseleave', function () {
        hoverTimeout = setTimeout(function () {
            $gnbArea.removeClass('active');
            $gnbs.hide();
        }, 200); // 0.2초 정도 여유 줘서 사용자가 천천히 내려가도 유지
    });

    // gnbArea 위에 있을 때 유지되도록
    $gnbArea.on('mouseenter', function () {
        clearTimeout(hoverTimeout); // 다시 올라오지 않도록 타이머 취소
    });

    //검색창 클릭
    $('.search').on('click', function (e) {
        e.preventDefault();
        $('.search').toggleClass('active') // 버튼 아이콘 변경
        $('.searchArea').toggleClass('active'); // 열고 닫기 토글
        $('.gnbArea').removeClass('active');    // gnb가 열려있다면 닫기
        $('.gnbArea .gnb').hide();
    });

    // 검색 영역 외부 클릭 시 닫힘 기능
    $(document).on('click', function (e) {
        if (!$(e.target).closest('.searchArea, .search').length) {
            $('.searchArea').removeClass('active');
        }
    });

    // family site 클릭시 site 보이기
    $('.btn_family').on('click', function(e){
        e.preventDefault();
        $('.lab').toggleClass('on')
    })

    // 모바일 환경에서 menu 클릭 시 메뉴 나오기
    $('.btn_menu').on('click',function(e){
        e.preventDefault();
        $('.top_cont').toggleClass('on')
    })

    //모바일에서 nav 열기
    $('.nav > li').on('click',function(e){
        e.preventDefault();
        $('.nav > li ul').removeClass('on')
        $(this).children('ul').toggleClass('on')
    })
            
});
