$(function(){
    $("#cadre_info_list>tbody>tr").dblclick(function(){
        cadreInfoView($(this));
    });
    $("#cadre_info_list>tbody .cadre_view").click(function(){
        cadreInfoView($(this).parent().parent());
    });
});

/**
 * 查看干部信息
 */
function cadreInfoView(node){
    $("#cadre_container").attr("caname", $(node).find("td:nth-child(2)").text());
    $("#cadre_container").load("assets/html/cadre_personal_info.html");
    let link = "<a href='cadre_info.html'>干部管理</a>&nbsp;/&nbsp;<a>干部信息</a>";
    setPageNav(link);
}