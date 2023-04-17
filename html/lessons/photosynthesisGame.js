//Make the DIV element draggable:
dragElement(document.getElementById("item1"));
dragElement(document.getElementById("item2"));
dragElement(document.getElementById("item3"));
dragElement(document.getElementById("item4"));

function dragElement(elmnt) {
    //original positioning of element
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    var ogpos3 = elmnt.style.left;
    var ogpos4 = elmnt.style.right;

    //get each slot
    slot1 = document.getElementById("slot1");
    slot2 = document.getElementById("slot2");
    slot3 = document.getElementById("slot3");
    slot4 = document.getElementById("slot4");

    //test whether within slot
    var slot1within = false;
    var slot2within = false;
    var slot3within = false;
    var slot4within = false;
    
    /* move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";

        //if element in slot 1
        if(elmnt.offsetTop < slot1.offsetTop + 15 && elmnt.offsetTop > slot1.offsetTop - 15) {
            if(elmnt.offsetLeft < slot1.offsetLeft + 15 && elmnt.offsetLeft > slot1.offsetLeft - 15) {
                slot1.classList.add("highlight-border");
                slot1within = true;
            }
            else {
                slot1.classList.remove("highlight-border");
                slot1within = false;
            }
        }
        else {
            slot1.classList.remove("highlight-border");
            slot1within = false;
        }

        //if element in slot 2
        if(elmnt.offsetTop < slot2.offsetTop + 15 && elmnt.offsetTop > slot2.offsetTop - 15) {
            if(elmnt.offsetLeft < slot2.offsetLeft + 15 && elmnt.offsetLeft > slot2.offsetLeft - 15) {
                slot2.classList.add("highlight-border");
                slot2within = true;
            }
            else {
                slot2.classList.remove("highlight-border");
                slot2within = false;
            }
        }
        else {
            slot2.classList.remove("highlight-border");
            slot2within = false;
        }

        //if element in slot 3
        if(elmnt.offsetTop < slot3.offsetTop + 15 && elmnt.offsetTop > slot3.offsetTop - 15) {
            if(elmnt.offsetLeft < slot3.offsetLeft + 15 && elmnt.offsetLeft > slot3.offsetLeft - 15) {
                slot3.classList.add("highlight-border");
                slot3within = true;
            }
            else {
                slot3.classList.remove("highlight-border");
                slot3within = false;
            }
        }
        else {
            slot3.classList.remove("highlight-border");
            slot3within = false;
        }

        //if element in slot 4
        if(elmnt.offsetTop < slot4.offsetTop + 15 && elmnt.offsetTop > slot4.offsetTop - 15) {
            if(elmnt.offsetLeft < slot4.offsetLeft + 15 && elmnt.offsetLeft > slot4.offsetLeft - 15) {
                slot4.classList.add("highlight-border");
                slot4within = true;
            }
            else {
                slot4.classList.remove("highlight-border");
                slot4within = false;
            }
        }
        else {
            slot4.classList.remove("highlight-border");
            slot4within = false;
        }
    }

    function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;

        if (slot1within === true) { 
            //if within slot 1
            elmnt.style.top = slot1.offsetTop + 'px';
            elmnt.style.left = slot1.offsetLeft + 'px';
            slot1.classList.remove("highlight-border");
        }
        else if (slot2within === true) {
            //if within slot 2
            elmnt.style.top = slot2.offsetTop + 'px';
            elmnt.style.left = slot2.offsetLeft + 'px';
            slot2.classList.remove("highlight-border");
        }
        else if (slot3within === true) {
            //if within slot 3
            elmnt.style.top = slot3.offsetTop + 'px';
            elmnt.style.left = slot3.offsetLeft + 'px';
            slot3.classList.remove("highlight-border");
        }
        else if (slot4within === true) {
            //if within slot 4
            elmnt.style.top = slot4.offsetTop + 'px';
            elmnt.style.left = slot4.offsetLeft + 'px';
            slot4.classList.remove("highlight-border");
        }
        else {
            //if not in any slot, return to original position
            elmnt.style.top = ogpos3;
            elmnt.style.left = ogpos4;
        }
    }
}