$(function () {
    document.onclick = function () {
        $("#treeRgihtMenu").offset({'left': 0, 'top': 0}).hide();
    };

    $("#treeview")[0].oncontextmenu = function (e) {
        let data = $("#treeRgihtMenu").attr("data");
        if (data == null || data === undefined || data === "") {
            return true;
        }
        setNodeLocation($("#treeRgihtMenu"), getMouseLocation(e));
        return false;
    };

    function getMouseLocation(e) {
        return {'left': e.clientX, 'top': e.clientY};
    }

    function setNodeLocation(node, location) {
        $(node).offset(location).show();
    }

});