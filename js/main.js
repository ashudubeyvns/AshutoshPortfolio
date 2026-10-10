const autoIntroVideo = document.getElementById('autoIntroVideo');

        const introOverlay = document.getElementById('intro-overlay');

        const audioToggleBtn = document.getElementById('audioToggleBtn');

        const audioIcon = document.getElementById('audioIcon');

        const audioText = document.getElementById('audioText');

        function toggleAudio() {

            if (autoIntroVideo) {

                if (autoIntroVideo.muted) {

                    autoIntroVideo.muted = false;

                    audioIcon.className = "fas fa-volume-up";

                    audioText.innerText = "MUTE AUDIO";

                } else {

                    autoIntroVideo.muted = true;

                    audioIcon.className = "fas fa-volume-mute";

                    audioText.innerText = "UNMUTE AUDIO";

                }

            }

        }

        function dismissIntro() {

            if (autoIntroVideo) {

                autoIntroVideo.pause();

            }

            if (introOverlay) {

                introOverlay.style.opacity = '0';

                setTimeout(() => {

                    introOverlay.style.display = 'none';

                }, 1000);

            }

        }

        if (autoIntroVideo) {
            autoIntroVideo.muted = false;
            autoIntroVideo.playsInline = true;
            autoIntroVideo.addEventListener('error', () => dismissIntro(), { once: true });
            const startIntro = () => {
                const playPromise = autoIntroVideo.play();
                if (playPromise && typeof playPromise.catch === 'function') {
                    playPromise.catch(() => {
                        // Autoplay can be blocked by browser policy; leave the intro overlay skippable.
                        autoIntroVideo.controls = true;
                        // Browsers may block audible autoplay; let the visitor start playback with sound.
                        const audioText = document.getElementById('audioText');
                        if (audioText) audioText.innerText = 'PLAY WITH SOUND';
                    });
                }
            };
            if (autoIntroVideo.readyState >= 2) startIntro();
            else autoIntroVideo.addEventListener('canplay', startIntro, { once: true });
            autoIntroVideo.addEventListener('ended', dismissIntro);
        } else {
            dismissIntro();
        }

        window.toggleAudio = toggleAudio;
        window.dismissIntro = dismissIntro;
        window.downloadResume = downloadResume;

        window.addEventListener('scroll', () => {

            const timelineSect = document.getElementById('experience');

            const timelineLine = document.getElementById('timeline-progress');

            if (timelineSect && timelineLine) {

                const rect = timelineSect.getBoundingClientRect();

                const viewHeight = window.innerHeight;

                let progress = 0;

                if(rect.top < viewHeight / 2) {

                    const totalHeight = rect.height;

                    const scrolled = (viewHeight / 2) - rect.top;

                    progress = Math.min(Math.max((scrolled / totalHeight) * 100, 0), 100);

                }

                timelineLine.style.height = `${progress}%`;

            }

        });

        function downloadResume() {
            const link = document.createElement('a');
            link.href = 'assets/documents/Ashutosh_Dubey_Resume.pdf';
            link.download = 'Ashutosh_Dubey_Resume.pdf';
            link.click();
        }


// Accessibility fallback: allow visitors to dismiss the intro with Escape.
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && typeof dismissIntro === 'function') dismissIntro();
});

