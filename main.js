onload = () =>{
        document.body.classList.remove("container");

        const audio = document.getElementById("bg-audio");
        if (!audio) {
                return;
        }

        // Try unmuted autoplay first; if blocked, unlock on interaction.
        const unlockAudio = () => {
                audio.muted = false;
                audio.play().catch(() => {
                        // Ignore play errors; user can interact again.
                });
                window.removeEventListener("click", unlockAudio);
                window.removeEventListener("touchstart", unlockAudio);
                window.removeEventListener("keydown", unlockAudio);
        };

        audio.muted = false;
        audio.play().catch(() => {
                // Autoplay may be blocked until user interacts.
        });

        window.addEventListener("click", unlockAudio, { once: true });
        window.addEventListener("touchstart", unlockAudio, { once: true });
        window.addEventListener("keydown", unlockAudio, { once: true });
};
