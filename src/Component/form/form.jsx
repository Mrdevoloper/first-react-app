import './form.css'  

function form (){
     return (
        
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
)
} export default form;