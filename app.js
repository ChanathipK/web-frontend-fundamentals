function copyCode(blockId) {
    let code = document.getElementById(blockId).innerHTML;
    let actualCode = "";
    let i = 0;
    while (code.includes("\n")) {
        code = code.replace("\n", "");
    }
    while (i < code.length) {
        if (code[i] == "&") {
            if (
                i < (code.length - 5) && 
                code[i+1] == "n" && code[i+2] == "b" && 
                code[i+3] == "s" && code[i+4] == "p" &&
                code[i+5] == ";"
            ) {
                actualCode += " ";
                i += 5;
            } else if (
                i < (code.length - 3) && 
                code[i+1] == "l" &&
                code[i+2] == "t" &&
                code[i+3] == ";"
            ) {
                actualCode += "<";
                i += 3;
            } else if (
                i < (code.length - 3) &&
                code[i+1] == "g" &&
                code[i+2] == "t" &&
                code[i+3] == ";"
            ) {
                actualCode += ">";
                i += 3;
            }
        } else if (code[i] == "<" ) {
            if (code[i] + code[i+1] + code[i+2] + code[i+3] == "<br>") {
                actualCode += "\n";
                i += 3;
            } else {
                while (code[i] != ">") {
                    i++
                }
            }
        } else if (code[i] != " ") {
            actualCode += code[i];
        }
        i++;
    }
    navigator.clipboard.writeText(actualCode);
}

function calFilterDivSize() {
    let nav = document.getElementById("nav");
    let headingDiv = document.getElementById("page-heading-div");
    let fP = document.getElementById("main-first-p");
    let sP = document.getElementById("main-second-p");
    let tP = document.getElementById("main-third-p");
    let fH = document.getElementById("main-first-hr");
    let fH2 = document.getElementById("main-first-h2");
    let divHeight = (
        nav.offsetHeight +
        headingDiv.offsetHeight +
        fP.offsetHeight +
        sP.offsetHeight +
        tP.offsetHeight +
        fH.offsetHeight +
        fH2.offsetHeight
    );
    document.getElementById("filter-div").style.height = (divHeight + 104) + "px";
}

window.onload = calFilterDivSize;
window.onresize = calFilterDivSize;