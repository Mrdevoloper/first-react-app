 import './works.css'
 
import illustration1 from '../../assets/step-illlustration.png'
import illustration2 from '../../assets/step-illlustration (1).png'
import illustration3 from '../../assets/step-illustration.png'
import illustration4 from '../../assets/step-illustration (1).png'
import illustration5 from '../../assets/step-illustration (2).png'



 function works (){
          return(

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
          )
 }

 export default works;