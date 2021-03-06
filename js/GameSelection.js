


function Cross(type) {
    Title(type);
    RemoveScroll();
    RemoveScroll();
    var parent_node = AddParentNode();

    for (var i = 0; i < 50; ++i) {
        HeaderData("종목","나라","리그");
        WinDrawLoseBet();
        HandiCap();
        UnderOver();
    }
}

function WindrawLose(type) {
    Title(type);
    RemoveScroll();
    var parent_node = AddParentNode();

    for (var i = 0; i < 50; ++i) {
        HeaderData("종목","나라","리그");
        WinDrawLoseBet();
    }
}

function HandiOver(type) {
    Title(type);
    RemoveScroll();
    var parent_node = AddParentNode();

    for (var i = 0; i < 50; ++i) {
        HeaderData("종목","나라","리그");
        HandiCap();
        UnderOver();
    }
}


function Special(type) {
    Title(type);
    RemoveScroll();
}

function Live(type) {
    Title(type);
    RemoveScroll();
}


function AddParentNode()
{
    var parent_node = document.createElement('div');
    parent_node.id = "parent_node";
    document.getElementById('scroll_Field').appendChild(parent_node);
    return parent_node;
}

function OpenGameSelection()
{
    document.getElementById('club_name').innerText = "스페셜테스트쿨럽";
    Title('Cross');
}


function HeaderData(sports,county,league)
{
    var div = document.createElement('div');
    var span_sports = document.createElement('span');
    span_sports.innerText = "종목";
    var span_county = document.createElement('span');
    span_county.innerText = "나라";
    var span_league = document.createElement('span');
    span_league.innerText = "리그";
    div.appendChild(span_sports);
    div.appendChild(span_county);
    div.appendChild(span_league);
    parent_node.appendChild(div);
}

function WinDrawLoseBet()
{
    var div = document.createElement('div');
    div.appendChild(ADdTeamInfo("홈팀"));
    div.appendChild(Rate("win","승"));
    div.appendChild(Rate("draw","무"));
    div.appendChild(Rate("lose","패"));
    div.appendChild(ADdTeamInfo("원정팀"));
    parent_node.appendChild(div);
}


function HandiCap()
{
    var div = document.createElement('div');
    div.appendChild(ADdTeamInfo("홈팀"));
    div.appendChild(Rate("Handi_win","핸디 승"));
    div.appendChild(Rate("special_value","기준점"));
    div.appendChild(Rate("Handi_lose","핸디 패"));
    div.appendChild(ADdTeamInfo("원정팀"));
    parent_node.appendChild(div);
}

function UnderOver()
{
    var div = document.createElement('div');
    div.appendChild(ADdTeamInfo("홈팀"));
    div.appendChild(Rate("under","언더"));
    div.appendChild(Rate("special_value","기준점"));
    div.appendChild(Rate("over","오버"));
    div.appendChild(ADdTeamInfo("원정팀"));
    parent_node.appendChild(div);
}


function Rate(id,key)
{
    var rate = document.createElement('span');
    rate.id = id;
    rate.innerText = key;
    return rate;
}

function ADdTeamInfo(key)
{
    var team = document.createElement('span');
    team.id = "team_name";
    team.innerText = key;
    return team;
}



function RemoveScroll()
{
    var parent_node = document.getElementById('parent_node');
    if (parent_node != null)
        parent_node.remove();
}

function Title(type) {
    var title;
    switch (type) {
        case "Cross":
            title = "크로스";
            break;
        case "WinDrawLose":
                title = "승무패";
            break;
        case "HandiOver":
                title = "핸디캡/언더오버";
            break;
        case "Special":
                title = "스페셜";
            break;
        case "Live":
                title = "라이브";
            break;

    }

    document.getElementById('Title').innerText = title;

}
