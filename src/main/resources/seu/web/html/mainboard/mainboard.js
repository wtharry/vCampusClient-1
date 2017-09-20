// 加载首页
$(document).ready(function () {
    $('#main-board').load('welcome/welcome.html');
    if (getUrlParam('role') === '1' || getUrlParam('role') === '2') {
        $('#userManageLink').hide();
    }
});

// 顶部导航
$('#setting').click(function () {
    removeSideActive();
    $('#main-board').load('setting/setting.html');
});

$('#about').click(function () {
    removeSideActive();
    $('#main-board').load('about/about.html');
});

$('#logout').click(function () {
    loginController.logout();
    $(location).attr('href', '../login/login.html');
});

// 商标
$('#vCampusClientBrand').click(function () {
    removeSideActive();
    $('#welcome').addClass('active');
    $('#main-board').load('welcome/welcome.html');
});

// 侧边栏
$('#welcome').click(function () {
    removeSideActive();
    $('#welcome').addClass('active');
    $('#main-board').load('welcome/welcome.html');
});

$('#userManageLink').click(function () {
    removeSideActive();
    $('#userManageLink').addClass('active');
    $('#main-board').load('usermanage/userManage.html');
});

$('#studentManageLink').click(function () {
    removeSideActive();
    $('#studentManageLink').addClass('active');
    $('#main-board').load('studentrollmanage/studentRollManage.html');
});

$('#courseLink').click(function () {
    removeSideActive();
    $('#courseLink').addClass('active');
    $('#main-board').load('course/course.html');
});

$('#libraryLink').click(function () {
    removeSideActive();
    $('#libraryLink').addClass('active');
    $('#main-board').load('library/library.html');
});

$('#shopLink').click(function () {
    removeSideActive();
    $('#shopLink').addClass('active');
    $('#main-board').load('shop/shop.html');
});

$('#dormitoryLink').click(function () {
    removeSideActive();
    $('#dormitoryLink').addClass('active');
    $('#main-board').load('dormitory/dormitory.html');
});

// 返回顶部
$(window).scroll(function(){
    if ($(window).scrollTop()>0){
        $("#returnTop").fadeIn();
    }
    else
    {
        $("#returnTop").fadeOut();
    }
});
$("#returnTop").click(function(){
    $('body,html').animate({scrollTop:0},200);
    return false;
});
