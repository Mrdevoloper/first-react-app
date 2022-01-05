import './footer.css'
import footerPic1 from '../../assets/Vector@2x.png'
import footerPic2 from '../../assets/insta.png'
import footerPic3 from '../../assets/face.png'


 function Footer(){
     return (
<footer class="footer-section">
  <div class="container">
      <ul class="wrapper-footer">
          <li class="footer-link">
              <h1 class="footer-word1">
                  Copyright 2022
              </h1>
              <p class="footer-text ">
                  <a href="index.html">
                      Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu.
                  Nam facilisis lacinia ex, eget sollicitudin massa pellentesque in.
                  Vivamus mattis eros at sem pulvinar tincidunt.
                  </a>
              </p>
          </li>
          <li class="footer-link">
              <h1 class="footer-word1">
                  Sayt sahifalari
              </h1>
              <p class="footer-texts">
                  <a href="index.html">Bosh sahifa</a>  <a href="index.html">Xizmatlar </a> <a href="index.html">Portfolio</a>  <a href="index.html">Jamoa</a> <a href="index.html"> Blog </a> <a href="index.html">Kontaktlar</a>
              </p>
          </li>
          <li class="footer-link">
              <h1 class="footer-word1">
                  Biz internetda
              </h1>
              <p class="footer-texts">
                  <a className='listTag' href="">
                        <img src= {footerPic1}  width="22px" height="23px" alt="" />
                      <span>Telegram</span>
                  </a>
                  
                  <a className='listTag' href="index.html">
                      <img src= {footerPic2}  width="22px" height="23px" alt="" />
                      <span>Instagram</span>
                  </a>
                  
                  <a className='listTag' href="index.html">
                      <img src= {footerPic3}  width="22px" height="23px" alt="" />
                      <span>Facebook</span>
                  </a>
              </p>
          </li>
      </ul>
  </div>
</footer>
     )
 }

 export default Footer;
