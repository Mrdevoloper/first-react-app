
import './main.css'
import servise1 from '../../assets/service.png'
import servise2 from '../../assets/service (1).png'
import servise3 from '../../assets/service.png'
import servise4 from '../../assets/service.png'
import servise5 from '../../assets/service.png'
import illustration1 from '../../assets/step-illlustration.png'
import illustration2 from '../../assets/step-illlustration (1).png'
import illustration3 from '../../assets/step-illustration.png'
import illustration4 from '../../assets/step-illustration (1).png'
import illustration5 from '../../assets/step-illustration (2).png'


function Main (){
    return(
 <>  
            <div className="container">
                    <h1 className="main-title">
                       Xizmatlar
                      </h1>
                <p className="p-text">
                Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis <br /> lacinia ex, eget 
                sollicitudin massa pellentesque in. Vivamus mattis eros at sem pulvinar
                </p>
               <ul className="sites-wrapper">
                   <li className="sites-links">
                      <a href="#">
                            <img src={servise1} width="320px" height="260px" alt="" />
                       </a>
                   </li>
                   <li className="sites-links">
                      <a href="#">
                            <img src={servise2} width="320px" height="260px" alt="" />
                      </a>
                  </li>
                  <li className="sites-links">
                      <a href="#">
                            <img src={servise3} width="320px" height="260px" alt="" />
                      </a>
                  </li>
                  <li className="sites-links">
                     <a href="#">
                            <img src={servise4} width="320px" height="260px" alt="" />
                      </a>
                  </li>
                  <li className="sites-links">
                      <a href="#">
                            <img src={servise5} width="320px" height="260px" alt="" />
                      </a>
                  </li>
              </ul>
              <ul className="btn-links-wrapper">
                   <li className="btn-link-links">
                        <button className="btn3" type="submit">Buyurtma berish</button>
                    </li>
                     <li className="btn-link-links">
                        < a className="active" href="#">Xizmatlar sahifasiga otish</a>
                    </li>
              </ul>
         </div>
         <div className='container'>
               <section className="about-service">
                <h1 className="main-title">
                    Biz qanday ishlaymiz?
                </h1>
                <p className="p-text">
                    Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis lacinia ex, eget <br />
                    sollicitudin massa pellentesque in. Vivamus mattis eros at sem pulvinar
                </p>
                <ul className="service-wrapper">
                    <li className="">
                            <img src={illustration1}  alt="" />
                    </li>
                    <li className="service-text">
                        <h1 className="main-title">
                            Talablarni aniqlab chiqamiz
                        </h1>
                        <p className="p-text txst">
                            Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu.  Nam facilisis
                        </p>
                    </li>
                </ul>
                <ul className="service-wrapper">
                    <li className="">
                        <h1 className="main-title">
                            Bir necha yechimlarni taklif qilamiz
                        </h1>
                        <p className="p-text txst">
                            nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis
                        </p>
                    </li>
                    <li>
                                <img className='secondImg' src={illustration2}  alt="" />
                    </li>
                </ul>
                <ul className="service-wrapper">
                    <li className="">
                            <img src={illustration3}  alt="" />
                    </li>
                    <li className="service-text">
                        <h1 className="main-title">
                            Loyiha uchun vaqt belgilaymiz
                        </h1>
                        <p className="p-text txst">
                            nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis
                        </p>
                    </li>
                </ul>
                <ul className="service-wrapper">
                    <li className="">
                        <h1 className="main-title">
                            Alo sifat bilan bajarib topshiramiz
                        </h1>
                        <p className="p-text txst">
                            nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis
                        </p>
                    </li>
                    <li>
                                <img  className="service-text" src={illustration4}  alt="" />
                    </li>
                </ul>
                <ul className="service-wrapper">
                    <li className="">
                            <img src={illustration5}  alt="" />
                    </li>
                    <li className="service-text">
                        <h1 className="main-title">
                            Qollab-quvvatlab boramiz
                        </h1>
                        <p className="p-text txst">
                            nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis
                        </p>
                    </li>
                </ul>
                <button className="btn4" type="submit">Buyurtma berish</button>
            </section>
               </div>
               <section className="form-part">
                 <div className='container'>
                 <h1 className="form-title">
                    Buyurtma berish
                </h1>
                <p className="form-text">
                    Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis lacinia ex, eget <br /> 
                    sollicitudin massa pellentesque in. Vivamus mattis eros at sem pulvinar
                </p>
                <div className="wrapper-form">
                    <form className="form" action="">
                        <div>
                                <input className='input' placeholder='Ismingiz' type="text" />
                        </div>
                        <div>
                                <input className='input' type="text" placeholder='Telefon raqamingiz' />
                        </div>
                        <div>
                                <input className='input' placeholder='Xizmat turi' type="text" />
                        </div>
                        <button className="btn5" type="submit">Buyurtma berish</button>
                    </form>
                </div>
                 </div>
            </section>
</>
     
    )
}

export default Main;