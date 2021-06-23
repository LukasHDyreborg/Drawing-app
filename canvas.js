window.addEventListener('load',  () => {
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");

    canvas.height = 600;
    canvas.width = 800;

    

    canvas.addEventListener('mousedown', startPosition);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', finishedPosition);

    ctx.lineWidth = 5;
    
    let painting = false;

    function startPosition() {
        painting = true;
        draw(e);
    }

    function finishedPosition() {
        painting = false;

        ctx.beginPath();
    }

    function draw(e) {
        if(!painting) return;
        ctx.lineWidth = 10;
        ctx.lineCap = "round";

        ctx.lineTo(e.clientX-560, e.clientY-170);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(e.clientX-560, e.clientY-170);
    }
});