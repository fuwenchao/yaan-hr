/*复选框选中，自选框跟随其选中状态*/
function checkboxClick(node) {
    $("input[name='sub_checkbox']").prop("checked", node.checked);
}

/*获取选中的节点*/
function checkboxAll() {
    let ids = [];
    $("input[name='sub_checkbox']:checked").each(function (node) {
        ids.push($(node).attr("id"));
    });
    return ids;
}