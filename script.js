var utter, timer;

        //stoppt die Sprachausgabe
        function stopReading() {
            speechSynthesis.cancel();
        }

        //
        function readText() {
            var textToRead = getAllTextOnPage();

            speak_text(textToRead)
        }

        //holt sich den ganzen Text von der Seite
        function getAllTextOnPage() {
            var allText = "";
            var textElements = document.querySelectorAll("div p, h1, h2, h3, h4, h5, h6, figcaption, a, address");
            
            textElements.forEach(function(element) {
                allText += element.textContent + " ";
            });

            allText = allText.trim()

            //Die Sprach API kann nicht unbegrenzt Zeichen angeben, daher reduzieren wir hier die Ausgabe auf 500 Wörter
            return allText.split(/\s+/).slice(0, 500).join(" ");
        }

        //liest den übergebenen Text vor
        function speak_text(text) {
            speechSynthesis.cancel();
            
            utter = new SpeechSynthesisUtterance(text);
            utter.lang = 'de-DE';
            
            //nach Beendigung der Sprachausgabe wird der Time gecleared
            utter.addEventListener('end', function() {
                    clearTimeout(timer);
            });

            speechSynthesis.speak(utter);
            
            //Es wird ein timer gestartet, der alle 10 sekunden die Sprachausgabe stoppt und wieder startet
            timer = setTimeout(function pauseResumeTimer() {
                    speechSynthesis.pause();
                   
                   speechSynthesis.resume();
                
                timer = setTimeout(pauseResumeTimer, 10000)
            }, 10000);
        }

    
        // Funktion, um die Schriftgröße zu erhöhen oder zu verringern
        function adjustFontSize(action) {
            var currentSize = window.getComputedStyle(document.documentElement, null).getPropertyValue('font-size');
            var newSize;
    
            if (action === 'increase') {
                newSize = (parseFloat(currentSize) * 1.1) + "px";
            } else if (action === 'decrease') {
                newSize = (parseFloat(currentSize) * 0.9) + "px";
            }
            
            document.documentElement.style.fontSize = newSize;
            
        }

        
        // Funktion zum Ändern der Schriftfarbe, Hintergrundfarbe und hoover Hintergrundfarbe
        function changeColors(bgColor, textColor, hooverBgColor) {

            document.body.style.backgroundColor = bgColor;
            document.querySelector("#dropdown_menue").style.backgroundColor = bgColor;

            buttons = document.querySelectorAll("button");
            for(var i = 1; i < buttons.length; i++) {
                buttons[i].style.backgroundColor = bgColor;
            }
            

            // Get all all elements
            var elements = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6, figcaption, a, button, address")
            elements.forEach(function(elem) {
                elem.style.color = textColor;
            });

            // Hole das Element, dessen Farben geändert werden sollen
            var buttonHoverElements = document.querySelectorAll('.dropdown-content button');
            
            buttonHoverElements.forEach(function(elem) {
                elem.setAttribute('data-hovered-background', hooverBgColor);

                // Füge einen Event Listener für das Hover-Ereignis hinzu
                elem.addEventListener('mouseenter', function() {
                    // Ändere die Hintergrundfarbe beim Hovern
                    this.style.backgroundColor = this.getAttribute('data-hovered-background');
                });

                // Füge einen Event Listener für das Verlassen des Hover-Ereignisses hinzu
                elem.addEventListener('mouseleave', function() {
                    // Setze die ursprüngliche Hintergrundfarbe zurück
                    this.style.backgroundColor = bgColor;
                });
            });
        }