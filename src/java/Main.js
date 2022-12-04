const Main = () => {
    return(
    `
    <a href="#Two">
    <main class="menu" >
    <img src="./assets/images/logo.png" alt=""  >


            <div class="menu__r">
                <h1>RainAlert</h1>
           <p>Préparez-vous pour la pluie</p>
        </div>
</main>
</a>
  
 <main class="mainTwo" id="Two"> 

     <div class="mainTwo__h">

         <div class="mainTwo__h__img">
              <img src="./assets/images/logo.png" alt="">
        </div>

         <div class="mainTwo__h__r2">
            <h1 class="mainTwo__h__r2__txt">RainAlert</h1>
        </div>
    </div>

        <section class="mainTwo__section">

            <div class="mainTwo__section__searchDiv">
            <img src="./assets/images/clarity_map-marker-line.png" alt="">     
                <input type="text" placeholder="Paris,FR" name="Paris,FR">
                    <a href=""><img src="./assets/images/searchblack.png" alt=""></a>
                </form>
                </div>
            </div>
        </section>

            <section class="mainTwo__dg">
                <div class="mainTwo__dg__p"> <img src="./assets/images/averse.png" alt="">
                </div>
                    <div class="mainTwo__dg__nb">  <p>20°C</p> </div>
            </section>

                <section class="mainTwo__texte"> <div class="mainTwo__texte__p">
                    <p>La pluie se termine dans 1h45</p>
                    </div> 
                </section>

            <section class="mainTwo__graph">
                <section class="mainTwo__graph__1">
                    <section class="mainTwo__graph__1__1">
                        <article class="mainTwo__graph__1__1__arg">
                            <div class="mainTwo__graph__1__1__arg__d1"><img src="./assets/images/Frame 3.png" alt=""></div>
                            <div class="mainTwo__graph__1__1__arg__d2"><img src="./assets/images/Frame 4.png" alt=""></div>
                            <div class="mainTwo__graph__1__1__arg__d3"><img src="./assets/images/Frame 5.png" alt=""></div>
                        </article>

                        <article class="mainTwo__graph__1__1__ard">
                            <div class="mainTwo__graph__1__1__ard__p">
                            <p>12h00</p>
                            <p>14h00</p>
                            <p>16h00</p>
                            <p>18h00</p>
                            <p>20h00</p></div>
                        </article>
                    </section>
                </section>
            </section>

            <section class="mainTwo__heure">
                <section class="mainTwo__heure__1">
                    <p class="mainTwo__heure__1__p1">12h00</p>
                    <p>14h00</p>
                    <p>16h00</p>
                    <p>18h00</p>
                    <p>20h00</p>
                </section>
            </section>
                   
    </main>

    

   <article class="bottom">
    <div class="bottom__prevision">

      <div class="bottom__prevision__img">
         <img src="./assets/images/bi_cloud.png" alt="">
         </div>
        <div>
            <a  href="#Two"> Précipitations</a>
        </div>
     </div>
    <div class="bottom__carte">
        <div class="bottom__carte__carteImg">
            <img src="./assets/images/point.png" alt="">
        </div>
        <div>
            <a  href="#Three"> Carte</a>
        </div>
    </div>
   </article>

   <main class="mainTwo" id="Three"> 

   <section>
   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5665357.334650705!2d-3.228515970782623!3d46.105172710701765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd54a02933785731%3A0x6bfd3f96c747d9f7!2sFrance!5e0!3m2!1sfr!2sbe!4v1670183907993!5m2!1sfr!2sbe" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </section>
    

   
        
   </main>

   


   
  <article class="bottom">
   <div class="bottom__prevision">

     <div class="bottom__prevision__img">
        <img src="./assets/images/bi_cloud.png" alt="">
        </div>
       <div>
           <a  href="#Two"> Précipitations</a>
       </div>
    </div>
   <div class="bottom__carte">
       <div class="bottom__carte__carteImg">
           <img src="./assets/images/point.png" alt="">
       </div>
       <div>
           <a  href="#Three"> Carte</a>
       </div>
   </div>
  </article>


   <script src="index.js"></script>
 

        
 </main>

`
    )
}

export default Main 