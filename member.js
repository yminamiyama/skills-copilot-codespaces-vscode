function skillsMember(){
    var skills = ["HTML", "CSS", "JS", "PHP", "MySQL"];
    var member = ["Nguyễn Văn A", "Nguyễn Văn B", "Nguyễn Văn C", "Nguyễn Văn D", "Nguyễn Văn E"];
    var result = "";
    for(var i = 0; i < member.length; i++){
        result += member[i] + ": ";
        for(var j = 0; j < skills.length; j++){
            result += skills[j] + ", ";
        }
        result += "<br>";
    }
    document.getElementById("result").innerHTML = result;
}