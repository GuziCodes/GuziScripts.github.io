        document.addEventListener("mousemove", function(e) {
            let trail = document.createElement("div");
            trail.classList.add("trail");
            document.body.appendChild(trail);
            trail.style.left = `${e.clientX}px`;
            trail.style.top = `${e.clientY}px`;
            
            setTimeout(() => {
                trail.style.opacity = "0"; // Starts fading out
                setTimeout(() => trail.remove(), 100); // Removes element after fade out
            }, 50);
        });

        document.addEventListener("click", function(e) {
            for (let i = 0; i < 35; i++) { // Generates 35 particles on click
                let particle = document.createElement("div");
                particle.classList.add("particle");
                document.body.appendChild(particle);
                particle.style.left = `${e.clientX}px`;
                particle.style.top = `${e.clientY}px`;
                
                let dx = (Math.random() - 0.5) * 100; // Random x direction
                let dy = (Math.random() - 0.5) * 100; // Random y direction
                particle.style.setProperty('--dx', `${dx}px`);
                particle.style.setProperty('--dy', `${dy}px`);
                
                setTimeout(() => particle.remove(), 10000); // Removes particles after animation
            }
        });