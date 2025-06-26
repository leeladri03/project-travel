
    function leeLadri() {
      
        // document.getElementById("name").style.fontSize = "100px";
        // document.getElementById("name").style.fontWeight = "bold";
        // document.getElementById("name").style.textDecoration = "underline";
        // document.getElementById("name").style.textTransform = "uppercase";
    
        
        const d= document.getElementById("body");
        let a= document.getElementById("name");
        const b = document.getElementById("image");
        let c = document.getElementById("container");
        a.style.fontSize = "50px";
        a.style.fontWeight = "bold";
        a.style.textDecoration = "underline";
        a.style.textTransform = "uppercase";
        a.style.fontFamily = "Arial, sans-serif";
        a.style.textShadow = "2px 2px 4px rgba(0, 0, 0, 0.5)";
        a.style.textAlign = "center";
        a.style.color = "darkblue";
        

        d.style.backgroundColor = "lightblue";


        b.style.width = "200px";
        b.style.height = "200px";
        b.style.display = "block";
        b.style.animation = "rotate360 2s linear infinite";


        c.style.display = "flex";
        c.style.justifyContent = "center";
        c.style.alignItems = "center";
        c.style.height = "500px";
        c.style.width = "500px";
        c.style.border = "20px solid black";
        c.style.borderRadius = "50%";
        c.style.backgroundColor = "red";
        c.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
        c.style.margin = "20px auto";


          b.addEventListener("click", () => {
      b.classList.toggle("rotate");
    });
        
            
    }
    
    
