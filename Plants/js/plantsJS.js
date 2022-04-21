window.onload = function() {

    //JS特效一
    var border1 = document.getElementById("border1");
    var border2 = document.getElementById("border2");
    var border3 = document.getElementById("border3");
    var border4 = document.getElementById("border4");
    var border5 = document.getElementById("border5");

    function sibling(elem) {
        var r = [];
        var n = elem.parentNode.firstChild;
        for (; n; n = n.nextSibling) {
            if (n.nodeType === 1 && n !== elem) {
                r.push(n);
            }
        }
        return r;
    }

    border1.onclick = function() {
        this.style.width = "900px";
        for (var i = 0; i < sibling(this).length; i++) {
            sibling(this)[i].style.width = "616px";
        }
    }
    border2.onclick = function() {
        this.style.width = "900px";
        for (var i = 0; i < sibling(this).length; i++) {
            sibling(this)[i].style.width = "616px";
        }
    }
    border3.onclick = function() {
        this.style.width = "900px";
        for (var i = 0; i < sibling(this).length; i++) {
            sibling(this)[i].style.width = "616px";
        }
    }
    border4.onclick = function() {
        this.style.width = "900px";
        for (var i = 0; i < sibling(this).length; i++) {
            sibling(this)[i].style.width = "616px";
        }
    }
    border5.onclick = function() {
        this.style.width = "900px";
        for (var i = 0; i < sibling(this).length; i++) {
            sibling(this)[i].style.width = "616px";
        }
    }


    //JS特效二
    document.documentElement.onclick = function() {
        var e = e || window.event;      
        var elem = e.target;      
        var targetArea = document.getElementById('aside_topimg');      
        if (targetArea.contains(elem)) {
            targetArea.style.transform = "scale(1.1)";      
        } else {
            targetArea.style.transform = "scale(1)";      
        }
    }

}