const message = `hi, classmate! first of all, thank you for the months of patience and not rushing me. i know it wasn't easy at all, and i really, realyyy appreciate you! :)

i really took my time thinking about this since last year, before new year pa. after thinking it through, i finally got my answer. and this time, i will not take any risks. rather, i want to give myself an honest chance to love someone, and that is you.

maybe this is the time na pipindutin ko na 'yung rice cooker theory na nalaman mo sa tiktok? hahahahahahahahhhaha hanep eh. so ayun nga, i want you to do the same rin po. think about it and ask yourself if you are really sure about your feelings for me.

thank you so much again for not rushing things with me. talking to you never felt overwhelming, and that means a lot to me. i want the answer “yes,” to come from you genuinely. so with that, i want to ask you something :))

may i court you, classmate, boi, beh, vanna alexandra endriga bernardo?`;

function showLetter() {
  document.getElementById("introText").style.display = "none";

  const letterBox = document.getElementById("letterBox");
  const typedText = document.getElementById("typedText");

  /* 🔥 LETTER SIZE FIX (ETO ANG IMPORTANT) */
  letterBox.style.display = "block";
  letterBox.style.maxHeight = "70vh";
  letterBox.style.overflowY = "auto";
  letterBox.style.transform = "scale(0.85)";
  letterBox.style.transformOrigin = "top center";

  typedText.innerHTML = "";
  typedText.style.whiteSpace = "pre-wrap";

  let i = 0;

  function typeWriter() {
    if (i < message.length) {
      typedText.textContent += message[i];
      i++;

      /* AUTO SCROLL PARA DI LUMABAS */
      letterBox.scrollTop = letterBox.scrollHeight;

      setTimeout(typeWriter, 30);
    }
  }

  typeWriter();

}
