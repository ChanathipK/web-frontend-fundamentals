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