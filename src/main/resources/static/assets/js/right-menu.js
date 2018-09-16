function RightMenu(menu) {
    this.menu = menu;
    this.ele = "";
    this.eleLoc = {};
    this.mouseLocation = function (e) {
        let event = e || window.event;
        return {'left': event.clientX, 'top': event.clientY};
    };
    this.elemLocation = function (obj) {
        let width = obj.width();
        let height = obj.height();
        let left = obj.offset().left;
        let top = obj.offset().top;
        return {
            'top': top,
            'left': left,
            'width': width,
            'height': height
        }
    };
    this.inRange = function (range, check) {
        return (check.left >= range.left && check.left <= (range.left + range.width))
            && (check.top >= range.top && check.top <= (range.top + range.height));
    };
    this.moveElem = function (id, location) {
        $("#" + id).offset(location);
    };
    this.start = function () {
        let _this = this;
        document.onclick = function () {
            $("#" + menu).hide();
        };
        document.oncontextmenu = function (e) {
            let mouLoc = _this.mouseLocation(e);
            if(JSON.stringify(_this.eleLoc) !== "{}"){
                let range = _this.inRange(_this.eleLoc, mouLoc);
                if(range){
                    $("#" + menu).show();
                    $("#" + menu).attr("data", _this.ele);
                    _this.moveElem(menu, mouLoc);
                    return false;
                }
            }
            $("#" + menu).hide();
            return true;
        };
    };
}