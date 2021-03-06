$(function() {
    $('#treeview').treeview({
        data: getOrgTree(),
        levels: 5,
        multiSelect: false,
        onNodeSelected: function(env, data) {
            nodeSelected(env, data);
        }
    });
    // 默认加载搜索界面
    searchorgempInfo();
});


// 机构树形菜单
function getOrgTree() {
    return [{
        text: " 雅安农商行",
        id: "yafram",
        tags: ['available'],
        nodes: [{
                text: "雅安办事处领导班子",
                id: '0201080093',
                state: { expanded: false },
                nodes: [
                    { text: "张XX", id: "0201080099", icon: "glyphicon glyphicon-user" },
                    { text: "李XX", id: "0201080100", icon: "glyphicon glyphicon-user" }
                ]
            },
            {
                text: "雅安办事处业务综合科",
                id: '0201080094',
                 state: { expanded: false },
                nodes: [
                    { text: "张XX", id: "0201080099", icon: "glyphicon glyphicon-user" },
                    { text: "李XX", id: "0201080100", icon: "glyphicon glyphicon-user" }
                ]
            },
            {
                text: "雅安办事处稽核保卫科",
                id: '0201080095',
                 state: { expanded: false },
                nodes: [
                    { text: "张XX", id: "0201080099", icon: "glyphicon glyphicon-user" },
                    { text: "李XX", id: "0201080100", icon: "glyphicon glyphicon-user" }
                ]
            },
            {
                text: "雅安办事处业务财务科",
                id: '0201080096',
                 state: { expanded: false },
                nodes: [
                    { text: "张XX", id: "0201080099", icon: "glyphicon glyphicon-user" },
                    { text: "李XX", id: "0201080100", icon: "glyphicon glyphicon-user" }
                ]
            },
            {
                text: "雨城支行",
                id: '0201080098',
                state: { expanded: false },
                nodes: [
                    { text: "雨城支行领导班子", id: "0201080099" },
                    { text: "雨城支行办公室", id: "0201080100" },
                    { text: "雨城支行贷管理部", id: "0201080101" },
                    { text: "雨城支行财务计划部", id: "0201080102" },
                    { text: "雨城支行保卫部", id: "0201080103" },
                    { text: "雨城支行稽核监察部", id: "0201080104" },
                    { text: "雨城支行中间业务部", id: "0201080105" },
                    { text: "雨城支行企业客户中心", id: "0201080106" },
                    { text: "雨城支行个人客户中心", id: "0201080107" },
                    { text: "雨城支行营业部", id: "0201080108" },
                    { text: "雨城支行中里分理处", id: "0201080109" },
                    { text: "雨城支行上里分理处", id: "0201080110" },
                    { text: "雨城支行多营信用社", id: "0201080111" },
                    { text: "雨城支行碧峰峡分理处", id: "0201080112" },
                    { text: "雨城支行多营分理处", id: "0201080115" },
                    { text: "雨城支行河北分理处", id: "0201080116" },
                    { text: "雨城支行孔坪分理处", id: "0201080118" },
                    { text: "雨城支行沙坪分理处", id: "0201080119" },
                    { text: "雨城支行周河分理处", id: "0201080120" },
                    { text: "雨城支行严桥分理处", id: "0201080121" }
                ]
            },
            {
                text: "名山支行",
                id: '0201080132',
                state: { expanded: false },
                nodes: [
                    { text: "名山支行领导", id: "0201080133" },
                    { text: "名山支行保障部", id: "0201080133" },
                    { text: "名山支行财务科", id: "0201080133" },
                    { text: "名山支行新店分理处", id: "0201080133" },
                    { text: "名山支行万古分理处", id: "0201080133" },
                    { text: "名山支行中锋分理处", id: "0201080133" },
                    { text: "名山支行红星分理处", id: "0201080133" }
                ]
            }
        ]
    }];
}


function getPostTree() {
    return [{
        text: "雅安农商行",
        id: "yafram",
        tags: ['available'],
        nodes: [{
                text: "领导班子",
                id: '00001',
                nodes: [{
                        text: '董事长',
                        id: '00005',
                        nodes: [
                            { text: "张XX", id: "0201080099", icon: "glyphicon glyphicon-user" }
                        ]
                    },
                    {
                        text: ' 行长',
                        id: '00006',
                        nodes: [
                            { text: "张XX", id: "0201080099", icon: "glyphicon glyphicon-user" },
                            { text: "李XX", id: "0201080100", icon: "glyphicon glyphicon-user" }
                        ]
                    },
                    {
                        text: ' 副行长',
                        id: '00006',
                        nodes: [
                            { text: "张XX", id: "0201080099", icon: "glyphicon glyphicon-user" },
                            { text: "李XX", id: "0201080100", icon: "glyphicon glyphicon-user" }
                        ]
                    }
                ]

            },
            {
                text: " 办公室",
                id: '00004',
                state: { expanded: false },
                nodes: [
                    { text: ' 主任', id: '00005' },
                    { text: ' 副主任', id: '00006' },
                    { text: ' 机要秘书', id: '00006' },
                    { text: ' 综合文秘', id: '00006' },
                    { text: ' 档案管理', id: '00006' }
                ]

            },
            {
                text: " 会计财务部",
                id: '00004',
                state: { expanded: false },
                nodes: [
                    { text: ' 总经理', id: '00005' },
                    { text: ' 副总经理', id: '00006' },
                    { text: ' 预算与财务管理岗', id: '00006' },
                    { text: ' 资产负债管理岗', id: '00006' },
                    { text: ' 费用管理岗', id: '00006' }
                ]

            },
            {
                text: " 业务发展部",
                id: '00004',
                state: { expanded: false },
                nodes: [
                    { text: ' 总经理', id: '00005' },
                    { text: ' 副总经理', id: '00006' },
                    { text: ' 团队管理岗', id: '00006' },
                    { text: ' 营销推进岗', id: '00006' },
                    { text: ' 综合事务岗', id: '00006' }
                ]

            },
            {
                text: " 人力资源部",
                id: '00004',
                state: { expanded: false },
                nodes: [
                    { text: ' 总经理', id: '00005' },
                    { text: ' 副总经理', id: '00006' },
                    { text: ' 员工关系管理岗', id: '00006' },
                    { text: ' 薪酬管理岗', id: '00006' },
                    { text: ' 绩效管理岗', id: '00006' }
                ]

            }
        ]
    }];
}

function changeTreeInfo(name) {
    let dataArr;
    if ("post" === name) {
        dataArr = getPostTree();
    } else if ("mech" === name) {
        dataArr = getOrgTree();
    }
    $('#treeview').treeview({
        data: dataArr,
        onNodeSelected: function(env, data) {
            nodeSelected(env, data);
        }
    });
}

function nodeSelected(env, data) {
    // 是用户
    if (checkEmployee(data)) {
        employeeInfo(data.text);
    } else {
        if (data.id === "yafram") {
            searchInfo(data);
        } else {
            orgInfo(data.id);
        }
    }
    // 右键菜单
    $("#treeRgihtMenu").attr("data", data.text);
    /*rightMenu.eleLoc = rightMenu.elemLocation($("li[data-nodeid='" + data.nodeId + "']"));
    rightMenu.ele = data.text;*/
}

function searchInfo(data) {
    $("#searchorgemp").show();
    $("#emp_pageinfo").hide();
    $("#org_pageinfo").hide();
}

function inoutinfo(data) {
    $("#emp_inout_info").show();
}

function employeeInfo(user) {
    $("#org_pageinfo").hide();
    $("#searchorgemp").hide();
    $("#emp_pageinfo").load("assets/html/emp_baseinfo.html");
    $("#emp_pageinfo").attr("user", user);
    $("#emp_pageinfo").show();
}

function orgInfo(code) {
    $("#org_pageinfo").load("assets/html/orgemp_info.html");
    $("#org_pageinfo").attr("code", code);
    $("#org_pageinfo").show();
    $("#emp_pageinfo").hide();
    $("#searchorgemp").hide();
}

function searchorgempInfo() {
    $("#searchorgemp").load("assets/html/searchorgemp_info.html");
}

function checkEmployee(data) {
    let icon = data.icon;
    if (undefined === icon) {
        return false;
    }
    return icon.indexOf("user") !== -1;

}